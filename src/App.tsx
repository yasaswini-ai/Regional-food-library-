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
  MapPin
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

export default function App() {
  // Navigation & Selected Recipe state
  const [selectedRecipeId, setSelectedRecipeId] = useState<string>(RECIPES_DATA[0].id);
  const [selectedVariationId, setSelectedVariationId] = useState<string>(
    RECIPES_DATA[0].variations[0].id
  );

  // Active view: 'overview' or 'recipe-detail'
  const [viewMode, setViewMode] = useState<'overview' | 'recipe-detail'>('recipe-detail');

  // Filters
  const [selectedCuisine, setSelectedCuisine] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

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

  // Bookmarked recipes (Offline Cookbook)
  const [savedRecipeIds, setSavedRecipeIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('rasoi_lineage_saved');
      return saved ? JSON.parse(saved) : ['pesarattu', 'pulihora'];
    } catch {
      return ['pesarattu', 'pulihora'];
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
    RECIPES_DATA.find((r) => r.id === selectedRecipeId) || RECIPES_DATA[0];

  const currentVariation =
    currentRecipe.variations.find((v) => v.id === selectedVariationId) ||
    currentRecipe.variations[0];

  // Handler to open a specific variation
  const handleSelectVariation = (recipeId: string, variationId: string) => {
    setSelectedRecipeId(recipeId);
    setSelectedVariationId(variationId);
    setViewMode('recipe-detail');
  };

  // Filter recipes for the catalog
  const filteredRecipes = RECIPES_DATA.filter((recipe) => {
    // Cuisine region filter
    const matchesCuisine =
      selectedCuisine === 'All' ||
      recipe.variations.some((v) => v.regionalLineage.region === selectedCuisine);

    // Difficulty filter
    const matchesDifficulty =
      selectedDifficulty === 'All' ||
      recipe.variations.some((v) => v.difficulty.level === selectedDifficulty);

    // Search query
    const matchesQuery =
      !searchQuery.trim() ||
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.teluguName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.variations.some(
        (v) =>
          v.versionTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          v.regionalLineage.district.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCuisine && matchesDifficulty && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-[#0f0e0c] text-[#f4efe6] flex flex-col font-sans selection:bg-amber-600/30 selection:text-amber-200">
      {/* Top Bar Contract Compliant Header */}
      <Header
        onOpenCookMode={() => setIsCookModeOpen(true)}
        onOpenComparison={() => setIsComparisonOpen(true)}
        onOpenDifficultyGuide={() => setIsDifficultyJustificationOpen(true)}
        onOpenScanner={() => setIsScannerOpen(true)}
        onOpenRoadmap={() => setIsRoadmapOpen(true)}
        language={language}
        onSelectLanguage={setLanguage}
        savedCount={savedRecipeIds.length}
        onOpenSavedCookbook={() => setIsSavedCookbookOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
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
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                viewMode === 'overview'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Regional Collections
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDifficultyJustificationOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/5 text-xs font-medium transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Difficulty Justifications (Easy / Med / Hard)</span>
            </button>

            <button
              onClick={() => setIsScannerOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Scan Pantry (AI)</span>
            </button>
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
                    Explore Other Iconic Regional Dishes
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Each featuring verified district and family variations
                  </p>
                </div>
                <button
                  onClick={() => setViewMode('overview')}
                  className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold"
                >
                  <span>View All Collections</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {RECIPES_DATA.map((r) => {
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
              <div className="max-w-2xl space-y-2">
                <span className="text-xs uppercase tracking-wider text-amber-500 font-semibold block">
                  Phase 1 Master Collections
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
                  Telugu, South Indian & North Indian Lineages
                </h2>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  "Allow multiple versions of the same dish. Different families and districts prepare Pesarattu or Pulihora differently. Don't present one version as the only authentic version."
                </p>
              </div>

              {/* Search & Filter Controls */}
              <div className="pt-4 flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by dish name, district (e.g. Guntur, Tirupati, Lucknow), or ingredients..."
                    className="w-full pl-10 pr-4 py-2.5 text-xs bg-black/40 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {/* Region Filter */}
                  <div className="flex items-center gap-1 p-1 bg-[#191712] border border-neutral-800 rounded-lg">
                    {['All', 'Telugu', 'South Indian', 'North Indian'].map((cat) => (
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
            </div>

            {/* Recipe Cards Catalog */}
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
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-amber-900/30 bg-[#0c0a08] py-8 text-neutral-400 text-xs no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/src/assets/images/app_logo_emblem_1793771011423.jpg"
              alt="Logo"
              className="w-7 h-7 rounded-full border border-amber-500/30 object-cover"
            />
            <span className="text-neutral-300 font-display text-sm font-semibold">
              Rasoi Lineage
            </span>
            <span className="text-neutral-600">·</span>
            <span>Honoring Family & District Lineages Across India</span>
          </div>

          <div className="flex items-center gap-6 text-neutral-400">
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
          recipes={RECIPES_DATA}
          initialRecipeId={currentRecipe.id}
          onClose={() => setIsComparisonOpen(false)}
          onSelectVariation={handleSelectVariation}
        />
      )}

      {/* 3. Difficulty Ratings & Justifications Drawer */}
      {isDifficultyJustificationOpen && (
        <DifficultyJustificationModal
          recipes={RECIPES_DATA}
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
          recipes={RECIPES_DATA}
          onClose={() => setIsScannerOpen(false)}
          onSelectVariation={handleSelectVariation}
        />
      )}

      {/* 6. Development Roadmap Modal */}
      {isRoadmapOpen && (
        <RoadmapModal onClose={() => setIsRoadmapOpen(false)} />
      )}

      {/* 7. Offline Saved Cookbook Modal */}
      {isSavedCookbookOpen && (
        <SavedCookbookModal
          recipes={RECIPES_DATA}
          savedRecipeIds={savedRecipeIds}
          onToggleBookmark={toggleBookmark}
          onSelectRecipe={(id) => {
            setSelectedRecipeId(id);
            setSelectedVariationId(
              RECIPES_DATA.find((r) => r.id === id)?.variations[0].id || ''
            );
            setViewMode('recipe-detail');
          }}
          onClose={() => setIsSavedCookbookOpen(false)}
        />
      )}
    </div>
  );
}
