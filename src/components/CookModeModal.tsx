import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Check, 
  Sparkles, 
  Clock, 
  ChefHat,
  Send,
  Loader2
} from 'lucide-react';
import { Recipe, RecipeVariation } from '../types';
import { playChimeSound } from '../utils/audio';

interface CookModeModalProps {
  recipe: Recipe;
  variation: RecipeVariation;
  onClose: () => void;
}

export const CookModeModal: React.FC<CookModeModalProps> = ({
  recipe,
  variation,
  onClose,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [usedIngredients, setUsedIngredients] = useState<Record<string, boolean>>({});
  
  // Timer states
  const currentStep = variation.steps[currentStepIndex];
  const initialSeconds = currentStep?.timerSeconds || 0;
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [timerRunning, setTimerRunning] = useState(false);

  // Audio / Speech narration
  const [isSpeaking, setIsSpeaking] = useState(false);

  // AI Chef Q&A states
  const [chefQuestion, setChefQuestion] = useState('');
  const [chefAnswer, setChefAnswer] = useState<string | null>(null);
  const [isAskingChef, setIsAskingChef] = useState(false);

  // Reset timer whenever step changes
  useEffect(() => {
    const secs = currentStep?.timerSeconds || 0;
    setTimeLeft(secs);
    setTimerRunning(false);
    setChefAnswer(null);
    setChefQuestion('');

    // Cancel any ongoing speech synthesis
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [currentStepIndex, currentStep]);

  // Countdown timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setTimerRunning(false);
            playChimeSound();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerRunning, timeLeft]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentStepIndex < variation.steps.length - 1) {
        setCurrentStepIndex((prev) => prev + 1);
      } else if (e.key === 'ArrowLeft' && currentStepIndex > 0) {
        setCurrentStepIndex((prev) => prev - 1);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStepIndex, variation.steps.length, onClose]);

  const toggleIngredient = (id: string) => {
    setUsedIngredients((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (mins >= 60) {
      const hrs = Math.floor(mins / 60);
      const remMins = mins % 60;
      return `${hrs}h ${remMins}m ${secs < 10 ? '0' : ''}${secs}s`;
    }
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Text to speech narration
  const handleReadStep = () => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const textToSpeak = `Step ${currentStep.stepNumber}. ${currentStep.instruction}. ${
      currentStep.techniqueTip ? `Chef tip: ${currentStep.techniqueTip}` : ''
    }`;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 0.95;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  // AI Chef live query
  const handleAskChef = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chefQuestion.trim() || isAskingChef) return;

    setIsAskingChef(true);
    try {
      const res = await fetch('/api/ai/cooking-qa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipeTitle: recipe.name,
          versionTitle: variation.versionTitle,
          currentStep: currentStep.instruction,
          question: chefQuestion,
        }),
      });
      const data = await res.json();
      setChefAnswer(data.answer || 'Keep steady heat and taste as you go.');
    } catch (err: any) {
      setChefAnswer('Keep moderate flame and ensure oil does not smoke too harshly.');
    } finally {
      setIsAskingChef(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#090807]/95 backdrop-blur-md flex flex-col justify-between overflow-hidden text-[#f4efe6]">
      {/* Top Header Bar */}
      <div className="px-6 py-4 border-b border-amber-900/30 flex items-center justify-between bg-[#14120e]">
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
            title="Exit Cook Mode (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-amber-500 font-medium">
                Live Kitchen Mode
              </span>
              <span className="text-neutral-500">·</span>
              <span className="text-xs text-neutral-400">{variation.regionalLineage.district}</span>
            </div>
            <h2 className="text-base font-medium text-white truncate max-w-md">
              {variation.versionTitle}
            </h2>
          </div>
        </div>

        {/* Step Progress Pills & Narration */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleReadStep}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors ${
              isSpeaking
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 animate-pulse'
                : 'bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10'
            }`}
            title="Read step out loud"
          >
            {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            <span>{isSpeaking ? 'Pause Voice' : 'Read Step'}</span>
          </button>

          <span className="text-sm font-medium text-amber-400 tabular-nums">
            Step {currentStepIndex + 1} of {variation.steps.length}
          </span>
        </div>
      </div>

      {/* Main Step Content Area */}
      <div className="flex-1 overflow-y-auto px-6 py-8 max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Big Step Instruction & Timers (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Progress Bar */}
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-amber-500 h-full transition-all duration-300 ease-out"
              style={{
                width: `${((currentStepIndex + 1) / variation.steps.length) * 100}%`,
              }}
            />
          </div>

          {/* Current Step Big Card */}
          <div className="p-8 rounded-xl bg-[#181611] border border-amber-900/30 shadow-2xl relative">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-semibold text-sm">
                {currentStep.stepNumber}
              </span>
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                Active Step
              </span>
            </div>

            <p className="text-2xl lg:text-3xl font-display text-white leading-relaxed tracking-wide">
              {currentStep.instruction}
            </p>

            {/* Technique Tip if available */}
            {currentStep.techniqueTip && (
              <div className="mt-6 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
                <ChefHat className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1">
                    Heritage Technique Note
                  </h4>
                  <p className="text-sm text-amber-100/90 leading-relaxed">
                    {currentStep.techniqueTip}
                  </p>
                </div>
              </div>
            )}

            {/* Integrated Step Timer (if this step has a duration) */}
            {initialSeconds > 0 && (
              <div className="mt-8 p-6 rounded-lg bg-[#110f0b] border border-amber-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-amber-500/20 text-amber-400">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 uppercase font-medium">
                      {currentStep.timerLabel || 'Step Duration'}
                    </span>
                    <div className="text-3xl font-mono tabular-nums font-bold text-amber-300">
                      {formatTimer(timeLeft)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setTimerRunning(!timerRunning)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-md ${
                      timerRunning
                        ? 'bg-amber-600 hover:bg-amber-700 text-white'
                        : 'bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold'
                    }`}
                  >
                    {timerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span>{timerRunning ? 'Pause Timer' : timeLeft === 0 ? 'Restart' : 'Start Timer'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setTimerRunning(false);
                      setTimeLeft(initialSeconds);
                    }}
                    className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
                    title="Reset Timer"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Real-time Chef Assistance Box */}
          <div className="p-5 rounded-xl bg-[#14120e] border border-neutral-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Need quick help on this step?</span>
              </div>
              <span className="text-[11px] text-neutral-500">Ask culinary science & temperature tips</span>
            </div>

            <form onSubmit={handleAskChef} className="flex gap-2">
              <input
                type="text"
                value={chefQuestion}
                onChange={(e) => setChefQuestion(e.target.value)}
                placeholder="e.g. Is my oil too hot? How to prevent sticking? What if it's too runny?"
                className="flex-1 px-4 py-2 text-sm bg-black/40 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
              />
              <button
                type="submit"
                disabled={isAskingChef || !chefQuestion.trim()}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white font-medium text-xs rounded-lg transition-colors flex items-center gap-1.5"
              >
                {isAskingChef ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <span>Ask</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>

            {chefAnswer && (
              <div className="p-3.5 rounded-lg bg-amber-950/40 border border-amber-900/50 text-sm text-amber-200">
                <span className="font-semibold text-amber-400 block text-xs uppercase mb-1">
                  Chef Advice:
                </span>
                {chefAnswer}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Ingredient Checkbox Panel (4 cols) */}
        <div className="lg:col-span-4 p-6 rounded-xl bg-[#16140f] border border-neutral-800 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Ingredients Used
            </h3>
            <span className="text-xs text-neutral-400">
              {Object.values(usedIngredients).filter(Boolean).length} / {variation.ingredients.length} prepared
            </span>
          </div>

          <p className="text-xs text-neutral-400">
            Check off items as you measure and incorporate them into the pan.
          </p>

          <div className="space-y-2 max-h-[420px] overflow-y-auto pr-1">
            {variation.ingredients.map((ing) => {
              const isChecked = !!usedIngredients[ing.id];
              return (
                <button
                  key={ing.id}
                  onClick={() => toggleIngredient(ing.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between gap-3 ${
                    isChecked
                      ? 'bg-amber-950/20 border-amber-900/40 text-neutral-400 line-through'
                      : 'bg-[#1b1913] border-neutral-800 text-neutral-200 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                        isChecked
                          ? 'bg-amber-600 border-amber-500 text-white'
                          : 'border-neutral-600 bg-neutral-900'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <span className="text-xs font-medium">{ing.name}</span>
                  </div>
                  <span className="text-xs font-mono text-neutral-400 shrink-0">
                    {ing.amount} {ing.unit}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Navigation Control Bar */}
      <div className="px-6 py-4 border-t border-amber-900/30 bg-[#14120e] flex items-center justify-between">
        <button
          onClick={() => setCurrentStepIndex((prev) => Math.max(0, prev - 1))}
          disabled={currentStepIndex === 0}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-700 text-sm font-medium text-neutral-300 hover:bg-white/5 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous Step</span>
        </button>

        {/* Step dots */}
        <div className="hidden sm:flex items-center gap-1.5">
          {variation.steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentStepIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === currentStepIndex
                  ? 'bg-amber-500 scale-125'
                  : idx < currentStepIndex
                  ? 'bg-amber-800'
                  : 'bg-neutral-700'
              }`}
              title={`Go to step ${idx + 1}`}
            />
          ))}
        </div>

        {currentStepIndex < variation.steps.length - 1 ? (
          <button
            onClick={() => setCurrentStepIndex((prev) => prev + 1)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold transition-all shadow-md"
          >
            <span>Next Step</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-all shadow-md"
          >
            <Check className="w-4 h-4" />
            <span>Finish Cooking</span>
          </button>
        )}
      </div>
    </div>
  );
};
