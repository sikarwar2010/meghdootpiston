import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://res.cloudinary.com/dfvtnrisi/image/upload/v1692290990/modern-world-map-background_1035-7605_zdxrgd.avif')",
      }
    },
  },
  plugins: [],
}
export default config
