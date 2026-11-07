import { useState, useEffect, useRef, useCallback } from 'react';
import { playChimeSound } from '../utils/audio';

interface SpeechRecognitionResult {
  [index: number]: {
    transcript: string;
    confidence: number;
  };
  isFinal: boolean;
  length: number;
}

interface SpeechRecognitionResultList {
  [index: number]: SpeechRecognitionResult;
  length: number;
}

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
  message?: string;
}

interface ISpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onstart: (() => void) | null;
  onend: (() => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
}

type SpeechRecognitionConstructor = new () => ISpeechRecognition;

interface UseCookModeVoiceOptions {
  onNextStep: () => void;
  onPrevStep: () => void;
  onCheckItem: (targetItemName?: string) => string | null | void;
  onCheckAll: () => void;
  onReadStep: () => void;
  onStartTimer: () => void;
  onPauseTimer: () => void;
  onResetTimer: () => void;
  onExit: () => void;
  isSpeaking: boolean;
}

export function useCookModeVoice({
  onNextStep,
  onPrevStep,
  onCheckItem,
  onCheckAll,
  onReadStep,
  onStartTimer,
  onPauseTimer,
  onResetTimer,
  onExit,
  isSpeaking,
}: UseCookModeVoiceOptions) {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [lastCommand, setLastCommand] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const recognitionRef = useRef<ISpeechRecognition | null>(null);
  const shouldListenRef = useRef(false);
  const commandTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Check Web Speech API availability
  useEffect(() => {
    const SpeechClass =
      (window as unknown as { SpeechRecognition?: SpeechRecognitionConstructor }).SpeechRecognition ||
      (window as unknown as { webkitSpeechRecognition?: SpeechRecognitionConstructor }).webkitSpeechRecognition;

    setIsSupported(!!SpeechClass);
  }, []);

  // Clear last command banner after 3.5 seconds
  const showFeedback = useCallback((commandDesc: string) => {
    setLastCommand(commandDesc);
    if (commandTimeoutRef.current) {
      clearTimeout(commandTimeoutRef.current);
    }
    commandTimeoutRef.current = setTimeout(() => {
      setLastCommand(null);
    }, 3500);
  }, []);

  // Process voice command strings
  const processCommand = useCallback(
    (rawTranscript: string) => {
      // Avoid triggering commands if speech synthesis is currently speaking
      if (isSpeaking) return;

      const text = rawTranscript.toLowerCase().trim();
      if (!text) return;

      setTranscript(text);

      // 1. Next step commands
      if (
        text.includes('next') ||
        text.includes('forward') ||
        text.includes('continue') ||
        text.includes('proceed') ||
        text.includes('agla') ||
        text.includes('tarvata') ||
        text.includes('aduthu')
      ) {
        onNextStep();
        playChimeSound();
        showFeedback('Command: Next Step ➔');
        return;
      }

      // 2. Previous step commands
      if (
        text.includes('previous') ||
        text.includes('prev') ||
        text.includes('back') ||
        text.includes('go back') ||
        text.includes('piche') ||
        text.includes('venakki') ||
        text.includes('pinnaadi')
      ) {
        onPrevStep();
        playChimeSound();
        showFeedback('Command: ⬅ Previous Step');
        return;
      }

      // 3. Check all ingredients
      if (
        text.includes('check all') ||
        text.includes('all done') ||
        text.includes('all checked') ||
        text.includes('mark all')
      ) {
        onCheckAll();
        playChimeSound();
        showFeedback('Command: Checked all ingredients ✓✓');
        return;
      }

      // 4. Done / Check off specific or next ingredient
      if (
        text.includes('done') ||
        text.includes('check') ||
        text.includes('finished') ||
        text.includes('mark') ||
        text.includes('got it') ||
        text.includes('ho gaya') ||
        text.includes('aipoindi') ||
        text.includes('mudinjathu')
      ) {
        // Extract possible ingredient mention (e.g., "check salt", "done onions")
        let itemMention = text
          .replace(/^(hey|chef|please|ok|okay)\s+/g, '')
          .replace(/^(done with|done|check off|check|mark|finished)\s+/g, '')
          .trim();

        if (itemMention === 'off' || itemMention === 'item' || itemMention === 'it') {
          itemMention = '';
        }

        const checkedName = onCheckItem(itemMention || undefined);
        playChimeSound();
        if (checkedName) {
          showFeedback(`Checked off: ${checkedName} ✓`);
        } else {
          showFeedback('Checked off next ingredient ✓');
        }
        return;
      }

      // 5. Read step aloud
      if (
        text.includes('read') ||
        text.includes('speak') ||
        text.includes('repeat') ||
        text.includes('listen') ||
        text.includes('sunao') ||
        text.includes('cheppu') ||
        text.includes('solla')
      ) {
        onReadStep();
        showFeedback('Reading step out loud 🔊');
        return;
      }

      // 6. Timer controls
      if (text.includes('reset timer') || text.includes('restart timer')) {
        onResetTimer();
        playChimeSound();
        showFeedback('Timer Reset ↺');
        return;
      }

      if (
        text.includes('pause timer') ||
        text.includes('stop timer') ||
        text.includes('freeze timer') ||
        (text.includes('pause') && text.includes('timer'))
      ) {
        onPauseTimer();
        playChimeSound();
        showFeedback('Timer Paused ⏸');
        return;
      }

      if (
        text.includes('start timer') ||
        text.includes('begin timer') ||
        (text.includes('start') && text.includes('timer')) ||
        text === 'timer'
      ) {
        onStartTimer();
        playChimeSound();
        showFeedback('Timer Started ▶');
        return;
      }

      // 7. Exit Cook Mode
      if (
        text.includes('exit cook') ||
        text.includes('finish cooking') ||
        text.includes('close cook') ||
        text.includes('exit kitchen')
      ) {
        showFeedback('Exiting Cook Mode...');
        setTimeout(() => onExit(), 500);
      }
    },
    [
      isSpeaking,
      onNextStep,
      onPrevStep,
      onCheckItem,
      onCheckAll,
      onReadStep,
      onStartTimer,
      onPauseTimer,
      onResetTimer,
      onExit,
      showFeedback,
    ]
  );

  // Start continuous recognition loop
  const startListening = useCallback(() => {
    const SpeechClass =
      (window as unknown as { SpeechRecognition?: SpeechRecognitionConstructor }).SpeechRecognition ||
      (window as unknown as { webkitSpeechRecognition?: SpeechRecognitionConstructor }).webkitSpeechRecognition;

    if (!SpeechClass) {
      setErrorMessage('Web Speech API is not supported in this browser. Please use Google Chrome, Edge, or Safari.');
      return;
    }

    try {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {
          // ignore
        }
      }

      const recognition = new SpeechClass();
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      recognition.maxAlternatives = 2;

      recognition.onstart = () => {
        setIsListening(true);
        setErrorMessage(null);
      };

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const lastResult = event.results[event.results.length - 1];
        if (lastResult && lastResult[0]) {
          const phrase = lastResult[0].transcript;
          processCommand(phrase);
        }
      };

      recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
        if (event.error === 'not-allowed') {
          setErrorMessage('Microphone access was denied. Please allow microphone permissions to use voice navigation.');
          shouldListenRef.current = false;
          setIsListening(false);
        } else if (event.error === 'no-speech') {
          // Silence is normal in a kitchen, keep listening
        } else if (event.error !== 'aborted') {
          console.warn('Speech recognition notice:', event.error);
        }
      };

      recognition.onend = () => {
        // If user wants continuous listening, auto-restart
        if (shouldListenRef.current) {
          try {
            recognition.start();
          } catch {
            // Ignore if already starting
          }
        } else {
          setIsListening(false);
        }
      };

      recognitionRef.current = recognition;
      shouldListenRef.current = true;
      recognition.start();
      showFeedback('Voice control active! Say "Next", "Back", or "Done"');
    } catch (err: unknown) {
      console.warn('Failed to start speech recognition:', err);
      setErrorMessage('Could not initialize speech recognition. Please check microphone settings.');
      setIsListening(false);
      shouldListenRef.current = false;
    }
  }, [processCommand, showFeedback]);

  // Stop listening
  const stopListening = useCallback(() => {
    shouldListenRef.current = false;
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // ignore
      }
      recognitionRef.current = null;
    }
    setIsListening(false);
    setTranscript('');
  }, []);

  const toggleListening = useCallback(() => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  }, [isListening, startListening, stopListening]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      shouldListenRef.current = false;
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {
          // ignore
        }
      }
      if (commandTimeoutRef.current) {
        clearTimeout(commandTimeoutRef.current);
      }
    };
  }, []);

  return {
    isListening,
    isSupported,
    transcript,
    lastCommand,
    errorMessage,
    toggleListening,
    startListening,
    stopListening,
  };
}
