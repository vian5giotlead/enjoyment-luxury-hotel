'use client';

import { useEffect, useState } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import Input from '@/components/common/Input';
import Select from '@/components/common/Select';
import { citys, zipcodes } from '@/assets/cityData';
import countryPhoneCodes from '@/assets/countryPhoneCodes.json';
import countryFlagEmoji from '@/assets/countryFlagEmoji.json';
import { zodResolver } from '@hookform/resolvers/zod';
import { updateUserData } from '@/assets/api';
import { formatPhoneNumber } from '@/utils';

export const memberDataSchema = z.object({
  name: z.string().min(1, '名字不能為空'),
  email: z.string().email('請輸入有效的電子郵件地址'),
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
});

type MemberDataType = z.infer<typeof memberDataSchema>;

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 88 }, (_, i) => currentYear - i);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const days = Array.from({ length: 31 }, (_, i) => i + 1);

const UserDataForm = ({
  memberData,
  setOpenForm,
}: {
  memberData?: MemberData;
  setOpenForm?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const defaultValueCity =
    memberData &&
    zipcodes.find((city) => city.zone.find((counties) => counties.zipcode === memberData.address.zipcode))?.city;

  const birthday = memberData && new Date(memberData.birthday);

  const [counties, setCounties] = useState<
    | {
        detail: string;
        zipcode: number;
        city: string;
        county: string;
      }[]
    | []
  >([]);

  const {
    handleSubmit,
    watch,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm<MemberDataType>({
    defaultValues: {
      ...memberData,
      city: defaultValueCity,
      address: {
        zipcode: memberData && memberData.address.zipcode,
        detail: memberData && memberData.address.detail,
      },
      birthdayYear: birthday && birthday.getFullYear(),
      birthdayMonth: birthday && birthday.getMonth() + 1,
      birthdayDay: birthday && birthday.getDate(),
    },
    resolver: zodResolver(memberDataSchema),
  });

  const onSubmit: SubmitHandler<MemberDataType> = async (data) => {
    const birthday = ` ${data.birthdayYear}-${data.birthdayMonth}-${data.birthdayDay}`;
    const resultPhone = data.phone[0] === '0' ? data.phone.slice(1) : data.phone;
    const phone = `(${data.countryPhoneCode}) ${formatPhoneNumber(resultPhone)}`;
    const newMemberData: MemberUpdateData = {
      name: data.name,
      email: data.email,
      phone,
      address: {
        zipcode: data.address.zipcode,
        detail: data.address.detail,
      },
      birthday: birthday,
    };
    console.log(newMemberData);
    const result = await updateUserData(newMemberData);
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction={'column'} spacing={'1.5rem'}>
        <Controller
          name="name"
          control={control}
          render={({ field: { ref, ...field } }) => (
            <Input
              type="text"
              {...field}
              helperText={errors.name?.message}
              label="姓名"
              error={Boolean(errors.name)}
              placeholder="請輸入您的姓名"
            />
          )}
        />
        <Stack direction={'row'} spacing={'1rem'}>
          <Controller
            name="countryPhoneCode"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                label="區域號碼"
                options={countryPhoneCodes.map((item) => ({
                  key: item.iso,
                  value: item.code,
                  content: (
                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                      {countryFlagEmoji.find((flag) => flag.code === item.iso)?.image && (
                        <Image
                          src={countryFlagEmoji.find((flag) => flag.code === item.iso)?.image as unknown as string}
                          width={24}
                          height={24}
                          alt={item.iso}
                        />
                      )}
                      <Typography variant={'body2'} component={'span'}>
                        (+{item.code})
                      </Typography>
                    </Stack>
                  ),
                }))}
                error={Boolean(errors.countryPhoneCode)}
                placeholder="區碼"
                sx={{ width: '100%' }}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                {...field}
                helperText={errors.phone?.message}
                label="手機號碼"
                error={Boolean(errors.phone)}
                placeholder="請輸入您的手機號碼"
                maxLength={10}
              />
            )}
          />
        </Stack>
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
            name="city"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                label="地址"
                options={citys.map((city) => ({ value: city, label: city }))}
                error={Boolean(errors.city)}
                placeholder="您所在的城市"
              />
            )}
          />
          <Controller
            name="address.zipcode"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                label=""
                options={counties.map((county) => ({
                  key: county.county,
                  value: county.zipcode,
                  label: county.county,
                }))}
                error={Boolean(errors.address?.message)}
                disabled={counties.length <= 1}
                placeholder="您所在的區域"
              />
            )}
          />
        </Stack>
        <Controller
          name="address.detail"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              {...field}
              helperText={errors.address?.detail?.message}
              label="詳細地址"
              error={Boolean(errors.address?.detail)}
              placeholder="請輸入詳細地址"
            />
          )}
        />
        {setOpenForm && (
          <Stack direction={'row'} justifyContent={'space-between'} gap={{ sm: 3, md: 0 }}>
            <Button
              sx={{
                width: { sm: '100%', md: 'auto' },
              }}
              type="submit"
              variant={'contained'}
              size={'large'}
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
        )}
      </Stack>
    </form>
  );
};

export default UserDataForm;
