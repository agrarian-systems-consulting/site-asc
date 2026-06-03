/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Palette terroir FANTAS'SCIC
        'lentille-brune': '#673D34',   // texte / titres
        'terracotta': '#C75628',        // accent CTA
        'haricot-vert': '#405124',      // accent 2 / liens
        'lentille-corail': '#F89521',   // highlight
        'pois-chiche': '#F9B296',       // soft / hover
        'pois-casse': '#89956B',        // muted / illustrations
        'lin': '#F7F0E3',               // fond doux
        // Alias sémantiques
        ink: '#673D34',
        accent: '#C75628',
        muted: '#89956B',
      },
      fontFamily: {
        heading: ['"Source Serif 4"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        'prose': '68ch',
        'content': '1200px',
      },
    },
  },
  plugins: [],
};
