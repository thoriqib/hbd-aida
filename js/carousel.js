// ============================================================
// carousel.js — galeri foto Aida (placeholder, siap diganti)
// ============================================================

(function initCarousel() {
  const track = document.getElementById("carouselTrack");
  const dotsWrap = document.getElementById("carouselDots");
  if (!track || !dotsWrap) return;

  // REPLACE PHOTO HERE — ganti "images/photo-placeholder.svg" di tiap slot
  // dengan foto asli Aida, contoh: "images/aida-1.jpg"
  const slides = [
    { label: "Foto Aida #1", src: "images/carousel-1.jpeg" },
    { label: "Foto Aida #2", src: "images/carousel-2.jpeg" },
    { label: "Foto Aida #3", src: "images/carousel-3.jpeg" },
    { label: "Foto Aida #4", src: "images/carousel-4.jpeg" },
  ];

  slides.forEach((slide, i) => {
    const slideEl = document.createElement("div");
    slideEl.className = "carousel-slide";
    slideEl.innerHTML = `
      <div class="ph-frame" data-photo-slot="${i + 1}">
        <img src="${slide.src}" alt="${slide.label}">
      </div>
      <div class="ph-label">${slide.label} · ganti di sini</div>
    `;
    track.appendChild(slideEl);

    const dot = document.createElement("button");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    dotsWrap.appendChild(dot);
  });

  let currentSlide = 0;
  const totalSlides = slides.length;
  const dots = dotsWrap.querySelectorAll("button");

  function goToSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("active", i === currentSlide));
  }

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  prevBtn.addEventListener("click", () => goToSlide(currentSlide - 1));
  nextBtn.addEventListener("click", () => goToSlide(currentSlide + 1));

  let autoSlide = setInterval(() => goToSlide(currentSlide + 1), 4000);
  const carouselFrame = document.querySelector(".carousel-frame");
  carouselFrame.addEventListener("mouseenter", () => clearInterval(autoSlide));
  carouselFrame.addEventListener("mouseleave", () => {
    autoSlide = setInterval(() => goToSlide(currentSlide + 1), 4000);
  });
})();
