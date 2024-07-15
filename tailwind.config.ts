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

      colors:{
        customPink: '#624353',
      },

      screens: {
        'custom-1080': {'min': '1080px'},
        'custom-940': {'max': '940px'},
        'custom-770': {'max': '770px'},
        'custom-535': {'max': '535px'},
        'custom-500': {'max': '500px'},
        'custom-420': {'max': '420px'},
        'custom-385': {'max': '385px'},
        'custom-355': {'max': '355px'},
        'custom-345': {'max': '330px'},

      },
    },
  },
  plugins: [],
};
export default config;