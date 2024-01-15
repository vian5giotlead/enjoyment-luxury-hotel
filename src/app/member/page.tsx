'use client';

import type { NextPage } from 'next';
import { Avatar, Box, Card, Container, Stack, Tab, Tabs, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import useDeviceSizes from '@/utils/useMediaQuery';

const tabList = [
  {
    title: '個人資料',
    value: 'memberData',
  },
  {
    title: '我的訂單',
    value: 'memberOrders',
  },
];

const Member: NextPage = () => {
  const { isSmallDevice } = useDeviceSizes();
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url('/images/memberBannerBG.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: isSmallDevice ? '12.875rem' : '24rem',
        }}>
        <Container>
          <Stack direction={'column'} justifyContent={'center'}>
            <Avatar />
            <Typography variant={'h4'}>{'member name'}</Typography>
          </Stack>
        </Container>
      </Box>
      <Container>
        <Tabs>
          {tabList.map((tab) => {
            return <Tab label={tab.title} key={tab.title} value={tab.value} />;
          })}
        </Tabs>
        <Grid2 container justifyContent={'space-between'}>
          <Grid2 md={5}>
            <Card>
              <Typography variant={'h5'}>{'修改密碼'}</Typography>
              <Stack direction={'column'} spacing={{ sm: 2, md: 3 }}>
                <Box>
                  <Typography variant={'body1'}>{'電子信箱'}</Typography>
                  <Typography variant={'body1'}>{'ooo@ooo.com'}</Typography>
                </Box>
                <Box>
                  <Typography variant={'body1'}>{'密碼'}</Typography>
                  <Typography variant={'body1'}>{'********'}</Typography>
                </Box>
              </Stack>
            </Card>
          </Grid2>
          <Grid2 md={7}>
            <Card></Card>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
};

export default Member;
