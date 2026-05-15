---
name: Aura Vent Technical Identity
colors:
  surface: '#f8f9ff'
  surface-dim: '#d0dbed'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dee9fc'
  surface-container-highest: '#d9e3f6'
  on-surface: '#121c2a'
  on-surface-variant: '#3d4947'
  inverse-surface: '#27313f'
  inverse-on-surface: '#eaf1ff'
  outline: '#6d7a77'
  outline-variant: '#bcc9c6'
  surface-tint: '#006a61'
  primary: '#00685f'
  on-primary: '#ffffff'
  primary-container: '#008378'
  on-primary-container: '#f4fffc'
  inverse-primary: '#6bd8cb'
  secondary: '#4059aa'
  on-secondary: '#ffffff'
  secondary-container: '#8fa7fe'
  on-secondary-container: '#1d3989'
  tertiary: '#924628'
  on-tertiary: '#ffffff'
  tertiary-container: '#b05e3d'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#89f5e7'
  primary-fixed-dim: '#6bd8cb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#005049'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b6c4ff'
  on-secondary-fixed: '#00164e'
  on-secondary-fixed-variant: '#264191'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb59a'
  on-tertiary-fixed: '#370e00'
  on-tertiary-fixed-variant: '#773215'
  background: '#f8f9ff'
  on-background: '#121c2a'
  surface-variant: '#d9e3f6'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-technical:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
  button:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.02em
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

The design system for this residential ventilation contractor is built upon the pillars of **Mechanical Precision** and **Atmospheric Clarity**. It moves away from the soft, approachable tropes of modern SaaS and instead embraces a **Premium Industrial** aesthetic that signals expertise, durability, and technical mastery.

The visual language is characterized by sharp edges, architectural alignment, and a "blueprints-to-build" philosophy. It evokes the feeling of a high-end engineering firm—meticulous, organized, and uncompromising on quality. By utilizing generous whitespace and a rigid structural grid, the system communicates a sense of fresh air and professional breathing room, essential for a business centered on ventilation.

## Colors

The palette is rooted in a high-contrast, professional range that mirrors technical documentation. 

- **Deep Teal (#0D9488):** Representing precision and controlled airflow, used for primary actions and technical highlights.
- **Navy Blue (#1E3A8A):** Used sparingly for secondary accents to anchor the brand in traditional engineering and contractor reliability.
- **Deep Charcoal (#1F2937):** The primary color for typography and structural iconography, ensuring maximum legibility and a "heavy-duty" feel.
- **Cool Gray (#F9FAFB):** A bright, airy background that prevents the industrial aesthetic from feeling heavy or claustrophobic.
- **Technical Slate (#E5E7EB):** Used for 1px lines, grid dividers, and component borders to create a blueprint-inspired structure.

## Typography

The typography strategy pairs **Hanken Grotesk** for impactful, sharp-edged headlines with **IBM Plex Sans** for technical body content. 

- **Headlines:** Set with tight letter-spacing and heavy weights to command authority.
- **Body:** IBM Plex Sans provides a systematic, engineered feel that is highly legible in long-form technical descriptions.
- **Technical Labels:** Small, uppercase labels with increased letter-spacing are used for categorization, spec-sheets, and metadata, mimicking the annotations found on architectural drawings.

## Layout & Spacing

This design system utilizes a **Fixed 12-Column Grid** on desktop and a **4-Column Grid** on mobile. The spacing philosophy is built on an 8px base unit, but emphasizes "Generous Whitespace" to symbolize air circulation.

- **Grid:** All components align strictly to the 12-column layout. Containers do not use rounded corners, emphasizing the rigid "as-built" nature of the work.
- **Gaps:** Large vertical gaps (120px+) between sections are encouraged to create a premium, unhurried browsing experience.
- **Technical Lines:** Sections are often separated by 1px solid horizontal lines in Technical Slate (#E5E7EB) rather than color shifts, maintaining a clean, blueprint-like appearance.

## Elevation & Depth

In keeping with the "Modern Contractor" style, this design system **avoids all shadows and glowing effects.** Depth is conveyed through **Tonal Layering** and **Technical Borders**:

1.  **Level 0 (Floor):** The Neutral Light (#F9FAFB) background.
2.  **Level 1 (Surface):** White (#FFFFFF) surfaces used for cards and forms, defined by a 1px solid border (#E5E7EB).
3.  **Inlays:** Subtle use of very light gray backgrounds for input fields or code-block-style technical specs to "recess" them into the surface.
4.  **Interaction:** On hover, a surface does not lift with a shadow; instead, its border color shifts to the Primary Teal or a subtle 1px inner stroke is added to indicate focus.

## Shapes

The shape language is strictly **Geometric and Orthogonal**. 

- **Corners:** Every element—from buttons and input fields to service cards and images—features **0px (Sharp) corners**. This reinforces the industrial, contractor-centric identity and suggests precision-cut materials.
- **Icons:** Should be stroke-based (2px weight), using right angles and technical symbols where possible. Avoid "blobby" or overly stylized illustrative icons.

## Components

### Service Cards
Rectangular blocks with a 1px border. They include a "Technical Label" at the top (e.g., "SPEC: MVHR INSTALLATION"), followed by a sharp-edged image or technical icon, a headline, and a text-based link with a right-arrow glyph. No hover shadows; only border-color changes.

### Trust Badges
Presented as a monochromatic "technical strip." Logos of accrediting bodies (e.g., NICEIC, BESA) should be treated in Deep Charcoal or Navy Blue to maintain a unified, high-end look.

### Testimonial Blocks
Quote text is set in Hanken Grotesk Semi-Bold. Instead of a profile picture, testimonials are anchored by a vertical 2px Deep Teal line on the left, resembling a pull-quote from a professional journal.

### FAQ Accordions
Sharp-edged containers with a 1px bottom border. The "plus" and "minus" icons are simple 1px lines. When expanded, the background of the header remains neutral to maintain a clean, document-like flow.

### High-Conversion Forms
Input fields feature 1px solid borders and sharp corners. Labels are positioned above the field using the "label-technical" type style. The primary "Request Quote" button is a solid Deep Teal block with white, bold, uppercase text, stretching the full width of the form container on mobile.

### Progress Indicators
For multi-step processes (e.g., "The Aura Way"), use a horizontal technical line with "stations" or nodes, reminiscent of a mechanical diagram or schematic.