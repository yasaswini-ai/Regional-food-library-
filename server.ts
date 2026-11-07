import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.json());

// Initialize GoogleGenAI client with required User-Agent header
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// AI Ingredient Substitution endpoint
app.post('/api/ai/substitute', async (req: Request, res: Response) => {
  try {
    const { dishName, versionTitle, ingredient, reason } = req.body;
    if (!dishName || !ingredient) {
      return res.status(400).json({ error: 'Missing dishName or ingredient' });
    }

    const prompt = `You are a master regional Indian culinary expert and food scientist specializing in authentic Telugu, South Indian, and North Indian traditions.
Dish: ${dishName} (Version: ${versionTitle || 'Traditional'})
Ingredient to substitute: "${ingredient}"
Constraint/Reason: "${reason || 'Dietary / Pantry shortage'}"

Provide 2-3 authentic, respectful substitutions that preserve regional flavour profiles, textural integrity, and cooking chemistry.
For each option provide:
- substitute: Name of alternative
- ratio: Exact substitution ratio
- culinaryEffect: Impact on flavor, moisture, texture, and aroma
- techniqueAdjustment: Any change to cooking heat, timing, or tempering
- authenticityNote: Respect for district/state tradition.

Respond strictly in valid JSON format matching this schema:
{
  "substitutions": [
    {
      "substitute": "string",
      "ratio": "string",
      "culinaryEffect": "string",
      "techniqueAdjustment": "string",
      "authenticityNote": "string"
    }
  ],
  "expertVerdict": "Brief 1-2 sentence recommendation for best regional fidelity"
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json(parsed);
  } catch (error: any) {
    console.error('Error generating substitution:', error);
    return res.status(500).json({ error: error.message || 'Failed to generate substitution' });
  }
});

// AI Pantry Ingredient Scanner & Matcher endpoint
app.post('/api/ai/scanner', async (req: Request, res: Response) => {
  try {
    const { ingredients } = req.body;
    if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
      return res.status(400).json({ error: 'Please provide a list of ingredients' });
    }

    const prompt = `You are an expert Indian culinary historian and home chef.
A user has these ingredients in their kitchen pantry:
${ingredients.join(', ')}

Analyze which Indian dishes and specific regional/district versions (e.g. MLA Upma Pesarattu vs Guntur Pesarattu, Chintapandu Pulihora vs Ava Pulihora, Andhra Tomato Pappu, Hyderabadi Pulao, Dhaba Dal, etc.) they can make.

Return a JSON object with:
{
  "suggestedRecipes": [
    {
      "dish": "Dish Name",
      "version": "Specific Regional Version (e.g., Coastal Andhra Vijayawada style)",
      "matchPercentage": 90,
      "usableIngredients": ["list"],
      "missingStaples": ["list of easy staples needed"],
      "quickPreparationPitch": "Why this specific regional version fits their ingredients"
    }
  ],
  "creativeTip": "One traditional tip for maximizing flavor with these ingredients"
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json(parsed);
  } catch (error: any) {
    console.error('Error scanning ingredients:', error);
    return res.status(500).json({ error: error.message || 'Failed to scan pantry' });
  }
});

// AI Live Cooking Assistant Q&A
app.post('/api/ai/cooking-qa', async (req: Request, res: Response) => {
  try {
    const { recipeTitle, versionTitle, currentStep, question } = req.body;

    const prompt = `You are a senior Indian chef assisting a home cook in real time.
Current Dish: ${recipeTitle} (${versionTitle})
Current Step: "${currentStep}"
Cook's Urgent Question: "${question}"

Provide a concise, reassuring, actionable answer (under 80 words) focusing on kitchen chemistry (flame management, tadka temperature, batter consistency, fixing sourness/salt/spice, preventing sticking).`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
    });

    return res.json({ answer: response.text });
  } catch (error: any) {
    console.error('Error in cooking QA:', error);
    return res.status(500).json({ error: error.message || 'Failed to answer question' });
  }
});

