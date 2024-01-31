'use client';
import * as React from 'react';
import { Box, Button, Container, Grid, Stack, Typography, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import BedIcon from '@mui/icons-material/Bed';
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SquareCard from '@/components/room/SquareCard';
import Headline from '@/app/roomBooking/Headline';
import type { NextPage } from 'next';
import Card from '@/components/common/Card';
import { useWidth } from '@/hooks';
import BookerForm from './BookerForm';

const roomBookData = {
  roomId: '65a4e32683315f6587b0cb47',
  checkInDate: '2023/11/18',
  checkOutDate: '2023/11/19',
  peopleNum: 2,
};

interface MemberData {
  status: boolean;
  result: {
    address: {
      zipcode: number;
      detail: string;
    };
    _id: string;
    name: string;
    email: string;
    phone: string;
    birthday: string;
    createdAt: string;
    updatedAt: string;
  };
}

const RoomBooking: NextPage = () => {
  const theme = useTheme();
  const widthSize = useWidth();
  const isSmallDevice = widthSize;

  return (
    <>
      <Box
        className="container"
        bgcolor="
#F7F2EE">
        <Container>
          <Box sx={{ p: '120px 0 40px', display: 'flex' }}>
            <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
              <ArrowBackIosNewIcon sx={{ fontSize: 24, marginRight: '8px' }} />
            </Stack>
            <Typography variant={'h3'} component="h2">
              確認訂房資訊
            </Typography>
          </Box>
          <Stack direction={{ md: 'column', lg: 'row' }} justifyContent={{ md: 'center', lg: 'space-between' }}>
            <Box width={{ md: '100%', lg: '55%' }} sx={{ maxWidth: '746px' }}>
              <Box component="section">
                <Typography variant={'h4'} component="h3" sx={{ marginBottom: '40px' }}>
                  訂房資訊
                </Typography>
                <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ mb: '24px' }}>
                  <Box>
                    <Headline title="選擇房型" fontSizeStyle="normal" />
                    <Typography>尊爵雙人房</Typography>
                  </Box>
                  <Link component={'button'} underline={'always'} fontWeight={700} color={'#000000'}>
                    {'編輯'}
                  </Link>
                </Stack>
                <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ mb: '24px' }}>
                  <Box>
                    <Headline title="訂房日期" fontSizeStyle="normal" />
                    <Typography>入住：12 月 4 日星期二</Typography>
                    <Typography>退房：12 月 6 日星期三</Typography>
                  </Box>
                  <Link component={'button'} underline={'always'} fontWeight={700} color={'#000000'}>
                    {'編輯'}
                  </Link>
                </Stack>
                <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ mb: '24px' }}>
                  <Box>
                    <Headline title="房客人數" fontSizeStyle="normal" />
                    <Typography>2 人</Typography>
                  </Box>
                  <Link component={'button'} underline={'always'} fontWeight={700} color={'#000000'}>
                    {'編輯'}
                  </Link>
                </Stack>
              </Box>
              <hr style={{ marginBottom: '24px' }} />
              <BookerForm roomBookInfo={roomBookData} />
              <hr style={{ marginBottom: '24px' }} />
              <Box component="section">
                <Typography variant={'h4'} component="h3" sx={{ marginBottom: '40px' }}>
                  房間資訊
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Headline title="房型基本資訊" />
                  <Grid container>
                    <Grid sx={{ mr: 2 }}>
                      <SquareCard title="24坪">
                        <AspectRatioIcon color="primary" sx={{ fontSize: 24 }} />
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
                <Box sx={{ mb: 3, width: '100%' }}>
                  <Headline title="房間格局" />
                  <Stack
                    bgcolor={'#ffffff'}
                    direction={'row'}
                    mt={3}
                    p={3}
                    border={'1px solid #ececec'}
                    borderRadius={1}
                    useFlexGap
                    flexWrap="wrap">
                    <Box sx={{ display: 'flex' }} mr={'40px'}>
                      <CheckIcon color="primary" sx={{ fontSize: 24 }} />
                      <Typography>市景</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }} mr={'40px'}>
                      <CheckIcon color="primary" sx={{ fontSize: 24 }} />
                      <Typography>獨立衛浴</Typography>
                    </Box>
                  </Stack>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Headline title="房內設備" />
                  <Stack
                    bgcolor={'#ffffff'}
                    direction={'row'}
                    mt={3}
                    p={3}
                    border={'1px solid #ececec'}
                    borderRadius={1}
                    useFlexGap
                    flexWrap="wrap">
                    <Box sx={{ display: 'flex' }} mr={'40px'}>
                      <CheckIcon color="primary" sx={{ fontSize: 24 }} />
                      <Typography>平面電視</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }} mr={'40px'}>
                      <CheckIcon color="primary" sx={{ fontSize: 24 }} />
                      <Typography>吹風機</Typography>
                    </Box>
                  </Stack>
                </Box>
                <Box mb={{ sm: 5, md: 15 }}>
                  <Headline title="備品提供" />
                  <Stack
                    bgcolor={'#ffffff'}
                    direction={'row'}
                    mt={3}
                    p={3}
                    border={'1px solid #ececec'}
                    borderRadius={1}
                    useFlexGap
                    flexWrap="wrap">
                    <Box sx={{ display: 'flex' }} mr={'40px'}>
                      <CheckIcon color="primary" sx={{ fontSize: 24 }} />
                      <Typography>衛生紙</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }} mr={'40px'}>
                      <CheckIcon color="primary" sx={{ fontSize: 24 }} />
                      <Typography>拖鞋</Typography>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Box>
            <Box
              width={{ md: '100%', lg: '37%' }}
              mb={5}
              sx={{
                maxWidth: '478px',
              }}>
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
                  style={{ borderRadius: '8px', marginBottom: '28px' }}
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
                  <Typography color={'primary'}>-NT$ 0</Typography>
                </Stack>
                <Box borderBottom={'1px solid #ececec'} mb={'12px'}></Box>
                <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} mb={'28px'}>
                  <Typography fontWeight={700}>總價</Typography>
                  <Typography fontWeight={700}>NT$ 20,000</Typography>
                </Stack>
                <Button variant="contained" type="submit" form="my-form">
                  確認訂房
                </Button>
              </Card>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default RoomBooking;
