import { UserBanner } from './UserBanner';
import { SwiperTabs } from './Tabs';
import HorizontalWave from '@/components/common/HorizontalWave';
import { getUser } from '@/assets/api';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const data: MemberResponseData = await getUser();
  return (
    <>
      <UserBanner data={data} />
      <SwiperTabs />
      {children}
      <HorizontalWave />
    </>
  );
}

