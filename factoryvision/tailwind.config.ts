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
      backgroundColor: {
        main: "#FFF9E4",
        sub: "#F4BE96",
        btn: "#F78181",
      },
      width: {
        btn: "20.5rem",
      },
      height: {
        btn: "3.9375rem;",
      },
      borderColor: {
        btnborder: "rgba(255, 249, 228, 0.50);",
      },
      boxShadow: {
        modal: "0px 4px 4px 0px rgba(0, 0, 0, 0.25);",
      },
    },
  },
  plugins: [],
};
export default config;
