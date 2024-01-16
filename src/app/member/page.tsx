'use client';

import type { NextPage } from 'next';
import { Avatar, Box, Button, Container, Link, Stack, Tab, Tabs, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import Card from '@/components/Card';
import Input from '@/components/Input';
import Select from '@/components/Select';
import HorizontalWave from '@/components/HorizontalWave';

import useDeviceSizes from '@/utils/useMediaQuery';
import memberBannerBG from '@/assets/images/memberBannerBG.jpg';

export const changePasswordDataSchema = z
  .object({
    oldPassword: z.string().min(1),
    newPassword: z.string().min(1),
    confirmPassword: z.string().min(1),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ['confirmPassword'],
    message: '兩次輸入密碼不一致',
  });

export const memberDataSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  phone: z.string().min(1),
  address: z.object({
    zipcode: z.number().nonnegative(),
    detail: z.string().min(1),
    county: z.string().min(1),
    city: z.string().min(1),
  }),
  birthdayYear: z.number().nonnegative(),
  birthdayMonth: z.number().min(1).max(12),
  birthdayDay: z.number().min(1).max(31),
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

const cities = ['台北市', '新北市', '桃園市']; // 示例城市數據
const districts = {
  台北市: ['中正區', '大同區', '中山區'],
  新北市: ['板橋區', '三重區', '中和區'],
  桃園市: ['桃園區', '中壢區', '大溪區'],
  // 其他城市的區域數據...
};

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const days = Array.from({ length: 31 }, (_, i) => i + 1);

const memberDataTemplate = {
  name: '',
  email: '',
  phone: '',
  address: {
    zipcode: 0,
    detail: '',
    county: '',
    city: '',
  },
  birthdayYear: years[0],
  birthdayMonth: 1,
  birthdayDay: 1,
};

type MemberData = z.infer<typeof memberDataSchema>;

type ValidationSchemaType = z.infer<typeof changePasswordDataSchema>;

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

const MemberForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    setValue,
    watch,
  } = useForm<MemberData>({
    resolver: zodResolver(memberDataSchema),
    defaultValues: memberDataTemplate,
  });

  const onSubmit = (data: MemberData) => {
    const birthday = ` ${data.birthdayYear}-${data.birthdayMonth}-${data.birthdayDay}`;
    const finalData = { ...data, birthday };
    console.log(finalData);
  };

  const city = watch('address.city');

  return (
    <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
      <Stack direction={'column'} spacing={'1.5rem'}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input type="text" {...field} label="姓名" error={Boolean(errors.name)} placeholder="請輸入您的姓名" />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              {...field}
              label="手機號碼"
              error={Boolean(errors.phone)}
              placeholder="請輸入您的手機號碼"
            />
          )}
        />
        <Stack direction={'row'} spacing={'1rem'}>
          <Controller
            name="birthdayYear"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                label="生日"
                options={years.map((year) => ({ value: year, label: String(year) }))}
                error={Boolean(errors.birthdayYear)}
                placeholder="請選擇您的出生年"
              />
            )}
          />
          <Controller
            name="birthdayMonth"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                label=""
                options={months.map((month) => ({ value: month, label: String(month) }))}
                error={Boolean(errors.birthdayYear)}
                placeholder="請選擇您的出生月"
              />
            )}
          />
          <Controller
            name="birthdayDay"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                label=""
                options={days.map((day) => ({ value: day, label: String(day) }))}
                error={Boolean(errors.birthdayYear)}
                placeholder="請選擇您的出生日"
              />
            )}
          />
        </Stack>
        <Stack direction={'row'} spacing={'0.5rem'}>
          <Controller
            name="address.city"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                label="地址"
                options={cities.map((city) => ({ value: city, label: city }))}
                error={Boolean(errors.address?.city)}
                placeholder="請選擇您的城市"
              />
            )}
          />
          <Controller
            name="address.county"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                label=""
                options={
                  city
                    ? (districts[city as keyof typeof districts] || []).map((district: string) => ({
                        value: district,
                        label: district,
                      }))
                    : []
                }
                error={Boolean(errors.address?.county)}
                disabled={!city}
                placeholder="請選擇您的區域"
              />
            )}
          />
        </Stack>
        <Controller
          name="address.zipcode"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              label="郵遞區號"
              error={Boolean(errors.address?.zipcode)}
              placeholder="請輸入郵遞區號"
            />
          )}
        />
        <Controller
          name="address.detail"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              {...field}
              label="詳細地址"
              error={Boolean(errors.address?.detail)}
              placeholder="請輸入詳細地址"
            />
          )}
        />

        <Button type="submit" variant={'contained'} size={'large'} disabled={!isDirty || !isValid} disableRipple>
          {'儲存設定'}
        </Button>
      </Stack>
    </form>
  );
};

const Member: NextPage = () => {
  const { isSmallDevice } = useDeviceSizes();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
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
            <Card
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
                  <Button
                    type="submit"
                    variant={'contained'}
                    size={'large'}
                    disabled={!isDirty || !isValid}
                    disableRipple>
                    {'儲存設定'}
                  </Button>
                </form>
              </Stack>
            </Card>
          </Grid2>
          <Grid2 md={7}>
            <Card
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
                  <Typography variant={'body1'}>
                    {`${memberData.address.zipcode} ${memberData.address.county}${memberData.address.city}${memberData.address.detail}`}
                  </Typography>
                </Box>
              </Stack>
              <form>
                <Stack direction={'column'} spacing={{ sm: 2, md: 3 }}>
                  <MemberForm />
                </Stack>
                <Button variant={'outlined'} size={'large'} disableRipple>
                  {'編輯'}
                </Button>
              </form>
            </Card>
          </Grid2>
        </Grid2>
      </Container>
      <HorizontalWave size={isSmallDevice ? 'sm' : 'md'} />
    </>
  );
};

export default Member;
