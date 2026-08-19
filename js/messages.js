// ============================================================
// messages.js — 5 baris pesan dari Bebeb Nongky Mania
// foto & teks berselang-seling kiri/kanan tiap baris
// ============================================================

(function initMessageRows() {
  const list = document.getElementById('messageList');
  if (!list) return;

  // REPLACE TEXT & PHOTO HERE — ganti nama, pesan, dan src foto
  // tiap anggota Nongky Mania di bawah ini.
  const messages = [
    {
      name: 'Nama Sahabat #1',
      text: 'Selamat ulang tahun, Aida! Makasih ya selalu jadi tempat cerita paling asik. Semoga tahun ini makin banyak hal seru buat kamu.',
      photo: 'images/photo-placeholder.svg',
    },
    {
      name: 'Nama Sahabat #2',
      text: 'Happy birthday, Aida sayang! Semoga sehat terus, rejeki lancar, dan makin cantik luar dalam hehe.',
      photo: 'images/photo-placeholder.svg',
    },
    {
      name: 'Nama Sahabat #3',
      text: 'Met ultah Aida! Terima kasih udah jadi bagian penting dari Nongky Mania. Love you, semoga panjang umur~',
      photo: 'images/photo-placeholder.svg',
    },
    {
      name: 'Nama Sahabat #4',
      text: 'Selamat bertambah usia, Aida! Semoga semua doa baikmu diijabah dan makin sukses di semua urusan.',
      photo: 'images/photo-placeholder.svg',
    },
    {
      name: 'Nama Sahabat #5',
      text: 'Happy birthday Aidaku! Semangat terus ya, kita masih banyak agenda nongky yang harus dijalanin bareng-bareng.',
      photo: 'images/photo-placeholder.svg',
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
        <p class="message-text">${msg.text}</p>
      </div>
    `;
    list.appendChild(row);
  });
})();
