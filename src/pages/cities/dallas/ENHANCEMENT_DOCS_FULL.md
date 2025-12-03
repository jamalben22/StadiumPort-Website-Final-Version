# Stadiumport Dallas Page Enhancement Documentation

## 1. Enhancement Key
*A guide to the structural and visual additions made to the page.*

| Marker | Description | Purpose |
| :--- | :--- | :--- |
| **[QUICK SUMMARY]** | "TL;DR" box at the start of major sections | Respects user time; provides instant value for scannability (30s rule). |
| **[SCROLL ANCHOR]** | Hidden div with `scroll-mt-24` | Ensures precise navigation from TOC or external links without header occlusion. |
| **[SUBTITLE/DECK]** | Large, light font text below H3s | Bridges the gap between headline and body; sets the editorial tone. |
| **[VISUAL: ...]** | Placeholder box with icon and description | Indicates where interactive graphics, maps, or rich media should be placed. |
| **[CHECKLIST]** | `list-none` with checkmark icons | Interactive-feeling list for actionable items (packing, tasks). |
| **[PULL QUOTE]** | Left-bordered, italicized text block | Breaks up text density; highlights key takeaways; adds editorial authority. |
| **[CONCLUSION BOX]** | Centered, gradient background | Final emotional hook and call to action; signals end of article. |
| **Theme Classes** | `theme-emerald` applied to `article` | Provides consistent color branding (Emerald for Dallas) across borders and accents. |
| **Structured Lists** | Bullet points with bold leads | Improves readability of dense information (transport options, food lists). |
| **[ICON HEADER]** | SVGs with gradients in H3/H4s | Adds visual anchor points; creates a premium, polished aesthetic. |
| **[INTERACTIVE QUIZ]** | Form with radio buttons and result logic | Increases engagement and time-on-page; offers personalized value. |
| **[SOCIAL SHARE]** | Sticky/Bottom row of social icons | Encourages viral loop; positions content as "share-worthy". |
| **[LAST REVIEWED]** | Timestamp with icon | Builds trust and authority by showing content freshness. |

## 2. Design Specification Sheet
*Standards for maintaining the "Top 1% Publication" look.*

### Typography & Hierarchy
*   **Headings (H3):** `editorial-h3`, Flex layout with icon.
*   **Subtitles:** `text-xl text-slate-500 font-light`, Leading relaxed.
*   **Body Text:** `editorial-body`, `leading-relaxed`, Standard Tailwind grays (`slate-700`/`slate-300`).
*   **Pull Quotes:** Serif font, `text-2xl`, Italic, `border-l-4`, `border-emerald-500`.

### Color Palette (Dallas Theme)
*   **Primary Accent:** Emerald (`emerald-500`, `emerald-600`)
*   **Secondary Accent:** Sky/Blue (`sky-500` for tech/transport vibes)
*   **Backgrounds:** `bg-slate-50` (Light), `bg-navy-800` (Dark)
*   **Gradients:** Used subtly in SVG icons to add depth.

### Layout & Spacing
*   **Vertical Rhythm:** Generous margins (`mb-6`, `mb-8`) to create "white space" luxury.
*   **Modules:** Content grouped into rounded cards (`rounded-xl`, `p-6`) with borders for containment.
*   **Responsiveness:** Full width on mobile, constrained max-width on desktop (via parent container).

### Accessibility (WCAG 2.1 AA)
*   **Contrast:** Text colors checked against backgrounds (e.g., `emerald-600` on `slate-50`).
*   **Semantic HTML:** Use of `<article>`, `<header>`, `<blockquote>`, `<ul>`.
*   **Icons:** `aria-label` or `role="img"` attributes preserved/added.

## 3. Technical Implementation Notes
*Developers guide to the changes.*

*   **File:** `src/pages/cities/dallas/page.tsx`
*   **Framework:** React + Tailwind CSS.
*   **New Dependencies:** None (uses existing project icons/styles).
*   **Scroll Anchors:** Implemented using CSS `scroll-margin-top` (`scroll-mt-24`) to account for fixed headers.
*   **Dark Mode:** Fully supported using Tailwind's `dark:` modifier.
*   **Maintenance:**
    *   To add a new section, copy the structure of an existing `<article id="...">`.
    *   Ensure `id`s are unique for navigation.
    *   Update the Table of Contents (if present in parent layout) to link to new anchors.

## 4. A/B Testing Variations
*Experiments to further optimize engagement.*

### Experiment A: Quick Summary Placement
*   **Current:** Below H3 header.
*   **Variation:** Above H3 header (as a "pre-read").
*   **Hypothesis:** Placing it above might increase engagement for users who scroll fast.

### Experiment B: Visual Placeholders
*   **Current:** Static placeholder boxes.
*   **Variation:** Replace with actual static images vs. interactive JS maps.
*   **Hypothesis:** Interactive maps increase time-on-page but might delay load (measure LCP).

### Experiment C: Pull Quote Styling
*   **Current:** Left border, transparent background.
*   **Variation:** Full-width colored background block with centered text.
*   **Hypothesis:** Heavier visual weight might stop scrollers more effectively.

### Experiment D: "Book Now" CTAs
*   **Current:** Informational "Booking Strategy" section.
*   **Variation:** Add sticky "Check Hotel Prices" button on mobile.
*   **Hypothesis:** Direct conversion path might increase affiliate revenue without compromising editorial integrity.
