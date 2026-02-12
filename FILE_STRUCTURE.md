# Portfolio Web — File Structure Plan

## Design Aesthetic (from reference)

- **Theme:** Futuristic Minimalist / Glassmorphism
- **Default:** Dark mode
- **Accent:** Neon green (`#00ff88`)
- **Vibe:** Professional but creative, clean typography, subtle micro-interactions
- **Layout:** 3D scene background + floating HTML overlay

---

## Tech Stack

| Layer    | Technology           |
|----------|----------------------|
| Framework| React 18 + Vite      |
| Language | TypeScript           |
| 3D Engine| React Three Fiber    |
| 3D Utils | @react-three/drei    |
| Styling  | Tailwind CSS         |
| Animation| Framer Motion        |

---

## Directory Structure

```
omu/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── public/
│   └── vite.svg
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── vite-env.d.ts
    └── components/
        ├── Experience.tsx    # Phase 2: 3D scene (Canvas, hero object, spotlight)
        └── Overlay.tsx       # Phase 3: UI overlay (Hero, TechStack, Projects, Contact)
```

---

## Phase Roadmap

### Phase 1 — Context Setup ✅
- [x] Vite + React + TypeScript
- [x] Dependencies: R3F, drei, Tailwind, Framer Motion
- [x] File structure and skeleton

### Phase 2 — 3D Hero Scene ✅
- [x] `Experience.tsx`: Canvas with `dpr={[1, 2]}`, Suspense fallback
- [x] Central 3D object (Icosahedron / particle cloud)
- [x] MeshDistortMaterial or custom shader
- [x] Float, spotlight following mouse
- [x] Background matching `#0a0a0a`

### Phase 3 — UI Overlay ✅
- [x] Hero: name, title, "View Work" CTA
- [x] Tech Stack: marquee/grid with icons
- [x] Projects: glassmorphism cards, hover → 3D feedback
- [x] Contact: minimal footer, social links
- [x] Framer Motion stagger on load

### Phase 4 — Polish ✅
- [x] Responsive 3D scaling on mobile
- [x] Custom scrollbar
- [x] Loading spinner in Suspense
- [x] Performance tuning

---

## Next Step

Run **Phase 2** in Composer:

> "Create a Experience.tsx component using React Three Fiber. Requirements: central 3D hero object (abstract/geometric), MeshDistortMaterial or custom shader, Float from drei, spotlight following mouse, background matching HTML."
