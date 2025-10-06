import Big from "../Text/Big/Big";

export default function Feedback() {
    const feedbacks = [
        {
            id: 1,
            name: "Mario Rossi",
            rating: 5,
            comment: "Ottimo servizio, super professionale!",
            date: "20/04/2024",
        },
        {
            id: 2,
            name: "Lucia Bianchi",
            rating: 4,
            comment: "Buono, ma spazio di miglioramento.",
            date: "01/06/2024",
        },
        {
            id: 3,
            name: "Giuseppe Verdi",
            rating: 5,
            comment: "Non male, ma la consegna è arrivata in ritardo.",
            date: "07/09/2025",
        },
        {
            id: 4,
            name: "Giuseppe Verdi",
            rating: 5,
            comment: "Non male, ma la consegna è arrivata in ritardo.",
            date: "07/09/2025",
        },
        {
            id: 5,
            name: "Giuseppe Verdi",
            rating: 5,
            comment: "Non male, ma la consegna è arrivata in ritardo.",
            date: "07/09/2025",
        },
    ];

    return (
        <div className="flex flex-col p-8">
            <Big className="text-3xl font-bold mb-6 mx-auto" text="Cosa dicono i clienti" />

            <div className="flex flex-col h-96 md:h-full overflow-y-auto md:flex-row gap-8 justify-around items-center">
                {feedbacks.map((fb) => (
                    <div
                        key={fb.id}
                        className="border rounded-2xl p-4 shadow-sm bg-white"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">{fb.name}</span>
                            <span className="text-yellow-500">
                                {"★".repeat(fb.rating) + "☆".repeat(5 - fb.rating)}
                            </span>
                        </div>
                        <p className="mb-2">{fb.comment}</p>
                        <span className="text-sm text-gray-500">{fb.date}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}