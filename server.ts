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

// Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
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
    console.log(`Rasoi Lineage server running on http://0.0.0.0:${port}`);
  });
}

startServer();
