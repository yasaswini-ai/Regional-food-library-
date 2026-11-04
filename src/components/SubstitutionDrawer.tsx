import React, { useState } from 'react';
import { X, Sparkles, AlertCircle, CheckCircle2, Leaf, Milk, Wheat, Send, Loader2 } from 'lucide-react';
import { RecipeVariation } from '../types';

interface SubstitutionDrawerProps {
  variation: RecipeVariation;
  recipeName: string;
  onClose: () => void;
}

interface AISubItem {
  substitute: string;
  ratio: string;
  culinaryEffect: string;
  techniqueAdjustment: string;
  authenticityNote: string;
}

export const SubstitutionDrawer: React.FC<SubstitutionDrawerProps> = ({
  variation,
  recipeName,
  onClose,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'dairy' | 'gluten' | 'vegetable' | 'souring'>('all');
  
  // Custom AI Substitution Request
  const [customIngredient, setCustomIngredient] = useState('');
  const [customReason, setCustomReason] = useState('');
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [aiResult, setAiResult] = useState<{ substitutions: AISubItem[]; expertVerdict: string } | null>(null);

  const filteredSubs = activeFilter === 'all'
    ? variation.substitutions
    : variation.substitutions.filter((s) => s.category === activeFilter);

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customIngredient.trim() || isLoadingAI) return;

    setIsLoadingAI(true);
    try {
      const res = await fetch('/api/ai/substitute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dishName: recipeName,
          versionTitle: variation.versionTitle,
          ingredient: customIngredient,
          reason: customReason || 'Dietary / Vegan / Local pantry shortage',
        }),
      });
      const data = await res.json();
      setAiResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoadingAI(false);
    }
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'dairy':
        return <Milk className="w-4 h-4 text-sky-400" />;
      case 'gluten':
        return <Wheat className="w-4 h-4 text-amber-400" />;
      default:
        return <Leaf className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#090807]/90 backdrop-blur-md flex items-center justify-center p-4 lg:p-8 overflow-y-auto">
      <div className="bg-[#15130f] border border-amber-900/40 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl text-[#f4efe6]">
        {/* Header */}
        <div className="p-6 border-b border-amber-900/30 flex items-center justify-between bg-[#191712]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs uppercase tracking-wider text-amber-500 font-semibold">
                Authentic Substitution Guide
              </span>
              <span className="text-neutral-500">·</span>
              <span className="text-xs text-neutral-400">Preserving Regional Soul & Chemistry</span>
            </div>
            <h2 className="text-2xl font-display text-white">
              Ingredient Alternatives for {variation.versionTitle}
            </h2>
            <p className="text-xs text-neutral-400 mt-1 max-w-2xl">
              Carefully engineered substitutions that maintain the dish's essential flavor profile, moisture dynamics, and crispness without compromising regional heritage.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Bar */}
        <div className="px-6 py-3 border-b border-neutral-800/60 bg-[#12100d] flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: 'All Verified Substitutions' },
            { id: 'dairy', label: 'Dairy-Free & Vegan' },
            { id: 'gluten', label: 'Gluten-Free' },
            { id: 'vegetable', label: 'Vegetables & Proteins' },
            { id: 'souring', label: 'Souring Agents' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors border ${
                activeFilter === tab.id
                  ? 'bg-amber-600 text-white border-amber-500 shadow-sm'
                  : 'bg-white/5 text-neutral-400 border-white/5 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Verified Recipe-Specific Substitutions List */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
              Verified Lineage Substitutions ({filteredSubs.length})
            </h3>

            {filteredSubs.map((sub, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#191712] border border-neutral-800 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-neutral-800">
                  <div className="flex items-center gap-2.5">
                    <span className="p-1.5 rounded-md bg-white/5">
                      {getCategoryIcon(sub.category)}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                      Replace:
                    </span>
                    <span className="text-sm font-semibold text-rose-300">
                      {sub.original}
                    </span>
                    <span className="text-neutral-500">→</span>
                    <span className="text-sm font-bold text-emerald-400">
                      {sub.substitute}
                    </span>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    Ratio: {sub.ratio}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      Culinary & Texture Effect
                    </span>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {sub.culinaryEffect}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Authenticity & Heritage Context
                    </span>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {sub.authenticityNote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Ask Gemini AI for Custom Substitution Advice */}
          <div className="p-6 rounded-xl bg-[#14120e] border border-amber-900/30 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-semibold text-white">
                  Ask Culinary Scientist for Custom Substitution
                </h3>
              </div>
              <span className="text-xs text-neutral-400">Powered by Gemini AI</span>
            </div>

            <p className="text-xs text-neutral-400">
              Need to substitute an ingredient not listed above? Specify your dietary constraint (e.g. Jain without onion/garlic, nut allergy, missing tamarind in the US or Europe).
            </p>

            <form onSubmit={handleAskAI} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={customIngredient}
                  onChange={(e) => setCustomIngredient(e.target.value)}
                  placeholder="Ingredient (e.g., Asafoetida, Tamarind, Ghee)"
                  className="px-4 py-2 text-xs bg-black/40 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                />
                <input
                  type="text"
                  value={customReason}
                  onChange={(e) => setCustomReason(e.target.value)}
                  placeholder="Reason (e.g., Celiac gluten-free, vegan, pantry empty)"
                  className="px-4 py-2 text-xs bg-black/40 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                disabled={isLoadingAI || !customIngredient.trim()}
                className="w-full py-2.5 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white font-medium text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {isLoadingAI ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Analyzing culinary chemistry...</span>
                  </>
                ) : (
                  <>
                    <span>Generate Authentic Substitution</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>

            {/* AI Generated Result */}
            {aiResult && (
              <div className="mt-4 p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 space-y-3 animate-fadeIn">
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
                  Expert Recommendation:
                </span>
                <p className="text-xs text-neutral-300 italic mb-3">
                  "{aiResult.expertVerdict}"
                </p>

                <div className="space-y-3">
                  {aiResult.substitutions?.map((item, i) => (
                    <div key={i} className="p-3 rounded-lg bg-black/40 border border-neutral-800 text-xs space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-amber-300 text-sm">{item.substitute}</span>
                        <span className="font-mono text-neutral-400">Ratio: {item.ratio}</span>
                      </div>
                      <p className="text-neutral-300">
                        <strong className="text-neutral-400">Effect:</strong> {item.culinaryEffect}
                      </p>
                      <p className="text-neutral-300">
                        <strong className="text-neutral-400">Technique:</strong> {item.techniqueAdjustment}
                      </p>
                      <p className="text-neutral-400 text-[11px]">
                        <strong>Heritage Note:</strong> {item.authenticityNote}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-amber-900/30 bg-[#12100d] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
