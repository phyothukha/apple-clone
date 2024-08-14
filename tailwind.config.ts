import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        iphone: "url(/applebg.svg)",
        ipad: "url(https://www.apple.com/v/home/bp/images/heroes/ipad-pro/hero_ipadpro__bpt7a9d8sh42_mediumtall_2x.jpg)",
        macbookair:
          "url(https://www.apple.com/v/home/bp/images/promos/macbook-air-m3/promo_macbook_air_m3__e43jegok3wuq_large_2x.jpg)",

        appleIntelligence:
          "url(https://www.apple.com/v/home/bp/images/promos/apple-intelligence/promo_ai__couihqxznyvm_large_2x.jpg)",
        visionPro:
          "url(https://www.apple.com/v/home/bp/images/promos/apple-vision-pro/promo_apple_vision_pro__f4v4zp0sum2y_large_2x.jpg)",
        watch:
          "url(https://www.apple.com/v/home/bp/images/promos/apple-watch-series-9/promo_apple_watch_series_9_order__b3u85rm9zf6u_large_2x.jpg)",
        card: "url(https://www.apple.com/v/home/bp/images/promos/apple-card/promo_apple_card__5cm7draujpey_medium_2x.jpg)",
        card2:
          "url(https://www.apple.com/v/home/bp/images/promos/apple-card/promo_apple_card__5cm7draujpey_large_2x.jpg)",
        tradeIn:
          "url(https://www.apple.com/v/home/bp/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_medium_2x.jpg)",
      },

      colors: {
        // title: "#0000004D",
        title: "#6B7280", //#3d0075
        section: "#f5f5f7",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [addVariablesForColors],
} satisfies Config;

export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );
  addBase({
    ":root": newVars,
  });
}
