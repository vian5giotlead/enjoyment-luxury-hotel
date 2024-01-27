'use client';

import {
  Button,
  Checkbox as BaseCheckbox,
  FormControlLabel,
  FormGroup,
  Box,
  Grid,
  styled,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import HorizontalWave from '@/components/common/HorizontalWave';
import { useWidth } from '@/hooks';
import Image from 'next/image';
import cover from '@/assets/images/login.jpg';
import { userLogin } from '@/assets/api';
import Input from '@/components/common/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocalStorage } from '@uidotdev/usehooks';

import { useForm } from 'react-hook-form';
import { z } from 'zod';

const template = {
  subTitle: '享樂酒店，誠摯歡迎',
  title: '立即開始旅程',
};

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

const Page = () => {
  const widthSize = useWidth();
  const isSmallDevice = widthSize === 'sm';
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
    <Grid container direction={isSmallDevice ? 'column' : 'row'}>
      <Grid item md={6}>
        <Box position={'relative'} sx={{ maxHeight: '100%', minHeight: '100dvh' }}>
          <Image src={cover.src} alt="cover" layout="fill" objectFit="cover" />
        </Box>
      </Grid>
      <Grid item md={6}>
        <Box position={'relative'}>
          <Box
            position={'absolute'}
            sx={{
              top: isSmallDevice ? '2rem' : '4.5rem',
              width: '100%',
              zIndex: -1,
            }}>
            <HorizontalWave />
          </Box>
        </Box>
        <Grid
          display={'flex'}
          direction={'column'}
          justifyContent={'center'}
          gap={'0.5rem'}
          sx={{ margin: '0 auto', maxWidth: isSmallDevice ? undefined : '26rem', height: '100%', zIndex: 10 }}>
          <Stack direction={'column'} gap={'0.5rem'}>
            <Typography variant="title" component="span" sx={{ fontWeight: 400 }} color="primary">
              {template.subTitle}
            </Typography>
            <Typography variant={isSmallDevice ? 'h3' : 'h1'} component="h1" sx={{ fontWeight: 700 }} color="white">
              {template.title}
            </Typography>
          </Stack>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="電子信箱"
              labelColor={'white'}
              fullWidth
              type="email"
              {...register('email')}
              placeholder="請輸入您的Email"
              error={errors.email ? true : false}
              helperText={errors.email ? errors.email.message : ''}
            />
            <Input
              label="密碼"
              labelColor={'white'}
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
              disabled={!isDirty || !isValid}
              sx={{ padding: '1rem', marginTop: '2.5rem' }}>
              會員登入
            </Button>
          </Form>
          <Typography
            variant={isSmallDevice ? 'body2' : 'body1'}
            component="span"
            sx={{ fontWeight: 400 }}
            color="white">
            {`沒有會員嗎？`}
            <Link href={'/signup'} sx={{ marginLeft: '0.5rem' }}>
              前往註冊
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Page;
