# Design System Document: The Living Canvas

## 1. Overview & Creative North Star

**Creative North Star: The Kinetic Editorial**
This design system moves away from the rigid, boxy constraints of traditional SaaS interfaces, favoring a "Living Canvas" approach. We treat the digital interface as a high-end editorial spread—where movement is implied, and elements breathe through generous white space and organic, fluid forms.

By utilizing punchy, energetic brand colors against a light and airy foundation, we create an environment that feels both professional and playfully avant-garde. We reject the "template" look. Instead of a grid that locks elements in place, we use intentional asymmetry, overlapping layers, and dramatic typographic scales to guide the user’s eye through a curated narrative experience.

---

## 2. Colors

Our palette is anchored by the tension between the energetic **Primary Blue (#1D57BA/004AAD)** and the soft, inviting **Secondary Pink (#923F63/F28EB5)**.

### The "No-Line" Rule

To maintain a premium, editorial feel, **1px solid borders for sectioning are strictly prohibited.** Boundaries between content areas must be defined solely through:

- **Background Color Shifts:** Moving from `surface` to `surface_container_low`.
- **Tonal Transitions:** Using subtle variations in the surface palette to signify a change in context.

### Surface Hierarchy & Nesting

Treat the UI as a series of physical layers—like stacked sheets of fine, semi-translucent paper.

- **Base:** `surface` (#F7F5FF) provides a cool, airy foundation.
- **Nesting:** Place a `surface_container_lowest` (#FFFFFF) card on top of a `surface_container_low` (#F0EFFF) section to create natural, soft depth. Each inner container should use a slightly higher or lower tier to define its priority without needing structural lines.

### The "Glass & Gradient" Rule

Flat color can often feel static. To inject "soul" into the interface:

- **Glassmorphism:** Use semi-transparent surface colors (e.g., `surface` at 80% opacity) with a `backdrop-blur` (16px–24px) for floating navigation bars or modal overlays.
- **Signature Textures:** For Hero sections or Primary CTAs, utilize a soft radial gradient transitioning from `primary` (#1D57BA) to `primary_container` (#739EFF). This adds a subtle "glow" that feels modern and high-end.

---

## 3. Typography

We use **Plus Jakarta Sans** across the entire system. Its modern, rounded terminals perfectly complement our organic shape language.

- **Display (Display LG/MD):** These are our "editorial moments." Use them sparingly for hero headers. Don't be afraid of tight letter-spacing (-2%) to make them feel like a cohesive graphic element.
- **Headlines & Titles:** Used for clear hierarchy. These should always be high-contrast against the body text to ensure the "Living Canvas" feels structured despite its fluidity.
- **Body (Body LG/MD):** Optimized for readability. Maintain a generous line-height to preserve the "airy" feel of the brand.
- **Labels:** Small but mighty. Use these for metadata or overlines, often in `tertiary` colors to add a punch of energy to functional text.

---

## 4. Elevation & Depth

In this system, depth is a result of light and layering, not artificial dividers.

### The Layering Principle

Depth is achieved by "stacking" the surface-container tiers. For instance, a floating action menu should sit on `surface_bright` to stand out against a `surface_dim` background.

### Ambient Shadows

When a "floating" effect is required, shadows must be **extra-diffused**:

- **Blur:** 40px to 60px.
- **Opacity:** 4%–8%.
- **Color:** Tint the shadow with `on_surface` (#252C51) rather than using pure black. This mimics natural ambient light and keeps the UI looking clean.

### The "Ghost Border" Fallback

If a border is absolutely necessary for accessibility (e.g., an input field), use a **Ghost Border**: the `outline_variant` token at 20% opacity. Never use 100% opaque, high-contrast borders.

---

## 5. Components

### Buttons

- **Primary:** Rounded `full` (9999px), using the `primary` to `primary_container` gradient. Text is `on_primary`.
- **Secondary:** `surface_container_high` background with `primary` text. No border.
- **Interaction:** On hover, buttons should scale slightly (1.02x) and the shadow should increase in diffusion, never in darkness.

### Chips

- **Organic Style:** Use `rounded-full` for all chips.
- **Filter Chips:** Use `secondary_container` for unselected states and `primary` for selected states to provide a punchy contrast.

### Cards

- **Styling:** No borders. Use `rounded-xl` (3rem) or `rounded-lg` (2rem) for a soft, pillowy feel.
- **Separation:** Forbid the use of divider lines. Separate card content using the **Spacing Scale** (e.g., a `6` (2rem) gap) or a subtle background shift to `surface_container_lowest`.

### Input Fields

- **Appearance:** A soft `surface_container` fill with `rounded-md` (1.5rem) corners.
- **Focus State:** Instead of a heavy border, use a subtle 2px glow of `primary_fixed` and a slight lift in elevation.

### Additional Component: The "Organic Blob" Decorator

To lean into the "Living Canvas" style, use non-functional background decorative elements using `secondary_fixed_dim` (#FFACCA) at low opacities (10-15%). These should be placed asymmetrically behind text or imagery to break the grid.

---

## 6. Do's and Don'ts

### Do

- **Do** use asymmetrical layouts where imagery overlaps text containers.
- **Do** utilize the `3rem` (xl) rounding for large containers to emphasize the "soft" brand identity.
- **Do** prioritize vertical white space over lines. If in doubt, add more padding.
- **Do** use the pink `secondary` tokens for "energetic" accents like notifications or highlight tags.

### Don't

- **Don't** use 1px solid borders. It kills the premium editorial feel.
- **Don't** use standard drop shadows. If it looks like a "box shadow" from 2015, it's too heavy.
- **Don't** crowd the interface. The "Living Canvas" requires breathing room to feel intentional.
- **Don't** use sharp corners. Everything must feel organic and touchable; the minimum radius for any container should be `sm` (0.5rem).
