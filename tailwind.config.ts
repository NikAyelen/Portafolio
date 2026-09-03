import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Paleta proporcionada por Nikte ──────────────────────────
        honeydew: '#F0F7EA', // fondo principal, muy claro
        cornsilk: '#FFFAE0', // fondo secundario / paneles
        vanilla: '#EEE59F', // acento amarillo suave (badges, highlights)
        willow: '#AAD480', // verde medio (bordes, acentos secundarios)
        emerald: '#75C97F', // verde principal (botones, links, acentos)
        // ── Tonos oscuros de apoyo (no venían en la paleta, se
        //    agregaron solo para que el texto tenga contraste legible
        //    sobre los tonos pastel de arriba) ─────────────────────
        ink: '#25402B', // texto principal, verde muy oscuro
        'ink-muted': '#5C6F5E', // texto secundario
        forest: '#2F5D3A', // verde oscuro para fondos de contraste (CTA/footer)
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
