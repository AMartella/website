"use client";
import React from "react";
import { motion } from "framer-motion";
import BigXL from "../Text/BigXL/BigXL";

function Banner() {
    const texts = [
        "Ogni progetto nasce da un’idea.\nMa un’idea, da sola, non basta.",
        "Perché possa crescere, ha bisogno di ascolto, metodo e visione.",
        "Ecco come, insieme, trasformiamo ciò che immagini in qualcosa di concreto."
    ];

    return (
        <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
            {/* Background dinamico con gradienti e blob */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-100 via-white to-amber-100" />
            <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-300 opacity-20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-amber-300 opacity-15 rounded-full blur-2xl pointer-events-none animate-pulse-slow" />

            {/* Contenuto centrale */}
            <div className="relative max-w-4xl text-center px-6 md:px-20 flex flex-col gap-8">
                {texts.map((text, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: i * 0.3, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <BigXL text={text} className="text-black whitespace-pre-line leading-tight md:leading-snug text-[1.8rem] md:text-[2.5rem]" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Banner;
