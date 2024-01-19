import { CSSProperties } from 'react';
import { Card as BaseCard, styled } from '@mui/material';
import { useWidth } from '@/hooks';

type StyleCardProps = {
  children?: React.ReactNode;
  isBorder?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  sx?: CSSProperties;
};

const StyleCard = styled(BaseCard)<StyleCardProps>(() => ({
  boxShadow: 'none',
}));

/**
 *
 * @param {string} padding - padding size
 * @param {React.ReactNode} children - children
 * @param {boolean} isBoeder - is border
 * @param {CSSProperties} sx - style
 * @returns {React.ReactNode} - Card
 * @description - Card
 */
export default function Card({ children, padding = 'sm', isBorder = false, sx, ...restProps }: StyleCardProps) {
  const widthSize = useWidth();
  const isSmallDevice = widthSize === 'sm';

  const dynamicPadding =
    isSmallDevice && padding === 'md'
      ? '1.5rem'
      : isSmallDevice && padding === 'sm'
        ? '1rem'
        : !isSmallDevice && padding === 'lg'
          ? '2.5rem'
          : '1.5rem';

  return (
    <StyleCard
      sx={{
        ...sx,
        padding: dynamicPadding,
        border: isBorder ? '1px solid #E5E5E5' : '',
        borderRadius: isBorder ? '0.5rem' : '1.25rem',
      }}
      {...restProps}>
      {children}
    </StyleCard>
  );
}
