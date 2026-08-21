// ============================================================
// audio.js — musik "Selamat Ulang Tahun" dimainkan langsung
// lewat Web Audio API (disintesis, tanpa file audio eksternal)
// ============================================================

(function initBirthdayMusic() {
  const toggleBtn = document.getElementById('musicToggle');
  if (!toggleBtn) return;

  // Not frequencies (Hz)
  const NOTE = {
    G4: 392.00, A4: 440.00, B4: 493.88,
    C5: 523.25, D5: 587.33, E5: 659.25,
    F5: 698.46, G5: 783.99
  };

  // Melodi "Happy Birthday to You" (melodi domain publik)
  // [note, durasi dalam beat]
  const EIGHTH = 0.5, QUARTER = 1, HALF = 2;
  const melody = [
    [NOTE.G4, EIGHTH], [NOTE.G4, EIGHTH], [NOTE.A4, QUARTER], [NOTE.G4, QUARTER], [NOTE.C5, QUARTER], [NOTE.B4, HALF],
    [NOTE.G4, EIGHTH], [NOTE.G4, EIGHTH], [NOTE.A4, QUARTER], [NOTE.G4, QUARTER], [NOTE.D5, QUARTER], [NOTE.C5, HALF],
    [NOTE.G4, EIGHTH], [NOTE.G4, EIGHTH], [NOTE.G5, QUARTER], [NOTE.E5, QUARTER], [NOTE.C5, QUARTER], [NOTE.B4, QUARTER], [NOTE.A4, HALF],
    [NOTE.F5, EIGHTH], [NOTE.F5, EIGHTH], [NOTE.E5, QUARTER], [NOTE.C5, QUARTER], [NOTE.D5, QUARTER], [NOTE.C5, HALF],
  ];

  const BEAT_SECONDS = 0.34;
  let audioCtx = null;
  let isPlaying = false;
  let stopRequested = false;
  let scheduledTimeouts = [];

  function ensureContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playNote(freq, durationSeconds, startTime) {
    const ctx = audioCtx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.value = freq;

    // envelope lembut biar tidak "klik"
    const attack = 0.02;
    const release = Math.min(0.12, durationSeconds * 0.3);
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(0.22, startTime + attack);
    gain.gain.setValueAtTime(0.22, startTime + durationSeconds - release);
    gain.gain.linearRampToValueAtTime(0, startTime + durationSeconds);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + durationSeconds + 0.02);
  }

  function playMelodyOnce(onFinished) {
    const ctx = ensureContext();
    let t = ctx.currentTime + 0.05;

    melody.forEach(([freq, beats]) => {
      const dur = beats * BEAT_SECONDS;
      playNote(freq, dur * 0.92, t);
      t += dur;
    });

    const totalMs = (t - ctx.currentTime) * 1000;
    const timeoutId = setTimeout(() => {
      if (!stopRequested) onFinished();
    }, totalMs);
    scheduledTimeouts.push(timeoutId);
  }

  function loopMelody() {
    if (stopRequested) return;
    playMelodyOnce(loopMelody);
  }

  function startMusic() {
    stopRequested = false;
    isPlaying = true;
    toggleBtn.textContent = '⏸️';
    toggleBtn.classList.add('playing');
    loopMelody();
  }

  function stopMusic() {
    stopRequested = true;
    isPlaying = false;
    toggleBtn.textContent = '🎵';
    toggleBtn.classList.remove('playing');
    scheduledTimeouts.forEach(clearTimeout);
    scheduledTimeouts = [];
  }

  toggleBtn.addEventListener('click', () => {
    if (isPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  });

  // ---------- Autoplay ----------
  // Browser modern memblokir audio otomatis sebelum ada interaksi user.
  // Jadi kita coba langsung play saat halaman dibuka; kalau diblokir,
  // musik otomatis jalan begitu ada interaksi pertama (klik/scroll/sentuh)
  // tanpa user perlu sadar menekan tombol musik.
  function tryAutoplay() {
    const ctx = ensureContext();
    if (ctx.state === 'running') {
      startMusic();
    } else {
      const resumeAndPlay = () => {
        ctx.resume().then(() => {
          if (!isPlaying) startMusic();
        });
        removeAutoplayListeners();
      };
      const events = ['click', 'touchstart', 'keydown', 'scroll'];
      const removeAutoplayListeners = () => {
        events.forEach((ev) => document.removeEventListener(ev, resumeAndPlay));
      };
      events.forEach((ev) => document.addEventListener(ev, resumeAndPlay, { once: true, passive: true }));
    }
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    tryAutoplay();
  } else {
    document.addEventListener('DOMContentLoaded', tryAutoplay);
  }
})();
