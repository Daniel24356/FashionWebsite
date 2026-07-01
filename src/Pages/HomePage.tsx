import CategoriesSection from "../Components/CategorySection";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import ProductShowcase from "../Components/ProductShowcase";
import SeasonalCollection from "../Components/SeasonalCollection";
import RotatingBanner from "../Components/SlidingBanner";
import SlidingBannerTwo from "../Components/SlidingBannerTwo";
import TestimonialsSection from "../Components/TestimonialSection";
import SectionReveal from "../Components/SectionReveal";

const HomePage = () => {
  return (
    <>
      <Header />
      <SectionReveal>
        <HeroSection />
      </SectionReveal>
      <SectionReveal>
        <ProductShowcase />
      </SectionReveal>
      <SectionReveal>
        <CategoriesSection />
      </SectionReveal>
      <SectionReveal>
        <RotatingBanner />
      </SectionReveal>
      <SectionReveal>
        <SeasonalCollection />
      </SectionReveal>
      <SectionReveal>
        <SlidingBannerTwo />
      </SectionReveal>
      <SectionReveal>
        <TestimonialsSection />
      </SectionReveal>
      <SectionReveal>
        <Footer />
      </SectionReveal>
    </>
  );
};

export default HomePage;