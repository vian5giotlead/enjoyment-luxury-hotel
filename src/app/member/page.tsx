'use client';

import type { NextPage } from 'next';
import { Avatar, Box, Button, Container, Link, Stack, Tab, Tabs, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import StyleCard from '@/components/Card';
import Input from '@/components/Input.style';
import HorizontalWave from '@/components/HorizontalWave';

import useDeviceSizes from '@/utils/useMediaQuery';
import memberBannerBG from '@/assets/images/memberBannerBG.jpg';

export const changePasswordDataSchema = z
  .object({
    oldPassword: z.string(),
    newPassword: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ['confirmPassword'],
    message: '兩次輸入密碼不一致',
  });

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

type ValidationSchemaType = z.infer<typeof changePasswordDataSchema>;

const memberData = {
  name: 'Jessica Ｗang',
  phone: '+886 912 345 678',
  birthday: '808416000000',
  address: '高雄市新興區六角路 123 號',
};

const Member: NextPage = () => {
  const { isSmallDevice } = useDeviceSizes();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchemaType>({
    resolver: zodResolver(changePasswordDataSchema),
  });

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
              <Typography variant={'h4'}>{`Hello，member name`}</Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container
        sx={{ paddingTop: isSmallDevice ? '2.5rem' : '5rem', paddingBottom: isSmallDevice ? '2.5rem' : '7.5rem' }}>
        <Tabs>
          {tabList.map((tab) => {
            return <Tab label={tab.title} key={tab.title} value={tab.value} />;
          })}
        </Tabs>
        <Grid2
          container
          direction={{ sm: 'column', md: 'row' }}
          justifyContent={'space-between'}
          gap={{ sm: 3, md: 5 }}
          wrap={'nowrap'}>
          <Grid2 md={5}>
            <StyleCard
              padding={isSmallDevice ? 'md' : 'lg'}
              display="flex"
              flexDirection="column"
              gap={isSmallDevice ? '1.5rem' : '2.5rem'}>
              <Typography variant={'h5'}>{'修改密碼'}</Typography>
              <Stack direction={'column'} spacing={{ sm: 2, md: 3 }}>
                <Box>
                  <Typography variant={'body1'}>{'電子信箱'}</Typography>
                  <Typography variant={'body1'}>{'ooo@ooo.com'}</Typography>
                </Box>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                  <Box>
                    <Typography variant={'body1'}>{'密碼'}</Typography>
                    <Typography variant={'body1'}>{'********'}</Typography>
                  </Box>
                  <Link component={'button'} underline={'always'}>
                    {'重設'}
                  </Link>
                </Stack>
                <form>
                  <Stack direction={'column'} spacing={{ sm: 2, md: 3 }}>
                    <Input
                      label="舊密碼"
                      fullWidth
                      type="password"
                      {...register('oldPassword')}
                      placeholder="請輸入舊密碼"
                      error={errors.oldPassword ? true : false}
                      helperText={errors.oldPassword ? errors.oldPassword.message : ''}
                    />
                    <Input
                      label="新密碼"
                      fullWidth
                      type="password"
                      {...register('newPassword')}
                      placeholder="請輸入新密碼"
                      error={errors.newPassword ? true : false}
                      helperText={errors.newPassword ? errors.newPassword.message : ''}
                    />
                    <Input
                      label="確認新密碼"
                      fullWidth
                      type="password"
                      {...register('confirmPassword')}
                      placeholder="請再輸入一次新密碼"
                      error={errors.confirmPassword ? true : false}
                      helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
                    />
                  </Stack>
                  <Button type="submit" variant={'contained'} size={'large'} disableRipple>
                    {'儲存設定'}
                  </Button>
                </form>
              </Stack>
            </StyleCard>
          </Grid2>
          <Grid2 md={7}>
            <StyleCard
              padding={isSmallDevice ? 'md' : 'lg'}
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap={isSmallDevice ? '1.5rem' : '2.5rem'}>
              <Typography variant={'h5'}>{'基本資料'}</Typography>
              <Stack direction={'column'} spacing={{ sm: 2, md: 3 }}>
                <Box>
                  <Typography variant={'body1'}>{'姓名'}</Typography>
                  <Typography variant={'body1'}>{memberData.name}</Typography>
                </Box>
                <Box>
                  <Typography variant={'body1'}>{'手機'}</Typography>
                  <Typography variant={'body1'}>{memberData.phone}</Typography>
                </Box>
                <Box>
                  <Typography variant={'body1'}>{'生日'}</Typography>
                  <Typography variant={'body1'}>
                    {`${new Date(Number(memberData.birthday)).getFullYear()} 年 ${new Date(Number(memberData.birthday)).getMonth() + 1} 月 ${new Date(Number(memberData.birthday)).getDate()} 日`}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant={'body1'}>{'地址'}</Typography>
                  <Typography variant={'body1'}>{memberData.address}</Typography>
                </Box>
              </Stack>
              <Button variant={'outlined'} size={'large'} disableRipple>
                {'編輯'}
              </Button>
            </StyleCard>
          </Grid2>
        </Grid2>
      </Container>
      <HorizontalWave size={isSmallDevice ? 'sm' : 'md'} />
    </>
  );
};

export default Member;
