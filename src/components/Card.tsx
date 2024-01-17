'use client';

import { Card } from '@mui/material';
import { useWidth } from '@/hooks';

type StyleCardProps = {
  padding?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  gap?: string;
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'hidden';
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
};

export default function StyleCard({
  children,
  padding,
  gap,
  display,
  flexDirection,
  justifyContent,
  alignItems,
}: StyleCardProps) {
  const widthSize = useWidth();
  const isSmallDevice = widthSize === 'xs' || widthSize === 'sm';
  return (
    <Card
      sx={{
        borderRadius: '1.25rem',
        padding:
          isSmallDevice && padding === 'md'
            ? '1.5rem'
            : isSmallDevice && padding === 'sm'
              ? '1rem'
              : !isSmallDevice && padding === 'lg'
                ? '2.5rem'
                : '1.5rem',
        gap: gap,
        display: display,
        flexDirection: flexDirection,
        justifyContent: justifyContent,
        alignItems: alignItems,
        boxShadow: 'none',
      }}>
      {children}
    </Card>
  );
}
