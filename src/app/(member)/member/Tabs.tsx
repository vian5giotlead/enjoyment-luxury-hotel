'use client';

import { useMemo, useState } from 'react';
import { useWidth } from '@/hooks';
import { usePathname, useRouter } from 'next/navigation';
import { Tab, Tabs } from './style';
import Container from '@mui/material/Container';

const tabList = [
  {
    title: '個人資料',
    value: 0,
    href: '/member',
  },
  {
    title: '我的訂單',
    value: 1,
    href: '/member/order',
  },
];

export type SwiperTabProps = {
  selectTab: number;
  setSelectTab: React.Dispatch<React.SetStateAction<number>>;
};

export const SwiperTabs = () => {
  const [selectTab, setSelectTab] = useState(0);
  const widthSize = useWidth();
  const isSmallDevice = widthSize === 'sm';

  const router = useRouter();
  const pathname = usePathname();

  useMemo(() => {
    if (pathname === '/member/order') setSelectTab(1);
    else setSelectTab(0);
  }, [pathname]);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectTab(newValue);
    router.push(`${tabList[newValue].href}`, { scroll: false });
  };

  return (
    <Container
      sx={{
        marginTop: isSmallDevice ? '2.5rem' : '5rem',
        marginBottom: isSmallDevice ? '2.5rem' : '5rem',
      }}>
      <Tabs value={selectTab} onChange={handleTabChange} sx={{ marginBottom: isSmallDevice ? '2.5rem' : '5rem' }}>
        {tabList.map((tab) => {
          return <Tab label={tab.title} key={tab.value} sx={{ fontSize: isSmallDevice ? '0.875rem' : '1rem' }} />;
        })}
      </Tabs>
    </Container>
  );
};

