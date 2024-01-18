'use client';
import { Swiper, useSwiper } from 'swiper/react';
import { useWidth } from '@/hooks';
import Tabs, { Tab } from './Tabs';
import { tabList } from './page';
import { styled } from '@mui/material';

export type SwiperTabProps = {
  selectTab: number;
  setSelectTab: React.Dispatch<React.SetStateAction<number>>;
};

export const SwiperTabs = ({ selectTab, setSelectTab }: SwiperTabProps) => {
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
        return <Tab label={tab.title} key={tab.value} />;
      })}
    </Tabs>
  );
};

export const StyledSwiper = styled(Swiper)(
  () => `
  .swiper-wrapper {
    order: 1;
  }
`,
);
