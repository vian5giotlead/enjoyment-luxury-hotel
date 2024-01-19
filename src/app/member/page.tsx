'use client';

import { Fragment, useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/legacy/image';
import { Backdrop, Box, Button, Container, Divider, Fade, Grid, Link, Modal, Stack, Typography } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import Card from '@/components/common/Card';

import { useWidth } from '@/hooks';

import ChangePasswordForm from './ChangePasswordForm';
import MemberForm from './MemberForm';
import { SwiperTabs, StyledSwiper } from './Tabs';

import 'swiper/css';
import { Close, KeyboardArrowDown } from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';
import Drawer from './Drawer';
import { TitleText } from './style';

export const tabList = [
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
  const [openModal, setOpenModal] = useState(false);
  const [openForm, setOpenForm] = useState({
    ChangePassword: false,
    Member: false,
  });

  const widthSize = useWidth();

  const isSmallDevice = widthSize === 'sm';

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleOpenForm(formName: 'ChangePassword' | 'Member') {
    return () => {
      setOpenForm((prevState) => ({
        ...prevState,
        [formName]: !prevState[formName],
      }));
    };
  }

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
    <>
      <Container
        sx={{ paddingTop: isSmallDevice ? '2.5rem' : '5rem', paddingBottom: isSmallDevice ? '2.5rem' : '7.5rem' }}>
        <StyledSwiper
          slidesPerView={1}
          spaceBetween={30}
          navigation
          observer={true}
          modules={[Navigation, Pagination]}
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
          <SwiperSlide style={{ height: '100%' }}>
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
                      <Link
                        component={'button'}
                        underline={'always'}
                        fontWeight={700}
                        onClick={handleOpenForm('ChangePassword')}>
                        {'重設'}
                      </Link>
                    </Stack>
                  </Stack>
                  {openForm.ChangePassword && <ChangePasswordForm handleOpenForm={handleOpenForm} />}
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
                    <TitleText title={'姓名'} content={memberData.name} />
                    <TitleText title={'手機號碼'} content={memberData.phone} />
                    <TitleText
                      title={'生日'}
                      content={memberData.birthday
                        .split('/')
                        .map((date, index) => {
                          if (index === 0) {
                            return `${date}年`;
                          } else if (index === 1) {
                            return `${date}月`;
                          } else {
                            return `${date}日`;
                          }
                        })
                        .join('')}
                    />
                    <TitleText
                      title={'地址'}
                      content={`${memberData.address.zipcode} ${memberData.address.county}${memberData.address.city}${memberData.address.detail}`}
                    />
                  </Stack>
                  {openForm.Member && <MemberForm handleOpenForm={handleOpenForm} />}
                  <Stack
                    direction={'column'}
                    spacing={{ sm: '1.5rem', md: '2.5rem' }}
                    alignItems={{ sm: 'stretch', md: 'flex-start' }}
                    sx={{
                      display: !openForm.Member ? 'flex' : 'none',
                    }}>
                    <Button variant={'outlined'} size={'large'} onClick={handleOpenForm('Member')}>
                      {'編輯'}
                    </Button>
                  </Stack>
                </Card>
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide style={{ height: '100%' }}>
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
                        variant={
                          isSmallDevice ? 'subtitle1' : 'h6'
                        }>{`住宿人數：${orderData[0].peopleNum} 位`}</Typography>
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
                  <Stack direction={'row'} spacing={'1rem'} justifyContent={'space-between'}>
                    <Button variant={'outlined'} size={'large'} fullWidth onClick={handleOpenModal}>
                      {'取消訂單'}
                    </Button>
                    <Button variant={'contained'} size={'large'} fullWidth>
                      {'查看詳情'}
                    </Button>
                  </Stack>
                  {isSmallDevice ? (
                    <Drawer open={openModal} setOpen={handleCloseModal}>
                      <Stack
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        direction={'column'}
                        sx={{
                          bgcolor: 'background.paper',
                          padding: 0,
                        }}>
                        <Stack
                          direction={'row'}
                          justifyContent={'space-between'}
                          alignItems={'center'}
                          padding={'1rem'}
                          width={'100%'}>
                          <Typography variant={'h6'}>{'取消預訂'}</Typography>
                          <Close
                            sx={{
                              maxWidth: '2.5rem',
                              maxHeight: '2.5rem',
                              width: '100%',
                              height: '100%',
                              cursor: 'pointer',
                              padding: '0.5rem',
                            }}
                            onClick={handleCloseModal}
                          />
                        </Stack>
                        <Box
                          display={'grid'}
                          width={'100%'}
                          minHeight={'6rem'}
                          pt={'2.5rem'}
                          pb={'2.5rem'}
                          sx={{ placeContent: 'center' }}>
                          <Typography variant={'h6'}>{'確定要取消此房型的預訂嗎？'}</Typography>
                        </Box>
                        <Stack direction={'row'} spacing={'1rem'} width={'100%'} padding={'0.75rem'}>
                          <Button variant={'outlined'} size={'large'} fullWidth onClick={handleCloseModal}>
                            {'關閉視窗'}
                          </Button>
                          <Button variant={'contained'} size={'large'} fullWidth>
                            {'確定取消'}
                          </Button>
                        </Stack>
                      </Stack>
                    </Drawer>
                  ) : (
                    <Modal
                      open={openModal}
                      onClose={handleCloseModal}
                      closeAfterTransition
                      slots={{ backdrop: Backdrop }}
                      slotProps={{
                        backdrop: {
                          timeout: 500,
                        },
                      }}>
                      <Fade in={openModal}>
                        <Stack
                          borderRadius={'0.5rem'}
                          justifyContent={'space-between'}
                          alignItems={'center'}
                          direction={'column'}
                          sx={{
                            position: 'absolute' as 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '37.5rem',
                            minHeight: '19rem',
                            bgcolor: 'background.paper',
                            padding: 0,
                          }}>
                          <Box
                            display={'grid'}
                            width={'100%'}
                            minHeight={'14rem'}
                            sx={{ placeContent: 'center' }}
                            position={'relative'}>
                            <Close
                              sx={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                maxWidth: '2.5rem',
                                maxHeight: '2.5rem',
                                width: '100%',
                                height: '100%',
                                cursor: 'pointer',
                                padding: '0.5rem',
                              }}
                              onClick={handleCloseModal}
                            />
                            <Typography variant={'h6'}>{'確定要取消此房型的預訂嗎？'}</Typography>
                          </Box>
                          <Stack direction={'row'} spacing={'1rem'} width={'100%'} padding={'0.75rem'}>
                            <Button variant={'outlined'} size={'large'} fullWidth onClick={handleCloseModal}>
                              {'關閉視窗'}
                            </Button>
                            <Button variant={'contained'} size={'large'} fullWidth>
                              {'確定取消'}
                            </Button>
                          </Stack>
                        </Stack>
                      </Fade>
                    </Modal>
                  )}
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
                          <Typography
                            variant={isSmallDevice ? 'body2' : 'title'}>{`預訂參考編號： ${order._id}`}</Typography>
                          <Typography variant={isSmallDevice ? 'subtitle1' : 'h6'} component="h4">
                            {order.roomId.name}
                          </Typography>
                          <Box>
                            <Typography variant={isSmallDevice ? 'body2' : 'body1'}>{`住宿天數：${calculateStayDays(
                              order.checkInDate,
                              order.checkOutDate,
                            )} 晚`}</Typography>
                            <Typography
                              variant={
                                isSmallDevice ? 'body2' : 'body1'
                              }>{`住宿人數：${order.peopleNum} 位`}</Typography>
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
          </SwiperSlide>
        </StyledSwiper>
      </Container>
    </>
  );
};

export default Page;
