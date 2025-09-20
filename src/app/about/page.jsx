import DemingCycleStoryTelling from '@/_components/DemingCycle/DemingCycle'
import HeroSection from '@/_components/HeroSection/HeroSection'
import ImageComparison from '@/_components/ImageComparison/ImageComparison'
import ScrollToTop from '@/_components/ScrollToTop/ScrollToTop'
import React from 'react'

function page() {
    return (
        <>
            <section id="hero-section">
                <HeroSection />
            </section>
            <section id="vision-section" className="py-5">
                <div>La nostra visione</div>
                {/* <DemingCycleStoryTelling/> */}
            </section>
            <section id="team-section" className="py-5">
                <div>Il nostro team</div>
            </section>
            <section id="image-comparison-section" className="py-5">
                <ImageComparison />
            </section>
            <ScrollToTop />
        </>
    )
}

export default page