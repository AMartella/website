import TopBanner from "@/_components/TopBanner/TopBanner";
import Header from "@/_components/Header/Header";
import Image from "next/image";
import HeroSection from "@/_components/HeroSection/HeroSection";
import Footer from "@/_components/Footer/Footer";

export default function Home() {
  return (
    <>
      <TopBanner />
      <header>
        <Header />
      </header>
      <section className="h-dvh">
        <HeroSection />
      </section>
      <footer className="w-10/12 mx-auto my-6 md:my-10">
        <Footer />
      </footer>
    </>
  );
}
