import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["'Roboto'", "system-ui"],
      urbanist: ["'Urbanist'", "system-ui"],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
