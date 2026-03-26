import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        letterSpacings: {
          subTitle: {
            value: '0.2rem'
          }
        }
      }
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
  jsxFramework: 'react',

  globalFontface: {
    CabinetGrotesk: {
      src: 'url(/fonts/CabinetGrotesk-Variable.woff2) format(woff2)',
      fontStyle: 'normal',
      fontDisplay: 'swap'
    }
  },

  globalVars: {
    '--font-cabinet-grotesk': 'CabinetGrotesk'
  },

  globalCss: {
    'p,h1,h2,h3,h4,h5,h6': {
      color: 'neutral.900'
    }
  }
});
