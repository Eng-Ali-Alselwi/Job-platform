# PROMPT_RULES.md
This file defines strict execution rules for the VS Code Agent.
The PROJECT_BLUEPRINT.md is the system reference.
This file defines execution behavior.

# IMPORTANT EXECUTION RULE
The agent MUST NOT:
- Start coding automatically after reading files
- Modify any file without explicit instruction
- Implement multiple sections at once
- Add features not mentioned in the prompt
- Refactor unrelated components.
The agent MUST wait for a section-specific prompt.

# CORE PRINCIPLE
One prompt = One section = One isolated implementation task
No cross-section modifications allowed.

# BOOTSTRAP RULE
Bootstrap is the primary UI system.
Always:
- Use Bootstrap components first
- Use Bootstrap utilities first
Never:
- Replace Bootstrap features with custom CSS
- Rebuild Bootstrap behavior manually

# CSS RULES
Allowed only when necessary:
- Layout enhancements not covered by Bootstrap
- Theme variables
- Animations
- Glass effects
- Gradients
STRICT RULES:
- No inline CSS
- No duplicate CSS
- No global overrides unless required
- Scope all custom styles per section
- Remove unused CSS per section
- Prefer Bootstrap utilities over custom styles

---

# JAVASCRIPT RULES

- Vanilla JS only
- No jQuery
- No inline JS
- Modular functions only
- Remove unused JS per section
- Do not modify unrelated scripts

# RESPONSIVE RULES
Every section MUST be fully responsive before completion.
Must support:
- Mobile (≤576px)
- Tablet (≤768px)
- Laptop (≤992px)
- Desktop (≤1200px+)
Strictly avoid:
- Horizontal scroll
- Overflow issues
- Broken grid alignment
- Misaligned components

# DARK / LIGHT MODE RULES
Every section MUST fully support both themes.
Verify:
- Background colors
- Text colors
- Borders
- Shadows
- Hover states
- Icons
Never break theme consistency.

# DESIGN SYSTEM RULE
Use existing variables from PROJECT_BLUEPRINT.
Do NOT introduce new design tokens unless explicitly requested.

# ICONS RULE
Use Bootstrap Icons only.
No external icon libraries unless explicitly approved.

# PERFORMANCE RULES
Each section must:
- Remove unused CSS
- Remove unused JS
- Avoid redundant DOM elements
- Avoid heavy animations
- Prefer Bootstrap utilities

# ACCESSIBILITY RULES
Every section must include:
- Semantic HTML
- Proper heading structure
- aria-labels where needed
- Keyboard navigation support
- Visible focus states

# SCOPE CONTROL (VERY IMPORTANT)
The agent must NOT:
- Modify Navbar when working on Hero
- Modify Hero when working on Services
- Modify Footer unless requested
- Change global layout unless instructed
Each section is fully isolated.

# FINAL CHECKLIST BEFORE COMPLETION
Before finishing any task:
✓ Section is responsive
✓ Dark mode works
✓ Light mode works
✓ No unused CSS remains
✓ No unused JS remains
✓ No layout breaks
✓ Bootstrap used where possible
✓ No changes outside scope