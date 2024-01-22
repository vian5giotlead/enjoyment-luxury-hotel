'use client';

import { Fragment } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Grid, Typography, Stack, Box, Button, Divider, Container } from '@mui/material';

import Card from '@/components/common/Card';

import { useWidth } from '@/hooks';

import CheckIcon from '@mui/icons-material/Check';
import { KeyboardArrowDown } from '@mui/icons-material';
import ModalController from './ModalController';

const orderData = [
  {
    userInfo: {
      address: {
        zipcode: 802,
        detail: '文山路23號',
      },
      name: 'Joanne Chen',
      phone: '0912345678',
      email: 'example@gmail.com',
    },
    _id: '653e335a13831c2ac8c389bb',
    roomId: {
      name: '尊爵雙人房',
      description: '享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。',
      imageUrl: 'https://picsum.photos/200/300?image=0',
      imageUrlList: [
        'https://picsum.photos/200/300?image=1',
        'https://picsum.photos/200/300?image=2',
        'https://picsum.photos/200/300?image=3',
      ],
      areaInfo: '24坪',
      bedInfo: '一張大床',
      maxPeople: 4,
      price: 10000,
      status: 1,
      facilityInfo: [
        {
          title: '平面電視',
          isProvide: true,
        },
      ],
      amenityInfo: [
        {
          title: '衛生紙',
          isProvide: true,
        },
      ],
      _id: '653e4661336cdccc752127a0',
      createdAt: '2023-10-29T11:47:45.641Z',
      updatedAt: '2023-10-29T11:47:45.641Z',
    },
    checkInDate: '2023-06-17T16:00:00.000Z',
    checkOutDate: '2023-06-18T16:00:00.000Z',
    peopleNum: 2,
    orderUserId: '6533f0ef4cdf5b7f762747b0',
    status: 0,
    createdAt: '2023-10-29T10:26:34.498Z',
    updatedAt: '2023-10-29T10:26:34.498Z',
  },
  {
    userInfo: {
      address: {
        zipcode: 802,
        detail: '文山路23號',
      },
      name: 'Joanne Chen',
      phone: '0912345678',
      email: 'example@gmail.com',
    },
    _id: '653e335a13831c2ac8c38666',
    roomId: {
      name: '尊爵雙人房',
      description: '享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。',
      imageUrl: 'https://picsum.photos/200/300?image=4',
      imageUrlList: [
        'https://picsum.photos/200/300?image=5',
        'https://picsum.photos/200/300?image=6',
        'https://picsum.photos/200/300?image=7',
      ],
      areaInfo: '24坪',
      bedInfo: '一張大床',
      maxPeople: 4,
      price: 10000,
      status: 1,
      facilityInfo: [
        {
          title: '平面電視',
          isProvide: true,
        },
      ],
      amenityInfo: [
        {
          title: '衛生紙',
          isProvide: true,
        },
      ],
      _id: '653e4661336cdccc752127a0',
      createdAt: '2023-10-20T11:47:45.641Z',
      updatedAt: '2023-10-20T11:47:45.641Z',
    },
    checkInDate: '2024-06-17T16:00:00.000Z',
    checkOutDate: '2024-06-18T16:00:00.000Z',
    peopleNum: 2,
    orderUserId: '6533f0ef4cdf5b7f762747b0',
    status: 0,
    createdAt: '2023-10-29T10:26:34.498Z',
    updatedAt: '2023-10-29T10:26:34.498Z',
  },
];

