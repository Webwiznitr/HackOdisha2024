import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
         'custom-black': '7px 7px 5px 0px rgba(0, 0, 0, 1)',
      },
      screens: {
        'xl-custom': '1504px',
        '3xl/faq': '1760px',
        '4xl/faq': '1984px',
      },
    },
    
  },
  plugins: [],
};
export default config;
