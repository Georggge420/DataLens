import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'negroOscuro': '1E2022',
        'negroClaro': '#34373B',
        'grisMedio' : '788189',
        'blancoOpaco': 'E1E4E6',
        'blancoClaro': '#F0F5F9',
        'grisClaro': '#C9D6DF',
        'grisBajoMedio': '#BFC7D1',
        'grisOscuro': '#52616B',
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
