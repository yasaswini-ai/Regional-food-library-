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
  category: 'dairy' | 'gluten' | 'vegetable' | 'souring' | 'spice' | 'oil' | 'protein';
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
  region: 'Telugu' | 'South Indian' | 'North Indian' | 'Pan-Indian';
  state: string;
  heritageContext: string;
  traditionalVessel: string;
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
  category: 'Breakfast' | 'Rice Specialties' | 'Lentils & Gravies' | 'Royal Curries';
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
