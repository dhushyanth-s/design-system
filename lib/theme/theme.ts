import { createCss } from '@stitches/react'

export const {
  styled,
  css,
  global,
  keyframes,
  theme,
  getCssString,
  config,
} = createCss({
  theme: {
    colors: {
      secondaryColor: 'rgba(254, 234, 173, 1)',
      primaryColor: '#DA9224',
      textColor: '#787878',
      grey: '#E2E2E2',
      backgroundColor: 'white',
      buttonBackgroundColor: 'rgba(254, 234, 173, 0.5)',
    },
    shadows: {
      secondaryColor: '#FEEAAD',
      primaryColor: '#DA9224',
      textColor: '#787878',
      grey: '#E2E2E2',
      backgroundColor: 'white',
    },
  },
})
