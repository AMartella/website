import TopBanner from "@/_components/TopBanner/TopBanner";
import Header from "@/_components/Header/Header";
import HeroSection from "@/_components/HeroSection/HeroSection";
import Footer from "@/_components/Footer/Footer";
import CustomCarousel from "@/_components/CustomCarousel/CustomCarousel";
import StackSection from "@/_components/StackSection/StackSection";
import ImageComparison from "@/_components/ImageComparison/ImageComparison";
import Banner from "@/_components/Banner/Banner";

export default function Home() {
  return (
    <>
      <TopBanner />
      <header>
        <Header />
      </header>
      <section id="hero-section">
        <HeroSection />
      </section>
      <section id="custom-carousel">
        <Banner />
        <CustomCarousel />
      </section>
      <section id="stack-section" className="[background-image:radial-gradient(circle,#000_1px,#f1f5f9_1px)] [background-size:20px_20px] py-5 md:py-18">
        <StackSection />
      </section>
      <section id="image-comparison-section" className="py-5">
        <ImageComparison />
      </section>
      <footer className="w-10/12 mx-auto my-6 md:my-10">
        <Footer />
      </footer>
    </>
  );
}
