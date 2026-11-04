import React, { useState } from 'react';
import { X, Sparkles, Check, Plus, Loader2, ArrowRight } from 'lucide-react';
import { Recipe } from '../types';

interface PantryScannerModalProps {
  recipes: Recipe[];
  onClose: () => void;
  onSelectVariation: (recipeId: string, variationId: string) => void;
}

const COMMON_PANTRY_STAPLES = [
  'Whole Green Moong',
  'Raw Rice',
  'Tamarind (Chintapandu)',
  'Peanuts',
  'Toor Dal',
  'Tomatoes',
  'Ginger',
  'Green Chillies',
  'Mustard Seeds',
  'Cumin Seeds',
  'Basmati Rice',
  'Desi Ghee',
  'Garlic',
  'Curry Leaves',
  'Semolina (Rava)',
  'Lemons / Limes',
  'Black Urad Dal',
  'Cashews',
];

export const PantryScannerModal: React.FC<PantryScannerModalProps> = ({
  recipes,
  onClose,
  onSelectVariation,
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([
    'Whole Green Moong',
    'Ginger',
    'Green Chillies',
  ]);
  const [customItem, setCustomItem] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<any | null>(null);

  const toggleItem = (item: string) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (customItem.trim() && !selectedItems.includes(customItem.trim())) {
      setSelectedItems((prev) => [...prev, customItem.trim()]);
      setCustomItem('');
    }
  };

  const handleScanWithAI = async () => {
    if (selectedItems.length === 0 || isAnalyzing) return;
    setIsAnalyzing(true);
    try {
      const res = await fetch('/api/ai/scanner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ingredients: selectedItems }),
      });
      const data = await res.json();
      setAiSuggestions(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#090807]/90 backdrop-blur-md flex items-center justify-center p-4 lg:p-8 overflow-y-auto">
      <div className="bg-[#15130f] border border-amber-900/40 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl text-[#f4efe6]">
        {/* Header */}
        <div className="p-6 border-b border-amber-900/30 flex items-center justify-between bg-[#191712]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs uppercase tracking-wider text-amber-500 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Phase 5 AI Pantry Scanner
              </span>
              <span className="text-neutral-500">·</span>
              <span className="text-xs text-neutral-400">Zero-Waste Culinary Matching</span>
            </div>
            <h2 className="text-2xl font-display text-white">
              What Ingredients Do You Have Today?
            </h2>
            <p className="text-xs text-neutral-400 mt-1 max-w-2xl">
              Select staples from your pantry or enter your own ingredients. We'll match them against authentic regional Indian dishes and identify the exact family or district version you can cook!
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Quick Staple Tags */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
              Select Common Staples Available in Your Kitchen:
            </h3>
            <div className="flex flex-wrap gap-2">
              {COMMON_PANTRY_STAPLES.map((staple) => {
                const isSelected = selectedItems.includes(staple);
                return (
                  <button
                    key={staple}
                    onClick={() => toggleItem(staple)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-amber-600 text-white border-amber-500 shadow-sm'
                        : 'bg-white/5 text-neutral-300 border-white/5 hover:bg-white/10'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                    <span>{staple}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Add custom item form */}
          <form onSubmit={handleAddCustom} className="flex gap-2">
            <input
              type="text"
              value={customItem}
              onChange={(e) => setCustomItem(e.target.value)}
              placeholder="Type other ingredient (e.g., Gongura leaves, Shallots, Paneer, Fenugreek)..."
              className="flex-1 px-4 py-2 text-xs bg-black/40 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium rounded-lg transition-colors flex items-center gap-1"
            >
              <Plus className="w-4 h-4" />
              <span>Add</span>
            </button>
          </form>

          {/* Scan Action Button */}
          <button
            onClick={handleScanWithAI}
            disabled={selectedItems.length === 0 || isAnalyzing}
            className="w-full py-3 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white font-semibold text-sm rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Scanning regional Indian culinary database...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>
                  Match Regional Recipes with {selectedItems.length} Selected Ingredients
                </span>
              </>
            )}
          </button>

          {/* AI Result Cards */}
          {aiSuggestions && (
            <div className="space-y-4 pt-4 border-t border-neutral-800 animate-fadeIn">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">
                  Best Matching Regional Versions
                </h3>
                {aiSuggestions.creativeTip && (
                  <span className="text-xs text-amber-400 italic">
                    "{aiSuggestions.creativeTip}"
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {aiSuggestions.suggestedRecipes?.map((item: any, idx: number) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#191712] border border-amber-900/30 space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[11px] font-mono text-amber-500 uppercase tracking-wider block">
                          {item.version}
                        </span>
                        <h4 className="text-base font-display text-white mt-0.5">
                          {item.dish}
                        </h4>
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
                        {item.matchPercentage}% Match
                      </span>
                    </div>

                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {item.quickPreparationPitch}
                    </p>

                    <div className="text-[11px] space-y-1">
                      <p className="text-emerald-400">
                        <strong>In your pantry:</strong> {item.usableIngredients?.join(', ')}
                      </p>
                      {item.missingStaples?.length > 0 && (
                        <p className="text-neutral-400">
                          <strong>Missing staples:</strong> {item.missingStaples?.join(', ')}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Instant Local Matches */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
              Verified Recipes In This Archive
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {recipes.map((r) => (
                <div
                  key={r.id}
                  className="p-3.5 rounded-lg bg-[#191712] border border-neutral-800 flex items-center justify-between gap-3"
                >
                  <div>
                    <span className="text-xs font-semibold text-white block">
                      {r.name.split(' (')[0]}
                    </span>
                    <span className="text-[11px] text-neutral-400">
                      {r.variations.length} regional versions
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectVariation(r.id, r.variations[0].id);
                    }}
                    className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-amber-400 text-xs font-medium rounded-md transition-colors flex items-center gap-1"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-amber-900/30 bg-[#12100d] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white/5 hover:bg-white/10 text-neutral-300 text-xs rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
