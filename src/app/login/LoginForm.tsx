'use client';

import { userLogin } from '@/assets/api';
import Input from '@/components/common/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocalStorage } from '@uidotdev/usehooks';

import {
  Button,
  Checkbox as BaseCheckbox,
  FormControlLabel,
  FormGroup,
  Link,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const loginDataSchema = z.object({
  email: z.string().email('請輸入有效的電子郵件地址'),
  password: z.string().min(1),
});

type LoginDataSchema = z.infer<typeof loginDataSchema>;

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  paddingTop: '2.5rem',
  paddingBottom: '2.5rem',
}));

const Checkbox = styled(BaseCheckbox)(({ theme }) => ({
  color: theme.palette.primary.main,
  '&.MuiCheckbox-colorPrimary': {
    color: theme.palette.primary.main,
  },
}));

const Label = styled(Typography)(({ theme }) => ({
  color: 'white',
  [theme.breakpoints.down('md')]: { fontSize: '0.875rem' },
  [theme.breakpoints.up('md')]: { fontSize: '1rem' },
}));

const LoginForm = () => {
  const [token, setToken] = useLocalStorage<string | null>('token', null);
  const [account, setAccount] = useLocalStorage<string | null>('account', null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<LoginDataSchema>({
    defaultValues: {
      email: account || undefined,
    },
    resolver: zodResolver(loginDataSchema),
  });

  const email = watch('email');
  const onSubmit = async (data: LoginDataSchema) => {
    const { email, password } = data;

    const res = await userLogin({
      email,
      password,
    });

    console.log(res);
    if (res.status === true) {
      setToken(res.token);
    }
  };

  const handleRememberAccount = (email: string, trigger: boolean) => {
    if (trigger) {
      setAccount(email);
    } else {
      setAccount(null);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="電子信箱"
        fullWidth
        type="email"
        {...register('email')}
        placeholder="請輸入您的Email"
        error={errors.email ? true : false}
        helperText={errors.email ? errors.email.message : ''}
      />
      <Input
        label="密碼"
        fullWidth
        type="password"
        {...register('password')}
        placeholder="請輸入您的密碼"
        error={errors.password ? true : false}
        helperText={errors.password ? errors.password.message : ''}
      />
      <Stack direction={'row'} justifyContent={'space-between'}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={account ? true : false}
                onChange={(e) => handleRememberAccount(email, e.target.checked)}
              />
            }
            label={<Label color="white">記住帳號</Label>}
          />
        </FormGroup>
        <Link href="/forgot-password">忘記密碼</Link>
      </Stack>
      <Button
        fullWidth
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        sx={{ padding: '1rem', marginTop: '2.5rem' }}>
        會員登入
      </Button>
    </Form>
  );
};

export default LoginForm;
