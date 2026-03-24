---
description: Performance and SEO Validation Rules
---
// turbo-all

1. Validate type-safety, accessibility standards (e.g., ARIA, image alt tags), and semantic HTML rules by running the built-in Next.js linter.
```bash
npm run lint
```

2. Execute the Next.js production build process to catch any rendering errors and generate the final output metrics.
```bash
npm run build
```

3. Critically evaluate the terminal output from the build command. You must explicitly verify that:
   - The **First Load JS** package size for all routes is strictly `< 100 kB`.
   - The application is correctly utilizing Static Site Generation (SSG) for high-performance delivery (represented by the `○` static icon).
   - No heavy third-party libraries have bloated the chunk sizes unexpectedly.

4. Check `layout.tsx` and `page.tsx` structural semantics. Ensure exactly one `<h1>` tag exists per main route, and that the Next.js `metadata` object is correctly populated with targeted Spanish/Uruguay localization tags.
