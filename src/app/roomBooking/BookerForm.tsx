import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack, styled } from '@mui/material';
import { z } from 'zod';
import Input from '@/components/common/Input';
import Select from '@/components/common/Select';

const Form = styled('form', { shouldForwardProp: () => true })(({ theme }) => ({
  '& .MuiInputBase-root': {
    width: '100%',
  },
}));

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
//   birthdayYear: z.number().nonnegative(),
//   birthdayMonth: z.number().min(1).max(12),
//   birthdayDay: z.number().min(1).max(31),
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
//   birthdayYear: years[0],
//   birthdayMonth: 1,
//   birthdayDay: 1,
};

type MemberData = z.infer<typeof memberDataSchema>;

const BookerForm = () => {
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
    // const birthday = ` ${data.birthdayYear}-${data.birthdayMonth}-${data.birthdayDay}`;
    const finalData = { ...data };
    console.log(finalData);
  };

  const city = watch('address.city');

  return (
    <Form onSubmit={handleSubmit(onSubmit)} sx={{ marginBottom: '24px' }}>
      <Stack direction={'column'} spacing={'1.5rem'}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input type="text" {...field} label="姓名" error={Boolean(errors.name)} placeholder="請輸入姓名" />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <Input type="text" {...field} label="手機號碼" error={Boolean(errors.phone)} placeholder="請輸入手機號碼" />
          )}
        />
        {/* <Controller
          name="address.zipcode"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              label="電子信箱"
              error={Boolean(errors.address?.zipcode)}  
              placeholder="請輸入電子信箱"
            />
          )}
        /> */}
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input type="text" {...field} label="電子信箱" error={Boolean(errors.email)} placeholder="請輸入電子信箱" />
          )}
        />
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
      </Stack>
      <Controller
        name="address.detail"
        control={control}
        render={({ field }) => (
          <Input type="text" {...field} label="" error={Boolean(errors.address?.detail)} placeholder="請輸入詳細地址" />
        )}
      />
    </Form>
  );
};

export default BookerForm;
