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

export const bookerDataSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  phone: z.string().min(1),
  address: z.object({
    detail: z.string().min(1),
    county: z.string().min(1),
    city: z.string().min(1),
  }),
});

const cities = ['台北市', '新北市', '桃園市']; // 示例城市數據
const districts = {
  台北市: ['中正區', '大同區', '中山區'],
  新北市: ['板橋區', '三重區', '中和區'],
  桃園市: ['桃園區', '中壢區', '大溪區'],
  // 其他城市的區域數據...
};

const bookerDataTemplate = {
  name: '',
  email: '',
  phone: '',
  address: {
    city: '',
    county: '',
    detail: '',
  },
  //   birthdayYear: years[0],
  //   birthdayMonth: 1,
  //   birthdayDay: 1,
};

type bookerData = z.infer<typeof bookerDataSchema>;

const BookerForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    setValue,
    watch,
  } = useForm<bookerData>({
    resolver: zodResolver(bookerDataSchema),
    defaultValues: bookerDataTemplate,
  });

  const onSubmit = (data: bookerData) => {
    try {
      console.log(1);
      const finalData = { ...data };
      console.log(finalData);
    } catch {
      throw new Error('Something is wrong');
    }
  };

  const onChange = () => {
    console.log(1);
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
      <button type="submit">submit!</button>
    </Form>
  );
};

export default BookerForm;
