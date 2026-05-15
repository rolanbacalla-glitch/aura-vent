tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#00685f",
                "primary-fixed": "#89f5e7",
                "primary-fixed-dim": "#6bd8cb",
                "on-primary-fixed-variant": "#005049",
                "on-primary-fixed": "#00201d",
                "primary-container": "#008378",
                "on-primary-container": "#f4fffc",
                "secondary": "#4059aa",
                "secondary-fixed": "#dce1ff",
                "secondary-fixed-dim": "#b6c4ff",
                "secondary-container": "#8fa7fe",
                "on-secondary-container": "#1d3989",
                "tertiary": "#924628",
                "tertiary-fixed": "#ffdbce",
                "tertiary-fixed-dim": "#ffb59a",
                "tertiary-container": "#b05e3d",
                "on-tertiary-container": "#fffbff",
                "background": "#f8f9ff",
                "surface": "#f8f9ff",
                "on-surface": "#121c2a",
                "on-surface-variant": "#3d4947",
                "surface-variant": "#d9e3f6",
                "surface-bright": "#f8f9ff",
                "surface-dim": "#d0dbed",
                "surface-container-lowest": "#ffffff",
                "surface-container-low": "#eff4ff",
                "surface-container": "#e6eeff",
                "surface-container-high": "#dee9fc",
                "surface-container-highest": "#d9e3f6",
                "outline": "#6d7a77",
                "outline-variant": "#bcc9c6",
                "error": "#ba1a1a",
                "error-container": "#ffdad6",
                "on-error": "#ffffff",
                "on-error-container": "#93000a",
                "inverse-surface": "#27313f",
                "inverse-on-surface": "#eaf1ff",
                "inverse-primary": "#6bd8cb"
            },
            spacing: {
                "margin-mobile": "20px",
                "section-gap": "120px",
                "unit": "8px",
                "container-max": "1280px",
                "margin-desktop": "64px",
                "gutter": "32px"
            },
            fontFamily: {
                headline: ["Hanken Grotesk", "sans-serif"],
                body: ["IBM Plex Sans", "sans-serif"]
            },
            fontSize: {
                "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
                "display-lg-mobile": ["36px", { lineHeight: "42px", letterSpacing: "-0.01em", fontWeight: "700" }],
                "headline-md": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "600" }],
                "headline-sm": ["24px", { lineHeight: "32px", fontWeight: "600" }],
                "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
                "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
                "label-technical": ["12px", { lineHeight: "16px", letterSpacing: "0.08em", fontWeight: "600" }],
                "button": ["14px", { lineHeight: "20px", letterSpacing: "0.02em", fontWeight: "700" }]
            },
            backgroundImage: {
                'gradient-premium': 'linear-gradient(135deg, #00685f 0%, #008378 100%)',
                'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
            }
        }
    }
}
