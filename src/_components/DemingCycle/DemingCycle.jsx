'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const DemingCycleStoryTelling = () => {
    const containerRef = useRef(null);
    const [activePhase, setActivePhase] = useState(0);

    const phases = [
        {
            key: 'plan',
            title: 'PLAN',
            description: 'Pianifichiamo con precisione',
            content: 'Definiamo obiettivi chiari, analizziamo il contesto e sviluppiamo strategie basate su dati concreti.'
        },
        {
            key: 'do',
            title: 'DO',
            description: 'Eseguiamo con disciplina',
            content: 'Implementiamo le soluzioni pianificate con rigore metodologico, documentando ogni passaggio.'
        },
        {
            key: 'check',
            title: 'CHECK',
            description: 'Verifichiamo i risultati',
            content: 'Misuriamo le performance, confrontando risultati attesi e ottenuti per identificare gap e opportunità.'
        },
        {
            key: 'act',
            title: 'ACT',
            description: 'Standardizziamo il miglioramento',
            content: 'Integriamo le lezioni apprese nei processi standard, consolidando i progressi.'
        }
    ];

    useEffect(() => {
        if (!containerRef.current) return;

        const triggers = phases.map((phase, i) => {
            return ScrollTrigger.create({
                trigger: containerRef.current,
                start: `${i * 25}% center`,
                end: `${(i + 1) * 25}% center`,
                onEnter: () => setActivePhase(i),
                onEnterBack: () => setActivePhase(i),
            });
        });

        // Animazione frecce
        const arrows = gsap.utils.toArray('.arrow');
        arrows.forEach((arrow, i) => {
            gsap.set(arrow, { opacity: i === activePhase ? 1 : 0.3, scale: i === activePhase ? 1.2 : 1 });
        });

        return () => {
            triggers.forEach(t => t.kill());
        };
    }, []);

    useEffect(() => {
        const arrow = document.querySelector(`.arrow-${activePhase}`);
        if (!arrow) return;
        gsap.to(arrow, { opacity: 1, scale: 1.2, duration: 0.6, ease: 'power2.out' });
        // Reset altre frecce
        const otherArrows = gsap.utils.toArray(`.arrow:not(.arrow-${activePhase})`);
        otherArrows.forEach(a => gsap.to(a, { opacity: 0.3, scale: 1, duration: 0.4 }));
    }, [activePhase]);

    const getArrowPath = (index) => {
        const centerX = 200;
        const centerY = 200;
        const radius = 120;
        const angle = (index * 90 - 45) * (Math.PI / 180);
        const startX = centerX + Math.cos(angle) * (radius - 30);
        const startY = centerY + Math.sin(angle) * (radius - 30);
        const endX = centerX + Math.cos(angle) * (radius + 30);
        const endY = centerY + Math.sin(angle) * (radius + 30);
        return `M ${startX} ${startY} L ${endX} ${endY}`;
    };

    return (
        <div ref={containerRef} className="min-h-screen bg-slate-900 text-white overflow-hidden">
            {/* Header */}
            <div className="fixed top-8 left-8 z-20">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold tracking-wider">CICLO DI DEMING</span>
                </div>
            </div>

            <div className="flex items-center justify-center min-h-screen relative">
                <div className="w-full max-w-7xl mx-auto px-8 flex items-center justify-between">

                    {/* Diagramma del ciclo */}
                    <div className="w-1/2 flex justify-center relative">
                        <svg width="400" height="400" className="deming-circle">
                            <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                            {phases.map((phase, index) => {
                                const angle = index * 90;
                                const isActive = activePhase === index;
                                return (
                                    <g key={phase.key}>
                                        <path
                                            d={`M 200 200 L ${200 + 120 * Math.cos((angle - 45) * Math.PI / 180)} ${200 + 120 * Math.sin((angle - 45) * Math.PI / 180)} A 120 120 0 0 1 ${200 + 120 * Math.cos((angle + 45) * Math.PI / 180)} ${200 + 120 * Math.sin((angle + 45) * Math.PI / 180)} Z`}
                                            fill={isActive ? 'rgba(59, 130, 246, 0.3)' : 'rgba(255,255,255,0.05)'}
                                            stroke={isActive ? 'rgb(59,130,246)' : 'rgba(255,255,255,0.1)'}
                                            strokeWidth="1"
                                        />
                                        <text
                                            x={200 + 80 * Math.cos(angle * Math.PI / 180)}
                                            y={200 + 80 * Math.sin(angle * Math.PI / 180)}
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            className={`text-sm font-bold ${isActive ? 'fill-blue-400' : 'fill-white/60'}`}
                                        >
                                            {phase.title}
                                        </text>
                                        <g className={`arrow arrow-${index}`} style={{ opacity: 0.3 }}>
                                            <path d={getArrowPath(index)} stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeLinecap="round" />
                                        </g>
                                    </g>
                                )
                            })}
                            <circle cx="200" cy="200" r="50" fill="rgba(15,23,42,0.8)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                            <text x="200" y="205" textAnchor="middle" dominantBaseline="middle" className="text-xs fill-white/80 font-semibold">PDCA</text>
                        </svg>
                    </div>

                    {/* Contenuto testuale */}
                    <div className="w-1/2 pl-16">
                        <motion.div
                            key={activePhase}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <motion.h1 className="text-5xl font-bold" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>{phases[activePhase].title}</motion.h1>
                                <motion.p className="text-xl text-blue-400 font-medium" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>{phases[activePhase].description}</motion.p>
                            </div>
                            <motion.p className="text-lg text-white/80 leading-relaxed max-w-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>{phases[activePhase].content}</motion.p>
                            <motion.div className="flex space-x-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                                {phases.map((_, i) => (
                                    <div key={i} className={`h-1 w-12 rounded transition-all duration-500 ${i === activePhase ? 'bg-blue-400' : i < activePhase ? 'bg-white/40' : 'bg-white/20'}`} />
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="h-[300vh]" />
        </div>
    );
};

export default DemingCycleStoryTelling;
