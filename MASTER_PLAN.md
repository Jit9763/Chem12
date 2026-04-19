# 📜 CHEMISTRY CLASS 12 PORTAL: MASTER PLAN

> [!IMPORTANT]
> This document defines the MANDATORY architectural, design, and workflow standards for the Class 12 Chemistry Portal.
> 
> **LOCK STATUS:** 🔒 LOCKED. No deviations allowed without direct user authorization.

---

## 📖 1. Content Integration Protocol (Word-to-Word Rule)
- **Word-to-Word Accuracy:** All text, definitions, examples, and formulas extracted from the user's handwritten/PDF notes MUST be transcribed **word-for-word** exactly as provided. NO rewriting, summarizing, or shortening of the provided Hindi text.
- **Beautiful Explanation Layout:** Even though text is exact, it must be presented beautifully. Use stylized cards, highlighted boxes (`border-left: 5px solid #8b5cf6`), and contrasting text (`color: #475569`) block elements to make reading easy on the projector.
- **Simulator Placement Policy:** Simulators are strictly **SUPPLEMENTARY VISUALIZATIONS**. 
   - First, the word-to-word text and derivation must be explained.
   - **SECOND**, the Interactive Simulator must be placed **BELOW** the main textual explanation to confirm and interact with the knowledge just taught.
   - *Never replace word-for-word textual explanations with just a simulator.*

## 🏗️ 2. Core Philosophy: "The Projector Rule"
Every page must be optimized for **Simultaneous Classroom Projection and PC Screen View**.
- **Compact Simulators:** PC Screen Height must be respected. Simulators should use horizontal UI/U-Tube layouts instead of excessively tall elements so students can view them without vertical scroll clipping.
- **Side Panel Typography:** Control panels should use concise font sizes (`1.4rem` to `1.8rem`) so they don't consume unnecessary vertical height.
- **NO COLUMN LAYOUTS FOR TEXT**: All text content cards, units, and guides must be stacked vertically (One-under-another). Max width `100vw`.

## 🎨 3. Design System (Emerald Earth & Royal Purple)
All simulator headers and interactive elements utilize high-contrast gradients:
- Simulator Headers: `<h3 class="sim-header" style="border-left: 10px solid #a855f7; color: #a855f7; background: linear-gradient(to right, rgba(168, 85, 247, 0.1), transparent); ...">`
- Container Backgrounds: `#1e1b4b` (Deep Indigo) with `#312e81` borders.
- Buttons should transition color upon activation (e.g., `#8b5cf6` to `#ef4444` when applying pressure).

## 🧪 4. Mathematical Rendering (Premium Math & Vertical Fractions)
- **Mathematical Equations (.math-box):** Chemical equations and formulas must use the `.math-box` class with serif fonts (`Cambria Math`, `Times New Roman`) and appropriately sized `sub`/`sup` tags to mimic NCERT textbook professionalism.
- **Vertical Fractions (.math-frac):** All stoichiometric and physical chemistry fractions (including subscripts like $E$ ) MUST use the `.math-frac` flexbox system. DO NOT use inline slashes.
```html
<div class="math-frac">
    <span class="math-top">Numerator</span>
    <span class="math-bot">Denominator</span>
</div>
```

## 🕹️ 5. Interactive Simulator Mechanics & 3D Projector Optimization
## 🕹️ 5. Interactive Simulator Mechanics & 3D Projector Optimization
- **Sleek Dark UI:** Simulators MUST employ a **Sleek Deep Dark Theme** (e.g., `#1e1b4b` background, no borders) with **neon light accents** (e.g., cyan glow around voltmeter `#06b6d4`, purple headers `#a855f7`) to mirror the benchmark "Galvanic Cell" reference image.
- **Glass & Beakers:** Beakers must have thin bright semi-transparent borders with invisible or dark backgrounds, allowing vibrant solutions to stand out without washing out.
- **Labels:** Device labels (e.g., Anode, Cathode) should be clean `white` bold text without colorful bounding boxes to maintain a highly professional look against the dark container.
- **Play/Pause Controls:** Animations should not run continuously by default. Use an explicit `.sim-btn` (Purple to Violet neon pill button) to toggle CSS animations via the `.is-playing` class.
- **Didactic Context:** Every simulator must have a dedicated explanation box underneath explaining "🚀 How it works (ये काम कैसे करता है)" and "⚙️ How to use (कैसे उपयोग करें)".
- **ID Scoping**: Always prefix IDs specific to that simulator (e.g., `sim1`, `sim2`) to prevent conflicting states.

## 🔄 6. Translation Workflow & Bilingual Hybrid Vocabulary
- **Hindi Medium First**: Draft all content strictly in native Devanagari Hindi in the `chX_parts/` folder.
- **Bilingual Hybrid English**: The English version (`chXeng/`) must encapsulate core technical terms with Hindi translations in parentheses (e.g. `Salt Bridge (लवण सेतु)`) to assist students transitioning their vocabulary.
- **English Sync**: Automatically sync a full English equivalent to `chXeng/` after.

## 📊 7. Chapter Progress Tracking

### Chapter 1: Solutions (विलयन) - [COMPLETED]
- 7 Parts + Comprehensive Master Q&A Bank
- Dual Language Architecture Built
- UI/UX Polish Applied

### Chapter 2: Electrochemistry (वैद्युतरसायन) - [IN PROGRESS]
- 10 Part Architecture Instantiated
- Base HTML files generated for Hindi/English
- Main Hub routing operational
- Part 2 (SHE) completed with premium 3D math and simulators.
