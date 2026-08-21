// ============================================================
// messages.js — 5 baris pesan dari Bebeb Nongky Mania
// foto & teks berselang-seling kiri/kanan tiap baris,
// tiap orang punya tombol sendiri untuk buka suratnya masing-masing
// ============================================================

(function initMessageRows() {
  const list = document.getElementById("messageList");
  if (!list) return;

  // REPLACE TEXT & PHOTO HERE — ganti nama, pesan singkat, surat lengkap,
  // dan src foto tiap anggota Nongky Mania di bawah ini.
  const messages = [
    {
      name: "Your kakak princess",
      photo: "images/radha.jpeg",
      preview:
        "Welcome to 1/4 abad my adik! Always be my cantik lucu gemes adik forever🩷",
      letter: [
        "Welcome to 1/4 abad my adik! Always be my cantik lucu gemes adik forever🩷",
        "Lakuin apapun yang bikin bahagia ya. Happiness suits you well! Selalu ingat bahwa aida ga sendirian dan punya kakak yang selalu aida sebut princess ini yang akan selalu siap sedia (jadi grab apalagi).",
        "Dari 25 tahun aida ada, kakak baru membersamai 4 tahun nih. Jadi ini pinky promise kita harus membersamai selama yang kita bisa yaaa.",
        "I hope your life is full of love and best best things. PLEASE always be KIND to yourself ya.",
        "You deserve all good things in this world🩷.",
        "your princess, Radha",
      ],
    },
    {
      name: "Dea & Namu Sekeluarga",
      photo: "images/dea.jpeg",
      preview:
        "Selamat ulang tahun my sweetest, smartest, kindest, partner ngopi, adik bungsu bebeb di kantor, Aida🥺💌",
      letter: [
        "Selamat ulang tahun my sweetest, smartest, kindest, partner ngopi, adik bungsu bebeb di kantor, Aida🥺💌",
        "Semoga my adik selalu sehat, panjang umur, dilimpahi kebahagiaan, dan terwujud semua cita-cita nya yaa!!!",
        "Terimakasih selalu menemani dan selalu ada untuk kakak di setiap waktu!🥲 Tetap jadi Ai yang ceria dan peduli dengan sekitarnya, kurang2in beli PC tu plissss (dan yap) dan semoga segera dipertemukan dengan crush(es) di masa depan yaa! 😛",
        "With love, Dea & Namu Sekeluarga",
      ],
    },
    {
      name: "Gadis Jember",
      photo: "images/betty.jpeg",
      preview:
        "Dear Aida, our adik maknae 💝 Selamat memasuki quarter life era yaa..",
      letter: [
        "Dear Aida, our adik maknae 💝 Selamat memasuki quarter life era yaa..",
        "Selamat memasuki quarter life era yaa.. plis tetap jadi Ai yang bahagia imut lucu dan ceria, selalu menemukan spark dalam hidup entah itu dengan lari, cokipop, new crush, ataupun teazzi tiap hari. Don’t be too hard on yourself, Ai yang sekarang udah sangat lebih dari cukup and I’m really proud of you! 🥹🥹",
        "Semoga hal-hal baik menghampiri ya Aiii",
        "Lots of love, your number 1 Noona (Gadis Jember) 💝",
      ],
    },
    {
      name: "Pikrui",
      photo: "images/fikri.jpeg",
      preview: "Happy Birthday Aidun",
      letter: [
        "Happy birthday Aidun",
        "Selamat memasuki umur quarter life crisis, meskipun kayanya sudah dimulai dulu dari tahun tahun sebelumnya ngehehe.",
        "Semoga sehat selalu dan panjang umur dan selalu jadi kebanggaan nongky mania dan orang di sekitarmu dengan pencapaian atau apapun yang kamu lakuin.",
        "Hope you found “the one” yh. semoga kamu bisa dapet yang selalu mendukung kamu dan ngga bingung. ",
        "You’re doing good.",
      ],
    },
    {
      name: "Kakak King",
      photo: "images/thoriq.jpeg",
      preview:
        "Selamat Ulang Tahun, Happy Birthday, Barakallah Fii Umrik, Otanjoubi Omedetou Aidaa",
      letter: [
        "Selamat Ulang Tahun, Happy Birthday, Barakallah Fii Umrik, Otanjoubi Omedetou Aidaa",
        "You're a smart girl, healthy person, dan kamu punya tekad dan komitmen yang kuat.",
        "Aku harap kamu terus mempertahankan energy positif yang kamu punya dan sebarkan juga ke orang lain yaa.",
        "Terima kasih atas perhatian, kepedulian, dan juga semua yang kamu lakukan untuk kami.",
        "Semoga kamu selalu bahagia, sehat selalu dan semoga kamu bisa terus bertambah dewasa dan menjadi orang yang lebih baik lagi yaa.",
        "Tetap semangat, Aida! Sampai ketemu di nongky selanjutnya~",
        "-your kakak bebeb king, Thoriq-",
      ],
    },
  ];

  messages.forEach((msg, i) => {
    const row = document.createElement("div");
    row.className = "message-row" + (i % 2 === 1 ? " reverse" : "");
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
  list.querySelectorAll(".message-letter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-index"), 10);
      const data = messages[idx];
      if (window.openPersonLetter) {
        window.openPersonLetter(data);
      }
    });
  });
})();
