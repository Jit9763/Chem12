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
  if(!grid) return;

  grid.innerHTML = '';

  data.forEach(chapter => {
    const card = document.createElement('div');
    card.className = 'chapter-card';
    
    let mobileBtn = '';
    let hindiRoute = `coming_soon.html`;
    let englishRoute = `coming_soon.html`;
    let qaRoute = `coming_soon.html`;
    
    if (chapter.id === 1) {
      hindiRoute = `ch1_parts/ch1_part1.html`;
      englishRoute = `ch1eng/ch1_part1.html`;
      qaRoute = `ch1_parts/ch1_qa.html`;
        mobileBtn = `
        <div style="margin-top: 20px;">
          <p style="color: var(--primary-dark); font-weight: 800; margin-bottom: 10px; font-size: 1.1rem;">📑 सीधा भाग चुनें (Select Part):</p>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px;">
            <button class="btn-secondary" onclick="window.location.href='ch1_parts/ch1_part1.html'" style="font-size: 0.85rem; padding: 8px; background: #f0fdf4; color: var(--primary-dark); border: 1px solid var(--primary);">P1</button>
            <button class="btn-secondary" onclick="window.location.href='ch1_parts/ch1_part2.html'" style="font-size: 0.85rem; padding: 8px; background: #f0fdf4; color: var(--primary-dark); border: 1px solid var(--primary);">P2</button>
            <button class="btn-secondary" onclick="window.location.href='ch1_parts/ch1_part3.html'" style="font-size: 0.85rem; padding: 8px; background: #f0fdf4; color: var(--primary-dark); border: 1px solid var(--primary);">P3</button>
            <button class="btn-secondary" onclick="window.location.href='ch1_parts/ch1_part4.html'" style="font-size: 0.85rem; padding: 8px; background: #f0fdf4; color: var(--primary-dark); border: 1px solid var(--primary);">P4</button>
            <button class="btn-secondary" onclick="window.location.href='ch1_parts/ch1_part5.html'" style="font-size: 0.85rem; padding: 8px; background: #f0fdf4; color: var(--primary-dark); border: 1px solid var(--primary);">P5</button>
            <button class="btn-secondary" onclick="window.location.href='ch1_parts/ch1_part6.html'" style="font-size: 0.85rem; padding: 8px; background: #f0fdf4; color: var(--primary-dark); border: 1px solid var(--primary);">P6</button>
            <button class="btn-secondary" onclick="window.location.href='ch1_parts/ch1_part7.html'" style="font-size: 0.85rem; padding: 8px; background: var(--primary); color: white; border: 1px solid var(--primary);">P7 ✨</button>
          </div>
        </div>
      `;
    }

    // Badge for coming soon chapters
    let badge = '';
    if (chapter.id > 1) {
      badge = `<div style="position: absolute; top: 12px; right: 12px; background: linear-gradient(135deg, #f59e0b, #d97706); color: white; font-size: 0.75rem; font-weight: 800; padding: 4px 12px; border-radius: 20px; z-index: 5;">🔜 COMING SOON</div>`;
    }

    card.innerHTML = `
      ${badge}
      <div class="chapter-num">${String(chapter.id).padStart(2, '0')}</div>
      <h3 class="chapter-title">${chapter.title}</h3>
      <div class="chapter-actions" style="display:flex; gap:10px; flex-direction: column; margin-top:10px; position:relative; z-index:10;">
        <button class="btn-secondary" onclick="window.location.href='${hindiRoute}'" style="background: linear-gradient(135deg, #10b981, #059669); border-color: #34d399; color: white; display: flex; align-items: center; justify-content: center; gap: 8px;">📖 अध्याय खोलें (Open Chapter)</button>
        ${mobileBtn}
        <button class="btn-secondary" onclick="window.location.href='${qaRoute}'" style="background: #8b5cf6; border-color: #7c3aed; color: white; display: flex; align-items: center; justify-content: center; gap: 8px;">❓ प्रश्न-उत्तर (Master Q&A)</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

