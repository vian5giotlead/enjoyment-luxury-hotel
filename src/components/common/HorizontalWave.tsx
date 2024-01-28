'use client';

import DesktopHorizontalWave from '@/assets/images/desktop-horizontalWave.svg';
import MobileHorizontalWave from '@/assets/images/mobile-horizontalWave.svg';
import { useWidth } from '@/hooks';

export default function HorizontalWave() {
  const widthSize = useWidth();
  const isSmallDevice = widthSize === 'sm';
  return isSmallDevice ? (
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
  );
}
