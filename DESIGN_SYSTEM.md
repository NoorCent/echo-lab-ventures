# NexusForge Portfolio — Design System

Dark-first, minimal, high-end developer portfolio. Goal: recruiters pause 10 seconds. Feel: **elite, intentional, structured, calm but powerful.**

---

## Color Palette (Hex)

| Role | Hex | Usage |
|------|-----|--------|
| **Background** | `#0a0c10` | Page background (deep, not pure black) |
| **Surface** | `#111318` | Cards, nav background on scroll |
| **Surface elevated** | `#181b22` | Hover states, elevated cards |
| **Border** | `#1e2128` | Dividers, card borders |
| **Border subtle** | `#252830` | Optional lighter borders |
| **Text** | `#f2f1ef` | Primary copy (warm white) |
| **Text muted** | `#6b7280` | Secondary copy, labels |
| **Text subtle** | `#4b5563` | Placeholders, tertiary |
| **Accent** | `#c9a227` | Primary CTA, links, focus, key highlights (warm gold) |
| **Accent hover** | `#d4af37` | Hover state for accent |
| **Accent soft** | `rgba(201, 162, 39, 0.08)` | Subtle backgrounds, selection |

Single accent (gold) — no rainbow. Confident and premium.

---

## Typography (Google Fonts)

- **Headings:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) — 600 (Semibold), 700 (Bold). Structured, modern, not playful.
- **Body:** [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3) — 400, 500, 600. Neutral, readable, professional.

Scale (Tailwind-style):
- **Display:** 3.5rem–4rem (hero name/title)
- **H1:** 2.25rem–3rem
- **H2:** 1.875rem–2.25rem (section titles)
- **H3:** 1.25rem–1.5rem
- **Body:** 1rem (16px), line-height 1.6–1.7
- **Small / labels:** 0.875rem, letter-spacing 0.05em for ALL CAPS labels

---

## Spacing & Grid

- **Base unit:** 8px. Scale: 8, 16, 24, 32, 48, 64, 96, 128 (px).
- **Section padding (vertical):** 96px (mobile), 128px (desktop). Generous breathing room.
- **Container:** max-width 1120px, horizontal padding 24px (mobile), 48px (desktop). Centered.
- **Gap between elements:** 16–24px in cards, 32–48px between sections.

---

## Animation Philosophy

- **Respect `prefers-reduced-motion`:** No or minimal motion when user prefers reduced motion.
- **Entrances:** Fade-in + slight Y (16–24px). Duration 0.6–0.8s. Easing: `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-expo). Trigger once on scroll (viewport 10% visible).
- **Hover:** Subtle only. Buttons: opacity or border change, no large scale. Cards: 1–2px border shift or 2% brightness. Duration 0.2–0.25s.
- **No bouncy or playful easing.** No confetti, no rainbow gradients.
- **Micro-interactions:** Link underlines (width 0 → 100%), focus ring (2px accent), selection color (accent soft).

---

## Section-by-Section (Visual)

### 1. Hero
- Full viewport height (100dvh). Content vertically centered.
- **Content:** One line: “NexusForge” (or name) in display size. One line under: “Backend & Full-Stack Engineering” or tagline. One short sentence: “We build systems that scale.” or similar. Two links: “View work” (primary) and “Contact” (ghost/outline).
- **Background:** Solid `#0a0c10`. Optional: single thin horizontal line or gradient line at bottom. No orbs, no mesh, no noise.
- **Typography:** Plus Jakarta Sans, bold. Muted tagline. Plenty of whitespace.

### 2. Work (Portfolio)
- Section label: “Work” in small caps, letter-spacing. Title: “Selected projects” or “Projects.”
- **Layout:** List or grid of project cards. Each card: project name (heading), role/context, tech stack (text, not big icons), “View” or “Case study” link. Optional: one subtle thumbnail or placeholder.
- **Cards:** Surface `#111318`, border `#1e2128`. Padding 24–32px. Hover: border lightens slightly or subtle elevation. No heavy shadows.

### 3. About
- Section label + title: “About” / “Who we are” or “Backend-first, full-stack.”
- **Layout:** One or two columns. Short bio (3–5 lines). Optional: bullet list of focus areas (APIs, databases, reliability, etc.). No big avatars unless minimal (small, round).
- **Tone:** Confident, concise. “We build backend systems and full-stack products. Focus on clarity, performance, and maintainability.”

### 4. Skills (Stack)
- Section label + title: “Stack” or “Technologies.”
- **Layout:** Grouped by category: Backend, Frontend, Data, DevOps, etc. Pills or simple text list. No childish icons — text only or very minimal icons. Muted text, accent on category labels.

### 5. Process
- Section label + title: “Process” or “How we work.”
- **Layout:** Numbered steps (01, 02, 03, 04). Minimal: title + one line each. Vertical timeline with thin line or simple list. No big icons — numbers or minimal dots.

### 6. Contact
- Section label + title: “Contact” / “Get in touch.”
- **Content:** Email, GitHub, LinkedIn (text links or minimal buttons). Optional: one-line form (email only) or “Open to opportunities” CTA. Single primary button: “Email us” or “Get in touch.”
- **Background:** Same as page or one step elevated (surface). No loud CTA box.

### 7. Footer
- Thin top border. Logo/name + one line. Links: Work, About, Contact, GitHub, LinkedIn. Copyright. Minimal. Same text-muted.

---

## Premium Touches (Top 1%)

1. **Focus visible:** All interactive elements have 2px outline in accent when focused (keyboard). No outline: none without replacement.
2. **Selection:** `::selection` background `rgba(201, 162, 39, 0.2)`, text color inherit.
3. **Smooth scroll:** `scroll-behavior: smooth` for anchor links.
4. **Reduced motion:** `@media (prefers-reduced-motion: reduce)` — animations duration 0.01ms or opacity-only.
5. **Small caps labels:** Section labels in uppercase, letter-spacing 0.08em–0.1em, font-weight 600.
6. **Consistent radius:** 8px (or 6px) for cards and buttons. No pills unless for tags.
7. **Borders:** 1px only. No thick borders.
8. **No drop shadows** on cards by default; optional 0 1px 0 rgba(0,0,0,0.05) for elevation on hover.
9. **Link underlines:** Underline appears on hover (transform or width), accent color.
10. **Body line-height:** 1.65 for readability.

---

## File / Component Map

- `index.css` — CSS variables (hex → HSL where needed for Tailwind), base styles, selection, focus, reduced-motion.
- `tailwind.config.ts` — Colors, fonts, spacing, keyframes (fade-up, etc.).
- `Index.tsx` — Single page: Navbar, Hero, Work, About, Skills, Process, Contact, Footer.
- Components: `Navbar`, `Hero`, `WorkSection`, `AboutSection`, `SkillsSection`, `ProcessSection`, `ContactSection`, `Footer`.

Old sections removed: Testimonials, WhyUs, CTASection (merged into Contact). Services merged into “Work” or “Stack” as needed.
