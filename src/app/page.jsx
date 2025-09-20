import TopBanner from "@/_components/TopBanner/TopBanner";
import Header from "@/_components/Header/Header";
import HeroSection from "@/_components/HeroSection/HeroSection";
import Footer from "@/_components/Footer/Footer";
import CustomCarousel from "@/_components/CustomCarousel/CustomCarousel";
import StackSection from "@/_components/StackSection/StackSection";
import SnakeBackground from "@/_components/StackSection/SnakeBackground";
import ImageComparison from "@/_components/ImageComparison/ImageComparison";
import Banner from "@/_components/Banner/Banner";
import BlackHole from "@/_components/HeroSection/Blackhole";
import ScrollToTop from "@/_components/ScrollToTop/ScrollToTop";

export default function Home() {
  return (
    <>
      <section id="blackhole-section">
        <BlackHole targetSectionId={"custom-carousel"} />
      </section>
      <section id="custom-carousel">
        <Banner />
        <CustomCarousel />
      </section>
      <section id="works" className="py-5">
        <div>I nostri lavori</div>
      </section>
      <section id="stack-section" className="relative [background-image:radial-gradient(circle,#0000003b_1px,#f1f5f9_1px)] [background-size:20px_20px] py-5 md:py-18 z-10">
        <SnakeBackground
          speed={1}
          length={400}
          color_1="rgba(255, 200, 0, 0.4)"
          color_2="rgba(255, 50, 0, 0)"
          initalDirection={{ x: 1, y: 0 }} />
        <SnakeBackground
          speed={1}
          length={400}
          color_1="rgba(0, 211, 243, 0.4)"
          color_2="rgba(0, 60, 243, 0)"
          position={"center-center"}
          initalDirection={{ x: -1, y: 0 }} />
        <StackSection />
      </section>
      <ScrollToTop />
    </>
  );
}
