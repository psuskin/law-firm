import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Marine - Simplified to 3 shades
        marine: {
          light: '#f0f6ff',    // Light shade for backgrounds
          DEFAULT: '#01274a',   // Main brand color
          dark: '#001b3d',     // Darker shade for emphasis
        },
        // Gold - Simplified to single brand color
        gold: '#ce092b',       // Brand gold color
        
        law: {
          light: '#f8fafc',     
          muted: '#64748b',     
          dark: '#1e293b',      
          background: '#ffffff', 
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      boxShadow: {
        'elegant': '0 4px 20px -2px rgba(1, 39, 74, 0.08)',
        'elegant-lg': '0 10px 40px -3px rgba(1, 39, 74, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
