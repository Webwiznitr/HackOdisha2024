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

            colors: {
                customPink: "#624353",
            },

            screens: {
                xsm: "300px",
                "custom-1080": "1080px",
                "custom-940": "940px",
                "custom-770": "770px",
                "custom-535": "535px",
                "custom-500": "500px",
                "custom-420": "420px",
                "custom-385": "385px",
                "custom-355": "355px",
                "custom-345": "345px",
                'xl-custom': '1504px',
                '3xl/faq': '1760px',
                '4xl/faq': '1984px',
            },
              
            boxShadow: {
               'custom-black': '7px 7px 5px 0px rgba(0, 0, 0, 1)',
            },
        },
    },
    plugins: [],
};

export default config;
