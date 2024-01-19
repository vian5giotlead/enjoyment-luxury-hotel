'use client';

import { Fragment, useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { Avatar, Box, Button, Container, Divider, Grid, Link, Stack, Typography } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import Card from '@/components/common/Card';
import HorizontalWave from '@/components/common/HorizontalWave';

import { useWidth } from '@/hooks';

import memberBannerBG from '@/assets/images/memberBannerBG.jpg';

import ChangePasswordForm from './ChangePasswordForm';
import MemberForm from './MemberForm';
import { SwiperTabs, StyledSwiper } from './SwiperTabs';

import 'swiper/css';
import { KeyboardArrowDown } from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';

export const tabList = [
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
  const [selectTab, setSelectTab] = useState(1);
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
    return `${date.getMonth() + 1} 月 ${date.getDate()} 日 ${days[date.getDay()]}${timeStr && `，${timeStr}`}`;
  }

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
        <StyledSwiper
          slidesPerView={1}
          spaceBetween={30}
          modules={[Navigation]}
          onSlideChange={(swiper) => {
            setSelectTab(swiper.activeIndex);
          }}
          onSwiper={(swiper) => setSelectTab(swiper.activeIndex)}
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Box sx={{ order: 0 }}>
            <SwiperTabs selectTab={selectTab} setSelectTab={setSelectTab} />
          </Box>
          <SwiperSlide>
            <Grid
              container
              direction={{ sm: 'column', md: 'row' }}
              justifyContent={'space-between'}
              gap={{ sm: '1.5rem', md: '2.5rem' }}
              wrap={'nowrap'}>
              <Grid item md={5}>
                <Card
                  padding={isSmallDevice ? 'md' : 'lg'}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: isSmallDevice ? '1.5rem' : '2.5rem',
                  }}>
                  <Typography variant={'h5'} component="h3">
                    {'修改密碼'}
                  </Typography>
                  <Stack direction={'column'} spacing={{ sm: 2, md: 3 }}>
                    <Box>
                      <Typography variant={'body1'} component={'h3'}>
                        {'電子信箱'}
                      </Typography>
                      <Typography variant={'title'} component={'p'}>
                        {'ooo@ooo.com'}
                      </Typography>
                    </Box>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                      <Box>
                        <Typography variant={'body1'} component={'h3'}>
                          {'密碼'}
                        </Typography>
                        <Typography variant={'title'} component={'p'} sx={{ WebkitTextSecurity: 'disc' }}>
                          {'********'}
                        </Typography>
                      </Box>
                      <Link component={'button'} underline={'always'} fontWeight={700}>
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
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: isSmallDevice ? '1.5rem' : '2.5rem',
                    alignItems: 'stretch',
                  }}>
                  <Typography variant={'h5'} component="h4">
                    {'基本資料'}
                  </Typography>
                  <Stack direction={'column'} spacing={{ sm: 2, md: 3 }}>
                    <Box>
                      <Typography variant={'body1'}>{'姓名'}</Typography>
                      <Typography variant={'title'}>{memberData.name}</Typography>
                    </Box>
                    <Box>
                      <Typography variant={'body1'}>{'手機'}</Typography>
                      <Typography variant={'title'}>{memberData.phone}</Typography>
                    </Box>
                    <Box>
                      <Typography variant={'body1'}>{'生日'}</Typography>
                      <Typography variant={'title'}>
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
                      <Typography variant={'title'} component={'p'}>
                        {`${memberData.address.zipcode} ${memberData.address.county}${memberData.address.city}${memberData.address.detail}`}
                      </Typography>
                    </Box>
                  </Stack>
                  <MemberForm />
                  <Stack
                    direction={'column'}
                    spacing={{ sm: '1.5rem', md: '2.5rem' }}
                    alignItems={{ sm: 'stretch', md: 'flex-start' }}>
                    <Button variant={'outlined'} size={'large'}>
                      {'編輯'}
                    </Button>
                  </Stack>
                </Card>
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
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
                  <Typography variant={'body1'} component="h3">
                    {`預訂參考編號： ${orderData[0]._id}`}
                  </Typography>
                  <Typography variant={'h5'}>{'即將來的行程'}</Typography>
                  <Image
                    style={{
                      objectFit: 'cover',
                      borderRadius: '0.5rem',
                    }}
                    src={orderData[0].roomId.imageUrl}
                    alt={orderData[0].roomId.name}
                    height={434}
                    width={650}
                  />
                  <Stack direction={'column'} spacing={'1.5rem'}>
                    <Stack flexDirection={'row'}>
                      <Typography variant={'h6'}>
                        {`${orderData[0].roomId.name}，${calculateStayDays(
                          orderData[0].checkInDate,
                          orderData[0].checkOutDate,
                        )} 晚`}
                      </Typography>
                      <Divider orientation="vertical" variant="middle" flexItem />
                      <Typography variant={'h6'}>{`住宿人數：${orderData[0].peopleNum} 位`}</Typography>
                    </Stack>
                    <Box>
                      <Typography variant={'title'}>{`入住：${formatDate(
                        orderData[0].checkInDate,
                        '15:00 可入住',
                      )}`}</Typography>
                    </Box>
                    <Box>
                      <Typography variant={'title'}>
                        {`退房：${formatDate(orderData[0].checkOutDate, '12:00 前退房')}`}
                      </Typography>
                    </Box>
                    <Typography variant={'subtitle1'}>{`NT$ ${orderData[0].roomId.price}`}</Typography>
                  </Stack>
                  <Divider />
                  <Stack flexDirection={'column'} gap={'1.5rem'}>
                    <Box>
                      <Typography variant={'subtitle1'}>{'房內設備'}</Typography>
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
                            <Typography variant={'body1'}>{facility.title}</Typography>
                          </Stack>
                        ))}
                      </Card>
                    </Box>
                  </Stack>
                  <Box>
                    <Typography variant={'body1'}>{'訂單狀態'}</Typography>
                    <Typography variant={'title'}>{'已完成'}</Typography>
                  </Box>
                  <Stack direction={'row'} spacing={'1rem'} justifyContent={'space-between'}>
                    <Button variant={'outlined'} size={'large'} fullWidth>
                      {'取消訂單'}
                    </Button>
                    <Button variant={'contained'} size={'large'} fullWidth>
                      {'查看詳情'}
                    </Button>
                  </Stack>
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
                  <Typography variant={'h5'} component="h3">
                    {'歷史訂單'}
                  </Typography>
                  {orderData.map((order, index) => (
                    <Fragment key={order._id}>
                      <Stack gap={'1.5rem'} flexDirection={isSmallDevice ? 'column' : 'row'}>
                        <Image
                          style={{
                            objectFit: 'cover',
                            borderRadius: '0.5rem',
                          }}
                          src={order.roomId.imageUrl}
                          alt={order.roomId.name}
                          width={120}
                          height={80}
                        />
                        <Stack direction={'column'} gap={'1rem'}>
                          <Typography variant={'body1'}>{'訂單編號'}</Typography>
                          <Typography variant={'title'}>{`預訂參考編號： ${order._id}`}</Typography>
                          <Typography variant={'h6'} component="h4">
                            {order.roomId.name}
                          </Typography>
                          <Box>
                            <Typography variant={'body1'}>{`住宿天數：${calculateStayDays(
                              order.checkInDate,
                              order.checkOutDate,
                            )} 晚`}</Typography>
                            <Typography variant={'body1'}>{`住宿人數：${order.peopleNum} 位`}</Typography>
                          </Box>
                          <Box>
                            <Typography variant={'body1'}>{`入住：${formatDate(order.checkInDate)}`}</Typography>
                            <Typography variant={'body1'}>{`退房：${formatDate(order.checkOutDate)}`}</Typography>
                          </Box>
                          <Typography variant={'title'}>{`NT$ ${order.roomId.price}`}</Typography>
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
          </SwiperSlide>
        </StyledSwiper>
      </Container>
      <HorizontalWave size={isSmallDevice ? 'sm' : 'md'} />
    </>
  );
};

export default Page;
