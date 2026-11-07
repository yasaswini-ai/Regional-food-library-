export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard';

export interface DifficultyJustification {
  level: DifficultyLevel;
  stepsCount: number;
  activeTimeMin: number;
  passiveTimeMin: number;
  techniqueComplexity: 'Low' | 'Moderate' | 'High' | 'Artisanal';
  justification: string;
}

export interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
  notes?: string;
  isOptional?: boolean;
  category?: 'grain' | 'lentil' | 'spice' | 'dairy' | 'vegetable' | 'protein' | 'oil' | 'aromatic';
}

export interface Substitution {
  original: string;
  substitute: string;
  category: 'dairy' | 'gluten' | 'vegetable' | 'souring' | 'spice' | 'oil' | 'protein' | 'aromatic';
  ratio: string;
  culinaryEffect: string;
  authenticityNote: string;
}

export interface CookingStep {
  stepNumber: number;
  instruction: string;
  timerSeconds?: number;
  timerLabel?: string;
  techniqueTip?: string;
  requiredIngredients?: string[];
}

export interface RegionalLineage {
  district: string;
  region: 'Telugu' | 'South Indian' | 'North Indian' | 'Pan-Indian' | 'Diaspora' | string;
  state: string;
  heritageContext: string;
  traditionalVessel: string;
}

export interface NutritionFacts {
  servingSize: string;
  calories: number;
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
  fiberGrams?: number;
  sodiumMg?: number;
  dietaryHighlights?: string[];
}

export interface FlavorProfile {
  spicy: number; // 0 - 100
  sweet: number; // 0 - 100
  tangy: number; // 0 - 100
  earthy: number; // 0 - 100
  savory: number; // 0 - 100
  aromatic?: number; // 0 - 100
}

export interface RecipeVariation {
  id: string;
  versionTitle: string;
  tagline: string;
  regionalLineage: RegionalLineage;
  difficulty: DifficultyJustification;
  servings: number;
  prepTimeMin: number;
  cookTimeMin: number;
  spiceLevel: 1 | 2 | 3 | 4 | 5;
  nutritionFacts: NutritionFacts;
  flavorProfile?: FlavorProfile;
  ingredients: Ingredient[];
  substitutions: Substitution[];
  steps: CookingStep[];
  proTips: string[];
  servingSuggestions: string[];
  whyThisDiffers: string;
}

export interface Recipe {
  id: string;
  name: string;
  teluguName: string;
  hindiName: string;
  tamilName: string;
  category:
    | 'Breakfast'
    | 'Rice Specialties'
    | 'Lentils & Gravies'
    | 'Royal Curries'
    | 'Coastal & Seafood'
    | 'Street Food & Snacks'
    | 'Traditional Sweets'
    | string;
  heroImage: string;
  shortDescription: string;
  culturalPhilosophy: string;
  variations: RecipeVariation[];
}

export type SupportedLanguage = 'en' | 'te' | 'hi' | 'ta';

export interface TranslationDict {
  [key: string]: {
    en: string;
    te: string;
    hi: string;
    ta: string;
  };
}
