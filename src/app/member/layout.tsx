'use client';

import {styled} from '@mui/material';

const Box = styled('div')(() => `
background: #140F0A
`);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
    {children}
    </Box>
  )
}