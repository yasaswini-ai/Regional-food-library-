import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Globe, 
  Bookmark, 
  Calendar, 
  Search, 
  Sparkles, 
  X, 
  Loader2, 
  ChevronRight,
  Flame,
  Layers,
  Smartphone
} from 'lucide-react';
import { Recipe, SupportedLanguage } from '../types';

interface HeaderProps {
  onOpenCookMode: () => void;
  onOpenMealPlanner: () => void;
  onOpenComparison: () => void;
  onOpenDifficultyGuide: () => void;
  onOpenScanner: () => void;
  onOpenRoadmap: () => void;
  onOpenPlayStore: () => void;
  language: SupportedLanguage;
  onSelectLanguage: (lang: SupportedLanguage) => void;
  savedCount: number;
  onOpenSavedCookbook: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectRecipe: (recipeId: string) => void;
  onOpenAllCollections: () => void;
  onGenerateRecipe: (dishName: string) => void;
  isGeneratingRecipe: boolean;
  recipes: Recipe[];
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCookMode,
  onOpenMealPlanner,
  onOpenComparison,
  onOpenDifficultyGuide,
  onOpenScanner,
  onOpenRoadmap,
  onOpenPlayStore,
  language,
  onSelectLanguage,
  savedCount,
  onOpenSavedCookbook,
  searchQuery,
  onSearchChange,
  onSelectRecipe,
  onOpenAllCollections,
  onGenerateRecipe,
  isGeneratingRecipe,
  recipes,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close search dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const trimmedQuery = searchQuery.trim().toLowerCase();

  // Filter matching recipes for instant search dropdown
  const searchMatches = trimmedQuery
    ? recipes.filter((r) => {
        return (
          r.name.toLowerCase().includes(trimmedQuery) ||
          r.teluguName.toLowerCase().includes(trimmedQuery) ||
          r.hindiName.toLowerCase().includes(trimmedQuery) ||
          r.tamilName.toLowerCase().includes(trimmedQuery) ||
          r.shortDescription.toLowerCase().includes(trimmedQuery) ||
          r.category.toLowerCase().includes(trimmedQuery) ||
          r.variations.some(
            (v) =>
              v.versionTitle.toLowerCase().includes(trimmedQuery) ||
              v.regionalLineage.district.toLowerCase().includes(trimmedQuery) ||
              v.regionalLineage.state.toLowerCase().includes(trimmedQuery) ||
              v.ingredients.some((ing) => ing.name.toLowerCase().includes(trimmedQuery))
          )
        );
      })
    : [];

  const handleSelectAndClose = (id: string) => {
    onSelectRecipe(id);
    setIsSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0e0c09]/95 backdrop-blur-md border-b border-amber-900/30 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4 sm:gap-6">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <img
            src="/flavora_icon.jpg"
            alt="Flavora Cooking Kitchen Emblem"
            className="w-11 h-11 rounded-full border border-amber-500/50 object-cover shadow-md shadow-amber-950/40 ring-2 ring-amber-400/30"
          />
          <button
            onClick={onOpenAllCollections}
            className="text-xl font-display font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-amber-400 transition-colors text-left"
          >
            Flavora
          </button>
        </div>

