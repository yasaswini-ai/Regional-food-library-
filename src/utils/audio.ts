/**
 * Synthesizes a soothing temple singing bowl / kitchen bell chime
 * using the Web Audio API without needing external audio files.
 */
export function playChimeSound() {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    const now = ctx.currentTime;

    // Harmonic frequencies for an Indian singing bowl chime
    const frequencies = [587.33, 880, 1174.66]; // D5, A5, D6

    frequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.2 / (idx + 1), now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8 + idx * 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 2.5);
    });
  } catch (err) {
    console.warn('Web Audio playback failed or blocked by browser policy:', err);
  }
}
