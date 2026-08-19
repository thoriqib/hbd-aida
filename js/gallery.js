// ============================================================
// gallery.js — grid 4x4 kenangan bersama Nongky Mania
// ============================================================

(function initGalleryGrid() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  // REPLACE PHOTO HERE — ganti "images/photo-placeholder.svg" di tiap slot
  // dengan foto kenangan asli, contoh: "images/kenangan-1.jpg"
  const totalSlots = 16;
  const photos = Array.from({ length: totalSlots }, (_, i) => ({
    label: `Kenangan #${i + 1}`,
    src: 'images/photo-placeholder.svg',
  }));

  photos.forEach((photo, i) => {
    const cell = document.createElement('div');
    cell.className = 'gallery-cell';
    cell.setAttribute('data-photo-slot', i + 1);
    cell.innerHTML = `
      <img src="${photo.src}" alt="${photo.label}">
      <span class="gallery-cell-label">${photo.label}</span>
    `;
    grid.appendChild(cell);
  });
})();
