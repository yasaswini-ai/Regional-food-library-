import React from 'react';
import { Play, Globe, Bookmark } from 'lucide-react';
import { SupportedLanguage } from '../types';

interface HeaderProps {
  onOpenCookMode: () => void;
  onOpenComparison: () => void;
  onOpenDifficultyGuide: () => void;
  onOpenScanner: () => void;
  onOpenRoadmap: () => void;
  language: SupportedLanguage;
  onSelectLanguage: (lang: SupportedLanguage) => void;
  savedCount: number;
  onOpenSavedCookbook: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCookMode,
  onOpenComparison,
  onOpenDifficultyGuide,
  onOpenScanner,
  onOpenRoadmap,
  language,
  onSelectLanguage,
  savedCount,
  onOpenSavedCookbook,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0e0c09]/90 backdrop-blur-md border-b border-amber-900/30 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (one element, display face) */}
        <div className="flex items-center gap-3 shrink-0">
          <img
            src="/src/assets/images/app_logo_emblem_1793771011423.jpg"
            alt="Rasoi Lineage Emblem"
            className="w-10 h-10 rounded-full border border-amber-500/40 object-cover shadow-sm"
          />
          <a
            href="/"
            className="text-xl font-display font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-amber-400 transition-colors"
          >
            Rasoi Lineage
          </a>
        </div>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <button
            onClick={onOpenComparison}
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Compare Versions
          </button>
          <button
            onClick={onOpenDifficultyGuide}
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Difficulty Ratings
          </button>
          <button
            onClick={onOpenScanner}
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Pantry Scanner
          </button>
          <button
            onClick={onOpenRoadmap}
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Roadmap
          </button>
          <button
            onClick={onOpenSavedCookbook}
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <Bookmark className="w-3.5 h-3.5 text-amber-500" />
            <span>Saved ({savedCount})</span>
          </button>
        </nav>

        {/* Zone 3: 1 primary action + Language Switcher */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language selector */}
          <div className="relative flex items-center bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-neutral-300">
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
            className="px-4 py-2 text-xs font-bold text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 shadow-md shadow-amber-500/10 active:scale-95"
          >
            <Play className="w-3.5 h-3.5 fill-neutral-950" />
            <span>Cook Mode</span>
          </button>
        </div>
      </div>
    </header>
  );
};
