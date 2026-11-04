import React from 'react';
import { X, Bookmark, Play, Trash2, ArrowRight } from 'lucide-react';
import { Recipe } from '../types';

interface SavedCookbookModalProps {
  recipes: Recipe[];
  savedRecipeIds: string[];
  onToggleBookmark: (recipeId: string) => void;
  onSelectRecipe: (recipeId: string) => void;
  onClose: () => void;
}

export const SavedCookbookModal: React.FC<SavedCookbookModalProps> = ({
  recipes,
  savedRecipeIds,
  onToggleBookmark,
  onSelectRecipe,
  onClose,
}) => {
  const savedRecipes = recipes.filter((r) => savedRecipeIds.includes(r.id));

  return (
    <div className="fixed inset-0 z-50 bg-[#090807]/90 backdrop-blur-md flex items-center justify-center p-4 lg:p-8 overflow-y-auto">
      <div className="bg-[#15130f] border border-amber-900/40 rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl text-[#f4efe6]">
        {/* Header */}
        <div className="p-6 border-b border-amber-900/30 flex items-center justify-between bg-[#191712]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
              <Bookmark className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-display text-white">
                My Offline Heritage Cookbook
              </h2>
              <p className="text-xs text-neutral-400">
                {savedRecipes.length} recipes saved for offline kitchen reference
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {savedRecipes.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <Bookmark className="w-10 h-10 text-neutral-600 mx-auto stroke-[1.5]" />
              <p className="text-sm text-neutral-400">
                You haven't bookmarked any recipes yet.
              </p>
              <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                Click the bookmark ribbon on any recipe card to save it here for instant kitchen access.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {savedRecipes.map((r) => (
                <div
                  key={r.id}
                  className="p-4 rounded-xl bg-[#191712] border border-neutral-800 flex items-center justify-between gap-4 hover:border-amber-900/40 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={r.heroImage}
                      alt={r.name}
                      className="w-16 h-16 rounded-lg object-cover shrink-0 border border-neutral-800"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {r.name}
                      </h4>
                      <p className="text-xs text-neutral-400 line-clamp-1">
                        {r.variations.length} district variations available
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectRecipe(r.id);
                      }}
                      className="px-3.5 py-1.5 bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1"
                    >
                      <span>Open</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onToggleBookmark(r.id)}
                      className="p-2 text-neutral-500 hover:text-rose-400 transition-colors"
                      title="Remove from Saved"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
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
