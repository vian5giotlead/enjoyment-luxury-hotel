import { Grid, Link } from '@mui/material';

import { getUserData } from '@/assets/api';
import ChangePasswordPanel from './ChangePasswordPanel';
import MemberDataPanel from './MemberDataPanel';
import { Container } from './style';

// const memberData = {
//   userId: '6523e9fc3a22dd8d8207ef80',
//   name: 'Kylie Stanley',
//   phone: '(937) 233-2482',
//   birthday: '1948/6/5',
//   address: {
//     zipcode: 802,
//     detail: '文山路23號',
//     county: '高雄市',
//     city: '苓雅區',
//   },
//   oldPassword: '舊密碼',
//   newPassword: '新密碼',
// };

export default async function Page() {
  const memberData: MemberData = await getUserData();
  console.log(memberData);
  return (
    <Container>
      <Grid
        container
        direction={{ sm: 'column', md: 'row' }}
        justifyContent={'space-between'}
        gap={{ sm: '1.5rem', md: '2.5rem' }}
        wrap={'nowrap'}>
        <Grid item md={5}>
          <ChangePasswordPanel />
        </Grid>
        <Grid item md={7}>
          <MemberDataPanel data={memberData} />
        </Grid>
      </Grid>
    </Container>
  );
}
