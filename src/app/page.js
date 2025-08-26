import TopBanner from "@/_components/TopBanner/TopBanner";
import Header from "@/_components/Header/Header";
import Image from "next/image";
import HeroSection from "@/_components/HeroSection/HeroSection";
import Footer from "@/_components/Footer/Footer";
import CustomCarousel from "@/_components/CustomCarousel/CustomCarousel";
import BigXL from "@/_components/Text/BigXL/BigXL";
import Big from "@/_components/Text/Big/Big";
import StackSection from "@/_components/StackSection/StackSection";

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
      <section id="stack-section" className="[background-image:radial-gradient(circle,#000_1px,transparent_1px)] [background-size:20px_20px] py-5">
        <StackSection />
      </section>
      <footer className="w-10/12 mx-auto my-6 md:my-10">
        <Footer />
      </footer>
    </>
  );
}
