/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        smoothPulse: {
          "0%": { transform: "scale(0.8)", opacity: "0.4" },
          "50%": { transform: "scale(1.3)", opacity: "1" },
          "100%": { transform: "scale(0.8)", opacity: "0.4" },
        },
      },
      animation: {
        smoothPulse: "smoothPulse 2s ease-in-out infinite",
      },

      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Open Sans", "system-ui", "sans-serif"],
        "open-runde": ["Open Runde", "Open Sans", "system-ui", "sans-serif"],
      },
       boxShadow: {
        fancy: "inset 0 0 20px 1.64px rgba(255,255,255,0.15), 0 0.84px 0.5px -0.3px rgba(0,0,0,0.13), 0 1.99px 1.19px -0.62px rgba(0,0,0,0.13), 0 3.63px 2.17px -0.93px rgba(0,0,0,0.13), 0 6.03px 3.62px -1.25px rgba(0,0,0,0.13), 0 9.74px 5.84px -1.56px rgba(0,0,0,0.13), 0 15.95px 9.57px -1.87px rgba(0,0,0,0.13), 0 27.47px 16.48px -2.18px rgba(0,0,0,0.13), 0 50px 30px -2.5px rgba(0,0,0,0.13)",
        'fancy-hover': `inset 0px 0px 20px 1.64px rgba(255, 255, 255, 0.4), 0px 0.839802px 0.503881px -0.3125px rgba(38, 154, 255, 0.13), 0px 1.99048px 1.19429px -0.625px rgba(38, 154, 255, 0.13), 0px 3.63084px 2.1785px -0.9375px rgba(38, 154, 255, 0.13), 0px 6.03627px 3.62176px -1.25px rgba(38, 154, 255, 0.13), 0px 9.74808px 5.84885px -1.5625px rgba(38, 154, 255, 0.13), 0px 15.9566px 9.57398px -1.875px rgba(38, 154, 255, 0.13), 0px 27.4762px 16.4857px -2.1875px rgba(38, 154, 255, 0.13), 0px 50px 30px -2.5px rgba(38, 154, 255, 0.13)`,
        framebtnShadow: "rgba(0, 0, 0, 0.26) 0px 0.636953px 1.14652px -1.125px, rgba(0, 0, 0, 0.24) 0px 1.9316px 3.47689px -2.25px, rgba(0, 0, 0, 0.192) 0px 5.10612px 9.19102px -3.375px, rgba(0, 0, 0, 0.03) 0px 16px 28.8px -4.5px",
        'profile-glow': `
          rgba(0, 0, 0, 0.06) 0px 0.839802px 0.419901px -0.21875px,
          rgba(0, 0, 0, 0.06) 0px 1.99048px 0.99524px -0.4375px,
          rgba(0, 0, 0, 0.06) 0px 3.63084px 1.81542px -0.65625px,
          rgba(0, 0, 0, 0.06) 0px 6.03627px 3.01813px -0.875px,
          rgba(0, 0, 0, 0.07) 0px 9.74808px 4.87404px -1.09375px,
          rgba(0, 0, 0, 0.07) 0px 15.9566px 7.97832px -1.3125px,
          rgba(0, 0, 0, 0.08) 0px 27.4762px 13.7381px -1.53125px,
          rgba(0, 0, 0, 0.1) 0px 50px 25px -1.75px
        `,
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".mask-gradient-b": {
          "-webkit-mask":
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%) add",
          "mask":
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%) add",
        },
        /* top overlay mask */
        ".mask-gradient-t": {
          "-webkit-mask":
            "linear-gradient(180deg, rgba(0,0,0,1) 11%,  rgba(0,0,0,0) 100%) add",
          "mask":
            "linear-gradient(180deg, rgba(0,0,0,1) 11%, rgba(0,0,0,0) 100%) add",
        },
      });
    }),
  ],
};
