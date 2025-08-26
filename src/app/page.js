import TopBanner from "@/_components/TopBanner/TopBanner";
import Header from "@/_components/Header/Header";
import Image from "next/image";
import HeroSection from "@/_components/HeroSection/HeroSection";
import Footer from "@/_components/Footer/Footer";
import CustomCarousel from "@/_components/CustomCarousel/CustomCarousel";
import BigXL from "@/_components/Text/BigXL/BigXL";
import Big from "@/_components/Text/Big/Big";

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
        <CustomCarousel />
      </section>
      <section id="hero-section">
        <HeroSection />
      </section>
      <footer className="w-10/12 mx-auto my-6 md:my-10">
        <Footer />
      </footer>
    </>
  );
}