        {/* Zone 2: Global Search Bar with Live Palette */}
        <div
          ref={searchContainerRef}
          className="relative flex-1 max-w-md mx-auto hidden sm:block"
        >
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                onSearchChange(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  if (searchMatches.length > 0) {
                    handleSelectAndClose(searchMatches[0].id);
                  } else if (trimmedQuery) {
                    onGenerateRecipe(searchQuery);
                  }
                }
              }}
              placeholder="Search all recipes (Dosa, Idli, Chole, Butter Chicken, Fish...)"
              className="w-full pl-9 pr-8 py-2 text-xs bg-black/50 border border-neutral-700/80 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/40 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  onSearchChange('');
                  setIsSearchOpen(false);
                }}
                className="absolute right-2.5 p-0.5 text-neutral-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Live Search Dropdown */}
          {isSearchOpen && trimmedQuery.length > 0 && (
            <div className="absolute left-0 right-0 mt-2 bg-[#16140f] border border-amber-900/40 rounded-xl shadow-2xl overflow-hidden z-50 divide-y divide-neutral-800/80 max-h-96 overflow-y-auto">
              {/* Header indicator */}
              <div className="px-3.5 py-2 bg-neutral-900/60 flex items-center justify-between text-[11px] text-neutral-400">
                <span>
                  Found <strong className="text-amber-300 font-mono">{searchMatches.length}</strong> matching dish{searchMatches.length === 1 ? '' : 'es'}
                </span>
                <span className="text-[10px] text-neutral-500 font-mono">Press Esc to close</span>
              </div>

              {/* Matches list */}
              {searchMatches.length > 0 ? (
                <div className="p-1 space-y-0.5">
                  {searchMatches.map((recipe) => (
                    <button
                      key={recipe.id}
                      onClick={() => handleSelectAndClose(recipe.id)}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-md bg-neutral-800 overflow-hidden shrink-0">
                          <img
                            src={recipe.heroImage}
                            alt={recipe.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-semibold text-white group-hover:text-amber-300 transition-colors truncate">
                            {recipe.name}
                          </div>
                          <div className="text-[11px] text-neutral-400 flex items-center gap-2">
                            <span className="text-amber-400/80">{recipe.teluguName}</span>
                            <span>•</span>
                            <span>{recipe.category}</span>
                            <span>•</span>
                            <span className="font-mono text-[10px] text-neutral-500">
                              {recipe.variations.length} variations
                            </span>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 transition-colors shrink-0" />
                    </button>
                  ))}
                </div>
              ) : null}

              {/* On-Demand AI Generator Callout */}
              <div className="p-3 bg-gradient-to-r from-amber-950/30 to-black/40">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Generate authentic recipe for "{searchQuery}"</span>
                    </p>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      Gemini AI Chef will create authentic regional variations, timers, nutrition facts, and substitutions in seconds.
                    </p>
                  </div>
                  <button
                    disabled={isGeneratingRecipe}
                    onClick={() => {
                      onGenerateRecipe(searchQuery);
                      setIsSearchOpen(false);
                    }}
                    className="shrink-0 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-sm disabled:opacity-50"
                  >
                    {isGeneratingRecipe ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Crafting...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5 fill-current" />
                        <span>Generate</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Zone 3: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-medium text-neutral-300">
          <button
            onClick={onOpenAllCollections}
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1"
          >
            <Layers className="w-3.5 h-3.5 text-neutral-400" />
            <span>All Dishes</span>
          </button>
          <button
            onClick={onOpenMealPlanner}
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 text-amber-300 font-semibold"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Meal Planner</span>
          </button>
          <button
            onClick={onOpenComparison}
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Compare
          </button>
          <button
            onClick={onOpenDifficultyGuide}
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Difficulty
          </button>
          <button
            onClick={onOpenScanner}
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Scanner
          </button>
          <button
            onClick={onOpenSavedCookbook}
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <Bookmark className="w-3.5 h-3.5 text-amber-500" />
            <span>Saved ({savedCount})</span>
          </button>
          <button
            onClick={onOpenPlayStore}
            className="hover:text-emerald-300 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 text-emerald-400 font-semibold"
            title="Download Android APK / Google Play Store"
          >
            <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
            <span>Play Store</span>
          </button>
        </nav>

        {/* Zone 4: CTA & Language */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Quick Android / Play Store button for mobile/tablet */}
          <button
            onClick={onOpenPlayStore}
            className="lg:hidden p-2 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 hover:text-white transition-colors"
            title="Install Android App / Play Store"
            aria-label="Install Android App"
          >
            <Smartphone className="w-4 h-4 text-emerald-400" />
          </button>

          {/* Language selector */}
          <div className="relative hidden md:flex items-center bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-neutral-300">
            <Globe className="w-3.5 h-3.5 text-amber-400 mr-1.5 shrink-0" />
            <select
              value={language}
              onChange={(e) => onSelectLanguage(e.target.value as SupportedLanguage)}
              className="bg-transparent text-white font-medium focus:outline-none cursor-pointer pr-1 text-xs"
              aria-label="Select Interface & Recipe Language"
            >
              <option value="en" className="bg-[#191712] text-white">English</option>
              <option value="te" className="bg-[#191712] text-white">తెలుగు (Telugu)</option>
              <option value="hi" className="bg-[#191712] text-white">हिन्दी (Hindi)</option>
              <option value="ta" className="bg-[#191712] text-white">தமிழ் (Tamil)</option>
            </select>
          </div>

          {/* Primary CTA */}
          <button
            onClick={onOpenCookMode}
            className="px-3.5 py-2 text-xs font-bold text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-md shadow-amber-500/10 active:scale-95"
          >
            <Play className="w-3.5 h-3.5 fill-neutral-950" />
            <span>Cook Mode</span>
          </button>
        </div>
      </div>

      {/* Mobile Search Bar Row */}
      <div className="sm:hidden px-4 pb-3 pt-1">
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              onSearchChange(e.target.value);
              setIsSearchOpen(true);
            }}
            onFocus={() => setIsSearchOpen(true)}
            placeholder="Search all recipes or generate..."
            className="w-full pl-9 pr-8 py-2 text-xs bg-black/50 border border-neutral-700/80 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:border-amber-500"
          />
          {searchQuery && (
            <button
              onClick={() => {
                onSearchChange('');
                setIsSearchOpen(false);
              }}
              className="absolute right-2.5 p-0.5 text-neutral-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
