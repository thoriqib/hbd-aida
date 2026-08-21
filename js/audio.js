// ============================================================
// audio.js — memutar lagu "Selamat Ulang Tahun" (Jamrud) dari
// file audio/selamat-ulang-tahun.mp3 lewat elemen <audio>
// ============================================================

(function initBirthdayMusic() {
  const toggleBtn = document.getElementById('musicToggle');
  const audioEl = document.getElementById('birthdaySong');
  if (!toggleBtn || !audioEl) return;

  let isPlaying = false;

  function updateButton() {
    toggleBtn.textContent = isPlaying ? '⏸️' : '🎵';
    toggleBtn.classList.toggle('playing', isPlaying);
  }

  function startMusic() {
    audioEl.play()
      .then(() => {
        isPlaying = true;
        updateButton();
      })
      .catch(() => {
        // Diblokir browser (belum ada interaksi user) — akan dicoba lagi
        // otomatis lewat listener interaksi pertama di bawah.
        isPlaying = false;
        updateButton();
      });
  }

  function stopMusic() {
    audioEl.pause();
    isPlaying = false;
    updateButton();
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
    startMusic();

    const events = ['click', 'touchstart', 'keydown', 'scroll'];
    const resumeAndPlay = () => {
      if (!isPlaying) startMusic();
      removeAutoplayListeners();
    };
    const removeAutoplayListeners = () => {
      events.forEach((ev) => document.removeEventListener(ev, resumeAndPlay));
    };
    events.forEach((ev) => document.addEventListener(ev, resumeAndPlay, { once: true, passive: true }));
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    tryAutoplay();
  } else {
    document.addEventListener('DOMContentLoaded', tryAutoplay);
  }
})();
