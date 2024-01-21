'use client';

import { useWidth } from '@/hooks';
import { UserBanner } from './UserBanner';
import memberBannerBG from '@/assets/images/memberBannerBG.jpg';
import { Box } from '@mui/material';
import DesktopHorizontalWave from '@/assets/images/desktop-horizontalWave.svg';
import MobileHorizontalWave from '@/assets/images/mobile-horizontalWave.svg';
import Image from 'next/image';

export default function Layout({ children }: { children: React.ReactNode }) {
  const widthSize = useWidth();

  const isSmallDevice = widthSize === 'sm';
  return (
    <div style={{ background: '#140F0A' }}>
      <UserBanner isSmallDevice={isSmallDevice} url={memberBannerBG.src} />
      {children}
      {isSmallDevice ? (
        <MobileHorizontalWave
          style={{
            width: '100%',
            maxHeight: '5.25rem',
          }}
        />
      ) : (
        <DesktopHorizontalWave
          style={{
            width: '100%',
            maxHeight: '11.75rem',
          }}
        />
      )}
    </div>
  );
}