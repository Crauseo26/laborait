---
description: Design System & Styling Validation Rules
---
// turbo-all

> **Trigger Hook**: Execute this workflow immediately after completing UI code changes, running parallel to the performance & SEO workflow. 

### 1. Style Token Verification (Agentic Check)
Tailwind v4 fails silently if a custom class is missing. Before committing any code, you MUST explicitly verify that your color tokens exist inside the master stylesheet.
1. Identify any custom semantic colors used in your newly written components (e.g., `bg-primary-800`, `text-secondary-hover`).
2. Verify that the corresponding variable (e.g., `--color-primary-800`) is explicitly declared inside the `@theme` block located in `src/app/globals.css`. 
3. If the token is missing, you must either add the missing CSS hex token, or refactor the component to use a pre-existing shade (e.g., `bg-primary-900`).

### 2. WCAG Contrast Assurance
Aesthetic bugs crush conversion rates. Ensure legibility at all times:
- **Light Themes (`bg-white`, `bg-neutral-50`)**: Text must use high-contrast dark shades (`text-neutral-900`, `text-primary-800`). Never map light text (`text-white`) or mid-grays (`text-neutral-300`) onto white backgrounds.
- **Dark Themes (`bg-primary-900`)**: Text must use light shades (`text-white`, `text-primary-100`).
- **Interactive States**: Validate that `hover:`, `active:`, or `focus:` variants do not flip the background to a state that destroys text contrast.

### 3. Responsive Proportions
- Confirm that mobile tap targets (CTAs, mobile menu bars, floating action buttons) have at least a `min-h-[44px]` height.
- Confirm horizontal lists implement `.scrollbar-hide` and snap-scrolling to prevent scroll fatigue.

### 4. Automated Lint Verification
Execute the project linter to guarantee no accessibility (`jsx-a11y`) DOM structure issues remain.
```bash
npm run lint
```
