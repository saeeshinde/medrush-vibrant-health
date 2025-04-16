
import HeroSection from '@/components/home/HeroSection';
import QuickNavigation from '@/components/home/QuickNavigation';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import OfferBanner from '@/components/home/OfferBanner';
import FeaturedProducts from '@/components/home/FeaturedProducts';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <QuickNavigation />
      <FeaturedCategories />
      <OfferBanner />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
