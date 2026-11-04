import React, { useState } from 'react';
import { X, Layers, Flame, Clock, Sparkles } from 'lucide-react';
import { Recipe, RecipeVariation } from '../types';

interface VersionComparisonModalProps {
  recipes: Recipe[];
  initialRecipeId?: string;
  onClose: () => void;
  onSelectVariation: (recipeId: string, variationId: string) => void;
}

export const VersionComparisonModal: React.FC<VersionComparisonModalProps> = ({
  recipes,
  initialRecipeId,
  onClose,
  onSelectVariation,
}) => {
  const [selectedRecipeId, setSelectedRecipeId] = useState<string>(
    initialRecipeId || recipes[0]?.id || 'pesarattu'
  );

  const selectedRecipe = recipes.find((r) => r.id === selectedRecipeId) || recipes[0];

  return (
    <div className="fixed inset-0 z-50 bg-[#090807]/90 backdrop-blur-md flex items-center justify-center p-4 lg:p-8 overflow-y-auto">
      <div className="bg-[#15130f] border border-amber-900/40 rounded-2xl max-w-6xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl text-[#f4efe6]">
        {/* Header */}
        <div className="p-6 border-b border-amber-900/30 flex items-center justify-between bg-[#191712]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs uppercase tracking-wider text-amber-500 font-semibold flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                Lineage Variation Matrix
              </span>
              <span className="text-neutral-500">·</span>
              <span className="text-xs text-neutral-400">Multiple Authentic Expressions</span>
            </div>
            <h2 className="text-2xl font-display text-white">
              Compare District & Family Variations
            </h2>
            <p className="text-xs text-neutral-400 mt-1 max-w-2xl">
              In Indian culinary history, there is never just "one authentic way". Explore how topography, local spice crops, and family traditions shaped diverse expressions of the same dish.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dish Selector Tabs */}
        <div className="px-6 py-3 border-b border-neutral-800/60 bg-[#12100d] flex items-center gap-2 overflow-x-auto">
          {recipes.map((r) => (
            <button
              key={r.id}
              onClick={() => setSelectedRecipeId(r.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap border ${
                selectedRecipe.id === r.id
                  ? 'bg-amber-600 text-white border-amber-500 shadow-sm'
                  : 'bg-white/5 text-neutral-400 border-white/5 hover:text-white hover:bg-white/10'
              }`}
            >
              {r.name.split(' (')[0]} ({r.variations.length} Versions)
            </button>
          ))}
        </div>

        {/* Cultural Thesis Banner */}
        <div className="px-6 py-3.5 bg-amber-950/20 border-b border-amber-900/30 flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <p className="text-xs text-amber-200/90 leading-relaxed">
            <strong className="text-amber-400 font-semibold">{selectedRecipe.name}:</strong>{' '}
            {selectedRecipe.culturalPhilosophy}
          </p>
        </div>

        {/* Comparative Grid */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedRecipe.variations.map((v: RecipeVariation) => (
              <div
                key={v.id}
                className="rounded-xl bg-[#191712] border border-neutral-800 hover:border-amber-800/50 p-5 flex flex-col justify-between space-y-5 transition-all shadow-lg"
              >
                <div className="space-y-4">
                  {/* Top District Tag & Difficulty */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-mono text-amber-500 uppercase tracking-wider block">
                        {v.regionalLineage.district}
                      </span>
                      <h3 className="text-lg font-display text-white mt-0.5">
                        {v.versionTitle}
                      </h3>
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] font-bold uppercase border ${
                        v.difficulty.level === 'Easy'
                          ? 'text-emerald-400 bg-emerald-950/40 border-emerald-800/60'
                          : v.difficulty.level === 'Medium'
                          ? 'text-amber-400 bg-amber-950/40 border-amber-800/60'
                          : 'text-rose-400 bg-rose-950/40 border-rose-800/60'
                      }`}
                    >
                      {v.difficulty.level}
                    </span>
                  </div>

                  {/* Heritage Story */}
                  <div className="p-3 rounded-lg bg-[#110f0c] border border-neutral-800/80">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400 block mb-1">
                      Heritage & Origin
                    </span>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {v.regionalLineage.heritageContext}
                    </p>
                  </div>

                  {/* Why it Differs callout */}
                  <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-300 block mb-1">
                      Why This Version Differs
                    </span>
                    <p className="text-xs text-amber-100/90 leading-relaxed">
                      {v.whyThisDiffers}
                    </p>
                  </div>

                  {/* Technical Breakdown */}
                  <div className="space-y-2 text-xs border-t border-neutral-800 pt-3">
                    <div className="flex items-center justify-between text-neutral-400">
                      <span>Vessel Used:</span>
                      <span className="text-neutral-200 font-medium">
                        {v.regionalLineage.traditionalVessel}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-neutral-400">
                      <span>Active Prep / Cook:</span>
                      <span className="text-neutral-200 font-mono">
                        {v.difficulty.activeTimeMin} mins
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-neutral-400">
                      <span>Steps Count:</span>
                      <span className="text-neutral-200 font-mono">
                        {v.difficulty.stepsCount} steps
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-neutral-400">
                      <span>Spice Intensity:</span>
                      <span className="text-orange-400 flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 fill-orange-400" />
                        Level {v.spiceLevel}/5
                      </span>
                    </div>
                  </div>

                  {/* Signature Accompaniments */}
                  <div className="pt-2 border-t border-neutral-800">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400 block mb-1.5">
                      Signature Pairings:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {v.servingSuggestions.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-neutral-300 border border-white/5"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Cook This Version CTA */}
                <button
                  onClick={() => {
                    onClose();
                    onSelectVariation(selectedRecipe.id, v.id);
                  }}
                  className="w-full py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>Choose This Version</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-amber-900/30 bg-[#12100d] flex items-center justify-between text-xs text-neutral-400">
          <span>Celebrating the diverse regional lineage of Indian cookery.</span>
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
