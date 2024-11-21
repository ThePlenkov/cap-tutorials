/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            }
          }
        },
        invert: {
          css: {
            '--tw-prose-body': '#e5e7eb',
            '--tw-prose-headings': '#f9fafb',
            '--tw-prose-links': '#60a5fa',
            '--tw-prose-code': '#f3f4f6',
            '--tw-prose-pre-code': '#e5e7eb',
            '--tw-prose-pre-bg': '#1f2937',
            color: '#e5e7eb',
            a: { 
              color: '#60a5fa',
              '&:hover': {
                color: '#93c5fd'
              }
            },
            strong: { color: '#f9fafb' },
            'ol > li::marker': { color: '#d1d5db' },
            'ul > li::marker': { color: '#d1d5db' },
            hr: { borderColor: '#374151' },
            blockquote: {
              color: '#f3f4f6',
              borderLeftColor: '#4b5563'
            },
            h1: { color: '#f9fafb' },
            h2: { color: '#f9fafb' },
            h3: { color: '#f9fafb' },
            h4: { color: '#f9fafb' },
            'figure figcaption': { color: '#d1d5db' },
            code: { color: '#f3f4f6' },
            'a code': { color: '#60a5fa' },
            pre: {
              color: '#e5e7eb',
              backgroundColor: '#1f2937'
            },
            thead: {
              color: '#f9fafb',
              borderBottomColor: '#4b5563'
            },
            'tbody tr': { borderBottomColor: '#374151' },
            p: { color: '#e5e7eb' },
            li: { color: '#e5e7eb' }
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}