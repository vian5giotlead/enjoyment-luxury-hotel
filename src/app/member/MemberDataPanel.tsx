'use client';

import { useState } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { TitleText } from './style';
import Card from '@/components/common/Card';
import { useWidth } from '@/hooks';
import UserDataForm from '@/components/form/UserDataForm';

const Page = ({ data }: { data: MemberResponseData }) => {
  const [openForm, setOpenForm] = useState(false);

  const memberData = data.result;

  const birthday = new Date(memberData.birthday);
  const formatDate = `${birthday.getFullYear()}年 ${birthday.getMonth() + 1}月 ${birthday.getDate()}日`;

  const widthSize = useWidth();
  const isSmallDevice = widthSize === 'sm';

  const handleMemberInfoEdit = function () {
    setOpenForm(true);
  };

  return (
    <Card
      padding={isSmallDevice ? 'md' : 'lg'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: isSmallDevice ? '1.5rem' : '2.5rem',
        alignItems: 'stretch',
      }}>
      <Typography variant={'h5'} component="h4">
        {'基本資料'}
      </Typography>
      {openForm ? (
        <UserDataForm memberData={memberData} setOpenForm={setOpenForm} />
      ) : (
        <Stack direction={'column'} spacing={{ sm: 2, md: 3 }}>
          <TitleText title={'姓名'} content={memberData.name} />
          <TitleText title={'手機號碼'} content={memberData.phone} />
          <TitleText title={'生日'} content={formatDate} />
          <TitleText title={'地址'} content={`${memberData.address.zipcode} ${memberData.address.detail}`} />
        </Stack>
      )}
      <Stack
        direction={'column'}
        spacing={{ sm: '1.5rem', md: '2.5rem' }}
        alignItems={{ sm: 'stretch', md: 'flex-start' }}
        sx={{
          display: !openForm ? 'flex' : 'none',
        }}>
        <Button variant={'outlined'} size={'large'} onClick={() => handleMemberInfoEdit()}>
          {'編輯'}
        </Button>
      </Stack>
    </Card>
  );
};

export default Page;
