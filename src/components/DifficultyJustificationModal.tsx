import React, { useState } from 'react';
import { X, Flame, Clock, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Recipe, DifficultyLevel } from '../types';

interface DifficultyJustificationModalProps {
  recipes: Recipe[];
  onClose: () => void;
  onSelectVariation: (recipeId: string, variationId: string) => void;
}

export const DifficultyJustificationModal: React.FC<DifficultyJustificationModalProps> = ({
  recipes,
  onClose,
  onSelectVariation,
}) => {
  const [filterLevel, setFilterLevel] = useState<DifficultyLevel | 'All'>('All');

  // Flatten all recipe variations with their parent recipe
  const allItems = recipes.flatMap((recipe) =>
    recipe.variations.map((v) => ({
      recipe,
      variation: v,
      diff: v.difficulty,
    }))
  );

  const filteredItems = filterLevel === 'All' 
    ? allItems 
    : allItems.filter((item) => item.diff.level === filterLevel);

  const getBadgeStyle = (level: DifficultyLevel) => {
    switch (level) {
      case 'Easy':
        return 'text-emerald-400 bg-emerald-950/40 border-emerald-800/60';
      case 'Medium':
        return 'text-amber-400 bg-amber-950/40 border-amber-800/60';
      case 'Hard':
        return 'text-rose-400 bg-rose-950/40 border-rose-800/60';
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#090807]/90 backdrop-blur-md flex items-center justify-center p-4 lg:p-8 overflow-y-auto">
      <div className="bg-[#15130f] border border-amber-900/40 rounded-2xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl text-[#f4efe6]">
        {/* Modal Header */}
        <div className="p-6 border-b border-amber-900/30 flex items-center justify-between bg-[#191712]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs uppercase tracking-wider text-amber-500 font-semibold">
                Culinary Complexity Assessment
              </span>
              <span className="text-neutral-500">·</span>
              <span className="text-xs text-neutral-400">Technical Rigor & Lineage Standards</span>
            </div>
            <h2 className="text-2xl font-display text-white">
              Recipe Difficulty Ratings & Detailed Justifications
            </h2>
            <p className="text-xs text-neutral-400 mt-1 max-w-2xl">
              Ratings are determined using 4 empirical kitchen factors: step count, active manual intervention, passive enzymatic/soaking time, and technical complexity (tempering control, starch gelatinization, dough sealing, or thermal timing).
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter bar */}
        <div className="px-6 py-3 border-b border-neutral-800/60 bg-[#12100d] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {(['All', 'Easy', 'Medium', 'Hard'] as const).map((lvl) => (
              <button
                key={lvl}
                onClick={() => setFilterLevel(lvl)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors border ${
                  filterLevel === lvl
                    ? 'bg-amber-600 text-white border-amber-500 shadow-sm'
                    : 'bg-white/5 text-neutral-400 border-white/5 hover:text-white hover:bg-white/10'
                }`}
              >
                {lvl === 'All' ? 'All Recipes (8)' : `${lvl} (${allItems.filter((i) => i.diff.level === lvl).length})`}
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Easy: Beginner-friendly (10-15m)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Medium: Multi-stage technique
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-400" />
              Hard: Artisanal precision
            </span>
          </div>
        </div>

        {/* Recipe Justifications List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {filteredItems.map(({ recipe, variation, diff }) => (
            <div
              key={variation.id}
              className="p-5 rounded-xl bg-[#191712] border border-neutral-800 hover:border-amber-800/50 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span
                    className={`px-2.5 py-1 rounded-md text-xs font-bold border tracking-wider uppercase ${getBadgeStyle(
                      diff.level
                    )}`}
                  >
                    {diff.level}
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {variation.versionTitle}
                  </span>
                  <span className="text-neutral-500">·</span>
                  <span className="text-xs text-neutral-400">
                    {recipe.name.split(' (')[0]} ({variation.regionalLineage.district})
                  </span>
                </div>

                {/* Justification Text */}
                <div className="p-3.5 rounded-lg bg-[#110f0c] border border-amber-950/30">
                  <h4 className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Technical Justification
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {diff.justification}
                  </p>
                </div>

                {/* Metrics Breakdown Strip */}
                <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    <span>{diff.stepsCount} Steps</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-amber-500" />
                    <span>Active: {diff.activeTimeMin}m</span>
                  </div>
                  {diff.passiveTimeMin > 0 && (
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-neutral-500" />
                      <span>
                        Passive (Soak/Dum): {Math.round(diff.passiveTimeMin / 60)}h
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>Technique: {diff.techniqueComplexity}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-orange-400" />
                    <span>Spice: Level {variation.spiceLevel}/5</span>
                  </div>
                </div>
              </div>

              {/* View and Cook CTA */}
              <div className="shrink-0 flex items-center gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onSelectVariation(recipe.id, variation.id);
                  }}
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shadow-sm"
                >
                  View Recipe & Cook
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Guidance */}
        <div className="p-4 border-t border-amber-900/30 bg-[#12100d] flex items-center justify-between text-xs text-neutral-400">
          <span>
            Every variation maintains cultural authenticity regardless of difficulty rating.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white/5 hover:bg-white/10 text-neutral-300 rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