const Page: NextPage = () => {
  const widthSize = useWidth();
  const isSmallDevice = widthSize === 'sm';

  function calculateStayDays(checkInDate: string, checkOutDate: string) {
    const checkIn = new Date(checkInDate).getTime();
    const checkOut = new Date(checkOutDate).getTime();
    return (checkOut - checkIn) / (1000 * 60 * 60 * 24); // 將毫秒轉換為天
  }

  function formatDate(dateStr: string, timeStr?: string) {
    const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const date = new Date(dateStr);
    return `${date.getMonth() + 1} 月 ${date.getDate()} 日 ${days[date.getDay()]}${timeStr ? `，${timeStr}` : ''}`;
  }

  function formatNTD(num: number): string {
    return num.toLocaleString('zh-TW', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  }

  return (
    <Container sx={{ paddingBottom: isSmallDevice ? '2.5rem' : '7.5rem' }}>
      <Grid
        container
        direction={{ sm: 'column', md: 'row' }}
        justifyContent={'space-between'}
        gap={{ sm: '1.5rem', md: '2.5rem' }}
        wrap={'nowrap'}>
        <Grid item md={7}>
          <Card
            padding={isSmallDevice ? 'md' : 'lg'}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: isSmallDevice ? '1.5rem' : '2.5rem',
              alignItems: 'stretch',
            }}>
            <Box>
              <Typography variant={isSmallDevice ? 'body2' : 'body1'} component="h3" mb={'0.5rem'}>
                {`預訂參考編號： ${orderData[0]._id}`}
              </Typography>
              <Typography variant={isSmallDevice ? 'title' : 'h5'}>{'即將來的行程'}</Typography>
            </Box>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                maxHeight: isSmallDevice ? '9.375rem' : '15rem',
                borderRadius: '0.5rem',
                overflow: 'hidden',
              }}>
              <Image
                src={orderData[0].roomId.imageUrl}
                alt={orderData[0].roomId.name}
                layout="fill"
                objectFit="cover"
              />
            </Box>
            <Stack direction={'column'} spacing={'1.5rem'}>
              <Stack direction={'row'} spacing={'1rem'}>
                <Typography variant={isSmallDevice ? 'subtitle1' : 'h6'}>
                  {`${orderData[0].roomId.name}，${calculateStayDays(
                    orderData[0].checkInDate,
                    orderData[0].checkOutDate,
                  )} 晚`}
                </Typography>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Typography
                  variant={isSmallDevice ? 'subtitle1' : 'h6'}>{`住宿人數：${orderData[0].peopleNum} 位`}</Typography>
              </Stack>
              <Stack direction={'column'} spacing={'0.5rem'}>
                <Box>
                  {/* //TODO: 帶樣式的標題 */}
                  <Typography variant={'title'}>{`入住：${formatDate(
                    orderData[0].checkInDate,
                    '15:00 可入住',
                  )}`}</Typography>
                </Box>
                <Box>
                  {/* //TODO: 帶樣式的標題 */}
                  <Typography variant={'title'}>
                    {`退房：${formatDate(orderData[0].checkOutDate, '12:00 前退房')}`}
                  </Typography>
                </Box>
              </Stack>
              <Typography variant={'subtitle1'}>{`NT$ ${formatNTD(orderData[0].roomId.price)}`}</Typography>
            </Stack>
            <Divider />
            <Stack flexDirection={'column'} gap={'1.5rem'}>
              <Box>
                {/* //TODO: 帶樣式的標題 */}
                <Typography variant={'subtitle1'}>{'房內設備'}</Typography>
              </Box>
              <Card
                isBorder={true}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                }}>
                {orderData[0].roomId.facilityInfo.map((facility, index) => (
                  <Stack flexDirection={'row'} gap={'0.5rem'} key={index}>
                    <CheckIcon color="primary" />
                    <Typography variant={isSmallDevice ? 'subtitle1' : 'title'}>{facility.title}</Typography>
                  </Stack>
                ))}
              </Card>
            </Stack>
            <Stack flexDirection={'column'} gap={'1.5rem'}>
              <Box>
                {/* //TODO: 帶樣式的標題 */}

                <Typography variant={'subtitle1'}>{'備品提供'}</Typography>
              </Box>
              <Card
                isBorder={true}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                }}>
                {orderData[0].roomId.amenityInfo.map((facility, index) => (
                  <Stack flexDirection={'row'} gap={'0.5rem'} key={index}>
                    <CheckIcon color="primary" />
                    <Typography variant={isSmallDevice ? 'subtitle1' : 'title'}>{facility.title}</Typography>
                  </Stack>
                ))}
              </Card>
            </Stack>
            <ModalController isSmallDevice={isSmallDevice} />
          </Card>
        </Grid>
        <Grid item md={5}>
          <Card
            padding={isSmallDevice ? 'md' : 'lg'}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: isSmallDevice ? '1.5rem' : '2.5rem',
              alignItems: 'stretch',
            }}>
            <Typography variant={isSmallDevice ? 'title' : 'h5'} component="h3">
              {'歷史訂單'}
            </Typography>
            {orderData.map((order, index) => (
              <Fragment key={order._id}>
                <Stack gap={'1.5rem'} flexDirection={isSmallDevice ? 'column' : 'row'} alignItems={'flex-start'}>
                  <Image
                    style={{
                      objectFit: 'cover',
                      borderRadius: '0.5rem',
                    }}
                    src={order.roomId.imageUrl}
                    alt={order.roomId.name}
                    objectFit="cover"
                    width={120}
                    height={80}
                  />
                  <Stack direction={'column'} gap={'1rem'}>
                    <Typography variant={isSmallDevice ? 'body2' : 'title'}>{`預訂參考編號： ${order._id}`}</Typography>
                    <Typography variant={isSmallDevice ? 'subtitle1' : 'h6'} component="h4">
                      {order.roomId.name}
                    </Typography>
                    <Box>
                      <Typography variant={isSmallDevice ? 'body2' : 'body1'}>{`住宿天數：${calculateStayDays(
                        order.checkInDate,
                        order.checkOutDate,
                      )} 晚`}</Typography>
                      <Typography
                        variant={isSmallDevice ? 'body2' : 'body1'}>{`住宿人數：${order.peopleNum} 位`}</Typography>
                    </Box>
                    <Box>
                      {/* //TODO: 帶樣式的標題 */}

                      <Typography variant={'body1'}>{`入住：${formatDate(order.checkInDate)}`}</Typography>
                    </Box>
                    <Box>
                      {/* //TODO: 帶樣式的標題 */}
                      <Typography variant={'body1'}>{`退房：${formatDate(order.checkOutDate)}`}</Typography>
                    </Box>
                    <Typography variant={isSmallDevice ? 'subtitle1' : 'title'}>{`NT$ ${formatNTD(
                      order.roomId.price,
                    )}`}</Typography>
                  </Stack>
                </Stack>
                {index !== orderData.length - 1 && <Divider />}
              </Fragment>
            ))}
            <Button variant={'outlined'} size={'large'} endIcon={<KeyboardArrowDown />}>
              {'查看更多'}
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Page;