// AI Recipe Translation Endpoint
app.post('/api/ai/translate', async (req: Request, res: Response) => {
  try {
    const { title, summary, steps, targetLanguage } = req.body;

    const langMap: Record<string, string> = {
      te: 'Telugu (తెలుగు)',
      hi: 'Hindi (हिन्दी)',
      ta: 'Tamil (தமிழ்)',
      kn: 'Kannada (ಕನ್ನಡ)',
      en: 'English',
    };

    const target = langMap[targetLanguage] || targetLanguage || 'Telugu';

    const prompt = `Translate this Indian recipe accurately into ${target}.
Use culturally authentic culinary terminology (e.g. for tadka/popu/thalippu, tawa, urli, soaking, tempering).
Title: ${title}
Summary: ${summary}
Steps:
${steps.map((s: string, i: number) => `${i + 1}. ${s}`).join('\n')}

Return JSON with:
{
  "translatedTitle": "string",
  "translatedSummary": "string",
  "translatedSteps": ["step1", "step2", ...]
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    return res.json(JSON.parse(response.text || '{}'));
  } catch (error: any) {
    console.error('Error translating recipe:', error);
    return res.status(500).json({ error: error.message || 'Failed to translate' });
  }
});

// AI On-Demand Recipe Generator Endpoint for ANY queried dish
app.post('/api/recipes/generate-dish', async (req: Request, res: Response) => {
  try {
    const { dishName } = req.body;
    if (!dishName || typeof dishName !== 'string' || !dishName.trim()) {
      return res.status(400).json({ error: 'Please provide a dish name' });
    }

    const cleanDish = dishName.trim();

    const prompt = `You are a culinary historian, regional food scholar, and master Indian chef.
The user is searching for this dish: "${cleanDish}".

Generate a complete, deeply authentic Indian culinary Recipe object in JSON format.
CRITICAL CULINARY CONSTITUTION (Strictly Enforce):
1. Never present one version as the only authentic version. Always provide 2 or 3 distinct regional, district, or family variations (e.g. comparing Coastal Andhra vs Rayalaseema vs Telangana, or Punjab vs Awadh, or Chettinad vs Malabar, or Temple vs Street style).
2. For each variation, include:
   - "id": kebab-case string
   - "versionTitle": full descriptive name including district/heritage style
   - "tagline": evocative one-liner capturing flavour and texture
   - "regionalLineage": {
       "district": "e.g. Guntur / Madurai / Amritsar",
       "region": "Telugu" | "South Indian" | "North Indian" | "Pan-Indian",
       "state": "Indian state",
       "heritageContext": "Historical origins and cultural context (2-3 sentences)",
       "traditionalVessel": "e.g., Cast Iron Tawa, Soapstone Kalchatti, Heavy Handi, Brass Kadai"
     }
   - "difficulty": {
       "level": "Easy" | "Medium" | "Hard",
       "stepsCount": number,
       "activeTimeMin": number,
       "passiveTimeMin": number,
       "techniqueComplexity": "Low" | "Moderate" | "High" | "Artisanal",
       "justification": "Technical justification explaining why this level was assigned"
     }
   - "servings": 4,
   - "prepTimeMin": number,
   - "cookTimeMin": number,
   - "spiceLevel": number (1 to 5),
   - "nutritionFacts": {
       "servingSize": "e.g. 1 serving (approx 220g)",
       "calories": number,
       "proteinGrams": number,
       "carbsGrams": number,
       "fatGrams": number,
       "fiberGrams": number,
       "sodiumMg": number,
       "dietaryHighlights": ["list", "of", "highlights"]
     }
   - "ingredients": array of objects {
       "id": "unique id",
       "name": "Ingredient name with regional term in brackets",
       "amount": number,
       "unit": "tbsp" | "tsp" | "cups" | "pieces" | "grams" | "sprigs" | "inch",
       "category": "grain" | "lentil" | "spice" | "dairy" | "vegetable" | "protein" | "oil" | "aromatic",
       "notes": "optional note"
     }
   - "substitutions": 2-3 genuine substitutions {
       "original": "original ingredient",
       "substitute": "authentic alternative",
       "category": "dairy" | "gluten" | "vegetable" | "souring" | "spice" | "oil" | "protein",
       "ratio": "e.g. 1:1",
       "culinaryEffect": "Impact on flavor, moisture, texture",
       "authenticityNote": "How it respects tradition"
     }
   - "steps": 5-8 chronological steps {
       "stepNumber": number,
       "instruction": "Detailed instruction with culinary cues",
       "timerSeconds": optional number in seconds for active timing,
       "timerLabel": optional string label,
       "techniqueTip": "Actionable flame/heat/chemistry tip"
     }
   - "proTips": ["2-3 chef tips"],
   - "servingSuggestions": ["2 traditional accompaniments"],
   - "whyThisDiffers": "Exact culinary reason this variation differs from other regional versions"

Root Recipe object must have:
- "id": kebab-case string
- "name": "English / Common name"
- "teluguName": "Telugu script (తెలుగు)",
- "hindiName": "Hindi script (हिन्दी)",
- "tamilName": "Tamil script (தமிழ்)",
- "category": "Breakfast" | "Rice Specialties" | "Lentils & Gravies" | "Royal Curries" | "Coastal & Seafood" | "Street Food & Snacks" | "Traditional Sweets",
- "heroImage": "/src/assets/images/hero_culinary_spread_1793770951915.jpg",
- "shortDescription": "2-sentence introduction celebrating the dish",
- "culturalPhilosophy": "2-3 sentences explaining regional variations and culinary reverence",
- "variations": [ ... array of variations ]

Output strictly valid JSON matching this structure without Markdown wraps.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json(parsed);
  } catch (error: any) {
    console.error('Error generating custom recipe:', error);
    return res.status(500).json({ error: error.message || 'Failed to generate recipe' });
  }
});

// Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        hmr: false 
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Flavora server running on http://0.0.0.0:${port}`);
  });
}

startServer();
