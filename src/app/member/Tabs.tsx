'use client';
import { Swiper, useSwiper } from 'swiper/react';
import { useWidth } from '@/hooks';
import BaseTabs from '@mui/material/Tabs';
import BaseTab from '@mui/material/Tab';
import { styled } from '@mui/material';
import theme from '@/theme';

import { tabList } from './page';
interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

interface StyledTabProps {
  label: string;
}

const Tabs = styled((props: StyledTabsProps) => (
  <BaseTabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    height: '0.25rem',
    borderRadius: '0.625rem',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    width: '100%',
    maxWidth: '2rem',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '0.625rem',
  },
});

const Tab = styled((props: StyledTabProps) => <BaseTab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: '#fff',
  '&:hover': {
    color: theme.palette.primary.main,
    opacity: 1,
  },
  '&.Mui-selected': {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: theme.palette.primary.light,
  },
}));

export type SwiperTabProps = {
  selectTab: number;
  setSelectTab: React.Dispatch<React.SetStateAction<number>>;
};

const SwiperTabs = ({ selectTab, setSelectTab }: SwiperTabProps) => {
  const widthSize = useWidth();

  const isSmallDevice = widthSize === 'sm';

  const swiper = useSwiper();
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectTab(newValue);
    swiper.slideTo(newValue);
  };


  return (
      <Tabs value={selectTab} onChange={handleTabChange} sx={{ marginBottom: isSmallDevice ? '2.5rem' : '5rem' }}>
        {tabList.map((tab) => {
          return <Tab label={tab.title} key={tab.value} sx={{ fontSize: isSmallDevice ? '0.875rem' : '1rem' }} />;
        })}
      </Tabs>
  );
};

const StyledSwiper = styled(Swiper)(
  () => `
  .swiper-wrapper {
    order: 1;
  }
`,
);

export default Tabs;
export { Tab, SwiperTabs, StyledSwiper };
