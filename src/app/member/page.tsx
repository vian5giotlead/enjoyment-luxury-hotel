'use client';

import type { NextPage } from 'next';
import { Avatar, Box, Button, Container, Grid, Link, Stack, Typography } from '@mui/material';

import Card from '@/components/common/Card';
import HorizontalWave from '@/components/common/HorizontalWave';

import { useWidth } from '@/hooks';
import memberBannerBG from '@/assets/images/memberBannerBG.jpg';

import MemberForm from './MemberForm';
import ChangePasswordForm from './ChangePasswordForm';
import Tabs, { Tab } from '@/app/member/Tabs';
import { useState } from 'react';
import theme from '@/theme';

const tabList = [
  {
    title: '個人資料',
    value: 0,
  },
  {
    title: '我的訂單',
    value: 1,
  },
];

const memberData = {
  userId: '6523e9fc3a22dd8d8207ef80',
  name: 'Kylie Stanley',
  phone: '(937) 233-2482',
  birthday: '1948/6/5',
  address: {
    zipcode: 802,
    detail: '文山路23號',
    county: '高雄市',
    city: '苓雅區',
  },
  oldPassword: '舊密碼',
  newPassword: '新密碼',
};

const Page: NextPage = () => {
  const widthSize = useWidth();
  const isSmallDevice = widthSize === 'sm';
  const [selectTab, setSelectTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectTab(newValue);
  };

  return (
    <>
      <Box
        sx={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${memberBannerBG.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: isSmallDevice ? '12.875rem' : '24rem',
        }}>
        <Container sx={{ height: '100%' }}>
          <Stack direction={'column'} justifyContent={'center'} height="100%">
            <Stack direction={{ sm: 'column', md: 'row' }} alignItems={'center'} spacing={{ sm: 2, md: 3 }}>
              <Avatar sx={{ height: isSmallDevice ? '9rem' : '4.5rem', width: isSmallDevice ? '9rem' : '4.5rem' }} />
              <Typography variant={'h4'} color="white" component="h2">{`Hello，member name`}</Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container
        sx={{ paddingTop: isSmallDevice ? '2.5rem' : '5rem', paddingBottom: isSmallDevice ? '2.5rem' : '7.5rem' }}>
        <Tabs value={selectTab} onChange={handleTabChange} sx={{ marginBottom: isSmallDevice ? '2.5rem' : '5rem' }}>
          {tabList.map((tab) => {
            return <Tab label={tab.title} key={tab.title} />;
          })}
        </Tabs>
        <Grid
          container
          direction={{ sm: 'column', md: 'row' }}
          justifyContent={'space-between'}
          gap={{ sm: '1.5rem', md: '2.5rem' }}
          wrap={'nowrap'}>
          <Grid item md={5}>
            <Card
              padding={isSmallDevice ? 'md' : 'lg'}
              display="flex"
              flexDirection="column"
              gap={isSmallDevice ? '1.5rem' : '2.5rem'}>
              <Typography variant={'h5'} component="h3">
                {'修改密碼'}
              </Typography>
              <Stack direction={'column'} spacing={{ sm: 2, md: 3 }}>
                <Box>
                  <Typography variant={'body1'} component={'h3'}>
                    {'電子信箱'}
                  </Typography>
                  <Typography variant={'title'} component={'p'} fontFamily={theme.typography.fontFamily}>
                    {'ooo@ooo.com'}
                  </Typography>
                </Box>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                  <Box>
                    <Typography variant={'body1'} component={'h3'}>
                      {'密碼'}
                    </Typography>
                    <Typography variant={'title'} component={'p'} sx={{ '-webkit-text-security': 'disc' }}>
                      {'********'}
                    </Typography>
                  </Box>
                  <Link
                    component={'button'}
                    underline={'always'}
                    fontFamily={theme.typography.fontFamily}
                    fontWeight={700}>
                    {'重設'}
                  </Link>
                </Stack>
              </Stack>
              <ChangePasswordForm />
            </Card>
          </Grid>
          <Grid item md={7}>
            <Card
              padding={isSmallDevice ? 'md' : 'lg'}
              display="flex"
              flexDirection="column"
              alignItems="stretch"
              gap={isSmallDevice ? '1.5rem' : '2.5rem'}>
              <Typography variant={'h5'} component="h4">
                {'基本資料'}
              </Typography>
              <Stack direction={'column'} spacing={{ sm: 2, md: 3 }}>
                <Box>
                  <Typography variant={'body1'}>{'姓名'}</Typography>
                  <Typography variant={'title'} fontFamily={theme.typography.fontFamily}>
                    {memberData.name}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant={'body1'}>{'手機'}</Typography>
                  <Typography variant={'title'} fontFamily={theme.typography.fontFamily}>
                    {memberData.phone}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant={'body1'}>{'生日'}</Typography>
                  <Typography variant={'title'} fontFamily={theme.typography.fontFamily}>
                    {memberData.birthday.split('/').map((date, index) => {
                      if (index === 0) {
                        return `${date}年`;
                      } else if (index === 1) {
                        return `${date}月`;
                      } else {
                        return `${date}日`;
                      }
                    })}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant={'body1'}>{'地址'}</Typography>
                  <Typography variant={'title'} component={'p'} fontFamily={theme.typography.fontFamily}>
                    {`${memberData.address.zipcode} ${memberData.address.county}${memberData.address.city}${memberData.address.detail}`}
                  </Typography>
                </Box>
              </Stack>
              <MemberForm />
              <Stack
                direction={'column'}
                spacing={{ sm: '1.5rem', md: '2.5rem' }}
                alignItems={{ sm: 'stretch', md: 'flex-start' }}>
                <Button variant={'outlined'} size={'large'} disableRipple>
                  {'編輯'}
                </Button>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <HorizontalWave size={isSmallDevice ? 'sm' : 'md'} />
    </>
  );
};

export default Page;
