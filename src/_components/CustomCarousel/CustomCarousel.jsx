'use client'

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Medium from "../Text/Medium/Medium";
import BigXL from "../Text/BigXL/BigXL";

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
    return (
        <div className="relative h-dvh w-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
            {steps.map((step, i) => (
                <section key={i}
                    className={`h-dvh w-full flex flex-col gap-8 items-center justify-center snap-start ${step.bg}`} >
                    <BigXL text="Sceglierci significa" className={"font-bold text-center"} />
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }} >
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
                    </motion.div>
                </section>
            ))}
        </div>
    );
}

export default CustomCarousel;