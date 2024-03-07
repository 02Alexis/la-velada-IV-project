import animations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#333",
        secondary: "#ddd",
        twitch: "#6441a4",
        ice: "var(--color-twitch-ice)",
      },
    },
  },
  plugins: [
    animations,
    function ({ addVariant }) {
      addVariant("any-hover", "@media (any-hover: hover) { &:hover }");
    },
  ],
};
