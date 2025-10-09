/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // IMPORTANT: Ensure these paths cover all your components and pages
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './context/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', 
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Mapped to CSS variables in globals.css
        'primary': 'var(--color-primary)',   // Use: bg-primary, text-primary
        'secondary': 'var(--color-secondary)', // Use: bg-secondary, text-secondary
        'accent': 'var(--color-accent)',     // Use: bg-accent, text-accent
        'paper': 'var(--color-paper)',       // Use: bg-paper
        'ink': 'var(--color-ink)',           // Use: text-ink
        // Add other existing colors if they were defined in your original config
        'graphite': '#4A4E69', 
        'slate': '#8d95b5',    
      },
      // ... rest of theme.extend
    },
  },
  plugins: [],
}
 