import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Plus, 
  Trash2, 
  Printer, 
  ShoppingCart, 
  Play, 
  Sparkles, 
  Clock, 
  Flame, 
  Check, 
  RotateCcw,
  ChevronRight,
  GripVertical,
  Bookmark
} from 'lucide-react';
import { Recipe, RecipeVariation } from '../types';

interface MealPlannerModalProps {
  recipes: Recipe[];
  savedRecipeIds: string[];
  onClose: () => void;
  onSelectRecipeAndCook: (recipeId: string, variationId: string) => void;
}

export interface PlannedMeal {
  recipeId: string;
  variationId: string;
  recipeName: string;
  versionTitle: string;
  heroImage: string;
  calories: number;
  activeTimeMin: number;
  difficulty: string;
}

type MealSlotType = 'breakfast' | 'lunch' | 'dinner';

type WeeklySchedule = Record<string, Record<MealSlotType, PlannedMeal | null>>;

const DAYS_OF_WEEK = [
  { key: 'monday', label: 'Monday', telugu: 'సోమవారం' },
  { key: 'tuesday', label: 'Tuesday', telugu: 'మంగళవారం' },
  { key: 'wednesday', label: 'Wednesday', telugu: 'బుధవారం' },
  { key: 'thursday', label: 'Thursday', telugu: 'గురువారం' },
  { key: 'friday', label: 'Friday', telugu: 'శుక్రవారం' },
  { key: 'saturday', label: 'Saturday', telugu: 'శనివారం' },
  { key: 'sunday', label: 'Sunday', telugu: 'ఆదివారం' },
];

const MEAL_SLOTS: { key: MealSlotType; label: string; time: string }[] = [
  { key: 'breakfast', label: 'Breakfast', time: '07:30 - 09:00' },
  { key: 'lunch', label: 'Lunch', time: '12:30 - 14:00' },
  { key: 'dinner', label: 'Dinner', time: '19:30 - 21:00' },
];

const INITIAL_SCHEDULE: WeeklySchedule = {
  monday: { breakfast: null, lunch: null, dinner: null },
  tuesday: { breakfast: null, lunch: null, dinner: null },
  wednesday: { breakfast: null, lunch: null, dinner: null },
  thursday: { breakfast: null, lunch: null, dinner: null },
  friday: { breakfast: null, lunch: null, dinner: null },
  saturday: { breakfast: null, lunch: null, dinner: null },
  sunday: { breakfast: null, lunch: null, dinner: null },
};

