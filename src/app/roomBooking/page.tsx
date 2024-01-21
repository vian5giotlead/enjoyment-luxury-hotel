'use client';

import * as React from 'react';
import { Box, Button, Container, Grid, Stack, Typography, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import BedIcon from '@mui/icons-material/Bed';
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SquareCard from '@/components/aggregate/SquareCard';
import  Headline from '@/app/roomBooking/Headline';
import type { NextPage } from 'next';
import Card from '@/components/common/Card';
import { useWidth } from '@/hooks';
import { BorderBottom } from '@mui/icons-material';


const RoomBooking: NextPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(() => theme.breakpoints.down('md'));
  const widthSize = useWidth();
  const isSmallDevice = widthSize;

  return (
    <>
      <Box
        className="container"
        max-width="1920px"
        height="100%"
        margin="0 auto"
        bgcolor="
#F7F2EE">
        <div>RoomBooking header</div>
        <Container>
          <Box sx={{ marginBottom: '42px', display: 'flex' }}>
            <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
              <ArrowBackIosNewIcon sx={{ fontSize: 24, marginRight: '8px' }} />
            </Stack>
            <Typography variant={'h3'} component="h2">
              確認訂房資訊
            </Typography>
          </Box>
          <Grid container direction={{ sm: 'column', md: 'row' }} justifyContent={{ md: 'space-between' }}>
            <Grid md={7}>
              <Box component="section">
                <Typography variant={'h4'} component="h3" sx={{ marginBottom: '40px' }}>
                  訂房資訊
                </Typography>
                <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ mb: '24px' }}>
                  <Box>
                    <Headline title="選擇房型" fontSizeStyle="normal" />
                    <Typography>尊爵雙人房</Typography>
                  </Box>
                  <Typography>編輯</Typography>
                </Stack>
                <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ mb: '24px' }}>
                  <Box>
                    <Headline title="訂房日期" fontSizeStyle="normal" />
                    <Typography>入住：12 月 4 日星期二</Typography>
                    <Typography>退房：12 月 6 日星期三</Typography>
                  </Box>
                  <Typography>編輯</Typography>
                </Stack>
                <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ mb: '24px' }}>
                  <Box>
                    <Headline title="房客人數" fontSizeStyle="normal" />
                    <Typography>2 人</Typography>
                  </Box>
                  <Typography>編輯</Typography>
                </Stack>
              </Box>
              <hr />
              <Box component="section">
                <Stack direction={'row'} justifyContent={'space-between'} sx={{ marginBottom: '40px' }}>
                  <Typography variant={'h4'} component="h3">
                    訂房人資訊
                  </Typography>
                  <Typography color={'primary'}>套用會員資料</Typography>
                </Stack>
                <div>Form: 姓名、手機、郵件、信箱</div>
              </Box>
              <hr />
              <Box component="section">
                <Typography variant={'h4'} component="h3" sx={{ marginBottom: '40px' }}>
                  房間資訊
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Headline title="房型基本資訊" />
                  <Grid container>
                    <Grid sx={{ mr: 2 }}>
                      <SquareCard title="24坪">
                        <BedIcon color="primary" sx={{ fontSize: 24 }} />
                      </SquareCard>
                    </Grid>
                    <Grid sx={{ mr: 2 }}>
                      <SquareCard title="一張床">
                        <BedIcon color="primary" sx={{ fontSize: 24 }} />
                      </SquareCard>
                    </Grid>
                    <Grid>
                      <SquareCard title="2-4 人">
                        <PersonIcon color="primary" sx={{ fontSize: 24 }} />
                      </SquareCard>
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Headline title="房間格局" />
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Headline title="房內設備" />
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Headline title="備品提供" />
                </Box>
              </Box>
            </Grid>
            <Grid md={4}>
              <Card
                padding={isSmallDevice ? 'md' : 'lg'}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}>
                <img
                  src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room3-1.png"
                  alt="room image"
                  style={{ borderRadius: '8px', marginBottom: '28px'}}
                />
                <Typography variant={'h4'} component="h3" mb={'12px'}>
                  價格詳情
                </Typography>
                <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                  <Typography>NT$ 10,000 x 2 晚</Typography>
                  <Typography>NT$ 20,000</Typography>
                </Stack>
                <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} mb={'12px'}>
                  <Typography>住宿折扣</Typography>
                  <Typography color={'primary'}>-NT$ 1,000</Typography>
                </Stack>
                <Box borderBottom={'1px solid #ececec'} mb={'12px'}></Box>
                <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} mb={'28px'}>
                  <Typography fontWeight={700}>總價</Typography>
                  <Typography fontWeight={700}>NT$ 19,000</Typography>
                </Stack>
                <Link component={'button'} underline={'always'} fontWeight={700}>
                        {'重設'}
                </Link>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <div>RoomBooking footer</div>
      </Box>
    </>
  );
};

export default RoomBooking;