import { UserBanner } from './UserBanner';
import { SwiperTabs } from './Tabs';
import HorizontalWave from './HorizontalWave';
import { getUserData } from '@/assets/api';

export default async function Layout({ children }: { children: React.ReactNode })
{
  const data: MemberResponseData = await getUserData();
  return (
    <>
    <UserBanner data={data} />
      <SwiperTabs />
      {children}
      <HorizontalWave />
    </>
  );
}

