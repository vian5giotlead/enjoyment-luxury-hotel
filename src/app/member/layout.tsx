'use client';

import { useWidth } from '@/hooks';
import { UserBanner } from './UserBanner';
import memberBannerBG from '@/assets/images/memberBannerBG.jpg';
import { Box } from '@mui/material';
import desktopHorizontalWave from '@/assets/images/desktop-horizontalWave.svg';
import mobileHorizontalWave from '@/assets/images/mobile-horizontalWave.svg';
import Image from 'next/image';

export default function Layout({ children }: { children: React.ReactNode }) {
  const widthSize = useWidth();

  const isSmallDevice = widthSize === 'sm';
  return (
    <div style={{ background: '#140F0A' }}>
      <UserBanner isSmallDevice={isSmallDevice} url={memberBannerBG.src} />
      {children}
      <Box
        sx={{
          maxHeight: isSmallDevice ? '5.25rem' : '11.75rem',
          position: 'relative',
          background: `url(${isSmallDevice ? mobileHorizontalWave.src : desktopHorizontalWave.src})`,
        }}
      />
    </div>
  );
}