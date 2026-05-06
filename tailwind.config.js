/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      colors: {
        brand: {
          50: "#f8fbff",
          100: "#eef4ff",
          200: "#d8e6ff",
          300: "#b6d0ff",
          400: "#86b0ff",
          500: "#538bff",
          600: "#2e65ff",
          700: "#234fdb",
          800: "#1b3caa",
          900: "#122a77"
        }
      }
    }
  },
  plugins: []
};