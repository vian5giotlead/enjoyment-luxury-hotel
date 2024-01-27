'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Stack, styled, InputBase } from '@mui/material';

const Form = styled('form', { shouldForwardProp: () => true })(({ theme }) => ({
  '& .MuiInputBase-root': {
    width: '100%',
  },
}));

const Label = styled('label')(
  ({ theme }) => `
  font-family: ${theme.typography.fontFamily};
  font-weight: 700;
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  letter-spacing: 0.0175rem;
  `,
);

const StyleInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#fff',
    border: '1px solid',
    borderColor: '#ececec',
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `0 0 0 0.25rem rgba(190, 156, 124, 0.1)`,
      borderColor: theme.palette.primary.main,
    },
    '&:invalid': {
      borderColor: theme.palette.error.main,
    },
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

type bookerData = z.infer<typeof bookerDataSchema>;

interface BookerFormProps {
  props: {
    roomId: string;
    checkInDate: string;
    checkOutDate: string;
    peopleNum: number;
  };
}

const bookerDataTemplate = {
  name: '',
  email: '',
  phone: '',
  address: {
    city: '',
    county: '',
    detail: '',
  },
};
const LoginForm = (props: BookerFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<bookerData>({
    defaultValues: bookerDataTemplate,
    resolver: zodResolver(bookerDataSchema),
  });

  const city = watch('address.city');
  const onSubmit = (data: bookerData) => {
    const finalData = { ...data };
    console.log(finalData);
    console.log(props);
    // 需要合併 props 和 formData 和 zipcode 資料在 post order
  };

  return (
    <Form id="my-form" onSubmit={handleSubmit(onSubmit)}>
      <Label>姓名</Label>
      <StyleInput type="text" {...register('name')} placeholder="請輸入姓名" />
      {errors.name && <span>{errors.name.message}</span>}
      <Label>手機號碼</Label>
      <StyleInput type="text" {...register('phone')} placeholder="請輸入手機號碼" />
      {errors.phone && <span>{errors.phone.message}</span>}
      <Label>電子信箱</Label>
      <StyleInput type="email" {...register('email')} placeholder="請輸入電子信箱" />
      {errors.email && <span>{errors.email.message}</span>}
      <Label>地址</Label>
      <Stack direction={'row'} alignItems={'flex-end'} spacing={'0.5rem'}>
        <select {...register('address.city')}>
          <option value="">您所在的城市</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <select {...register('address.county')} disabled={!city}>
          <option value="">您所在的區域</option>
          {city
            ? (districts[city as keyof typeof districts] || []).map((district: string) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))
            : []}
        </select>
      </Stack>
      <StyleInput type="text" {...register('address.detail')} placeholder="請輸入詳細地址" />
    </Form>
  );
};

export default LoginForm;
