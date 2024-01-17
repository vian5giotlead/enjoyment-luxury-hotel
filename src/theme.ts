'use client';
import { Noto_Serif_TC } from 'next/font/google';
import { Theme, TypographyVariants, createTheme } from '@mui/material/styles';

const noto_Serif_TC = Noto_Serif_TC({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  preload: false,
});

declare module '@mui/material/styles' {
  interface TypographyVariants {
    h1: true;
    h2: true;
    h3: true;
    h4: true;
    h5: true;
    h6: true;
    subtitle1: true;
    subtitle2: true;
    body1: true;
    body2: true;
    caption: true;
    button: true;
    overline: true;
    srOnly: true;
    inherit: true;
    display: true;
    tiny: true;
    title: true;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides extends TypographyVariants {}
}

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#BF9D7D',
      light: '#D0B79F',
      dark: '#7B6651',
    },
    error: {
      main: '#DA3E51',
      light: '#F5CCD1',
      dark: '#C22538',
    },
    info: {
      main: '#3BADEF',
      light: '#B1EFFD',
      dark: '#1D66AC',
    },
    success: {
      main: '#52DD7E',
      light: '#BCFBBD',
      dark: '#299F65',
    },
  },
  typography: {
    fontFamily: noto_Serif_TC.style.fontFamily,
    allVariants: {
      fontFamily: noto_Serif_TC.style.fontFamily,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'display' },
          style: {
            fontSize: '6.25rem',
            fontWeight: 700,
          },
        },
        {
          props: { variant: 'tiny' },
          style: {
            fontSize: '0.75rem',
          },
        },
        {
          props: { variant: 'title' },
          style: {
            fontSize: '1rem',
            fontWeight: 700,
            lineHeight: 1.5,
            letterSpacing: '0.02rem',
          },
        },
      ],
    },
  },
});

export default theme;
