import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
      fontFamily: {
        quicksand: [
          "Quicksand",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        sans: [
          "Quicksand",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
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
        // Silver Color Palette
        silver: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        // Metallic Silver Theme Colors
        metallic: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
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
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "pulse-metallic": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "metallic-shine": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "nebula-glow": {
          "0%, 100%": {
            textShadow:
              "0 0 20px rgba(79, 70, 229, 0.5), 0 0 40px rgba(79, 70, 229, 0.3), 0 0 60px rgba(79, 70, 229, 0.1)",
            transform: "scale(1)",
          },
          "50%": {
            textShadow:
              "0 0 30px rgba(79, 70, 229, 0.8), 0 0 60px rgba(79, 70, 229, 0.5), 0 0 90px rgba(79, 70, 229, 0.3)",
            transform: "scale(1.02)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s infinite",
        "gradient-shift": "gradient-shift 3s ease infinite",
        "pulse-metallic": "pulse-metallic 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "metallic-shine": "metallic-shine 3s ease-in-out infinite",
        "nebula-glow": "nebula-glow 4s ease-in-out infinite",
      },
      backgroundImage: {
        "metallic-gradient": "linear-gradient(135deg, #f8fafc 0%, #64748b 50%, #f8fafc 100%)",
        "metallic-radial": "radial-gradient(circle at center, rgba(148, 163, 184, 0.2) 0%, rgba(0, 0, 0, 0.9) 70%)",
        "glass-gradient": "linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%)",
        "nebula-gradient": "linear-gradient(135deg, #4f46e5 0%, #7c3aed 25%, #ec4899 50%, #f59e0b 75%, #10b981 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        metallic: "0 4px 20px rgba(148, 163, 184, 0.1), inset 0 1px 0 rgba(148, 163, 184, 0.2)",
        "metallic-lg": "0 10px 40px rgba(148, 163, 184, 0.15), inset 0 1px 0 rgba(148, 163, 184, 0.3)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(148, 163, 184, 0.1)",
        nebula: "0 0 50px rgba(79, 70, 229, 0.3), 0 0 100px rgba(124, 58, 237, 0.2)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
