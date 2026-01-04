import CategoriesSection from "../Components/CategorySection";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import OfferHero from "../Components/OfferHero";
import SeasonalCollection from "../Components/SeasonalCollection";
import RotatingBanner from "../Components/SlidingBanner";
import SlidingBannerTwo from "../Components/SlidingBannerTwo";
import TestimonialsSection from "../Components/TestimonialSection";
import TrustBar from "../Components/TrustBar";


const HomePage = () => {
    return (
        <>
        <Header/>
        <HeroSection/>
        <TrustBar/>
        <CategoriesSection/>
        <OfferHero/>
        <RotatingBanner/>
        <SeasonalCollection/>
        <SlidingBannerTwo/>
        <TestimonialsSection/>
        <Footer/>
        </>
    );
}

export default HomePage;