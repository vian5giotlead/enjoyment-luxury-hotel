'use client';

import * as React from 'react';
import { Box, Button, Container, Grid, Stack, Typography, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
//import { useMediaQuery } from '@mui/material';
import Check from '@mui/icons-material/Check';
import SquareCard from '@/components/room/SquareCard';
import type { NextPage } from 'next';
import Card from '@/components/common/Card';
import { useWidth } from '@/hooks';
import Headline from '@/components/common/Headline';
import RoomFacilityBlock from '@/components/room/RoomFacilityBlock';

const facilityInfo = [
  {
    title: '平面電視',
    isProvide: true,
  },
  {
    title: '吹風機',
    isProvide: true,
  },
];

const BookingSuccess: NextPage = () => {
  const theme = useTheme();
  const widthSize = useWidth();
  const isSmallDevice = widthSize;

  return (
    <>
      <Box sx={{ color: '#ffffff' }}>
        <Container>
          <Stack
            direction={{ md: 'column', lg: 'row' }}
            justifyContent={{ md: 'center', lg: 'space-between' }}>
            <Box width={{ md: '100%', lg: '55%'}} sx={{ maxWidth: '746px'}}>
              <Box
                component="section"
                mb={{ sm: '40px', md: '80px' }}
                pb={{ sm: '40px', md: '80px' }}
                borderBottom={'1px solid #ececec'}>
                <Stack
                  direction={{ sm: 'column', md: 'row' }}
                  alignItems={{ sm: 'left', md: 'center' }}
                  mb={{ sm: 4, md: 5 }}>
                  <Stack
                    width={'56px'}
                    height={'56px'}
                    borderRadius={'50%'}
                    bgcolor={'#52DD7E'}
                    direction="row"
                    justifyContent={'center'}
                    alignItems={'center'}
                    marginRight={'34px'}
                    mb={{ sm: 2, md: 0 }}>
                    <Check sx={{ fontSize: 40, color: '#ffffff' }} />
                  </Stack>
                  <Typography component="h2" fontSize={{ sm: '32px', md: '40px'}} fontWeight={700}>
                    恭喜，Jessica！
                    <br />
                    您已預訂成功
                  </Typography>
                </Stack>
                <Typography width={'88%'}>我們已發送訂房資訊及詳細內容至你的電子信箱，入住時需向櫃檯人員出示訂房人證件。</Typography>
              </Box>
              <Box component="section" mb={{ sm: 5, md: 10 }} pb={{ sm: 5, md: 10 }} borderBottom={'1px solid #ececec'}>
                <Typography component="h3" fontSize={{ sm: '16px', md: '24px'}} fontWeight={700} mb={{ sm: 3, md: 5 }}>
                  立即查看您的訂單紀錄
                </Typography>
                <Button variant="contained">前往我的訂單</Button>
              </Box>
              <Box component="section">
                <Typography variant={'h5'} component="h5" mb={{ sm: 4, md: 5 }}>
                  訂房人資訊
                </Typography>
                <Typography mb={1}>姓名</Typography>
                <Typography mb={3}>Jessica Ｗang</Typography>
                <Typography mb={1}>手機號碼</Typography>
                <Typography mb={3}>+886 912 345 678</Typography>
                <Typography mb={1}>電子信箱</Typography>
                <Typography mb={7}>jessica@sample.com</Typography>
              </Box>
            </Box>
            <Box
              width={{ md: '100%', lg: '38%'}}
              sx={{
                maxWidth: '478px',
              }}>
              <Card
                padding={isSmallDevice ? 'sm' : 'md'}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginBottom: '60px'
                }}>
                <Typography mb={1}>預訂參考編號： HH2302183151222</Typography>
                <Typography component="h4" mb={{ sm: 3, md: 5 }} fontSize={{ sm: '1rem', md: '1.5rem'}} fontWeight={700}>
                  即將來的行程
                </Typography>
                <img
                  src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room3-1.png"
                  alt="room image"
                  style={{ borderRadius: '8px', marginBottom: '28px' }}
                />
                <Box mb={{ sm: 3, md: 5 }} pb={{ sm: 3, md: 5 }} borderBottom={'1px solid #ECECEC'}>
                  <Stack direction={'row'} mb={3}>
                    <Typography fontSize={{ sm: '16px', md: '20px'}} fontWeight={700}>
                      尊爵雙人房，1 晚&nbsp;&nbsp;
                    </Typography>
                    <Typography color={'#909090'} fontSize={{ sm: '16px', md: '20px'}} fontWeight={700}>
                      |
                    </Typography>
                    <Typography fontSize={{ sm: '16px', md: '20px'}} fontWeight={700}>
                      &nbsp;&nbsp;住宿人數：2 位
                    </Typography>
                  </Stack>
                  <Box mb={3}>
                    <Typography fontWeight={700}>入住：6 月 10 日星期二，15:00 可入住</Typography>
                    <Typography fontWeight={700}>退房：6 月 11 日星期三，12:00 前退房</Typography>
                  </Box>
                  <Typography fontWeight={700}>NT$ 10,000</Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Headline title="房內設備" />
                  <Stack direction={'row'} mt={3} p={3} border={'1px solid #ececec'} borderRadius={1}>
                    <Box sx={{ display: 'flex' }} mr={'40px'}>
                      <Check color="primary" sx={{ fontSize: 24 }} />
                      <Typography>平面電視</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }} mr={'40px'}>
                      <Check color="primary" sx={{ fontSize: 24 }} />
                      <Typography>吹風機</Typography>
                    </Box>
                  </Stack>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Headline title="備品提供" />
                  <Stack direction={'row'} mt={3} p={3} border={'1px solid #ececec'} borderRadius={1}>
                    <Box sx={{ display: 'flex' }} mr={'40px'}>
                      <Check color="primary" sx={{ fontSize: 24 }} />
                      <Typography>衛生紙</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }} mr={'40px'}>
                      <Check color="primary" sx={{ fontSize: 24 }} />
                      <Typography>拖鞋</Typography>
                    </Box>
                  </Stack>
                </Box>
              </Card>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default BookingSuccess;
