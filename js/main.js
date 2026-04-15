/**
 * Navigation, Modal and Dynamic Content Logic for Class 12 Chemistry
 */

const chapters = [
  { id: 1, title: "विलयन" },
  { id: 2, title: "वैद्युतरसायन" },
  { id: 3, title: "रासायनिक बलगतिकी" },
  { id: 4, title: "d- एवं f- ब्लॉक के तत्व" },
  { id: 5, title: "उपसहसंयोजन यौगिक" },
  { id: 6, title: "हैलोऐल्केन तथा हैलोऐरीन" },
  { id: 7, title: "ऐल्कोहॉल, फ़ीनॉल एवं ईथर" },
  { id: 8, title: "ऐल्डिहाइड, कीटोन एवं कार्बोक्सिलिक अम्ल" },
  { id: 9, title: "ऐमीन" },
  { id: 10, title: "जैव-अणु" }
];

document.addEventListener('DOMContentLoaded', () => {
  renderChapters(chapters);

  const searchBar = document.getElementById('searchBar');
  if(searchBar) {
    searchBar.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      const filtered = chapters.filter(c => c.title.toLowerCase().includes(term));
      renderChapters(filtered);
    });
  }
});

function renderChapters(data) {
  const grid = document.getElementById('chapter-grid');
  if(!grid) return; // If on notes_view.html, grid might not exist, that's fine.

  grid.innerHTML = '';

  data.forEach(chapter => {
    const card = document.createElement('div');
    card.className = 'chapter-card';
    
    let mobileBtn = '';
    let hindiRoute = `notes_html_view.html?id=${chapter.id}`;
    
    if (chapter.id === 1) {
      hindiRoute = `ch1_parts/ch1_part1.html`;
      mobileBtn = `
        <div style="margin-top: 20px;">
          <p style="color: var(--primary-dark); font-weight: 800; margin-bottom: 10px; font-size: 1.1rem;">📑 सीधा भाग चुनें (Select Part):</p>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
            <button class="btn-secondary" onclick="window.location.href='ch1_parts/ch1_part1.html'" style="font-size: 0.85rem; padding: 8px; background: #f0fdf4; color: var(--primary-dark); border: 1px solid var(--primary);">P1</button>
            <button class="btn-secondary" onclick="window.location.href='ch1_parts/ch1_part2.html'" style="font-size: 0.85rem; padding: 8px; background: #f0fdf4; color: var(--primary-dark); border: 1px solid var(--primary);">P2</button>
            <button class="btn-secondary" onclick="window.location.href='ch1_parts/ch1_part3.html'" style="font-size: 0.85rem; padding: 8px; background: #f0fdf4; color: var(--primary-dark); border: 1px solid var(--primary);">P3</button>
            <button class="btn-secondary" onclick="window.location.href='ch1_parts/ch1_part4.html'" style="font-size: 0.85rem; padding: 8px; background: #f0fdf4; color: var(--primary-dark); border: 1px solid var(--primary);">P4</button>
            <button class="btn-secondary" onclick="window.location.href='ch1_parts/ch1_part5.html'" style="font-size: 0.85rem; padding: 8px; background: var(--primary); color: white;">P5 ✨</button>
            <button class="btn-secondary" onclick="window.location.href='ch1_parts/ch1_part6.html'" style="font-size: 0.85rem; padding: 8px; background: #f0fdf4; color: var(--primary-dark); border: 1px solid var(--primary);">P6</button>
          </div>
        </div>
        <button class="btn-secondary" onclick="window.location.href='ch1eng/ch1_part1.html'" style="background: linear-gradient(135deg, #3b82f6, #2563eb); border-color: #60a5fa; color: white; display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 15px;">🇬🇧 English Version</button>
      `;
    }

    card.innerHTML = `
      <div class="chapter-num">${String(chapter.id).padStart(2, '0')}</div>
      <h3 class="chapter-title">${chapter.title}</h3>
      <div class="chapter-actions" style="display:flex; gap:10px; flex-direction: column; margin-top:10px; position:relative; z-index:10;">
        <button class="btn-secondary" onclick="window.location.href='${hindiRoute}'" style="background: linear-gradient(135deg, #f59e0b, #d97706); border-color: #fcd34d; color: white; display: flex; align-items: center; justify-content: center; gap: 8px;">🇮🇳 Hindi Version (Premium)</button>
        ${mobileBtn}
        <button class="btn-secondary" onclick="window.location.href='qa_view.html?id=${chapter.id}'" style="background: #8b5cf6; border-color: #7c3aed; color: white; display: flex; align-items: center; justify-content: center; gap: 8px;">❓ प्रश्न-उत्तर (Master Q&A)</button>
      </div>
    `;
    grid.appendChild(card);
  });
}
