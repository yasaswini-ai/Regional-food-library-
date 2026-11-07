/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Layers, 
  Sparkles, 
  Flame, 
  ChefHat, 
  Clock, 
  ShieldCheck, 
  Bookmark, 
  Search, 
  SlidersHorizontal,
  ChevronRight,
  ArrowRight,
  MapPin,
  Calendar,
  Loader2,
  X,
  Plus,
  Compass,
  UtensilsCrossed,
  Smartphone
} from 'lucide-react';

import { RECIPES_DATA } from './data/recipes';
import { Recipe, RecipeVariation, SupportedLanguage, DifficultyLevel } from './types';
import { Header } from './components/Header';
import { RecipeDetail } from './components/RecipeDetail';
import { CookModeModal } from './components/CookModeModal';
import { VersionComparisonModal } from './components/VersionComparisonModal';
import { DifficultyJustificationModal } from './components/DifficultyJustificationModal';
import { SubstitutionDrawer } from './components/SubstitutionDrawer';
import { PantryScannerModal } from './components/PantryScannerModal';
import { RoadmapModal } from './components/RoadmapModal';
import { SavedCookbookModal } from './components/SavedCookbookModal';
import { MealPlannerModal } from './components/MealPlannerModal';
import { PlayStoreModal } from './components/PlayStoreModal';

const QUICK_TRENDING_DISHES = [
  'Masala Dosa',
  'Mallipoo Idli',
  'Shorshe Maach',
  'Kashmiri Rogan Josh',
  'Surati Dhokla',
  'Dal Baati Churma',
  'Litti Chokha',
  'Tangra Chilli Chicken',
  'Chicken Tikka Masala',
  'Durban Bunny Chow',
  'Trinidad Doubles',
  'Paneer Butter Masala',
  'Nellore Chepala Pulusu',
  'Chettinad Pepper Chicken',
  'Andhra Natu Kodi',
  'Amritsari Pindi Chole',
  'Katte Pongali',
  'Hyderabadi Dum Biryani',
  'Pesarattu Upma',
  'Chintapandu Pulihora',
  'Tomato Pappu',
  'Kerala Meen Moilee'
];

