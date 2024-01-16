import { useMediaQuery as mediaQuery } from '@uidotdev/usehooks';

const useDeviceSizes = () => {
  const isSmallDevice = mediaQuery('only screen and (max-width : 768px)');
  const isMediumDevice = mediaQuery('only screen and (min-width : 769px) and (max-width : 992px)');
  const isLargeDevice = mediaQuery('only screen and (min-width : 993px) and (max-width : 1200px)');
  const isExtraLargeDevice = mediaQuery('only screen and (min-width : 1201px)');

  return { isSmallDevice, isMediumDevice, isLargeDevice, isExtraLargeDevice };
};

import { Breakpoint, Theme, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type BreakpointOrNull = Breakpoint | null;

/**
 * Be careful using this hook. It only works because the number of
 * breakpoints in theme is static. It will break once you change the number of
 * breakpoints. See https://legacy.reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */
export function useWidth() {
  const theme: Theme = useTheme();
  const keys: readonly Breakpoint[] = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}

export default useDeviceSizes;
