'use client';

import { useState } from 'react';
import { Box, Link, Stack, Typography, Button } from '@mui/material';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import Card from '@/components/common/Card';
import Input from '@/components/common/Input';
import { useWidth } from '@/hooks';
import { updateUserData } from '@/assets/api';

export const changePasswordDataSchema = z
  .object({
    oldPassword: z.string().min(1),
    newPassword: z.string().min(1),
    confirmPassword: z.string().min(1),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ['confirmPassword'],
    message: '兩次輸入密碼不一致',
  });

type ChangePasswordDataSchema = z.infer<typeof changePasswordDataSchema>;

const Page = ({ data }: { data: MemberResponseData }) => {
  const [ openForm, setOpenForm ] = useState(false);
  
  const memberData = data.result;

  const widthSize = useWidth();
  const isSmallDevice = widthSize === 'sm';

  
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<ChangePasswordDataSchema>({
    resolver: zodResolver(changePasswordDataSchema),
  });

  const onSubmit = async (data: ChangePasswordDataSchema) =>
  {
    console.log(memberData);
    console.log(data);

    const result = await updateUserData({
      ...memberData,
      newPassword: data.newPassword,
      oldPassword: data.oldPassword,
    });
    console.log(result);
  };

  return (
    <Card
      padding={isSmallDevice ? 'md' : 'lg'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: isSmallDevice ? '1.5rem' : '2.5rem',
      }}>
      <Typography variant={'h5'} component="h3">
        {'修改密碼'}
      </Typography>
      <Stack direction={'column'} spacing={{ sm: 2, md: 3 }}>
        <Box>
          <Typography variant={'body1'} component={'h3'}>
            {'電子信箱'}
          </Typography>
          <Typography variant={'title'} component={'p'}>
            {memberData.email}
          </Typography>
        </Box>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Box>
            <Typography variant={'body1'} component={'h3'}>
              {'密碼'}
            </Typography>
            <Typography variant={'title'} component={'p'} sx={{ WebkitTextSecurity: 'disc' }}>
              {'********'}
            </Typography>
          </Box>
          <Link component={'button'} underline={'always'} fontWeight={700} onClick={() => setOpenForm(true)}>
            {'重設'}
          </Link>
        </Stack>
      </Stack>
      {openForm && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction={'column'} spacing={{ sm: 2, md: 3 }}>
            <Input
              label="舊密碼"
              fullWidth
              type="password"
              {...register('oldPassword')}
              placeholder="請輸入舊密碼"
              error={errors.oldPassword ? true : false}
              helperText={errors.oldPassword ? errors.oldPassword.message : ''}
            />
            <Input
              label="新密碼"
              fullWidth
              type="password"
              {...register('newPassword')}
              placeholder="請輸入新密碼"
              error={errors.newPassword ? true : false}
              helperText={errors.newPassword ? errors.newPassword.message : ''}
            />
            <Input
              label="確認新密碼"
              fullWidth
              type="password"
              {...register('confirmPassword')}
              placeholder="請再輸入一次新密碼"
              error={errors.confirmPassword ? true : false}
              helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
            />
          </Stack>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            gap={{ sm: 3, md: 0 }}
            mt={{ sm: '1.5rem', md: '2.5rem' }}>
            <Button
              sx={{
                width: { sm: '100%', md: 'auto' },
              }}
              type="submit"
              variant={'contained'}
              size={'large'}
              disabled={!isDirty || !isValid}
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
        </form>
      )}
    </Card>
  );
};

export default Page;
