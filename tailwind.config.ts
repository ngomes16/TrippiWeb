// TailwindCSS configuration for Trippi
// Purpose: Customize theme tokens (colors, fonts) and enable class scanning.
import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        trippi: {
          teal: '#1BC4BF',
          tealDark: '#0E8B87',
          gold: '#F7B344',
          charcoal: '#0B0F14',
          slate: '#111827'
        },
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config