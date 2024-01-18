'use client';

import { useWidth } from '@/hooks';
import { styled } from '@mui/material';
import HorizontalWave from '@/components/common/HorizontalWave';
import { UserBanner } from './UserBanner';
import memberBannerBG from '@/assets/images/memberBannerBG.jpg';

const Box = styled('div')(
  () => `
background: #140F0A
`,
);

export default function Layout({ children }: { children: React.ReactNode }) {
  const widthSize = useWidth();

  const isSmallDevice = widthSize === 'sm';
  return (
    <Box>
      <UserBanner isSmallDevice={isSmallDevice} url={memberBannerBG.src} />
      {children}
      <HorizontalWave size={isSmallDevice ? 'sm' : 'md'} />
    </Box>
  );
}