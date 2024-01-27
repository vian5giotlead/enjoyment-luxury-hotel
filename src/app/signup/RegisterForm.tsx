'use client';

import Input from '@/components/common/Input';
import { Button, Grid, Stack, Typography } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useWidth } from '@/hooks';
import { z } from 'zod';
import { useEffect, useMemo, useState } from 'react';
import { formatPhoneNumber } from '@/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { userRegister } from '@/assets/api';
import { zipcodes } from '@/assets/cityData';

export const registerSchema = z
  .object({
    email: z.string().email('請輸入有效的電子郵件地址'),
    password: z.string().min(1),
    confirmPassword: z.string().min(1),
    name: z.string().min(1, '名字不能為空'),
    city: z.string().min(1, '城市不能為空'),
    phone: z.string().min(1, '電話號碼不能為空'),
    address: z.object({
      zipcode: z.number().min(100, '郵政編碼應為有效數值').max(999, '郵政編碼應為有效數值'),
      detail: z.string().min(1, '地址詳情不能為空'),
    }),
    countryPhoneCode: z.string(),
    birthdayYear: z.number().nonnegative(),
    birthdayMonth: z.number().min(1).max(12),
    birthdayDay: z.number().min(1).max(31),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: '兩次輸入密碼不一致',
  });

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 88 }, (_, i) => currentYear - i);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const days = Array.from({ length: 31 }, (_, i) => i + 1);

type MemberRegisterType = z.infer<typeof registerSchema>;

export default function RegisterForm({ step, handleNext }: { step: number; handleNext: () => void }) {
  const [counties, setCounties] = useState<
    | {
        detail: string;
        zipcode: number;
        city: string;
        county: string;
      }[]
    | []
  >([]);
  const widthSize = useWidth();
  const isSmallDevice = widthSize === 'sm';

  const templateForm = useMemo(
    () => [
      {
        name: 'email',
        label: '電子郵件',
        type: 'email',
        placeholder: 'hello@exsample.com',
      },
      {
        name: 'password',
        label: '密碼',
        type: 'password',
        placeholder: '請輸入密碼',
      },
      {
        name: 'confirmPassword',
        label: '確認密碼',
        type: 'password',
        placeholder: '請再輸入一次密碼',
      },
    ],
    [],
  );
  const templateForm2 = useMemo(
    () => [
      {
        name: 'name',
        label: '姓名',
        type: 'text',
        placeholder: '請輸入姓名',
      },
      {
        name: 'phone',
        label: '手機號碼',
        type: 'text',
        placeholder: '請輸入手機號碼',
      },
    ],
    [],
  );

  const {
    handleSubmit,
    watch,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm<MemberRegisterType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<MemberRegisterType> = async (data) => {
    const birthday = ` ${data.birthdayYear}-${data.birthdayMonth}-${data.birthdayDay}`;
    const resultPhone = data.phone[0] === '0' ? data.phone.slice(1) : data.phone;
    const phone = `(${data.countryPhoneCode}) ${formatPhoneNumber(resultPhone)}`;

    const result = await userRegister({
      email: data.email,
      password: data.password,
      name: data.name,
      phone,
      address: {
        zipcode: data.address.zipcode,
        detail: data.address.detail,
      },
      birthday,
    });
    console.log(result);
  };
  const city = watch('city');
  useEffect(() => {
    if (city) {
      const findCity = zipcodes.find((item) => item.city === city);
      const resultCounties = findCity?.zone as {
        detail: string;
        zipcode: number;
        city: string;
        county: string;
      }[];
      setCounties(resultCounties);
    }
  }, [city]);

  return (
    <Grid item>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction={'column'} spacing={'1rem'}>
          {templateForm.map((item) => (
            <Controller
              key={item.name}
              name={item.name as keyof MemberRegisterType}
              control={control}
              render={({ field }) => {
                const value = typeof field.value === 'object' ? JSON.stringify(field.value) : field.value;
                return (
                  <Input
                    type={item.type}
                    labelColor="white"
                    {...field}
                    value={value}
                    label={item.label}
                    helperText={errors[item.name as keyof MemberRegisterType]?.message}
                    error={Boolean(errors[item.name as keyof MemberRegisterType])}
                    placeholder={item.placeholder}
                  />
                );
              }}
            />
          ))}
        </Stack>
      </form>
      {step === 1 ? (
        <Button
          fullWidth
          type="button"
          variant="contained"
          color="primary"
          size="large"
          disabled={!isDirty || !isValid}
          onClick={handleNext}
          sx={{ padding: '1rem', marginTop: '2.5rem' }}>
          下一步
        </Button>
      ) : (
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          onClick={handleNext}
          sx={{ padding: '1rem', marginTop: '2.5rem' }}>
          完成註冊
        </Button>
      )}
    </Grid>
  );
}
