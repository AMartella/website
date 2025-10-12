'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBanner from "@/_components/TopBanner/TopBanner";
import Header from "@/_components/Header/Header";
import Footer from "@/_components/Footer/Footer";
import { useState } from "react";
import BlackHole from "@/_components/HeroSection/Blackhole";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [showBlackHole, setShowBlackHole] = useState(true);
  const [isFadingIn, setIsFadingIn] = useState(false);

  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${isFadingIn ? "animate-background-color-transition" : ""}`}
      >
        <div className={`${isFadingIn ? "animate-fade-in-smooth" : ""}`}
          onAnimationEnd={() => {
            if (isFadingIn) {
              setIsFadingIn(false);
            }
          }}>
          {showBlackHole ? (
            <BlackHole onFinish={() => {
              setIsFadingIn(true);
              setShowBlackHole(false);
            }} />
          ) : (
            <div className={`${isFadingIn ? "animate-fade-in-home" : ""}`}>
              <TopBanner />
              <header>
                <Header />
              </header>
              {children}
              <footer className="w-10/12 mx-auto my-6 md:my-10">
                <Footer />
              </footer>
            </div>
          )}
        </div>
      </body>
    </html>
  );
}
