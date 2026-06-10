import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // SHL Brand Colors
        primary: {
          DEFAULT: '#0A2342',
          50: '#E8EDF4',
          100: '#D1DBE9',
          200: '#A3B7D3',
          300: '#7593BD',
          400: '#476FA7',
          500: '#1A4B91',
          600: '#143B74',
          700: '#0F2C57',
          800: '#0A2342',
          900: '#061628',
          950: '#030B14',
        },
        secondary: {
          DEFAULT: '#F58220',
          50: '#FEF3E8',
          100: '#FDE7D1',
          200: '#FBCFA3',
          300: '#F9B775',
          400: '#F79F47',
          500: '#F58220',
          600: '#D06A0E',
          700: '#9C500B',
          800: '#683507',
          900: '#341B04',
          950: '#1A0D02',
        },
        accent: {
          DEFAULT: '#F4F7FA',
          50: '#FFFFFF',
          100: '#F4F7FA',
          200: '#E2EAF2',
          300: '#CDDCE9',
          400: '#B8CEE0',
          500: '#A3C0D7',
          600: '#7BA5C5',
          700: '#538AB3',
          800: '#3B6E93',
          900: '#2A4F69',
          950: '#1F3A4D',
        },
        // Semantic Colors
        success: {
          DEFAULT: '#10B981',
          light: '#D1FAE5',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FEF3C7',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#FEE2E2',
        },
        info: {
          DEFAULT: '#3B82F6',
          light: '#DBEAFE',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'heading-xl': ['1.875rem', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-lg': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-md': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-sm': ['1.125rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body-md': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'caption': ['0.75rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(10, 35, 66, 0.07), 0 10px 20px -2px rgba(10, 35, 66, 0.04)',
        'medium': '0 4px 25px -5px rgba(10, 35, 66, 0.1), 0 10px 30px -5px rgba(10, 35, 66, 0.07)',
        'hard': '0 10px 40px -10px rgba(10, 35, 66, 0.15), 0 20px 50px -10px rgba(10, 35, 66, 0.1)',
        'glow': '0 0 20px rgba(245, 130, 32, 0.3)',
        'card': '0 1px 3px rgba(10, 35, 66, 0.08), 0 4px 12px rgba(10, 35, 66, 0.05)',
        'card-hover': '0 4px 12px rgba(10, 35, 66, 0.12), 0 12px 28px rgba(10, 35, 66, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0A2342 0%, #1A4B91 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #F58220 0%, #F79F47 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0A2342 0%, #143B74 50%, #1A4B91 100%)',
        'gradient-card': 'linear-gradient(180deg, #FFFFFF 0%, #F4F7FA 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0A2342 0%, #061628 100%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
