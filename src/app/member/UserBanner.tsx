'use client';
import { Avatar, Box, Container, Stack, Typography } from '@mui/material';

export const UserBanner = ({ isSmallDevice, url }: { isSmallDevice: boolean; url: string }) => {
  return (
    <Box
      sx={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${url})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: isSmallDevice ? '12.875rem' : '24rem',
      }}>
      <Container sx={{ height: '100%' }}>
        <Stack direction={'column'} justifyContent={'center'} height="100%">
          <Stack direction={{ sm: 'column', md: 'row' }} alignItems={'center'} spacing={{ sm: 2, md: 3 }}>
            <Avatar sx={{ height: isSmallDevice ? '9rem' : '4.5rem', width: isSmallDevice ? '9rem' : '4.5rem' }} />
            <Typography variant={'h4'} color="white" component="h2">{`Hello，member name`}</Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
