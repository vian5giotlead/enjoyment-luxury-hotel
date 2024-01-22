'use client';

import { useState } from 'react';
import { Button, Stack, Typography } from '@mui/material';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Input from '@/components/common/Input';
import Select from '@/components/common/Select';
import { Form, TitleText } from './style';
import Card from '@/components/common/Card';
import { useWidth } from '@/hooks';

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

const cities = ['台北市', '新北市', '桃園市']; // 示例城市數據
const districts = {
  台北市: ['中正區', '大同區', '中山區'],
  新北市: ['板橋區', '三重區', '中和區'],
  桃園市: ['桃園區', '中壢區', '大溪區'],
  // 其他城市的區域數據...
};

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 88 }, (_, i) => currentYear - i);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const days = Array.from({ length: 31 }, (_, i) => i + 1);

type MemberDataType = z.infer<typeof memberDataSchema>;

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

type Data = {
  status: boolean;
  result: MemberData;
};

const Page = ({ data }: { data: Data }) => {
  const [openForm, setOpenForm] = useState(false);
  console.log(data);
  const memberData = data.result;

  const birthday = new Date(memberData.birthday);
  memberData.birthday = `${birthday.getFullYear()}年 ${birthday.getMonth() + 1}月 ${birthday.getDate()}日`;

  const widthSize = useWidth();
  const isSmallDevice = widthSize === 'sm';

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    setValue,
    watch,
  } = useForm<MemberDataType>({
    resolver: zodResolver(memberDataSchema),
    defaultValues: memberDataTemplate,
  });

  const onSubmit = (data: MemberDataType) => {
    const birthday = ` ${data.birthdayYear}-${data.birthdayMonth}-${data.birthdayDay}`;
    const finalData = { ...data, birthday };
    console.log(finalData);
  };

  const city = watch('address.city');

  return (
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
        <TitleText title={'生日'} content={memberData.birthday} />
        <TitleText title={'地址'} content={`${memberData.address.zipcode} ${memberData.address.detail}`} />
      </Stack>
      {openForm && (
        <Form onSubmit={handleSubmit(onSubmit)}>
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
            <Stack direction={'row'} alignItems={'flex-end'} spacing={'1rem'}>
              <Controller
                name="birthdayYear"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    label="生日"
                    options={years.map((year) => ({ value: year, label: String(year) }))}
                    error={Boolean(errors.birthdayYear)}
                    placeholder="您的出生年"
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
                    placeholder="您的出生月"
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
                    placeholder="您的出生日"
                  />
                )}
              />
            </Stack>
            <Stack direction={'row'} alignItems={'flex-end'} spacing={'0.5rem'}>
              <Controller
                name="address.city"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    label="地址"
                    options={cities.map((city) => ({ value: city, label: city }))}
                    error={Boolean(errors.address?.city)}
                    placeholder="您所在的城市"
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
                    placeholder="您所在的區域"
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
            <Stack direction={'row'} justifyContent={'space-between'} gap={{ sm: 3, md: 0 }}>
              <Button
                sx={{
                  width: { sm: '100%', md: 'auto' },
                }}
                type="submit"
                variant={'contained'}
                size={'large'}
                disabled={!isDirty || !isValid}
                disableRipple>
                {'儲存設定'}
              </Button>
              <Button
                sx={{
                  width: { sm: '100%', md: 'auto' },
                }}
                type="button"
                variant={'outlined'}
                size={'large'}
                disableRipple
                onClick={() => setOpenForm(false)}>
                {'取消'}
              </Button>
            </Stack>
          </Stack>
        </Form>
      )}
      <Stack
        direction={'column'}
        spacing={{ sm: '1.5rem', md: '2.5rem' }}
        alignItems={{ sm: 'stretch', md: 'flex-start' }}
        sx={{
          display: !openForm ? 'flex' : 'none',
        }}>
        <Button variant={'outlined'} size={'large'} onClick={() => setOpenForm(false)}>
          {'編輯'}
        </Button>
      </Stack>
    </Card>
  );
};

export default Page;
