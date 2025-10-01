const rooms = document.querySelectorAll('.room');
const content = document.getElementById('content');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

const roomData = {
  library: { 
    title: "📚 المكتبة", 
    text: "هنا المخطوطات والأفكار التي تلهم العقول.", 
    extra: "مخطوطة رقمية قديمة: <em>“المعرفة نور في بحر الظلمات.”</em>", 
    lottie: "https://assets9.lottiefiles.com/packages/lf20_ydo1amjm.json"
  },
  stories: { 
    title: "📖 غرفة القصص", 
    text: "قصص المشاركين تنبض بالحياة هنا.", 
    extra: "✨ قصة أول بطل في المسابقة: شاب حمل حلمه حتى صار منارة لغيره.", 
    lottie: "https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
  },
  leaders: { 
    title: "🧭 قاعة القادة", 
    text: "تعرف على قادة الفكر والإبداع الذين تركوا بصمتهم.", 
    extra: "🌟 اقتباس ملهم: <strong>“القائد الحقيقي هو من يُضيء الطريق لغيره.”</strong>", 
    lottie: "https://lottiefiles.com/animation/leader-icon-567890"
  },
  archive: { 
    title: "🗂️ الأرشيف", 
    text: "الأعمال السابقة محفوظة هنا للأجيال القادمة.", 
    extra: "📜 وثيقة من النسخة الأولى للمسابقة تعرض أهم الإبداعات.", 
    lottie: "https://assets4.lottiefiles.com/packages/lf20_5ngs2ksb.json"
  }
};

// عند الضغط على أي غرفة
rooms.forEach(room => {
  room.addEventListener('click', () => {
    const key = room.getAttribute('data-target');

    // تحديث المحتوى
    content.innerHTML = `
      <div class="zoom-in" id="room-${key}">
        <div id="lottie-${key}" style="width:150px; height:150px; margin:auto;"></div>
        <h2>${roomData[key].title}</h2>
        <p>${roomData[key].text}</p>
        <button onclick="openModal('${key}')">عرض المزيد</button>
      </div>
    `;

    // تحميل أنيميشن Lottie
    lottie.loadAnimation({
      container: document.getElementById(`lottie-${key}`),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: roomData[key].lottie
    });

    // تمرير تلقائي إلى المحتوى
    document.getElementById(`room-${key}`).scrollIntoView({ behavior: 'smooth' });
  });
});

// فتح النافذة المنبثقة
function openModal(key) {
  modalBody.innerHTML = `
    <div class="slide-in">
      <h3>${roomData[key].title}</h3>
      <p>${roomData[key].extra}</p>
    </div>
  `;
  modal.classList.remove('hidden');
}

// إغلاق النافذة المنبثقة
closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});



