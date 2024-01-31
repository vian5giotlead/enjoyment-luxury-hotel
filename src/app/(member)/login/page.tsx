'use client';

import { Box, Grid, Link, Stack, Typography } from '@mui/material';
import HorizontalWave from '@/components/common/HorizontalWave';
import { useWidth } from '@/hooks';
import Image from 'next/image';
import cover from '@/assets/images/login.jpg';

const template = {
  subTitle: '享樂酒店，誠摯歡迎',
  title: '立即開始旅程',
};

import LoginForm from './LoginForm';

const Page = () => {
  const widthSize = useWidth();
  const isSmallDevice = widthSize === 'sm';

  return (
    <Grid container direction={isSmallDevice ? 'column' : 'row'}>
      <Grid item md={6} sx={{ display: isSmallDevice ? 'hidden' : '' }}>
        <Box position={'relative'} sx={{ maxHeight: '100%', minHeight: '100dvh' }}>
          <Image src={cover.src} alt="cover" layout="fill" objectFit="cover" />
        </Box>
      </Grid>
      <Grid item sm={12} md={6}>
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
          <LoginForm />
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
