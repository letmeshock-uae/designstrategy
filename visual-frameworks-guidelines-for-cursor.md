
# Visual Frameworks — Data & Concept Visualization Guidelines
## Agent Instructions for Cursor

This document defines strict rules for building clear, effective, and meaningful visualizations
based on visual frameworks and visual thinking principles (VisualFrameworks-style).

Use this as a system guideline when generating dashboards, charts, diagrams, or conceptual visuals.

---

## Core Principle

**One visualization = one clear insight.**
If multiple insights exist, split them into multiple visuals.

---

## 1. Define the Purpose Before Drawing Anything

### Rule
Always identify the single main question the visualization must answer.

### Instructions
- Write the insight in one sentence before choosing any visual form.
- If the insight cannot be expressed in one sentence, the visualization is not ready.

### Cursor Logic
```
IF core_insight is undefined:
    STOP
    request clarification
```

---

## 2. Match Visual Framework to Meaning

### Rule
The visual structure must naturally reflect the type of information.

### Framework Selection Guide

| Information Type | Recommended Framework |
|------------------|-----------------------|
| Sequence / time | Timeline |
| Comparison | Pros & Cons / Matrix |
| Relationship | Venn Diagram |
| Process | Flowchart |
| Progress | Journey / Milestones |
| Overview | Dashboard |
| Ambiguity | Mess / Cloud |

### Cursor Logic
```
SELECT framework WHERE framework.semantic_fit == data_type
```

---

## 3. Design for Instant Scanability

### Rule
The main insight must be visible within 3 seconds.

### Instructions
- Place the key element at top-center or visual focal point.
- Use size, weight, or color to emphasize it.
- Avoid dense labels or paragraphs.

### Cursor Logic
```
highlight(primary_insight)
reduce_secondary_noise()
```

---

## 4. Structure Complexity Into Familiar Shapes

### Rule
Never present raw complexity. Break it into known visual patterns.

### Instructions
- Group related elements using containers or shapes.
- Prefer multiple small visuals over one overloaded visual.
- Use grids, columns, or paths to guide reading order.

### Cursor Logic
```
IF content_density > threshold:
    split_into_modules()
```

---

## 5. Maintain Strong Visual Hierarchy

### Rule
The eye must know where to look first, second, and last.

### Instructions
- Primary elements: largest and highest contrast.
- Secondary elements: smaller, muted.
- Tertiary elements: minimal or contextual.

### Cursor Logic
```
apply_visual_hierarchy(primary, secondary, tertiary)
```

---

## 6. Use Metaphors Carefully and Precisely

### Rule
Metaphors help understanding but must map directly to the data.

### Instructions
- Use paths, loops, or layers only if data supports them.
- Do not decorate with metaphors that add no meaning.

### Cursor Logic
```
IF metaphor_used AND data_mapping is weak:
    remove_metaphor()
```

---

## 7. Encourage Interpretation and Exploration

### Rule
A good visualization invites thinking, not confusion.

### Instructions
- Leave space for annotations or highlights.
- In interactive contexts, allow filtering or focusing.
- Avoid over-explaining visually; clarity beats completeness.

### Cursor Logic
```
enable_exploration()
preserve_clarity()
```

---

## 8. Validate Against the Narrative

### Rule
A visualization must support the story being told.

### Instructions
- Try explaining the insight using only the visual.
- If explanation fails, redesign.

### Cursor Logic
```
IF visual_does_not_support_story:
    revise_layout()
```

---

## Final Checklist — Use Before Output

### Concept
- [ ] One clear insight identified
- [ ] Insight expressed in one sentence
- [ ] Correct framework selected

### Structure
- [ ] Visual form matches meaning
- [ ] Complexity broken into modules
- [ ] Familiar shapes used

### Clarity
- [ ] Main insight visible within 3 seconds
- [ ] Strong visual hierarchy applied
- [ ] No unnecessary decoration

### Usability
- [ ] Easy to scan
- [ ] Easy to explain verbally
- [ ] Supports narrative flow

### Integrity
- [ ] Metaphors are justified
- [ ] No misleading scales or emphasis
- [ ] Visualization answers the original question

---

## Enforcement Rules

- Never visualize before defining the insight.
- Never mix multiple frameworks without intent.
- Never prioritize aesthetics over understanding.
