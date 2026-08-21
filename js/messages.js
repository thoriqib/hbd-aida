// ============================================================
// messages.js — 5 baris pesan dari Bebeb Nongky Mania
// foto & teks berselang-seling kiri/kanan tiap baris,
// tiap orang punya tombol sendiri untuk buka suratnya masing-masing
// ============================================================

(function initMessageRows() {
  const list = document.getElementById('messageList');
  if (!list) return;

  // REPLACE TEXT & PHOTO HERE — ganti nama, pesan singkat, surat lengkap,
  // dan src foto tiap anggota Nongky Mania di bawah ini.
  const messages = [
    {
      name: 'Nama Sahabat #1',
      photo: 'images/photo-placeholder.svg',
      preview: 'Selamat ulang tahun, Aida! Makasih ya selalu jadi tempat cerita paling asik.',
      letter: [
        'Hai Aida! Di hari spesialmu ini aku cuma mau bilang: selamat ulang tahun ya! Makasih udah selalu jadi tempat cerita paling asik dan selalu ada kalau lagi butuh teman ngobrol.',
        'Semoga tahun ini kamu makin banyak dapat hal-hal seru, rejeki lancar, dan selalu dikelilingi orang-orang baik kayak kita di Nongky Mania hehe.',
        'Sekali lagi, happy birthday Aida! Love you selalu.'
      ],
    },
    {
      name: 'Nama Sahabat #2',
      photo: 'images/photo-placeholder.svg',
      preview: 'Happy birthday, Aida sayang! Semoga sehat terus dan makin cantik luar dalam.',
      letter: [
        'Happy birthday, Aida sayang! Nggak kerasa ya udah setahun lagi kita lewatin bareng-bareng, penuh cerita dan kenangan seru.',
        'Semoga di umur yang baru ini kamu makin sehat, makin bahagia, dan makin cantik luar dalam. Semua rencana dan impianmu semoga lancar terwujud satu-satu.',
        'Makasih udah jadi sahabat yang baik banget. Selamat ulang tahun, Aidaku!'
      ],
    },
    {
      name: 'Nama Sahabat #3',
      photo: 'images/photo-placeholder.svg',
      preview: 'Met ultah Aida! Terima kasih udah jadi bagian penting dari Nongky Mania.',
      letter: [
        'Met ultah, Aida! Terima kasih ya udah jadi bagian penting dari Nongky Mania, selalu bikin suasana rame dan hangat tiap kita kumpul.',
        'Semoga panjang umur, sehat selalu, dan semua doa baikmu diijabah Tuhan. Semoga karier dan hubungan kamu juga makin lancar tahun ini.',
        'Love you, Aida. Selamat ulang tahun!'
      ],
    },
    {
      name: 'Nama Sahabat #4',
      photo: 'images/photo-placeholder.svg',
      preview: 'Selamat bertambah usia, Aida! Semoga makin sukses di semua urusan.',
      letter: [
        'Selamat bertambah usia, Aida! Semoga di usia baru ini kamu makin sukses di semua urusan, baik kerjaan, keluarga, maupun percintaan hehe.',
        'Semoga kamu juga makin sabar dan makin kuat menghadapi apapun tantangan ke depannya. Kita semua di Nongky Mania selalu dukung kamu kok.',
        'Happy birthday, Aida! Semoga harimu menyenangkan.'
      ],
    },
    {
      name: 'Nama Sahabat #5',
      photo: 'images/photo-placeholder.svg',
      preview: 'Happy birthday Aidaku! Masih banyak agenda nongky yang harus dijalanin bareng.',
      letter: [
        'Happy birthday, Aidaku! Semangat terus ya, soalnya kita masih banyak agenda nongky yang harus dijalanin bareng-bareng tahun ini.',
        'Semoga kamu selalu sehat, bahagia, dan rejekinya lancar terus. Makasih juga udah jadi teman yang selalu asik diajak kemana-mana.',
        'Selamat ulang tahun, Aida! Sampai ketemu di nongky selanjutnya~'
      ],
    },
  ];

  messages.forEach((msg, i) => {
    const row = document.createElement('div');
    row.className = 'message-row' + (i % 2 === 1 ? ' reverse' : '');
    row.innerHTML = `
      <div class="message-photo" data-photo-slot="${i + 1}">
        <img src="${msg.photo}" alt="${msg.name}">
      </div>
      <div class="message-content">
        <div class="message-name">${msg.name}</div>
        <p class="message-text">${msg.preview}</p>
        <button class="message-letter-btn" data-index="${i}">💌 Baca Surat dari ${msg.name}</button>
      </div>
    `;
    list.appendChild(row);
  });

  // Hubungkan tiap tombol ke fungsi buka modal (didefinisikan di js/modal.js)
  list.querySelectorAll('.message-letter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      const data = messages[idx];
      if (window.openPersonLetter) {
        window.openPersonLetter(data);
      }
    });
  });
})();
