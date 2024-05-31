import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#141414',
        secondary: '#232324',
        tertiary: '#202021',
        modal: '#303030',
        accent: '#0047BB',
        success: '#2E7D32',
        error: '#D32F2F'
      },
      textColor: {
        primary: '#E1E3E6',
        secondary: '#B0B1B6',
        tertiary: '#76787A',
        accent: '#0047BB',
        success: '#2E7D32',
        error: '#D32F2F'
      },
      borderColor: {
        primary: '#363738',
        accent: '#0047BB',
        success: '#2E7D32',
        error: '#D32F2F'
      }
    },
  },
  plugins: [],
};
export default config;
