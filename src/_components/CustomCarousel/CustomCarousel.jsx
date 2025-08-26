"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Medium from "../Text/Medium/Medium";
import Big from "../Text/Big/Big";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        title: "Ascolto",
        descriptions: [
            "Raccontaci cosa vuoi creare",
            "Mostraci cosa hai in mente di grandioso",
            "Dicci dove vuoi arrivare",
            "Illustraci il tuo obiettivo",
        ],
        bg: "bg-slate-100",
    },
    {
        title: "Supporto",
        descriptions: [
            "Studiamo insieme il contesto",
            "Definiamo le esigenze",
            "Costruiamo un piano di lavoro",
            "Gettiamo insieme basi solide",
        ],
        bg: "bg-amber-100",
    },
    {
        title: "Accompagnamento",
        descriptions: [
            "Disegniamo la tua idea",
            "La progettiamo con stile e funzionalità",
            "La sviluppiamo",
            "Le diamo vita",
        ],
        bg: "bg-rose-200",
    },
    {
        title: "Guida",
        descriptions: [
            "Ti aiutiamo a ottimizzare il tuo prodotto",
            "Analizziamo i risultati",
            "Miglioriamo l'esperienza",
            "Ti aiutiamo a crescere",
        ],
        bg: "bg-red-300",
    },
];

function CustomCarousel() {
    const containerRef = useRef(null);
    const sectionsRef = useRef([]);
    const progressRef = useRef(null);

    useEffect(() => {
        const fixedEl = document.querySelector(".progress-bar-container");
        // Animazioni per ogni sezione
        sectionsRef.current.forEach((el, i) => {
            if (!el) return;

            // Pin fullscreen della sezione
            ScrollTrigger.create({
                trigger: el,
                start: "top top",
                end: "+=100%",
                pin: true,
                pinSpacing: i === steps.length - 1, // solo l'ultima lascia spazio per scroll finale
            });

            // Animazione card
            gsap.fromTo(
                el.querySelector(".card-anim"),
                { autoAlpha: 0, y: 50 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            onEnter: () => gsap.to(fixedEl, { autoAlpha: 1, duration: 0.3 }),
            onLeave: () => gsap.to(fixedEl, { autoAlpha: 0, duration: 0.3 }),
            onEnterBack: () => gsap.to(fixedEl, { autoAlpha: 1, duration: 0.3 }),
            onLeaveBack: () => gsap.to(fixedEl, { autoAlpha: 0, duration: 0.3 }),
        });

        // Barra di progresso legata solo al container
        gsap.fromTo(
            progressRef.current,
            {
                width: "0%",
                height: "4px",
            },
            {
                width: "100%",
                height: "4px",
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
            gsap.killTweensOf("*");
        };
    }, []);

    return (
        <div ref={containerRef} className="relative w-full scrollbar-hide">
            {/* Progress bar con indicatori */}
            <div className="opacity-0 fixed top-10 left-3/12 h-1 w-1/2 bg-gray-300 z-50 progress-bar-container">
                <div ref={progressRef} className="absolute top-0 left-0 w-0 h-2 bg-red-500" />
                {steps.map((_, i) => (
                    <div
                        key={i}
                        className="absolute top-[-4px] -translate-x-1/2 w-3 h-3 rounded-full border-2 border-gray-400 bg-white"
                        style={{ left: `${(i / (steps.length)) * 100}%` }}
                    />
                ))}
                <div className="absolute top-[-4px] -translate-x-1/2 w-3 h-3 rounded-full border-2 border-gray-400 bg-white"
                    style={{ left: "100%" }} />
            </div>

            {/* Sezioni */}
            {steps.map((step, i) => (
                <section
                    key={i}
                    ref={(el) => (sectionsRef.current[i] = el)}
                    className={`h-screen w-full flex items-center justify-center ${step.bg}`}
                >
                    <div className="card-anim">
                        <Card className="shadow-xl rounded-2xl">
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold text-center">
                                    {step.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {step.descriptions.map((description, i) => (
                                    <Medium className="text-lg text-center text-gray-700" text={description} key={i} />
                                ))}
                            </CardContent>
                        </Card>

                    </div>
                </section>
            ))}

            <section className="min-h-screen w-full flex items-center justify-center bg-white">
                <div className="max-w-2xl text-center p-8">
                    <Big text={"Collaborare con noi significa "} className="text-center p-0" />
                    <Big text={"scegliere di essere supportati, sempre!"} className="text-center p-0" />
                </div>
            </section>
        </div>
    );
}

export default CustomCarousel;