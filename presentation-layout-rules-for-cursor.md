
# Business Presentation Layout Rules
### Agent Instructions for Cursor

This document defines clear, reusable layout rules for building professional business presentation slides.
The agent must follow these rules strictly when placing content.

---

## General Rules (Apply to All Slides)

1. **Always segment content before layout**
   - Title
   - Supporting text / bullet points
   - Visuals (images, illustrations)
   - Data (charts, tables, metrics)

2. **Maintain strong visual hierarchy**
   - Primary message must be the most visually dominant element.
   - Secondary information must be visually subordinate.
   - Titles must be clearly separated from body content.

3. **Respect white space**
   - Never overcrowd slides.
   - Use consistent margins and gutters.
   - Empty space is part of the layout, not wasted space.

4. **One slide = one idea**
   - If multiple ideas appear, split into multiple slides.

---

## 1. Top / Bottom Layout

### When to use
- Title + explanation
- Hero visual with supporting text
- Introductory or explanatory slides

### Layout rules
- Divide slide horizontally into two zones:
  - Top: title or hero visual
  - Bottom: body text, bullets, or data
- Typical proportions: 30/70 or 40/60
- Hero visuals may slightly overlap sections for emphasis
- Optional background color or overlay to separate zones

### Cursor logic
```
IF slide_type == "TopBottom":
    place(title_or_hero) in top_area
    place(content) in bottom_area
    maintain consistent margins
```

---

## 2. Left / Right Layout

### When to use
- Text next to visuals
- Comparisons
- Feature explanations

### Layout rules
- Divide slide vertically into columns
- Common patterns:
  - Left: text / Right: visual
  - Left: visual / Right: text
- Can scale to 3–4 columns if content is modular
- Columns must be visually balanced

### Cursor logic
```
IF slide_type == "LeftRight":
    divide slide into vertical columns
    place content blocks per column
    maintain equal gutter spacing
```

---

## 3. Centre Layout

### When to use
- Key message or insight
- Statistics or quotes
- Emotional or strategic emphasis

### Layout rules
- Content is centered both horizontally and vertically
- Minimal text only
- Strong typographic emphasis
- Maximum clarity and focus

### Cursor logic
```
IF slide_type == "Centre":
    center_align(main_message)
    limit text to one core idea
    increase surrounding whitespace
```

---

## 4. Full-Screen Layout

### When to use
- Section openers
- Emotional transitions
- Visual storytelling

### Layout rules
- Image or visual fills entire slide
- Text is optional and minimal
- If text exists, place it top-center or bottom-center
- Visual quality must be high

### Cursor logic
```
IF slide_type == "FullScreen":
    set visual to full_slide
    IF text exists:
        position text minimally
```

---

## Advanced Layout Combinations

### Combo 1: Top/Bottom + Left/Right

**Use case:** complex informational slides

Rules:
- Top: title or summary
- Bottom: split into left/right columns

Cursor logic:
```
IF slide_complexity == "high":
    apply TopBottom layout
    subdivide bottom_area into LeftRight
```

---

### Combo 2: Left/Right + Top/Bottom

**Use case:** multi-section comparisons

Rules:
- Primary split is vertical
- Each column can have top/bottom hierarchy

Cursor logic:
```
IF multi_level_content:
    apply LeftRight layout
    subdivide columns into TopBottom
```

---

## Layout Selection Guide

| Situation | Layout |
|---------|--------|
| Title + explanation | Top / Bottom |
| Text + visuals | Left / Right |
| Single strong message | Centre |
| Visual emphasis | Full-Screen |

---

## Final Enforcement Rules

- Never mix layouts randomly.
- Every slide must follow one clear layout logic.
- Layout choice must be driven by content structure, not decoration.
