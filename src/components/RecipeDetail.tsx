import React, { useState } from 'react';
import { 
  Play, 
  Layers, 
  Sparkles, 
  Flame, 
  Bookmark, 
  BookmarkCheck, 
  Printer, 
  AlertCircle, 
  ChefHat, 
  HelpCircle,
  Share2,
  Activity,
  HeartPulse,
  Scale
} from 'lucide-react';
import { Recipe, SupportedLanguage } from '../types';
import { FlavorRadarChart } from './FlavorRadarChart';

interface RecipeDetailProps {
  recipe: Recipe;
  selectedVariationId: string;
  onSelectVariation: (id: string) => void;
  onOpenCookMode: () => void;
  onOpenComparison: () => void;
  onOpenSubstitutions: () => void;
  onOpenDifficultyJustification: () => void;
  language: SupportedLanguage;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

export const RecipeDetail: React.FC<RecipeDetailProps> = ({
  recipe,
  selectedVariationId,
  onSelectVariation,
  onOpenCookMode,
  onOpenComparison,
  onOpenSubstitutions,
  onOpenDifficultyJustification,
  language,
  isBookmarked,
  onToggleBookmark,
}) => {
  const [portionMultiplier, setPortionMultiplier] = useState<number>(1);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});

  const currentVariation =
    recipe.variations.find((v) => v.id === selectedVariationId) ||
    recipe.variations[0];

  const toggleCheck = (id: string) => {
    setCheckedIngredients((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getLanguageTitle = () => {
    switch (language) {
      case 'te':
        return recipe.teluguName || recipe.name;
      case 'hi':
        return recipe.hindiName || recipe.name;
      case 'ta':
        return recipe.tamilName || recipe.name;
      default:
        return recipe.name;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const [showBatchNutrition, setShowBatchNutrition] = useState<boolean>(false);
  const nutrition = currentVariation.nutritionFacts;
  const currentMultiplier = showBatchNutrition ? portionMultiplier : 1;
  const displayCalories = Math.round(nutrition.calories * currentMultiplier);
  const displayProtein = Number((nutrition.proteinGrams * currentMultiplier).toFixed(1));
  const displayCarbs = Number((nutrition.carbsGrams * currentMultiplier).toFixed(1));
  const displayFat = Number((nutrition.fatGrams * currentMultiplier).toFixed(1));
  const displayFiber = nutrition.fiberGrams !== undefined 
    ? Number((nutrition.fiberGrams * currentMultiplier).toFixed(1)) 
    : undefined;
  const displaySodium = nutrition.sodiumMg !== undefined 
    ? Math.round(nutrition.sodiumMg * currentMultiplier) 
    : undefined;

  // Macro calorie ratios
  const proteinCals = displayProtein * 4;
  const carbsCals = displayCarbs * 4;
  const fatCals = displayFat * 9;
  const totalMacroCals = proteinCals + carbsCals + fatCals || 1;
  const proteinPct = Math.round((proteinCals / totalMacroCals) * 100);
  const carbsPct = Math.round((carbsCals / totalMacroCals) * 100);
  const fatPct = Math.max(0, 100 - proteinPct - carbsPct);

  return (
    <article className="space-y-8 animate-fadeIn">
      {/* Hero Visual & Title Banner */}
      <div className="relative rounded-2xl overflow-hidden border border-amber-900/30 bg-[#14120e] shadow-2xl">
        <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-neutral-900">
          <img
            src={recipe.heroImage}
            alt={recipe.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover brightness-90 hover:scale-105 transition-transform duration-700"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          {/* Contrast scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c09] via-[#0e0c09]/60 to-transparent" />

          {/* Top floating quick buttons */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10 no-print">
            <button
              onClick={onToggleBookmark}
              className={`p-2.5 rounded-xl border backdrop-blur-md transition-all ${
                isBookmarked
                  ? 'bg-amber-600 border-amber-500 text-white shadow-lg'
                  : 'bg-black/40 border-white/10 text-white hover:bg-black/60'
              }`}
              title={isBookmarked ? 'Bookmarked in Offline Cookbook' : 'Save to Offline Cookbook'}
            >
              {isBookmarked ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
            </button>
            <button
              onClick={handlePrint}
              className="p-2.5 rounded-xl bg-black/40 border border-white/10 text-white hover:bg-black/60 backdrop-blur-md transition-colors"
              title="Print Recipe Card for Kitchen Binder"
            >
              <Printer className="w-5 h-5" />
            </button>
          </div>

          {/* Title & Category Overlay */}
          <div className="absolute bottom-6 left-6 right-6 z-10 space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs text-amber-400 font-medium tracking-wider uppercase">
              <span>{recipe.category}</span>
              <span className="text-neutral-500">·</span>
              <span>{currentVariation.regionalLineage.district}</span>
              <span className="text-neutral-500">·</span>
              <span className="text-neutral-300">{currentVariation.regionalLineage.state}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white tracking-tight text-balance">
              {getLanguageTitle()}
            </h1>

            <p className="text-sm sm:text-base text-neutral-300 max-w-3xl leading-relaxed">
              {recipe.shortDescription}
            </p>
          </div>
        </div>

        {/* Multi-Version Selector Tabs (Core Feature!) */}
        <div className="p-4 sm:p-6 bg-[#16140f] border-t border-amber-900/30 flex flex-col md:flex-row md:items-center justify-between gap-4 no-print">
          <div>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-amber-500 block mb-1">
              Select Regional / Family Expression:
            </span>
            <div className="flex flex-wrap gap-2">
              {recipe.variations.map((v) => (
                <button
                  key={v.id}
                  onClick={() => onSelectVariation(v.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all border ${
                    selectedVariationId === v.id
                      ? 'bg-amber-600 text-white border-amber-500 shadow-md ring-1 ring-amber-400/30'
                      : 'bg-white/5 text-neutral-300 border-white/5 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {v.versionTitle.split(' (')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Compare versions trigger */}
          <button
            onClick={onOpenComparison}
            className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-amber-300 text-xs font-semibold rounded-lg border border-neutral-700 transition-colors whitespace-nowrap self-start md:self-auto shadow-sm"
          >
            <Layers className="w-4 h-4 text-amber-400" />
            <span>Compare All {recipe.variations.length} Versions Side-by-Side</span>
          </button>
        </div>
      </div>

      {/* Cultural Philosophy Banner */}
      <div className="p-5 rounded-xl bg-[#171510] border border-amber-900/30 flex items-start gap-4 shadow-sm">
        <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Regional Lineage & Anti-Dogma Principle
          </h4>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {recipe.culturalPhilosophy}
          </p>
          <div className="pt-2 text-xs text-amber-200/80">
            <strong>Current Selection:</strong> {currentVariation.tagline}
          </div>
        </div>
      </div>

      {/* KPI Metrics & Action Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {/* Difficulty Badge with Justification Trigger */}
        <div
          onClick={onOpenDifficultyJustification}
          className="p-4 rounded-xl bg-[#16140f] border border-neutral-800 hover:border-amber-800/60 cursor-pointer transition-all space-y-1 group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
              Difficulty
            </span>
            <HelpCircle className="w-3.5 h-3.5 text-neutral-500 group-hover:text-amber-400 transition-colors" />
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-bold uppercase ${
                currentVariation.difficulty.level === 'Easy'
                  ? 'text-emerald-400'
                  : currentVariation.difficulty.level === 'Medium'
                  ? 'text-amber-400'
                  : 'text-rose-400'
              }`}
            >
              {currentVariation.difficulty.level}
            </span>
            <span className="text-[11px] text-neutral-400 underline decoration-dotted">
              Why?
            </span>
          </div>
          <p className="text-[11px] text-neutral-400 line-clamp-1">
            {currentVariation.difficulty.stepsCount} steps · {currentVariation.difficulty.techniqueComplexity}
          </p>
        </div>

        {/* Time breakdown */}
        <div className="p-4 rounded-xl bg-[#16140f] border border-neutral-800 space-y-1">
          <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
            Active / Total Time
          </span>
          <div className="text-sm font-semibold text-white font-mono">
            {currentVariation.difficulty.activeTimeMin}m active
          </div>
          <p className="text-[11px] text-neutral-400">
            {currentVariation.prepTimeMin + currentVariation.cookTimeMin}m total cook
          </p>
        </div>

        {/* Spice meter */}
        <div className="p-4 rounded-xl bg-[#16140f] border border-neutral-800 space-y-1">
          <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
            Spice Intensity
          </span>
          <div className="flex items-center gap-1 text-orange-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Flame
                key={i}
                className={`w-4 h-4 ${
                  i < currentVariation.spiceLevel
                    ? 'fill-orange-500 text-orange-500'
                    : 'text-neutral-700'
                }`}
              />
            ))}
            <span className="text-xs font-mono text-neutral-300 ml-1">
              {currentVariation.spiceLevel}/5
            </span>
          </div>
          <p className="text-[11px] text-neutral-400">
            Authentic regional heat
          </p>
        </div>

        {/* Traditional Cookware */}
        <div className="p-4 rounded-xl bg-[#16140f] border border-neutral-800 space-y-1">
          <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
            Vessel
          </span>
          <div className="text-xs font-semibold text-amber-300 line-clamp-1">
            {currentVariation.regionalLineage.traditionalVessel}
          </div>
          <p className="text-[11px] text-neutral-400">
            {currentVariation.regionalLineage.state}
          </p>
        </div>
      </div>

      {/* Nutrition Facts Summary Card */}
      <section className="p-6 rounded-2xl bg-[#16140f] border border-neutral-800 space-y-5 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Activity className="w-4 h-4 text-emerald-400" />
              <h3 className="text-base font-semibold text-white">
                Nutrition Facts Summary
              </h3>
              <span className="text-neutral-500">·</span>
              <span className="text-xs text-neutral-400">
                {currentVariation.versionTitle.split(' (')[0]}
              </span>
            </div>
            <p className="text-xs text-neutral-400">
              Serving Size: <span className="text-neutral-200 font-medium">{nutrition.servingSize}</span>
            </p>
          </div>

          {/* Per Serving vs Batch Toggle */}
          <div className="flex items-center gap-1 p-1 bg-black/40 rounded-lg border border-neutral-800 self-start sm:self-auto no-print">
            <button
              onClick={() => setShowBatchNutrition(false)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                !showBatchNutrition
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Per Serving
            </button>
            <button
              onClick={() => setShowBatchNutrition(true)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                showBatchNutrition
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Total Batch ({currentVariation.servings * portionMultiplier} serv.)
            </button>
          </div>
        </div>

        {/* Primary Calories & Macronutrients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* Calories Highlight Card */}
          <div className="p-4 rounded-xl bg-gradient-to-b from-amber-950/30 to-[#13110d] border border-amber-900/40 space-y-1 col-span-2 sm:col-span-1">
            <span className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold block">
              Energy
            </span>
            <div className="text-2xl sm:text-3xl font-display font-bold text-white font-mono tabular-nums">
              {displayCalories}
            </div>
            <span className="text-[11px] text-neutral-400 block">
              kcal ({Math.round((displayCalories / (2000 * (showBatchNutrition ? portionMultiplier : 1))) * 100)}% DV)
            </span>
          </div>

          {/* Protein Card */}
          <div className="p-4 rounded-xl bg-[#1a1813] border border-neutral-800 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold">
                Protein
              </span>
              <span className="text-[10px] font-mono text-neutral-400">{proteinPct}% cals</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">
              {displayProtein} <span className="text-xs font-normal text-neutral-400">g</span>
            </div>
            <span className="text-[11px] text-neutral-400 block">
              Building & repair
            </span>
          </div>

          {/* Carbohydrates Card */}
          <div className="p-4 rounded-xl bg-[#1a1813] border border-neutral-800 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold">
                Carbs
              </span>
              <span className="text-[10px] font-mono text-neutral-400">{carbsPct}% cals</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">
              {displayCarbs} <span className="text-xs font-normal text-neutral-400">g</span>
            </div>
            <span className="text-[11px] text-neutral-400 block">
              Complex energy
            </span>
          </div>

          {/* Fat Card */}
          <div className="p-4 rounded-xl bg-[#1a1813] border border-neutral-800 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-wider text-sky-400 font-semibold">
                Total Fat
              </span>
              <span className="text-[10px] font-mono text-neutral-400">{fatPct}% cals</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">
              {displayFat} <span className="text-xs font-normal text-neutral-400">g</span>
            </div>
            <span className="text-[11px] text-neutral-400 block">
              Essential lipids
            </span>
          </div>

          {/* Dietary Fiber Card */}
          <div className="p-4 rounded-xl bg-[#1a1813] border border-neutral-800 space-y-1">
            <span className="text-[11px] uppercase tracking-wider text-teal-400 font-semibold block">
              Dietary Fiber
            </span>
            <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">
              {displayFiber !== undefined ? displayFiber : '—'} <span className="text-xs font-normal text-neutral-400">g</span>
            </div>
            <span className="text-[11px] text-neutral-400 block">
              Digestive health
            </span>
          </div>

          {/* Sodium Card */}
          <div className="p-4 rounded-xl bg-[#1a1813] border border-neutral-800 space-y-1">
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block">
              Sodium
            </span>
            <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">
              {displaySodium !== undefined ? displaySodium : '—'} <span className="text-xs font-normal text-neutral-400">mg</span>
            </div>
            <span className="text-[11px] text-neutral-400 block">
              Mineral balance
            </span>
          </div>
        </div>

        {/* Visual Macronutrient Energy Ratio Bar */}
        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between text-xs text-neutral-400 font-medium">
            <span>Macronutrient Calorie Distribution:</span>
            <div className="flex items-center gap-4 text-[11px]">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500" />
                Protein ({proteinPct}%)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-amber-500" />
                Carbohydrates ({carbsPct}%)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-sky-500" />
                Fat ({fatPct}%)
              </span>
            </div>
          </div>

          <div className="h-2 w-full rounded-full bg-neutral-900 overflow-hidden flex">
            <div
              className="bg-emerald-500 h-full transition-all duration-300"
              style={{ width: `${proteinPct}%` }}
              title={`Protein: ${proteinPct}% of total calories`}
            />
            <div
              className="bg-amber-500 h-full transition-all duration-300"
              style={{ width: `${carbsPct}%` }}
              title={`Carbohydrates: ${carbsPct}% of total calories`}
            />
            <div
              className="bg-sky-500 h-full transition-all duration-300"
              style={{ width: `${fatPct}%` }}
              title={`Fat: ${fatPct}% of total calories`}
            />
          </div>
        </div>

        {/* Dietary Highlights Strip (Unboxed Clean Metadata) */}
        {nutrition.dietaryHighlights && nutrition.dietaryHighlights.length > 0 && (
          <div className="pt-3 border-t border-neutral-800 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-400">
            <span className="text-amber-400 font-semibold uppercase text-[10px] tracking-wider">
              Nutritional Character:
            </span>
            {nutrition.dietaryHighlights.map((highlight, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span aria-hidden="true" className="text-neutral-600">·</span>}
                <span className="text-neutral-300 font-medium">{highlight}</span>
              </React.Fragment>
            ))}
          </div>
        )}
      </section>

      {/* D3 Interactive Flavor Profile Radar Chart */}
      <FlavorRadarChart variation={currentVariation} />

      {/* Primary Cook Mode Callout Bar */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-950/40 via-amber-900/30 to-[#181611] border border-amber-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-xl no-print">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-500 text-neutral-950">
              Interactive Mode
            </span>
            <span className="text-xs text-amber-300 font-semibold">
              Ready to start cooking {currentVariation.versionTitle.split(' (')[0]}?
            </span>
          </div>
          <p className="text-xs text-neutral-300">
            Hands-free step-by-step guidance with auto timers, ingredient checklist, and voice reading.
          </p>
        </div>

        <button
          onClick={onOpenCookMode}
          className="flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm transition-all shadow-lg hover:shadow-amber-500/20 whitespace-nowrap active:scale-95"
        >
          <Play className="w-4 h-4 fill-neutral-950" />
          <span>Launch Cook Mode</span>
        </button>
      </div>

      {/* Main Two-Column Layout: Ingredients (Left) and Cooking Steps (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Ingredients Column (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-[#16140f] border border-neutral-800 space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
            <div>
              <h3 className="text-base font-semibold text-white">Ingredients</h3>
              <span className="text-xs text-neutral-400">
                {currentVariation.ingredients.length} items
              </span>
            </div>

            {/* Portion scaler (1x, 2x, 4x) */}
            <div className="flex items-center gap-1 p-1 bg-black/40 rounded-lg border border-neutral-800 no-print">
              {[1, 2, 4].map((mult) => (
                <button
                  key={mult}
                  onClick={() => setPortionMultiplier(mult)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                    portionMultiplier === mult
                      ? 'bg-amber-600 text-white'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {mult}x
                </button>
              ))}
            </div>
          </div>

          <p className="text-xs text-neutral-400">
            Portions calculated for <strong className="text-amber-400">{currentVariation.servings * portionMultiplier}</strong> servings. Click items to check them off as you prep.
          </p>

          <div className="space-y-2.5">
            {currentVariation.ingredients.map((ing) => {
              const isChecked = !!checkedIngredients[ing.id];
              const scaledAmount = Number((ing.amount * portionMultiplier).toFixed(2));
              return (
                <div
                  key={ing.id}
                  onClick={() => toggleCheck(ing.id)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all flex items-start justify-between gap-3 ${
                    isChecked
                      ? 'bg-amber-950/20 border-amber-900/40 text-neutral-400 line-through'
                      : 'bg-[#1b1913] border-neutral-800/80 hover:border-neutral-700 text-neutral-200'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="text-xs font-medium block">{ing.name}</span>
                    {ing.notes && (
                      <span className="text-[11px] text-neutral-400 italic block">
                        {ing.notes}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono font-semibold text-amber-300 shrink-0">
                    {scaledAmount} {ing.unit}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Substitutions quick trigger button */}
          <div className="pt-3 border-t border-neutral-800 no-print">
            <button
              onClick={onOpenSubstitutions}
              className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-amber-300 border border-amber-900/40 text-xs font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <AlertCircle className="w-4 h-4 text-amber-400" />
              <span>View Dairy, Gluten & Vegetable Substitutions ({currentVariation.substitutions.length})</span>
            </button>
          </div>
        </div>

        {/* Steps Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 rounded-2xl bg-[#16140f] border border-neutral-800 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <h3 className="text-base font-semibold text-white">
                Step-by-Step Instructions
              </h3>
              <span className="text-xs text-neutral-400 font-mono">
                {currentVariation.steps.length} Steps Total
              </span>
            </div>

            <div className="space-y-6">
              {currentVariation.steps.map((st) => (
                <div key={st.stepNumber} className="relative flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {st.stepNumber}
                  </span>
                  <div className="space-y-2 flex-1">
                    <p className="text-sm text-neutral-200 leading-relaxed font-sans">
                      {st.instruction}
                    </p>

                    {st.timerSeconds && (
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-950/40 border border-amber-900/50 text-xs font-mono text-amber-300">
                        <span>Timer: {Math.round(st.timerSeconds / 60)} mins</span>
                        {st.timerLabel && <span className="text-neutral-400">({st.timerLabel})</span>}
                      </div>
                    )}

                    {st.techniqueTip && (
                      <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/15 flex items-start gap-2.5">
                        <ChefHat className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <p className="text-xs text-amber-200/90 leading-relaxed">
                          <strong>Master Tip:</strong> {st.techniqueTip}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Tips & Heritage Notes Card */}
          <div className="p-6 rounded-2xl bg-[#16140f] border border-neutral-800 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Culinary Heritage & Serving Notes
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              {currentVariation.proTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-neutral-800">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 block mb-2">
                Traditional Accompaniments:
              </span>
              <div className="flex flex-wrap gap-2">
                {currentVariation.servingSuggestions.map((s, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-md bg-white/5 text-amber-300 border border-white/5 font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
