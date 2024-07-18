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
      fontFamily: {
        inter: "var(--font-inter)",
        "dela-gothic": "var(--font-dela-gothic-one)",
        archivoBlack: "var(--archivo-black)",
        archivo: "var(--archivo)",
        oxanium: "var(--font-oxanium)",
    },
      colors:{
        customPink: '#624353',
      },

      screens: {
        'custom-1080': {'min': '1080px'},
        'custom-940': {'max': '940px'},
        'custom-850': {'max': '850px'},
        'custom-767': {'max': '767px'},
        'custom-590': {'max': '590px'},
        'custom-560': {'max': '560px'},
        'custom-500': {'max': '500px'},
        'custom-420': {'max': '420px'},
        'custom-320': {'max': '320px'},
        

      },
    },
  },
  plugins: [],
};
export default config;