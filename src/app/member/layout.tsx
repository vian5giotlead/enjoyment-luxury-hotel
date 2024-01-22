import { UserBanner } from './UserBanner';
import { SwiperTabs } from './Tabs';
import HorizontalWave from './HorizontalWave';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: '#140F0A' }}>
      <UserBanner />
      <SwiperTabs />
      {children}
      <HorizontalWave />
    </div>
  );
}
