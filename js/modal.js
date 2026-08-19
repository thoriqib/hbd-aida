// ============================================================
// modal.js — popup surat ucapan selamat ulang tahun
// ============================================================

(function initLetterModal() {
  const modalOverlay = document.getElementById('modalOverlay');
  const openLetterBtn = document.getElementById('openLetterBtn');
  const closeLetterBtn = document.getElementById('closeLetterBtn');
  if (!modalOverlay || !openLetterBtn || !closeLetterBtn) return;

  const confettiColors = ['#c97c5d', '#d3a034', '#8a9a6b', '#d9a08c', '#ffffff'];

  function launchConfetti() {
    for (let i = 0; i < 40; i++) {
      const c = document.createElement('div');
      c.className = 'confetti-piece';
      c.style.left = Math.random() * 100 + 'vw';
      c.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      c.style.animationDelay = (Math.random() * 0.6) + 's';
      c.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 3200);
    }
  }

  function openModal() {
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    launchConfetti();
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  openLetterBtn.addEventListener('click', openModal);
  closeLetterBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
})();
