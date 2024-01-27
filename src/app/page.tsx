import HeroSecition from '@/app/c.heroSection';
import News from '@/app/c.news';
import About from '@/app/c.about';
import Footer from '@/components/common/Footer';

export default function Home() {
  return (
    <>
      <HeroSecition />
      <main>
        <News />
        <About />
      </main>
      <Footer />
    </>
  );
}
