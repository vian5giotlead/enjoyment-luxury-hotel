import HeroSecition from '@/app/v.heroSection';
import News from '@/app/v.news';
import About from '@/app/v.about';
import RoomType from '@/app/v.roomType';
import FoodType from '@/app/v.foodType';
import Transportation from '@/app/v.transportation';
import Line from '@/app/v.line';
import Footer from '@/components/common/Footer';

export default function Home() {
  return (
    <>
      <HeroSecition />
      <main>
        <News />
        <About />
        <RoomType />
        <FoodType />
        <Transportation />
      </main>
      <Line />
      <Footer />
    </>
  );
}
