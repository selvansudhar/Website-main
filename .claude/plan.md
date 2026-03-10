# Home Page Redesign Plan

## Current State
The Home page has 9 sections with a 2-column grid layout. It's functional but feels cluttered — the hero has too many floating badges, the illustration area is complex with overlapping SVGs, and sections don't flow cohesively. The "GenDude" reference in the CTA is a leftover from a previous brand.

## Redesign Goals
- Modern, clean, premium SaaS aesthetic
- Better visual hierarchy and whitespace
- Cohesive section flow with clear storytelling
- Mobile-first responsive design
- Keep existing images and design tokens

## New Section Structure (8 sections)

### 1. Hero (full-width, centered)
- Large centered headline: "Your life's work, powered by our life's work"
- Subtitle underneath
- Two CTA buttons centered (Get a Demo + Watch Video)
- Bot image below the CTAs with a subtle gradient glow behind it
- Clean, no floating badges — let the headline breathe

### 2. Trusted By / Social Proof Bar
- "Trusted by companies worldwide" with the highlights stats inline
- 4 stats in a horizontal row: 4+ Years, 50+ Projects, 25 SmartMates, 100% Satisfaction
- Light purple/accent background strip

### 3. Use Cases (horizontal scroll cards)
- Same 5 use cases but in a cleaner horizontal card layout
- Cards with icon + title + description, subtle border, hover lift

### 4. IVA Section (split layout)
- Left: IVA logo + stars animation (keep existing)
- Right: Title, description, CTA button
- Cleaner split instead of stacked centered layout

### 5. Agents Section (dark gradient banner)
- Keep existing dark gradient visual — it looks good
- Clean up the disc animation slightly

### 6. Enterprise Section (keep existing split layout)
- Already well-designed, keep as-is
- Just minor spacing/alignment cleanup

### 7. Privacy + Values (combined section)
- Privacy title + description on left, image on right (keep)
- Values cards below in 3-column grid (keep)
- Combine into one cohesive "Why Zynex" section

### 8. CTA Section (gradient background)
- Full-width gradient background (purple to blue)
- White text, centered headline
- White CTA button
- Fix "GenDude" → "Zynex"

## Files Modified
- `src/pages/Home.jsx` — restructured JSX
- `src/pages/Home.css` — complete CSS rewrite

## What Stays the Same
- All image imports and assets
- SEO component
- Design tokens and CSS variables
- Accessibility attributes (aria-hidden, etc.)
- fetchPriority="high" on hero bot image
- srcSet/sizes on enterprise image
