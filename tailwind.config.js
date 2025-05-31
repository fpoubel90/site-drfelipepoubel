/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme'); // Importa o tema padrão do Tailwind

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Define a fonte 'sans' padrão do Tailwind para usar a variável --font-geist-sans
        // e inclui as fontes sans-serif padrão do sistema como fallback.
        sans: ['var(--font-geist-sans)', ...defaultTheme.fontFamily.sans],
        // Se você adicionou GeistMono no layout.tsx com uma variável, poderia adicionar aqui:
        // mono: ['var(--font-geist-mono)', ...defaultTheme.fontFamily.mono],
      },
      // Você pode adicionar outras personalizações de tema aqui (cores, espaçamentos etc.)
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Ativa o plugin de tipografia
  ],
};