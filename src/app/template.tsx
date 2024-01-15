'use client';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
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
});

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}
