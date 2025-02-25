/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        interTight: ["Inter Tight", "sans-serif"],
        editorsNoteNormal: ["editorsNoteNormal"],
        editorsNoteItalic: ["editorsNoteItalic"],
      },
      container: {
        center: true,
        padding: "1rem", // Optional padding for spacing
        screens: {
          DEFAULT: "100%", // Ensures the container does not inherit breakpoints
          "4xl": "1600px",
        },
      },
      screens: {
        xs: "360px",
        sm: "480px", // Small mobile devices
        md: "576px", // Tablets and small mobile screens
        lg: "768px", // Medium tablets and large phones
        xl: "992px", // Laptops or larger tablets
        "2xl": "1200px", // Standard desktop screens
        "3xl": "1500px", // Larger desktop displays
        "4xl": "1920px", // High-resolution or ultra-wide displays
      },
      colors: {
        primary: {
          DEFAULT: "#004265",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#1687C7",
          foreground: "hsl(var(--secondary-foreground))",
        },
        "text-black": "#252525",
        "text-gray": "#565656",
        "prmiary-blue": "#004265",
        "light-blue": "#1687C7",
        chocolate: "#643500",
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
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
