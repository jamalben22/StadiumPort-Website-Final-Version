
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'display': ['Oswald', 'sans-serif'], // Updated to Oswald for aggressive sports style
        'oswald': ['Oswald', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'luxury': ['Cormorant Garamond', 'serif'],
        'modern': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#01b47d', // Updated to Brand Color
        brand: '#01b47d', // Brand Color
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#0b1426',
          950: '#050a14',
        },
        emerald: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#00b87c',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#0f3730',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#f4c430',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#5a2d0a',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#2d3748',
          900: '#1e293b',
          950: '#0f172a',
        },
        platinum: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        crystal: {
          50: '#fefefe',
          100: '#fdfdfd',
          200: '#fafafa',
          300: '#f7f7f7',
          400: '#f0f0f0',
          500: '#e8e8e8',
          600: '#d1d1d1',
          700: '#b4b4b4',
          800: '#8a8a8a',
          900: '#6a6a6a',
        },
        diamond: {
          50: '#ffffff',
          100: '#fefefe',
          200: '#fcfcfc',
          300: '#f9f9f9',
          400: '#f5f5f5',
          500: '#f0f0f0',
          600: '#e8e8e8',
          700: '#d8d8d8',
          800: '#c0c0c0',
          900: '#a0a0a0',
        },
        aurora: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down': 'slideDown 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left': 'slideLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right': 'slideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-out': 'scaleOut 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient-x': 'gradientX 3s ease infinite',
        'gradient-y': 'gradientY 3s ease infinite',
        'bounce-soft': 'bounceSoft 2s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'reveal': 'reveal 1s cubic-bezier(0.16, 1, 0.3, 1)',
        'blur-in': 'blurIn 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'morph': 'morph 4s ease-in-out infinite',
        'levitate': 'levitate 8s ease-in-out infinite',
        'aurora': 'aurora 6s ease-in-out infinite',
        'crystalline': 'crystalline 3s ease-in-out infinite',
        'diamond-shine': 'diamondShine 2s linear infinite',
        'liquid-flow': 'liquidFlow 4s ease-in-out infinite',
        'magnetic': 'magnetic 2s ease-in-out infinite',
        'holographic': 'holographic 3s linear infinite',
        'quantum': 'quantum 5s ease-in-out infinite',
        'ethereal': 'ethereal 4s ease-in-out infinite',
        'prismatic': 'prismatic 6s linear infinite',
        'nebula': 'nebula 8s ease-in-out infinite',
        'cosmic': 'cosmic 10s linear infinite',
        'ultra-glow': 'ultraGlow 2s ease-in-out infinite alternate',
        'hyper-pulse': 'hyperPulse 1.5s ease-in-out infinite',
        'matrix': 'matrix 3s linear infinite',
        'cyber-glow': 'cyberGlow 2s ease-in-out infinite alternate',
        'neon-flicker': 'neonFlicker 0.5s ease-in-out infinite alternate',
        'plasma': 'plasma 4s ease-in-out infinite',
        'energy-wave': 'energyWave 3s ease-in-out infinite',
        'dimensional': 'dimensional 5s ease-in-out infinite',
        'time-warp': 'timeWarp 6s ease-in-out infinite',
        'stellar': 'stellar 7s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        scaleOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.9)' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 30px rgba(0, 184, 124, 0.4), 0 0 60px rgba(0, 184, 124, 0.2)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 50px rgba(0, 184, 124, 0.6), 0 0 100px rgba(0, 184, 124, 0.3)',
            transform: 'scale(1.02)'
          },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        gradientY: {
          '0%, 100%': { backgroundPosition: '50% 0%' },
          '50%': { backgroundPosition: '50% 100%' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        blurIn: {
          '0%': { filter: 'blur(10px)', opacity: '0' },
          '100%': { filter: 'blur(0px)', opacity: '1' },
        },
        glowPulse: {
          '0%': { 
            boxShadow: '0 0 20px rgba(244, 196, 48, 0.5), inset 0 0 20px rgba(244, 196, 48, 0.1)' 
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(244, 196, 48, 0.8), inset 0 0 30px rgba(244, 196, 48, 0.2)' 
          },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        levitate: {
          '0%, 100%': { transform: 'translateY(0px) rotateX(0deg)' },
          '50%': { transform: 'translateY(-20px) rotateX(5deg)' },
        },
        aurora: {
          '0%, 100%': { 
            background: 'linear-gradient(45deg, #00b87c, #2dd4bf, #0ea5e9)',
            transform: 'rotate(0deg) scale(1)'
          },
          '33%': { 
            background: 'linear-gradient(45deg, #2dd4bf, #0ea5e9, #8b5cf6)',
            transform: 'rotate(120deg) scale(1.1)'
          },
          '66%': { 
            background: 'linear-gradient(45deg, #0ea5e9, #8b5cf6, #00b87c)',
            transform: 'rotate(240deg) scale(0.9)'
          },
        },
        crystalline: {
          '0%, 100%': { 
            filter: 'hue-rotate(0deg) brightness(1) contrast(1)',
            transform: 'scale(1)'
          },
          '50%': { 
            filter: 'hue-rotate(180deg) brightness(1.2) contrast(1.1)',
            transform: 'scale(1.05)'
          },
        },
        diamondShine: {
          '0%': { 
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.8) 50%, transparent 70%)',
            transform: 'translateX(-100%)'
          },
          '100%': { 
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.8) 50%, transparent 70%)',
            transform: 'translateX(100%)'
          },
        },
        liquidFlow: {
          '0%, 100%': { 
            clipPath: 'polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%)'
          },
          '50%': { 
            clipPath: 'polygon(0% 60%, 16% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%)'
          },
        },
        magnetic: {
          '0%, 100%': { 
            transform: 'translateX(0) translateY(0) rotate(0deg)',
            filter: 'hue-rotate(0deg)'
          },
          '25%': { 
            transform: 'translateX(5px) translateY(-5px) rotate(1deg)',
            filter: 'hue-rotate(90deg)'
          },
          '50%': { 
            transform: 'translateX(-5px) translateY(5px) rotate(-1deg)',
            filter: 'hue-rotate(180deg)'
          },
          '75%': { 
            transform: 'translateX(5px) translateY(5px) rotate(1deg)',
            filter: 'hue-rotate(270deg)'
          },
        },
        holographic: {
          '0%, 100%': { 
            background: 'linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0)',
            filter: 'hue-rotate(0deg) saturate(1)'
          },
          '33%': { 
            background: 'linear-gradient(45deg, #ff8c00, #40e0d0, #8a2be2)',
            filter: 'hue-rotate(120deg) saturate(1.2)'
          },
          '66%': { 
            background: 'linear-gradient(45deg, #40e0d0, #8a2be2, #ff0080)',
            filter: 'hue-rotate(240deg) saturate(0.8)'
          },
        },
        quantum: {
          '0%, 100%': { 
            transform: 'scale(1) rotate(0deg)',
            opacity: '1',
            filter: 'blur(0px)'
          },
          '25%': { 
            transform: 'scale(1.1) rotate(90deg)',
            opacity: '0.8',
            filter: 'blur(1px)'
          },
          '50%': { 
            transform: 'scale(0.9) rotate(180deg)',
            opacity: '0.6',
            filter: 'blur(2px)'
          },
          '75%': { 
            transform: 'scale(1.05) rotate(270deg)',
            opacity: '0.9',
            filter: 'blur(1px)'
          },
        },
        ethereal: {
          '0%, 100%': { 
            transform: 'translateY(0px) scale(1)',
            opacity: '0.8',
            filter: 'blur(0px) brightness(1)'
          },
          '50%': { 
            transform: 'translateY(-15px) scale(1.1)',
            opacity: '1',
            filter: 'blur(2px) brightness(1.3)'
          },
        },
        prismatic: {
          '0%': { filter: 'hue-rotate(0deg) saturate(1) brightness(1)' },
          '25%': { filter: 'hue-rotate(90deg) saturate(1.5) brightness(1.2)' },
          '50%': { filter: 'hue-rotate(180deg) saturate(2) brightness(1.4)' },
          '75%': { filter: 'hue-rotate(270deg) saturate(1.5) brightness(1.2)' },
          '100%': { filter: 'hue-rotate(360deg) saturate(1) brightness(1)' },
        },
        nebula: {
          '0%, 100%': { 
            background: 'radial-gradient(ellipse at center, #667eea 0%, #764ba2 100%)',
            transform: 'scale(1) rotate(0deg)'
          },
          '33%': { 
            background: 'radial-gradient(ellipse at center, #f093fb 0%, #f5576c 100%)',
            transform: 'scale(1.1) rotate(120deg)'
          },
          '66%': { 
            background: 'radial-gradient(ellipse at center, #4facfe 0%, #00f2fe 100%)',
            transform: 'scale(0.9) rotate(240deg)'
          },
        },
        cosmic: {
          '0%': { 
            background: 'conic-gradient(from 0deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe, #667eea)',
            transform: 'rotate(0deg)'
          },
          '100%': { 
            background: 'conic-gradient(from 360deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe, #667eea)',
            transform: 'rotate(360deg)'
          },
        },
        ultraGlow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(0, 184, 124, 0.5), 0 0 40px rgba(0, 184, 124, 0.3), 0 0 60px rgba(0, 184, 124, 0.1)',
            filter: 'brightness(1)'
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(0, 184, 124, 0.8), 0 0 80px rgba(0, 184, 124, 0.6), 0 0 120px rgba(0, 184, 124, 0.4)',
            filter: 'brightness(1.3)'
          },
        },
        hyperPulse: {
          '0%, 100%': { 
            transform: 'scale(1)',
            filter: 'brightness(1) contrast(1)'
          },
          '50%': { 
            transform: 'scale(1.05)',
            filter: 'brightness(1.2) contrast(1.1)'
          },
        },
        matrix: {
          '0%': { 
            background: 'linear-gradient(0deg, #00ff00 0%, #008000 50%, #004000 100%)',
            transform: 'translateY(0%)'
          },
          '100%': { 
            background: 'linear-gradient(0deg, #004000 0%, #008000 50%, #00ff00 100%)',
            transform: 'translateY(-100%)'
          },
        },
        cyberGlow: {
          '0%': { 
            boxShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff',
            filter: 'hue-rotate(0deg)'
          },
          '100%': { 
            boxShadow: '0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff',
            filter: 'hue-rotate(180deg)'
          },
        },
        neonFlicker: {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.5)' },
        },
        plasma: {
          '0%, 100%': { 
            background: 'radial-gradient(circle, #ff006e, #8338ec, #3a86ff)',
            transform: 'scale(1) rotate(0deg)'
          },
          '33%': { 
            background: 'radial-gradient(circle, #8338ec, #3a86ff, #06ffa5)',
            transform: 'scale(1.1) rotate(120deg)'
          },
          '66%': { 
            background: 'radial-gradient(circle, #3a86ff, #06ffa5, #ff006e)',
            transform: 'scale(0.9) rotate(240deg)'
          },
        },
        energyWave: {
          '0%': { 
            transform: 'translateX(-100%) skewX(-15deg)',
            opacity: '0'
          },
          '50%': { 
            transform: 'translateX(0%) skewX(-15deg)',
            opacity: '1'
          },
          '100%': { 
            transform: 'translateX(100%) skewX(-15deg)',
            opacity: '0'
          },
        },
        dimensional: {
          '0%, 100%': { 
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)',
            filter: 'hue-rotate(0deg)'
          },
          '25%': { 
            transform: 'perspective(1000px) rotateX(15deg) rotateY(15deg) rotateZ(5deg)',
            filter: 'hue-rotate(90deg)'
          },
          '50%': { 
            transform: 'perspective(1000px) rotateX(0deg) rotateY(30deg) rotateZ(0deg)',
            filter: 'hue-rotate(180deg)'
          },
          '75%': { 
            transform: 'perspective(1000px) rotateX(-15deg) rotateY(15deg) rotateZ(-5deg)',
            filter: 'hue-rotate(270deg)'
          },
        },
        timeWarp: {
          '0%, 100%': { 
            transform: 'scale(1) skewX(0deg)',
            filter: 'blur(0px) contrast(1)'
          },
          '25%': { 
            transform: 'scale(1.1) skewX(5deg)',
            filter: 'blur(1px) contrast(1.2)'
          },
          '50%': { 
            transform: 'scale(0.9) skewX(-5deg)',
            filter: 'blur(2px) contrast(0.8)'
          },
          '75%': { 
            transform: 'scale(1.05) skewX(2deg)',
            filter: 'blur(1px) contrast(1.1)'
          },
        },
        stellar: {
          '0%, 100%': { 
            background: 'radial-gradient(ellipse at center, #667eea 0%, #764ba2 50%, #000 100%)',
            transform: 'scale(1)'
          },
          '50%': { 
            background: 'radial-gradient(ellipse at center, #f093fb 0%, #f5576c 50%, #000 100%)',
            transform: 'scale(1.2)'
          },
        },
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
        '5xl': '96px',
        '6xl': '128px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
        'aurora-gradient': 'linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c)',
        'cosmic-gradient': 'conic-gradient(from 0deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe)',
        'diamond-gradient': 'linear-gradient(135deg, #ffffff, #f0f0f0, #e8e8e8, #ffffff)',
        'holographic-gradient': 'linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0, #8a2be2)',
        'plasma-gradient': 'radial-gradient(circle, #ff006e, #8338ec, #3a86ff, #06ffa5)',
        'nebula-gradient': 'radial-gradient(ellipse at center, #667eea 0%, #764ba2 50%, #000 100%)',
        'quantum-gradient': 'linear-gradient(90deg, #00b87c, #2dd4bf, #0ea5e9, #8b5cf6)',
        'ethereal-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
        'cyber-gradient': 'linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ff00)',
        'matrix-gradient': 'linear-gradient(0deg, #00ff00, #008000, #004000)',
        'energy-gradient': 'linear-gradient(90deg, transparent, rgba(0,255,255,0.8), transparent)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 184, 124, 0.3)',
        'glow-lg': '0 0 40px rgba(0, 184, 124, 0.4)',
        'glow-xl': '0 0 60px rgba(0, 184, 124, 0.5)',
        'gold-glow': '0 0 20px rgba(244, 196, 48, 0.3)',
        'gold-glow-lg': '0 0 40px rgba(244, 196, 48, 0.4)',
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'premium-lg': '0 35px 60px -12px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.1)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-lg': '0 16px 64px 0 rgba(31, 38, 135, 0.4)',
        'ultra-glow': '0 0 40px rgba(0, 184, 124, 0.6), 0 0 80px rgba(0, 184, 124, 0.4), 0 0 120px rgba(0, 184, 124, 0.2)',
        'cosmic': '0 0 30px rgba(102, 126, 234, 0.5), 0 0 60px rgba(118, 75, 162, 0.3)',
        'aurora': '0 0 25px rgba(45, 212, 191, 0.4), 0 0 50px rgba(14, 165, 233, 0.3)',
        'diamond': '0 0 20px rgba(255, 255, 255, 0.8), inset 0 0 20px rgba(255, 255, 255, 0.2)',
        'holographic': '0 0 30px rgba(255, 0, 128, 0.4), 0 0 60px rgba(64, 224, 208, 0.3)',
        'quantum': '0 0 35px rgba(139, 92, 246, 0.5), 0 0 70px rgba(59, 130, 246, 0.3)',
        'cyber': '0 0 20px #00ffff, 0 0 40px #ff00ff, 0 0 60px #ffff00',
        'matrix': '0 0 25px #00ff00, 0 0 50px #008000',
        'plasma': '0 0 30px rgba(255, 0, 110, 0.5), 0 0 60px rgba(131, 56, 236, 0.3)',
        'ethereal': '0 0 40px rgba(255, 255, 255, 0.1), 0 0 80px rgba(255, 255, 255, 0.05)',
        'dimensional': '0 0 50px rgba(0, 0, 0, 0.3), 0 25px 50px rgba(0, 0, 0, 0.2)',
        'stellar': '0 0 60px rgba(102, 126, 234, 0.4), 0 0 120px rgba(118, 75, 162, 0.2)',
      },
      blur: {
        '4xl': '72px',
        '5xl': '96px',
        '6xl': '128px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '1' }],
        '11xl': ['12rem', { lineHeight: '1' }],
        '12xl': ['14rem', { lineHeight: '1' }],
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
        '104': '1.04',
        '105': '1.05',
      },
      rotate: {
        '1': '1deg',
        '2': '2deg',
        '3': '3deg',
      },
      skew: {
        '1': '1deg',
        '2': '2deg',
        '3': '3deg',
      },
    },
  },
  plugins: [
    typography,
    function({ addUtilities }) {
      addUtilities({
        '.pb-safe': { 'padding-bottom': 'env(safe-area-inset-bottom)' },
        '.pt-safe': { 'padding-top': 'env(safe-area-inset-top)' },
        '.pl-safe': { 'padding-left': 'env(safe-area-inset-left)' },
        '.pr-safe': { 'padding-right': 'env(safe-area-inset-right)' },
        '.mb-safe': { 'margin-bottom': 'env(safe-area-inset-bottom)' },
        '.mt-safe': { 'margin-top': 'env(safe-area-inset-top)' },
        '.ml-safe': { 'margin-left': 'env(safe-area-inset-left)' },
        '.mr-safe': { 'margin-right': 'env(safe-area-inset-right)' },
        '.h-safe-touch': { 'height': '44px' },
        '.w-safe-touch': { 'width': '44px' },
        '.min-h-safe-touch': { 'min-height': '44px' },
        '.min-w-safe-touch': { 'min-width': '44px' },
      })
    }
  ],
}
