/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,tsx,ts}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--candi-background))",
        foreground: "hsl(var(--candi-foreground))",
        primary: {
          DEFAULT: "hsl(var(--candi-primary))",
          foreground: "hsl(var(--candi-primary-foreground))",
        },
      }
    },
  },
  plugins: [],
}
