'use client';

import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material';
import HorizontalWave from '@/components/common/HorizontalWave';
import { useWidth } from '@/hooks';
import LoginForm from './LoginForm';

const template = {
  subTitle: '享樂酒店，誠摯歡迎',
  title: '立即開始旅程',
};
const Page = () => {
  const widthSize = useWidth();
  const isSmallDevice = widthSize === 'sm';
  return (
    <Grid container direction={isSmallDevice ? 'column' : 'row'}>
      <Grid item md={6}>
        <Box position={'relative'} sx={{ maxHeight: '100%', minHeight: '100dvh' }}></Box>
      </Grid>
      <Grid item md={6}>
        <HorizontalWave />
        <Grid sx={{ margin: '0 auto', maxWidth: isSmallDevice ? undefined : '26rem' }}>
          <Stack direction={'column'} gap={'0.5rem'}>
            <Typography variant="title" component="span" sx={{ fontWeight: 400 }} color="primary">
              {template.subTitle}
            </Typography>
            <Typography variant={isSmallDevice ? 'h3' : 'h1'} component="h1" sx={{ fontWeight: 700 }} color="white">
              {template.title}
            </Typography>
          </Stack>
          <LoginForm />
          <Typography
            variant={isSmallDevice ? 'body2' : 'body1'}
            component="span"
            sx={{ fontWeight: 400 }}
            color="white">
            {`沒有會員嗎？`}
            <Link href="/signup" sx={{ marginLeft: '0.5rem' }}>
              前往註冊
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Page;