export const MealPlannerModal: React.FC<MealPlannerModalProps> = ({
  recipes,
  savedRecipeIds,
  onClose,
  onSelectRecipeAndCook,
}) => {
  // Load saved schedule from localStorage or set defaults
  const [schedule, setSchedule] = useState<WeeklySchedule>(() => {
    try {
      const stored = localStorage.getItem('flavora_weekly_meal_plan');
      if (stored) return JSON.parse(stored);
    } catch (err) {
      console.warn('Failed to load meal plan from storage:', err);
    }
    // Seed with two authentic default suggestions
    const seed: WeeklySchedule = JSON.parse(JSON.stringify(INITIAL_SCHEDULE));
    const pesarattu = recipes.find((r) => r.id === 'pesarattu');
    const pulihora = recipes.find((r) => r.id === 'pulihora');
    if (pesarattu) {
      seed.monday.breakfast = {
        recipeId: pesarattu.id,
        variationId: pesarattu.variations[0].id,
        recipeName: pesarattu.name.split(' (')[0],
        versionTitle: pesarattu.variations[0].versionTitle,
        heroImage: pesarattu.heroImage,
        calories: pesarattu.variations[0].nutritionFacts.calories,
        activeTimeMin: pesarattu.variations[0].difficulty.activeTimeMin,
        difficulty: pesarattu.variations[0].difficulty.level,
      };
    }
    if (pulihora) {
      seed.wednesday.lunch = {
        recipeId: pulihora.id,
        variationId: pulihora.variations[0].id,
        recipeName: pulihora.name.split(' (')[0],
        versionTitle: pulihora.variations[0].versionTitle,
        heroImage: pulihora.heroImage,
        calories: pulihora.variations[0].nutritionFacts.calories,
        activeTimeMin: pulihora.variations[0].difficulty.activeTimeMin,
        difficulty: pulihora.variations[0].difficulty.level,
      };
    }
    return seed;
  });

  // Source selection: 'saved' or 'all'
  const [sourceTab, setSourceTab] = useState<'saved' | 'all'>('saved');

  // Drag target state
  const [dragOverTarget, setDragOverTarget] = useState<string | null>(null);

  // Active view: 'schedule' or 'groceries'
  const [activeTab, setActiveTab] = useState<'schedule' | 'groceries'>('schedule');

  // Selected slot for modal assignment on mobile / click
  const [quickAssignTarget, setQuickAssignTarget] = useState<{ day: string; slot: MealSlotType } | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('flavora_weekly_meal_plan', JSON.stringify(schedule));
    } catch (err) {
      console.warn('LocalStorage save failed:', err);
    }
  }, [schedule]);

  // Flattened recipe variations for selection
  const savedRecipes = recipes.filter((r) => savedRecipeIds.includes(r.id));
  const availableRecipes = sourceTab === 'saved' && savedRecipes.length > 0 ? savedRecipes : recipes;

  // Drag handlers
  const handleDragStart = (
    e: React.DragEvent,
    recipe: Recipe,
    variation: RecipeVariation
  ) => {
    const payload: PlannedMeal = {
      recipeId: recipe.id,
      variationId: variation.id,
      recipeName: recipe.name.split(' (')[0],
      versionTitle: variation.versionTitle,
      heroImage: recipe.heroImage,
      calories: variation.nutritionFacts.calories,
      activeTimeMin: variation.difficulty.activeTimeMin,
      difficulty: variation.difficulty.level,
    };
    e.dataTransfer.setData('application/json', JSON.stringify(payload));
    e.dataTransfer.effectAllowed = 'copyMove';
  };

  const handleDragOver = (e: React.DragEvent, dayKey: string, slotKey: MealSlotType) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    setDragOverTarget(`${dayKey}-${slotKey}`);
  };

  const handleDragLeave = () => {
    setDragOverTarget(null);
  };

  const handleDrop = (e: React.DragEvent, dayKey: string, slotKey: MealSlotType) => {
    e.preventDefault();
    setDragOverTarget(null);
    try {
      const dataStr = e.dataTransfer.getData('application/json');
      if (!dataStr) return;
      const meal: PlannedMeal = JSON.parse(dataStr);

      setSchedule((prev) => ({
        ...prev,
        [dayKey]: {
          ...prev[dayKey],
          [slotKey]: meal,
        },
      }));
    } catch (err) {
      console.error('Drop error:', err);
    }
  };

  const assignMeal = (dayKey: string, slotKey: MealSlotType, recipe: Recipe, variation: RecipeVariation) => {
    const meal: PlannedMeal = {
      recipeId: recipe.id,
      variationId: variation.id,
      recipeName: recipe.name.split(' (')[0],
      versionTitle: variation.versionTitle,
      heroImage: recipe.heroImage,
      calories: variation.nutritionFacts.calories,
      activeTimeMin: variation.difficulty.activeTimeMin,
      difficulty: variation.difficulty.level,
    };
    setSchedule((prev) => ({
      ...prev,
      [dayKey]: {
        ...prev[dayKey],
        [slotKey]: meal,
      },
    }));
    setQuickAssignTarget(null);
  };

  const removeMeal = (dayKey: string, slotKey: MealSlotType) => {
    setSchedule((prev) => ({
      ...prev,
      [dayKey]: {
        ...prev[dayKey],
        [slotKey]: null,
      },
    }));
  };

  const clearSchedule = () => {
    if (window.confirm('Reset all planned meals for this week?')) {
      setSchedule(JSON.parse(JSON.stringify(INITIAL_SCHEDULE)));
    }
  };

  // Calculate planned stats
  const totalPlannedMeals = Object.values(schedule).reduce((acc, day) => {
    return acc + (day.breakfast ? 1 : 0) + (day.lunch ? 1 : 0) + (day.dinner ? 1 : 0);
  }, 0);

  const totalWeeklyCalories = Object.values(schedule).reduce((acc, day) => {
    return (
      acc +
      (day.breakfast?.calories || 0) +
      (day.lunch?.calories || 0) +
      (day.dinner?.calories || 0)
    );
  }, 0);

  // Generate aggregate grocery list
  const aggregateGroceryList = () => {
    const ingredientMap: Record<string, { amount: number; unit: string; name: string }> = {};

    Object.values(schedule).forEach((day) => {
      (['breakfast', 'lunch', 'dinner'] as MealSlotType[]).forEach((slot) => {
        const item = day[slot];
        if (!item) return;
        const recipe = recipes.find((r) => r.id === item.recipeId);
        const variation = recipe?.variations.find((v) => v.id === item.variationId);
        if (!variation) return;

        variation.ingredients.forEach((ing) => {
          const key = ing.name.toLowerCase().trim();
          if (!ingredientMap[key]) {
            ingredientMap[key] = {
              name: ing.name,
              amount: ing.amount,
              unit: ing.unit,
            };
          } else {
            ingredientMap[key].amount += ing.amount;
          }
        });
      });
    });

    return Object.values(ingredientMap);
  };

  const groceryList = aggregateGroceryList();

  return (
    <div className="fixed inset-0 z-50 bg-[#090807]/95 backdrop-blur-md flex items-center justify-center p-3 lg:p-6 overflow-hidden text-[#f4efe6]">
      <div className="bg-[#15130f] border border-amber-900/40 rounded-2xl max-w-7xl w-full h-[94vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Top Header Bar */}
        <div className="p-5 border-b border-amber-900/30 flex items-center justify-between bg-[#191712]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-xs uppercase tracking-wider text-amber-500 font-semibold">
                  Flavora Culinary Planner
                </span>
                <span className="text-neutral-500">·</span>
                <span className="text-xs text-neutral-400">Weekly Lineage Schedule</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-display text-white">
                Weekly Meal Planner & Schedule
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* View switcher: Schedule vs Grocery List */}
            <div className="flex items-center gap-1 p-1 bg-black/40 rounded-lg border border-neutral-800">
              <button
                onClick={() => setActiveTab('schedule')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  activeTab === 'schedule'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Weekly Schedule ({totalPlannedMeals})
              </button>
              <button
                onClick={() => setActiveTab('groceries')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 ${
                  activeTab === 'groceries'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <ShoppingCart className="w-3.5 h-3.5 text-amber-400" />
                <span>Grocery List ({groceryList.length})</span>
              </button>
            </div>

            <button
              onClick={() => window.print()}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
              title="Print Weekly Meal Plan"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sub-strip with Stats & Actions */}
        <div className="px-6 py-2.5 bg-[#12100d] border-b border-neutral-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-6">
            <span>
              Planned Meals: <strong className="text-amber-400 font-mono">{totalPlannedMeals} / 21</strong> slots
            </span>
            <span>
              Estimated Weekly Energy: <strong className="text-white font-mono">{totalWeeklyCalories.toLocaleString()}</strong> kcal
            </span>
            <span className="hidden sm:inline text-neutral-500">
              Drag recipes from the right drawer into any day slot, or click "+" on any slot.
            </span>
          </div>

          <button
            onClick={clearSchedule}
            className="text-neutral-400 hover:text-rose-400 transition-colors flex items-center gap-1 text-xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Week</span>
          </button>
        </div>

        {/* Main Content: Split Schedule vs Recipe Drawer */}
        <div className="flex-1 overflow-hidden flex flex-col lg:flex-row">
          {activeTab === 'schedule' ? (
            <>
              {/* Left: 7-Day Schedule Grid (Scrollable) */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7 gap-4">
                  {DAYS_OF_WEEK.map((day) => (
                    <div
                      key={day.key}
                      className="p-3.5 rounded-xl bg-[#191712] border border-neutral-800/80 flex flex-col space-y-3"
                    >
                      {/* Day Header */}
                      <div className="pb-2 border-b border-neutral-800 flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-display font-semibold text-white">
                            {day.label}
                          </h4>
                          <span className="text-[10px] text-amber-500/80 font-serif">
                            {day.telugu}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-neutral-400">
                          {[schedule[day.key].breakfast, schedule[day.key].lunch, schedule[day.key].dinner].filter(Boolean).length}/3
                        </span>
                      </div>

                      {/* 3 Meal Slots: Breakfast, Lunch, Dinner */}
                      <div className="space-y-2.5 flex-1 flex flex-col justify-between">
                        {MEAL_SLOTS.map((slot) => {
                          const meal = schedule[day.key][slot.key];
                          const targetKey = `${day.key}-${slot.key}`;
                          const isDragOver = dragOverTarget === targetKey;

                          return (
                            <div
                              key={slot.key}
                              onDragOver={(e) => handleDragOver(e, day.key, slot.key)}
                              onDragLeave={handleDragLeave}
                              onDrop={(e) => handleDrop(e, day.key, slot.key)}
                              className={`rounded-lg p-2.5 border transition-all min-h-[92px] flex flex-col justify-between ${
                                isDragOver
                                  ? 'border-amber-400 bg-amber-500/10 shadow-md ring-2 ring-amber-500/30'
                                  : meal
                                  ? 'bg-[#1e1b15] border-amber-900/40 hover:border-amber-800'
                                  : 'bg-black/30 border-dashed border-neutral-800 hover:border-neutral-700'
                              }`}
                            >
                              <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-1">
                                <span className="font-semibold uppercase tracking-wider text-amber-500/90 text-[10px]">
                                  {slot.label}
                                </span>
                                {meal && (
                                  <button
                                    onClick={() => removeMeal(day.key, slot.key)}
                                    className="text-neutral-500 hover:text-rose-400 transition-colors p-0.5"
                                    title="Remove from slot"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </button>
                                )}
                              </div>

                              {meal ? (
                                <div className="space-y-1">
                                  <div className="flex items-start gap-2">
                                    <img
                                      src={meal.heroImage}
                                      alt={meal.recipeName}
                                      className="w-10 h-10 rounded object-cover shrink-0 border border-neutral-700"
                                    />
                                    <div className="min-w-0 flex-1">
                                      <h5 className="text-xs font-semibold text-white truncate leading-tight">
                                        {meal.recipeName}
                                      </h5>
                                      <span className="text-[10px] text-neutral-400 line-clamp-1 block">
                                        {meal.versionTitle.split(' (')[0]}
                                      </span>
                                    </div>
                                  </div>

                                  <div className="pt-1 flex items-center justify-between text-[10px] text-neutral-400 font-mono">
                                    <span>{meal.calories} kcal</span>
                                    <button
                                      onClick={() => {
                                        onClose();
                                        onSelectRecipeAndCook(meal.recipeId, meal.variationId);
                                      }}
                                      className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-0.5"
                                      title="Launch in Cook Mode"
                                    >
                                      <span>Cook</span>
                                      <Play className="w-2.5 h-2.5 fill-amber-400" />
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                <div
                                  onClick={() => setQuickAssignTarget({ day: day.key, slot: slot.key })}
                                  className="flex-1 flex flex-col items-center justify-center text-center cursor-pointer group py-2"
                                >
                                  <div className="p-1 rounded bg-white/5 group-hover:bg-amber-500/20 text-neutral-500 group-hover:text-amber-400 transition-colors">
                                    <Plus className="w-3.5 h-3.5" />
                                  </div>
                                  <span className="text-[10px] text-neutral-500 group-hover:text-neutral-300 mt-1">
                                    Drop or Tap
                                  </span>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Drawer: Saved Cookbook & Recipes to Drag */}
              <div className="w-full lg:w-88 border-t lg:border-t-0 lg:border-l border-amber-900/30 bg-[#16140f] p-4 flex flex-col">
                <div className="pb-3 border-b border-neutral-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                      Recipe Pantry
                    </h3>
                    <span className="text-[11px] text-neutral-400">
                      Drag to assign
                    </span>
                  </div>

                  {/* Tabs: Saved Cookbook vs All Recipes */}
                  <div className="flex items-center gap-1 p-1 bg-black/40 rounded-lg border border-neutral-800">
                    <button
                      onClick={() => setSourceTab('saved')}
                      className={`flex-1 py-1 text-xs font-medium rounded transition-colors flex items-center justify-center gap-1 ${
                        sourceTab === 'saved'
                          ? 'bg-amber-600 text-white'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      <Bookmark className="w-3 h-3 text-amber-400" />
                      <span>Saved ({savedRecipes.length})</span>
                    </button>
                    <button
                      onClick={() => setSourceTab('all')}
                      className={`flex-1 py-1 text-xs font-medium rounded transition-colors ${
                        sourceTab === 'all'
                          ? 'bg-amber-600 text-white'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      All Archive ({recipes.length})
                    </button>
                  </div>
                </div>

                {/* Draggable Recipe Variations List */}
                <div className="flex-1 overflow-y-auto space-y-2.5 pt-3 pr-1">
                  {availableRecipes.map((recipe) => (
                    <div key={recipe.id} className="space-y-1.5">
                      <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider px-1">
                        {recipe.name.split(' (')[0]}
                      </span>

                      {recipe.variations.map((v) => (
                        <div
                          key={v.id}
                          draggable
                          onDragStart={(e) => handleDragStart(e, recipe, v)}
                          onClick={() => {
                            if (quickAssignTarget) {
                              assignMeal(quickAssignTarget.day, quickAssignTarget.slot, recipe, v);
                            }
                          }}
                          className={`p-2.5 rounded-lg border bg-[#1b1913] hover:bg-[#201d16] border-neutral-800 hover:border-amber-700/60 transition-all cursor-grab active:cursor-grabbing flex items-center justify-between gap-2.5 shadow-sm group ${
                            quickAssignTarget ? 'ring-1 ring-amber-400 animate-pulse cursor-pointer' : ''
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <GripVertical className="w-3.5 h-3.5 text-neutral-600 group-hover:text-amber-400 shrink-0" />
                            <img
                              src={recipe.heroImage}
                              alt={v.versionTitle}
                              className="w-9 h-9 rounded object-cover shrink-0 border border-neutral-700"
                            />
                            <div className="min-w-0">
                              <h5 className="text-xs font-semibold text-neutral-200 group-hover:text-white truncate">
                                {v.versionTitle.split(' (')[0]}
                              </h5>
                              <span className="text-[10px] text-neutral-400 block truncate">
                                {v.regionalLineage.district} · {v.nutritionFacts.calories} kcal
                              </span>
                            </div>
                          </div>

                          <span
                            className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase shrink-0 ${
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
                      ))}
                    </div>
                  ))}
                </div>

                {quickAssignTarget && (
                  <div className="mt-3 p-2 rounded-lg bg-amber-950/40 border border-amber-800 text-xs text-amber-300 flex items-center justify-between">
                    <span>
                      Select dish for <strong>{quickAssignTarget.day} {quickAssignTarget.slot}</strong>
                    </span>
                    <button
                      onClick={() => setQuickAssignTarget(null)}
                      className="text-neutral-400 hover:text-white"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            /* Tab 2: Automated Aggregate Weekly Grocery Shopping List */
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <div>
                  <h3 className="text-lg font-display text-white">
                    Aggregated Weekly Grocery Shopping List
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Calculated automatically from all ingredients required for your {totalPlannedMeals} scheduled meals this week.
                  </p>
                </div>

                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Shopping List</span>
                </button>
              </div>

              {groceryList.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <ShoppingCart className="w-12 h-12 text-neutral-600 mx-auto" />
                  <p className="text-sm text-neutral-400">
                    No meals scheduled yet. Drag recipes into the weekly schedule to generate your grocery list!
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {groceryList.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-[#191712] border border-neutral-800 flex items-center justify-between gap-2"
                    >
                      <span className="text-xs font-medium text-neutral-200 truncate">
                        {item.name}
                      </span>
                      <span className="text-xs font-mono font-semibold text-amber-300 shrink-0">
                        {Number(item.amount.toFixed(2))} {item.unit}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-amber-900/30 bg-[#12100d] flex items-center justify-between text-xs text-neutral-400">
          <span>
            {totalPlannedMeals} meals scheduled this week. Drag to reorder anytime.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs rounded-lg transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
