"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// I tuoi componenti tipografici
import BigXL from "../Text/BigXL/BigXL";
import Big from "../Text/Big/Big";
import Medium from "../Text/Medium/Medium";

const steps = [
    {
        title: "Ti ascoltiamo",
        subtitle: "Diamo forma alla tua idea partendo dai tuoi obiettivi e dalle tue necessità.",
        descriptions: [
            ""
        ],
        image: "/ideas-flow.svg",
        altText: "Ideas Flow",
        bg: "bg-slate-100",
        cta: "... così parte il nostro percorso insieme",
    },
    {
        title: "Ti supportiamo",
        subtitle: "costruendo fondamenta solide per la tua idea.",
        descriptions: [
            "",
        ],
        image: "/building-blocks.svg",
        altText: "Building Blocks",
        bg: "bg-amber-100",
        cta: "Ecco cosa succede dopo ...",
    },
    {
        title: "Ti accompagniamo",
        subtitle: "dando forma concreta alla tua visione.",
        descriptions: [
            "",
        ],
        image: "/sharing-knowledge.svg",
        altText: "Sharing Knowledge",
        bg: "bg-rose-200",
        cta: "... e poi",
    },
    {
        title: "Ti guidiamo",
        subtitle: "nella crescita e nel miglioramento continuo.",
        descriptions: [
            "",
        ],
        image: "/team-collaboration.svg",
        altText: "Team Collaboration",
        bg: "bg-red-300",
        cta: "Ma questo è solo l’inizio ...",
    },
];

function CustomCarousel() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div
            ref={containerRef}
            className="relative w-full bg-gradient-to-b from-gray-50 via-gray-100 to-white"
        >
            {/* Progress bar sticky */}
            <div className="sticky top-0 z-40 w-full h-2 bg-gray-200">
                <motion.div
                    style={{ width: progressWidth }}
                    className="h-2 bg-gradient-to-r from-cyan-600/80 to-amber-500"
                />
            </div>

            {/* Sections */}
            {steps.map((step, i) => (
                <section
                    key={i}
                    className={`${step.bg} relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 max-w-7xl mx-auto my-8 md:my-12`}
                >
                    {/* Numero step */}
                    <div className="hidden md:block absolute top-1/2 left-5 transform -translate-y-1/2 text-9xl font-bold text-transparent [text-stroke:2px_black] select-none pointer-events-none">
                        {(i + 1).toString().padStart(2, "0")}
                    </div>

                    {/* Immagine desktop */}
                    <div
                        className={`w-full md:w-1/3 flex justify-center ${i % 2 === 0 ? "order-1" : "order-2"
                            }`}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <Image
                                src={step.image}
                                alt={step.altText}
                                width={400}
                                height={400}
                                className="hidden md:block max-h-[400px] object-contain"
                            />
                        </motion.div>
                    </div>

                    {/* Contenuto */}
                    <div
                        className={`w-full md:w-2/3 flex flex-col gap-4 text-center md:text-left ${i % 2 === 0 ? "md:order-2 md:pl-16" : "md:order-1 md:pr-16"
                            }`}
                    >
                        {/* Numero mobile */}
                        <div className="text-4xl font-bold text-amber-600/70 mb-2">
                            {(i + 1).toString().padStart(2, "0")}
                        </div>

                        {/* Titolo */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <BigXL text={step.title} className="pb-2" />
                        </motion.div>

                        {/* Subtitle */}
                        {step.subtitle && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Big text={step.subtitle} className="text-gray-700" />
                            </motion.div>
                        )}

                        {/* Immagine mobile */}
                        <div className="md:hidden flex justify-center my-4">
                            <Image
                                src={step.image}
                                alt={step.altText}
                                width={300}
                                height={300}
                                className="max-h-[200px] object-contain"
                            />
                        </div>

                        {/* Descrizioni */}
                        {/* <ul className="space-y-2">
                            {step.descriptions.map((desc, j) => (
                                <motion.li
                                    key={j}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 + j * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Medium text={`• ${desc}`} className="text-gray-800" />
                                </motion.li>
                            ))}
                        </ul> */}

                        {/* CTA */}
                        {step.cta && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <Medium text={step.cta} className="italic text-gray-600 mt-6" />
                            </motion.div>
                        )}
                    </div>
                </section>
            ))}
        </div>
    );
}

export default CustomCarousel;
