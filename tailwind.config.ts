import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '330px',
      // => @media (min-width: 375px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

   

    extend: {
      fontFamily: {
        bungee: ['Bungee'],
        exo: ['Exo 2'],
        prompt: ['Prompt']
      },

      colors: {
        'negroOscuro': '#1E2022',
        'negroClaro': '#34373B',
        'grisMedio' : '#788189',
        'blancoOpaco': '#E1E4E6',
        'blancoClaro': '#F0F5F9',
        'grisClaro': '#C9D6DF',
        'grisBajoMedio': '#BFC7D1',
        'grisOscuro': '#52616B',

        // modo oscuro
        'morado': '#6A00FF',
        'purpura': '#A64AFF',
        'rosa': '#FFB1FF',
        'aqua': '#00E5FF',
        'aquaOscuro': '#00829B',
        'Negro1A': '#1A1A1A',
        "negroMedio": "#292929",
        'negro40':'#404040',
        'blanco':'#FFFFFF',
        'gris':'#E0E0E0',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transformOrigin: {
        'bottom': 'bottom',
      },
    },
  },
  plugins: [],
};
export default config;
