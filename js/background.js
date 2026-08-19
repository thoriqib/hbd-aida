// ============================================================
// background.js — floating decor (daun, bunga, kupu-kupu, sparkle)
// ============================================================

(function initBackgroundDecor() {
  const bgDecor = document.getElementById('bgDecor');
  if (!bgDecor) return;

  const driftEmojis = ['🍂', '🌿', '🌸', '🦋', '✨', '🍁', '🌾'];
  const driftCount = 20;

  for (let i = 0; i < driftCount; i++) {
    const el = document.createElement('div');
    el.className = 'drift';
    el.textContent = driftEmojis[Math.floor(Math.random() * driftEmojis.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.fontSize = (1.2 + Math.random() * 2) + 'rem';
    el.style.animationDuration = (10 + Math.random() * 14) + 's';
    el.style.animationDelay = (Math.random() * 14) + 's';
    bgDecor.appendChild(el);
  }

  const sparkleCount = 16;
  for (let i = 0; i < sparkleCount; i++) {
    const s = document.createElement('div');
    s.className = 'sparkle';
    s.style.left = Math.random() * 100 + 'vw';
    s.style.top = Math.random() * 100 + 'vh';
    s.style.animationDuration = (1.8 + Math.random() * 2.4) + 's';
    s.style.animationDelay = (Math.random() * 4) + 's';
    bgDecor.appendChild(s);
  }
})();
