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

## 🧪 4. Mathematical Rendering (Vertical Fractions)
All stoichiometric and physical chemistry formulas MUST use the `.math-frac` flexbox system. DO NOT use inline slashes.
```html
<div class="math-frac">
    <span class="math-num">Numerator</span>
    <span class="math-den">Denominator</span>
</div>
```

## 🕹️ 5. Interactive Simulator Mechanics
- **ID Scoping**: Always prefix IDs specific to that simulator (e.g., `tf_start_btn`, `osm_start_btn`) to prevent conflicting states when multiple simulators exist on one page.
- **CSS Transitions**: Rely on `transition` rules coupled with JS DOM updates for fluid changes rather than expensive `setInterval` DOM loops whenever possible. 
- **States**: Every physical property shown in a simulator MUST have a corresponding textual/live output readout.

## 🔄 6. Translation Workflow
- **Hindi Medium First**: Draft all content strictly in native Devanagari Hindi in the `chX_parts/` folder.
- **English Sync**: Automatically sync a full English equivalent to `chXeng/` after.