export default function App() {
  // Custom AI-generated recipes stored in local storage
  const [customRecipes, setCustomRecipes] = useState<Recipe[]>(() => {
    try {
      const saved = localStorage.getItem('flavora_custom_recipes');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save custom recipes on change
  useEffect(() => {
    try {
      localStorage.setItem('flavora_custom_recipes', JSON.stringify(customRecipes));
    } catch (err) {
      console.warn('LocalStorage save custom recipes failed:', err);
    }
  }, [customRecipes]);

  // Combined master catalog
  const allRecipes: Recipe[] = [...RECIPES_DATA, ...customRecipes];

  // Navigation & Selected Recipe state
  const [selectedRecipeId, setSelectedRecipeId] = useState<string>(allRecipes[0].id);
  const [selectedVariationId, setSelectedVariationId] = useState<string>(
    allRecipes[0].variations[0].id
  );

  // Active view: 'overview' or 'recipe-detail'
  const [viewMode, setViewMode] = useState<'overview' | 'recipe-detail'>('recipe-detail');

  // Filters
  const [selectedPhase, setSelectedPhase] = useState<string>('All');
  const [selectedCuisine, setSelectedCuisine] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // AI Recipe generation state
  const [isGeneratingRecipe, setIsGeneratingRecipe] = useState<boolean>(false);
  const [generationFeedback, setGenerationFeedback] = useState<string | null>(null);

  // Multilingual state
  const [language, setLanguage] = useState<SupportedLanguage>('en');

  // Modals
  const [isCookModeOpen, setIsCookModeOpen] = useState(false);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [isDifficultyJustificationOpen, setIsDifficultyJustificationOpen] = useState(false);
  const [isSubstitutionsOpen, setIsSubstitutionsOpen] = useState(false);
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [isRoadmapOpen, setIsRoadmapOpen] = useState(false);
  const [isSavedCookbookOpen, setIsSavedCookbookOpen] = useState(false);
  const [isMealPlannerOpen, setIsMealPlannerOpen] = useState(false);
  const [isPlayStoreOpen, setIsPlayStoreOpen] = useState(false);

  // Bookmarked recipes (Offline Cookbook)
  const [savedRecipeIds, setSavedRecipeIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('rasoi_lineage_saved');
      return saved ? JSON.parse(saved) : ['pesarattu', 'pulihora', 'masala-dosa'];
    } catch {
      return ['pesarattu', 'pulihora', 'masala-dosa'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('rasoi_lineage_saved', JSON.stringify(savedRecipeIds));
    } catch (err) {
      console.warn('LocalStorage save failed:', err);
    }
  }, [savedRecipeIds]);

  const toggleBookmark = (id: string) => {
    setSavedRecipeIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentRecipe =
    allRecipes.find((r) => r.id === selectedRecipeId) || allRecipes[0];

  const currentVariation =
    currentRecipe.variations.find((v) => v.id === selectedVariationId) ||
    currentRecipe.variations[0];

  // Handler to open a specific variation
  const handleSelectVariation = (recipeId: string, variationId: string) => {
    setSelectedRecipeId(recipeId);
    setSelectedVariationId(variationId);
    setViewMode('recipe-detail');
  };

  // On-demand AI Recipe Generator for ANY dish searched by the user
  const handleGenerateRecipe = async (dishName: string) => {
    if (!dishName.trim()) return;
    setIsGeneratingRecipe(true);
    setGenerationFeedback(`Researching regional lineages & crafting authentic variations for "${dishName}"...`);

    try {
      const response = await fetch('/api/recipes/generate-dish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dishName }),
      });

      if (!response.ok) {
        throw new Error(`Failed to generate recipe (${response.status})`);
      }

      const generatedRecipe: Recipe = await response.json();

      if (!generatedRecipe.id || !generatedRecipe.variations || generatedRecipe.variations.length === 0) {
        throw new Error('Invalid recipe payload received');
      }

      // Add to custom recipes (avoiding duplicates)
      setCustomRecipes((prev) => {
        const filtered = prev.filter((r) => r.id !== generatedRecipe.id);
        return [generatedRecipe, ...filtered];
      });

      // Navigate directly to the newly crafted recipe
      setSelectedRecipeId(generatedRecipe.id);
      setSelectedVariationId(generatedRecipe.variations[0].id);
      setViewMode('recipe-detail');
      setSearchQuery('');
      setGenerationFeedback(`Successfully added "${generatedRecipe.name}" with ${generatedRecipe.variations.length} authentic variations!`);
      setTimeout(() => setGenerationFeedback(null), 4000);
    } catch (err: any) {
      console.error('Error in handleGenerateRecipe:', err);
      setGenerationFeedback(`Could not generate recipe: ${err.message || 'Please check network'}`);
      setTimeout(() => setGenerationFeedback(null), 5000);
    } finally {
      setIsGeneratingRecipe(false);
    }
  };

  // Filter recipes for the catalog
  const filteredRecipes = allRecipes.filter((recipe) => {
    // Phase filter
    const matchesPhase =
      selectedPhase === 'All' ||
      (selectedPhase === 'Phase 1' &&
        recipe.variations.some(
          (v) =>
            v.regionalLineage.region === 'Telugu' ||
            v.regionalLineage.region === 'South Indian' ||
            (v.regionalLineage.region === 'North Indian' &&
              !v.regionalLineage.state.includes('Kashmir') &&
              !v.regionalLineage.state.includes('Rajasthan') &&
              !v.regionalLineage.state.includes('Bihar'))
        )) ||
      (selectedPhase === 'Phase 2' &&
        recipe.variations.some(
          (v) =>
            v.regionalLineage.region === 'Pan-Indian' ||
            v.regionalLineage.state.includes('Bengal') ||
            v.regionalLineage.state.includes('Kashmir') ||
            v.regionalLineage.state.includes('Gujarat') ||
            v.regionalLineage.state.includes('Rajasthan') ||
            v.regionalLineage.state.includes('Bihar') ||
            v.regionalLineage.state.includes('Goa')
        )) ||
      (selectedPhase === 'Phase 3' &&
        recipe.variations.some(
          (v) =>
            v.regionalLineage.region === 'Diaspora' ||
            v.regionalLineage.state.toLowerCase().includes('diaspora') ||
            v.regionalLineage.state.toLowerCase().includes('uk') ||
            v.regionalLineage.state.toLowerCase().includes('south africa') ||
            v.regionalLineage.state.toLowerCase().includes('trinidad')
        ));

    // Cuisine region filter
    const matchesCuisine =
      selectedCuisine === 'All' ||
      recipe.variations.some((v) => v.regionalLineage.region === selectedCuisine);

    // Difficulty filter
    const matchesDifficulty =
      selectedDifficulty === 'All' ||
      recipe.variations.some((v) => v.difficulty.level === selectedDifficulty);

    // Category filter
    const matchesCategory =
      selectedCategory === 'All' || recipe.category === selectedCategory;

    // Search query
    const cleanQ = searchQuery.trim().toLowerCase();
    const matchesQuery =
      !cleanQ ||
      recipe.name.toLowerCase().includes(cleanQ) ||
      recipe.teluguName.toLowerCase().includes(cleanQ) ||
      recipe.hindiName.toLowerCase().includes(cleanQ) ||
      recipe.tamilName.toLowerCase().includes(cleanQ) ||
      recipe.shortDescription.toLowerCase().includes(cleanQ) ||
      recipe.category.toLowerCase().includes(cleanQ) ||
      recipe.variations.some(
        (v) =>
          v.versionTitle.toLowerCase().includes(cleanQ) ||
          v.regionalLineage.district.toLowerCase().includes(cleanQ) ||
          v.regionalLineage.state.toLowerCase().includes(cleanQ) ||
          v.ingredients.some((ing) => ing.name.toLowerCase().includes(cleanQ))
      );

    return matchesPhase && matchesCuisine && matchesDifficulty && matchesCategory && matchesQuery;
  });

  // Handle clicking a trending pill
  const handleTrendingClick = (dish: string) => {
    const existing = allRecipes.find(
      (r) =>
        r.name.toLowerCase().includes(dish.toLowerCase()) ||
        r.variations.some((v) => v.versionTitle.toLowerCase().includes(dish.toLowerCase()))
    );

    if (existing) {
      setSelectedRecipeId(existing.id);
      setSelectedVariationId(existing.variations[0].id);
      setViewMode('recipe-detail');
    } else {
      setSearchQuery(dish);
      setViewMode('overview');
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0e0c] text-[#f4efe6] flex flex-col font-sans selection:bg-amber-600/30 selection:text-amber-200">
      {/* Top Bar Contract Compliant Header with Global Search */}
      <Header
        onOpenCookMode={() => setIsCookModeOpen(true)}
        onOpenMealPlanner={() => setIsMealPlannerOpen(true)}
        onOpenComparison={() => setIsComparisonOpen(true)}
        onOpenDifficultyGuide={() => setIsDifficultyJustificationOpen(true)}
        onOpenScanner={() => setIsScannerOpen(true)}
        onOpenRoadmap={() => setIsRoadmapOpen(true)}
        onOpenPlayStore={() => setIsPlayStoreOpen(true)}
        language={language}
        onSelectLanguage={setLanguage}
        savedCount={savedRecipeIds.length}
        onOpenSavedCookbook={() => setIsSavedCookbookOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          if (q.trim() && viewMode !== 'overview') {
            setViewMode('overview');
          }
        }}
        onSelectRecipe={(id) => {
          setSelectedRecipeId(id);
          const found = allRecipes.find((r) => r.id === id);
          if (found) {
            setSelectedVariationId(found.variations[0].id);
          }
          setViewMode('recipe-detail');
        }}
        onOpenAllCollections={() => {
          setSearchQuery('');
          setViewMode('overview');
        }}
        onGenerateRecipe={handleGenerateRecipe}
        isGeneratingRecipe={isGeneratingRecipe}
        recipes={allRecipes}
      />

      {/* Generation Status Toast Banner */}
      {(isGeneratingRecipe || generationFeedback) && (
        <div className="bg-amber-950/80 border-b border-amber-500/40 px-4 py-2.5 text-xs text-amber-200 flex items-center justify-between transition-all backdrop-blur-sm z-30 sticky top-18">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {isGeneratingRecipe ? (
                <Loader2 className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
              ) : (
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              )}
              <span className="font-medium">
                {generationFeedback || 'Crafting your recipe...'}
              </span>
            </div>
            {!isGeneratingRecipe && (
              <button
                onClick={() => setGenerationFeedback(null)}
                className="text-amber-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Editorial Sub-Navigation & Mode Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-amber-900/30 no-print">
          <div className="flex items-center gap-1.5 p-1 bg-[#16140f] border border-neutral-800 rounded-lg">
            <button
              onClick={() => setViewMode('recipe-detail')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                viewMode === 'recipe-detail'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Recipe Workspace & Cook
            </button>
            <button
              onClick={() => setViewMode('overview')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 ${
                viewMode === 'overview'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span>All Recipes</span>
              <span className="px-1.5 py-0.2 rounded text-[10px] bg-black/40 text-amber-300 font-mono">
                {allRecipes.length}
              </span>
            </button>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            <button
              onClick={() => setIsMealPlannerOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/40 text-xs font-semibold transition-colors shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Meal Planner (Mon-Sun)</span>
            </button>

            <button
              onClick={() => setIsDifficultyJustificationOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/5 text-xs font-medium transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Difficulty Guide</span>
            </button>

            <button
              onClick={() => setIsScannerOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Scan Pantry (AI)</span>
            </button>

            <button
              onClick={() => setIsPlayStoreOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/50 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-700/60 text-xs font-semibold transition-colors shadow-sm"
            >
              <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Play Store / Install</span>
            </button>
          </div>
        </div>

        {/* Trending Quick-Access Row */}
        <div className="space-y-2 no-print">
          <div className="flex items-center justify-between text-xs text-neutral-400">
            <span className="flex items-center gap-1.5 font-medium">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>Quick Access & Trending Dishes:</span>
            </span>
            <span className="text-[11px] text-neutral-500">
              Click any dish to open or generate with Gemini AI
            </span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {QUICK_TRENDING_DISHES.map((dish) => {
              const isLoaded = allRecipes.some(
                (r) =>
                  r.name.toLowerCase().includes(dish.toLowerCase()) ||
                  r.variations.some((v) =>
                    v.versionTitle.toLowerCase().includes(dish.toLowerCase())
                  )
              );
              return (
                <button
                  key={dish}
                  onClick={() => handleTrendingClick(dish)}
                  className={`px-3 py-1 text-xs rounded-full whitespace-nowrap transition-all border shrink-0 flex items-center gap-1.5 ${
                    isLoaded
                      ? 'bg-neutral-900 border-neutral-700/80 text-neutral-200 hover:border-amber-500 hover:text-white'
                      : 'bg-amber-950/20 border-amber-800/40 text-amber-300 hover:bg-amber-900/40'
                  }`}
                >
                  <span>{dish}</span>
                  {isLoaded ? (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  ) : (
                    <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* View 1: Recipe Detail with Multi-Version Switcher */}
        {viewMode === 'recipe-detail' ? (
          <div className="space-y-12">
            <RecipeDetail
              recipe={currentRecipe}
              selectedVariationId={selectedVariationId}
              onSelectVariation={setSelectedVariationId}
              onOpenCookMode={() => setIsCookModeOpen(true)}
              onOpenComparison={() => setIsComparisonOpen(true)}
              onOpenSubstitutions={() => setIsSubstitutionsOpen(true)}
              onOpenDifficultyJustification={() => setIsDifficultyJustificationOpen(true)}
              language={language}
              isBookmarked={savedRecipeIds.includes(currentRecipe.id)}
              onToggleBookmark={() => toggleBookmark(currentRecipe.id)}
            />

            {/* Quick Switcher Carousel for other dishes */}
            <div className="space-y-4 pt-8 border-t border-amber-900/30 no-print">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-display text-white">
                    Explore Other Regional Lineages ({allRecipes.length} Dishes)
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Each featuring verified district, family, and culinary variations
                  </p>
                </div>
                <button
                  onClick={() => setViewMode('overview')}
                  className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold"
                >
                  <span>View All {allRecipes.length} Dishes</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {allRecipes.slice(0, 8).map((r) => {
                  const isCurrent = r.id === currentRecipe.id;
                  return (
                    <div
                      key={r.id}
                      onClick={() => {
                        setSelectedRecipeId(r.id);
                        setSelectedVariationId(r.variations[0].id);
                      }}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        isCurrent
                          ? 'bg-amber-950/20 border-amber-500/60 ring-1 ring-amber-500/30 shadow-md'
                          : 'bg-[#15130f] border-neutral-800 hover:border-neutral-700 hover:bg-[#1a1813]'
                      }`}
                    >
                      <div className="h-28 rounded-lg overflow-hidden mb-3 bg-neutral-900 relative">
                        <img
                          src={r.heroImage}
                          alt={r.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                        <div className="absolute bottom-2 left-2 text-[10px] px-2 py-0.5 rounded bg-black/70 text-amber-300 font-mono">
                          {r.variations.length} Versions
                        </div>
                      </div>

                      <h4 className="text-sm font-semibold text-white truncate">
                        {r.name.split(' (')[0]}
                      </h4>
                      <p className="text-xs text-neutral-400 line-clamp-2 mt-1">
                        {r.shortDescription}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          /* View 2: All Regional Collections Overview */
          <div className="space-y-8 animate-fadeIn">
            {/* Catalog Hero Banner */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-r from-[#171510] to-[#12100d] border border-amber-900/30 shadow-xl space-y-4">
              <div className="max-w-3xl space-y-2">
                <span className="text-xs uppercase tracking-wider text-amber-500 font-semibold block">
                  Flavora Master Collections · {allRecipes.length} Authentic Dishes Available
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
                  Regional Indian Culinary Lineages
                </h2>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  "Allow multiple versions of the same dish. Different families and districts prepare Dosa, Idli, Pesarattu, or Biryani differently. Don't present one version as the only authentic version."
                </p>
              </div>

              {/* Search & Filter Controls */}
              <div className="pt-4 space-y-4">
                {/* Phase Selector Row (Phase 1, Phase 2, Phase 3) */}
                <div className="flex items-center gap-2 flex-wrap pt-1">
                  <span className="text-xs font-semibold text-neutral-400">Roadmap Phase:</span>
                  {[
                    { id: 'All', label: 'All Collections' },
                    { id: 'Phase 1', label: 'Phase 1: Telugu & Regional Staples' },
                    { id: 'Phase 2', label: 'Phase 2: All Indian States (Bengal, Kashmir, Gujarat, Rajasthan, Bihar)' },
                    { id: 'Phase 3', label: 'Phase 3: International Diaspora (Hakka, UK Curry, Durban, Trinidad)' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPhase(p.id)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all border ${
                        selectedPhase === p.id
                          ? 'bg-amber-600 border-amber-500 text-white shadow-md'
                          : 'bg-[#191712] border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>

                <div className="flex flex-col md:flex-row gap-4 pt-1">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search across all Indian states & diaspora (Dosa, Idli, Shorshe Maach, Rogan Josh, Litti, Bunny Chow...)"
                      className="w-full pl-10 pr-10 py-2.5 text-xs bg-black/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3 top-2.5 text-neutral-400 hover:text-white"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {/* Region Filter */}
                    <div className="flex items-center gap-1 p-1 bg-[#191712] border border-neutral-800 rounded-lg">
                      {['All', 'Telugu', 'South Indian', 'North Indian', 'Pan-Indian', 'Diaspora'].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCuisine(cat)}
                          className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                            selectedCuisine === cat
                              ? 'bg-amber-600 text-white'
                              : 'text-neutral-400 hover:text-white'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    {/* Difficulty Filter */}
                    <div className="flex items-center gap-1 p-1 bg-[#191712] border border-neutral-800 rounded-lg">
                      {['All', 'Easy', 'Medium', 'Hard'].map((diff) => (
                        <button
                          key={diff}
                          onClick={() => setSelectedDifficulty(diff)}
                          className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                            selectedDifficulty === diff
                              ? 'bg-amber-600 text-white'
                              : 'text-neutral-400 hover:text-white'
                          }`}
                        >
                          {diff}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Categories Row */}
                <div className="flex items-center gap-1.5 flex-wrap text-xs">
                  <span className="text-neutral-500 mr-1">Categories:</span>
                  {[
                    'All',
                    'Breakfast',
                    'Rice Specialties',
                    'Lentils & Gravies',
                    'Royal Curries',
                    'Coastal & Seafood',
                    'Street Food & Snacks',
                  ].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-2.5 py-1 rounded-md text-xs transition-colors ${
                        selectedCategory === cat
                          ? 'bg-neutral-800 text-amber-300 border border-amber-500/40'
                          : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Search feedback & count */}
            <div className="flex items-center justify-between text-xs text-neutral-400">
              <div>
                Showing <strong className="text-white font-mono">{filteredRecipes.length}</strong> of{' '}
                <strong className="text-white font-mono">{allRecipes.length}</strong> total recipes
                {searchQuery && (
                  <span>
                    {' '}
                    matching "<span className="text-amber-400 font-medium">{searchQuery}</span>"
                  </span>
                )}
              </div>

              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>Clear Search</span>
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Recipe Cards Catalog */}
            {filteredRecipes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredRecipes.map((recipe) => (
                  <div
                    key={recipe.id}
                    className="rounded-2xl bg-[#16140f] border border-neutral-800 overflow-hidden hover:border-amber-800/60 transition-all flex flex-col justify-between shadow-lg"
                  >
                    <div className="relative h-56 bg-neutral-900 overflow-hidden">
                      <img
                        src={recipe.heroImage}
                        alt={recipe.name}
                        className="w-full h-full object-cover brightness-95 hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#16140f] via-transparent to-transparent" />

                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-black/70 text-amber-300 border border-white/10 font-bold backdrop-blur-sm">
                          {recipe.variations.length} District Versions
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-neutral-400">
                          <span>{recipe.category}</span>
                          <span className="text-amber-400 font-medium">
                            {recipe.teluguName}
                          </span>
                        </div>

                        <h3 className="text-2xl font-display font-semibold text-white">
                          {recipe.name}
                        </h3>

                        <p className="text-xs text-neutral-300 leading-relaxed line-clamp-3">
                          {recipe.shortDescription}
                        </p>
                      </div>

                      {/* Variations Preview list */}
                      <div className="space-y-1.5 pt-3 border-t border-neutral-800">
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400 block">
                          Included Expressions:
                        </span>
                        {recipe.variations.map((v) => (
                          <div
                            key={v.id}
                            className="flex items-center justify-between text-xs p-1.5 rounded bg-white/5"
                          >
                            <span className="text-neutral-200 font-medium truncate max-w-[200px]">
                              {v.versionTitle.split(' (')[0]}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] text-neutral-400">
                                {v.regionalLineage.district}
                              </span>
                              <span
                                className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                                  v.difficulty.level === 'Easy'
                                    ? 'text-emerald-400 bg-emerald-950/60'
                                    : v.difficulty.level === 'Medium'
                                    ? 'text-amber-400 bg-amber-950/60'
                                    : 'text-rose-400 bg-rose-950/60'
                                }`}
                              >
                                {v.difficulty.level}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="pt-4 flex items-center justify-between gap-3 border-t border-neutral-800">
                        <button
                          onClick={() => {
                            setSelectedRecipeId(recipe.id);
                            setSelectedVariationId(recipe.variations[0].id);
                            setIsComparisonOpen(true);
                          }}
                          className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold"
                        >
                          <Layers className="w-3.5 h-3.5" />
                          <span>Compare All Versions</span>
                        </button>

                        <button
                          onClick={() => {
                            setSelectedRecipeId(recipe.id);
                            setSelectedVariationId(recipe.variations[0].id);
                            setViewMode('recipe-detail');
                          }}
                          className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-1 shadow-sm"
                        >
                          <span>Open Recipe</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* High-Value Empty State with 1-Click AI Recipe Generation */
              <div className="p-8 sm:p-12 rounded-2xl bg-[#16140f] border border-amber-900/40 text-center space-y-6 shadow-xl">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
                  <UtensilsCrossed className="w-8 h-8" />
                </div>

                <div className="max-w-md mx-auto space-y-2">
                  <h3 className="text-xl font-display font-bold text-white">
                    {searchQuery
                      ? `No recipes currently matched "${searchQuery}"`
                      : 'No recipes match selected filters'}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Flavora's master culinary engine can instantly research and craft authentic regional variations, complete nutrition facts, difficulty ratings, and step-by-step cook timers for any Indian recipe!
                  </p>
                </div>

                {searchQuery && (
                  <div className="pt-2">
                    <button
                      disabled={isGeneratingRecipe}
                      onClick={() => handleGenerateRecipe(searchQuery)}
                      className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm rounded-xl transition-all inline-flex items-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 disabled:opacity-50"
                    >
                      {isGeneratingRecipe ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Generating Authentic Recipe...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 fill-current" />
                          <span>Generate "{searchQuery}" with Gemini AI Chef</span>
                        </>
                      )}
                    </button>
                  </div>
                )}

                <div className="pt-6 border-t border-neutral-800/80 max-w-xl mx-auto space-y-3">
                  <span className="text-xs text-neutral-400 block font-medium">
                    Or try exploring these regional icons:
                  </span>
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      'Masala Dosa',
                      'Mallipoo Idli',
                      'Amritsari Chole',
                      'Nellore Chepala Pulusu',
                      'Paneer Butter Masala',
                      'Natu Kodi Kura',
                      'Katte Pongali',
                      'Hyderabadi Dum Biryani',
                    ].map((staple) => (
                      <button
                        key={staple}
                        onClick={() => handleTrendingClick(staple)}
                        className="px-3 py-1.5 text-xs rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-700 hover:border-amber-500 transition-colors"
                      >
                        {staple}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-amber-900/30 bg-[#0c0a08] py-8 text-neutral-400 text-xs no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/src/assets/images/flavora_cozy_kitchen_girl_1793941796973.jpg"
              alt="Flavora Logo"
              className="w-8 h-8 rounded-full border border-amber-500/40 object-cover shadow-sm ring-1 ring-amber-500/20"
            />
            <span className="text-neutral-300 font-display text-sm font-semibold">
              Flavora
            </span>
            <span className="text-neutral-600">·</span>
            <span>Honoring Family & District Lineages Across India</span>
          </div>

          <div className="flex items-center gap-6 text-neutral-400">
            <button
              onClick={() => setIsMealPlannerOpen(true)}
              className="hover:text-amber-400 transition-colors flex items-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Weekly Meal Planner</span>
            </button>
            <button
              onClick={() => setIsRoadmapOpen(true)}
              className="hover:text-amber-400 transition-colors"
            >
              Development Roadmap
            </button>
            <button
              onClick={() => setIsDifficultyJustificationOpen(true)}
              className="hover:text-amber-400 transition-colors"
            >
              Difficulty Ratings Justifications
            </button>
            <button
              onClick={() => setIsScannerOpen(true)}
              className="hover:text-amber-400 transition-colors"
            >
              Pantry Scanner
            </button>
          </div>
        </div>
      </footer>

      {/* MODALS */}

      {/* 1. Full-Screen Interactive Cook Mode */}
      {isCookModeOpen && (
        <CookModeModal
          recipe={currentRecipe}
          variation={currentVariation}
          onClose={() => setIsCookModeOpen(false)}
        />
      )}

      {/* 2. Recipe Version Comparison Matrix */}
      {isComparisonOpen && (
        <VersionComparisonModal
          recipes={allRecipes}
          initialRecipeId={currentRecipe.id}
          onClose={() => setIsComparisonOpen(false)}
          onSelectVariation={handleSelectVariation}
        />
      )}

      {/* 3. Difficulty Ratings & Justifications Drawer */}
      {isDifficultyJustificationOpen && (
        <DifficultyJustificationModal
          recipes={allRecipes}
          onClose={() => setIsDifficultyJustificationOpen(false)}
          onSelectVariation={handleSelectVariation}
        />
      )}

      {/* 4. Common Ingredient Substitutions Panel */}
      {isSubstitutionsOpen && (
        <SubstitutionDrawer
          variation={currentVariation}
          recipeName={currentRecipe.name}
          onClose={() => setIsSubstitutionsOpen(false)}
        />
      )}

      {/* 5. AI Pantry Scanner */}
      {isScannerOpen && (
        <PantryScannerModal
          recipes={allRecipes}
          onClose={() => setIsScannerOpen(false)}
          onSelectVariation={handleSelectVariation}
        />
      )}

      {/* 6. Development Roadmap Modal */}
      {isRoadmapOpen && (
        <RoadmapModal
          onClose={() => setIsRoadmapOpen(false)}
          onSelectPhaseFilter={(phase) => {
            setSelectedPhase(phase);
            setViewMode('overview');
          }}
        />
      )}

      {/* 7. Offline Saved Cookbook Modal */}
      {isSavedCookbookOpen && (
        <SavedCookbookModal
          recipes={allRecipes}
          savedRecipeIds={savedRecipeIds}
          onToggleBookmark={toggleBookmark}
          onSelectRecipe={(id) => {
            setSelectedRecipeId(id);
            const found = allRecipes.find((r) => r.id === id);
            if (found) {
              setSelectedVariationId(found.variations[0].id);
            }
            setViewMode('recipe-detail');
          }}
          onClose={() => setIsSavedCookbookOpen(false)}
        />
      )}

      {/* 8. Weekly Meal Planner Modal (Monday - Sunday) */}
      {isMealPlannerOpen && (
        <MealPlannerModal
          recipes={allRecipes}
          savedRecipeIds={savedRecipeIds}
          onClose={() => setIsMealPlannerOpen(false)}
          onSelectRecipeAndCook={(recipeId, variationId) => {
            handleSelectVariation(recipeId, variationId);
            setIsCookModeOpen(true);
          }}
        />
      )}

      {/* 9. Google Play Store & Android WebAPK / TWA Modal */}
      {isPlayStoreOpen && (
        <PlayStoreModal onClose={() => setIsPlayStoreOpen(false)} />
      )}
    </div>
  );
}
