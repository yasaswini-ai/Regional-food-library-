import React, { useState, useEffect, useCallback } from 'react';
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
  Loader2,
  Mic,
  MicOff,
  Radio,
  CheckCheck,
  AlertCircle
} from 'lucide-react';
import { Recipe, RecipeVariation } from '../types';
import { playChimeSound } from '../utils/audio';
import { useCookModeVoice } from '../hooks/useCookModeVoice';

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

  const handleCheckAll = useCallback(() => {
    const allChecked: Record<string, boolean> = {};
    variation.ingredients.forEach((ing) => {
      allChecked[ing.id] = true;
    });
    setUsedIngredients(allChecked);
  }, [variation.ingredients]);

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
  const handleReadStep = useCallback(() => {
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
  }, [currentStep, isSpeaking]);

  // Voice Command Handlers
  const handleNextStep = useCallback(() => {
    if (currentStepIndex < variation.steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  }, [currentStepIndex, variation.steps.length]);

  const handlePrevStep = useCallback(() => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  }, [currentStepIndex]);

  const handleVoiceCheckItem = useCallback((targetItemName?: string): string | null => {
    if (targetItemName) {
      const clean = targetItemName.toLowerCase().trim();
      const match = variation.ingredients.find((ing) => {
        const ingName = ing.name.toLowerCase();
        return ingName.includes(clean) || clean.includes(ingName.split(' ')[0]);
      });
      if (match) {
        setUsedIngredients((prev) => ({ ...prev, [match.id]: true }));
        return match.name;
      }
    }

    // Check off the first unchecked item in order
    const nextUnchecked = variation.ingredients.find((ing) => !usedIngredients[ing.id]);
    if (nextUnchecked) {
      setUsedIngredients((prev) => ({ ...prev, [nextUnchecked.id]: true }));
      return nextUnchecked.name;
    }
    return null;
  }, [usedIngredients, variation.ingredients]);

  const handleStartTimer = useCallback(() => {
    if (initialSeconds > 0) {
      setTimerRunning(true);
    }
  }, [initialSeconds]);

  const handlePauseTimer = useCallback(() => {
    setTimerRunning(false);
  }, []);

  const handleResetTimer = useCallback(() => {
    setTimerRunning(false);
    setTimeLeft(initialSeconds);
  }, [initialSeconds]);

  // Web Speech API Hook
  const {
    isListening,
    isSupported: isVoiceSupported,
    transcript: voiceTranscript,
    lastCommand,
    errorMessage: voiceErrorMessage,
    toggleListening: toggleVoice,
  } = useCookModeVoice({
    onNextStep: handleNextStep,
    onPrevStep: handlePrevStep,
    onCheckItem: handleVoiceCheckItem,
    onCheckAll: handleCheckAll,
    onReadStep: handleReadStep,
    onStartTimer: handleStartTimer,
    onPauseTimer: handlePauseTimer,
    onResetTimer: handleResetTimer,
    onExit: onClose,
    isSpeaking,
  });

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
    } catch {
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

        {/* Step Progress Pills & Voice Narration Controls */}
        <div className="flex items-center gap-3">
          {/* Hands-Free Voice Control Toggle */}
          <button
            onClick={toggleVoice}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              isListening
                ? 'bg-emerald-950/70 border-emerald-500 text-emerald-300 shadow-md shadow-emerald-950/50 ring-2 ring-emerald-500/30'
                : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white'
            }`}
            title={
              isVoiceSupported
                ? isListening
                  ? 'Hands-free voice recognition active (Click to pause)'
                  : 'Enable hands-free voice commands ("Next", "Done", "Back")'
                : 'Voice commands not supported in this browser'
            }
          >
            {isListening ? (
              <>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <Mic className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>Listening...</span>
              </>
            ) : (
              <>
                <Mic className="w-3.5 h-3.5 text-neutral-400" />
                <span className="hidden sm:inline">Hands-Free Voice</span>
                <span className="sm:hidden">Voice</span>
              </>
            )}
          </button>

          {/* Text-to-Speech Read Step Button */}
          <button
            onClick={handleReadStep}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              isSpeaking
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 animate-pulse'
                : 'bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10'
            }`}
            title="Read step out loud"
          >
            {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            <span className="hidden sm:inline">{isSpeaking ? 'Pause Voice' : 'Read Step'}</span>
          </button>

          <span className="text-sm font-medium text-amber-400 tabular-nums">
            Step {currentStepIndex + 1} of {variation.steps.length}
          </span>
        </div>
      </div>

      {/* Live Voice Status & Command Feedback Strip */}
      {isListening && (
        <div className="bg-[#101b13] border-b border-emerald-900/50 px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs transition-all">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="w-1 h-3 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="w-1 h-4 bg-emerald-400 rounded-full animate-pulse delay-75"></span>
              <span className="w-1 h-2 bg-emerald-400 rounded-full animate-pulse delay-150"></span>
            </div>

            {lastCommand ? (
              <span className="font-semibold text-emerald-200 bg-emerald-900/60 px-2.5 py-0.5 rounded border border-emerald-700/60 animate-in fade-in">
                {lastCommand}
              </span>
            ) : voiceTranscript ? (
              <span className="text-neutral-300">
                Heard: <em className="text-emerald-300 font-medium">"{voiceTranscript}"</em>
              </span>
            ) : (
              <span className="text-emerald-300/90 font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Hands-free active. Say <strong>"Next"</strong>, <strong>"Done"</strong>, or <strong>"Back"</strong></span>
              </span>
            )}
          </div>

          {/* Voice Command Quick Help Chips */}
          <div className="flex items-center gap-1.5 flex-wrap text-[11px] text-neutral-400">
            <span className="text-neutral-500">Quick commands:</span>
            <span className="px-1.5 py-0.5 rounded bg-black/50 border border-emerald-900/50 text-emerald-300 font-mono">
              "Next"
            </span>
            <span className="px-1.5 py-0.5 rounded bg-black/50 border border-emerald-900/50 text-emerald-300 font-mono">
              "Done"
            </span>
            <span className="px-1.5 py-0.5 rounded bg-black/50 border border-emerald-900/50 text-emerald-300 font-mono">
              "Back"
            </span>
            <span className="px-1.5 py-0.5 rounded bg-black/50 border border-emerald-900/50 text-emerald-300 font-mono">
              "Read Step"
            </span>
            <span className="px-1.5 py-0.5 rounded bg-black/50 border border-emerald-900/50 text-emerald-300 font-mono">
              "Start Timer"
            </span>
          </div>
        </div>
      )}

      {/* Voice Error notice if microphone denied */}
      {voiceErrorMessage && (
        <div className="bg-amber-950/80 border-b border-amber-600/40 px-6 py-2 text-xs text-amber-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{voiceErrorMessage}</span>
          </div>
          <button
            onClick={toggleVoice}
            className="text-amber-300 hover:text-white font-semibold underline text-xs ml-3"
          >
            Retry
          </button>
        </div>
      )}

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
              {isListening && (
                <span className="ml-auto text-[11px] text-emerald-400 font-mono flex items-center gap-1 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                  <Mic className="w-3 h-3 animate-pulse" />
                  <span>Say "Next" to advance</span>
                </span>
              )}
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
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Ingredients Used
              </h3>
              <span className="text-xs text-neutral-400">
                {Object.values(usedIngredients).filter(Boolean).length} / {variation.ingredients.length} prepared
              </span>
            </div>

            <button
              onClick={handleCheckAll}
              className="text-[11px] text-amber-400 hover:text-amber-300 font-medium px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors"
              title="Check all ingredients as prepared"
            >
              Check All
            </button>
          </div>

          <div className="flex items-center justify-between text-xs text-neutral-400">
            <span>Check off items as you add them to the pot:</span>
            {isListening && (
              <span className="text-emerald-400 text-[11px] font-mono shrink-0 font-medium">
                🎤 Say "Done"
              </span>
            )}
          </div>

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
          onClick={handlePrevStep}
          disabled={currentStepIndex === 0}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-700 text-sm font-medium text-neutral-300 hover:bg-white/5 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous Step</span>
        </button>

        {/* Step dots & Voice indicator */}
        <div className="flex items-center gap-3">
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

          <button
            onClick={toggleVoice}
            className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              isListening
                ? 'bg-emerald-950/60 border-emerald-600/70 text-emerald-300'
                : 'bg-white/5 border-neutral-700 text-neutral-400 hover:text-white'
            }`}
            title="Toggle Hands-Free Voice Navigation"
          >
            <Mic className={`w-3.5 h-3.5 ${isListening ? 'text-emerald-400 animate-pulse' : 'text-neutral-500'}`} />
            <span>{isListening ? 'Voice: Listening ("Next" / "Done")' : 'Enable Voice'}</span>
          </button>
        </div>

        {currentStepIndex < variation.steps.length - 1 ? (
          <button
            onClick={handleNextStep}
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold transition-all shadow-md active:scale-95"
          >
            <span>Next Step</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-all shadow-md active:scale-95"
          >
            <Check className="w-4 h-4" />
            <span>Finish Cooking</span>
          </button>
        )}
      </div>
    </div>
  );
};
