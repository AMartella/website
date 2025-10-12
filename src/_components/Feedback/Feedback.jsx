import Big from "../Text/Big/Big";
import { feedbacks } from "../../app/data/feedbacks";
import { customScrollbar } from "../CustomScrollbar/CustomScrollbar";

export default function Feedback() {

    return (
        <div className="flex flex-col p-8">
            <Big className="text-3xl font-bold mb-6 mx-auto" text="Cosa dicono i clienti" />

            <div className={`flex flex-col h-96 md:h-full overflow-auto md:flex-row gap-8 justify-around items-center md:py-4 pr-2 ${customScrollbar}`}>
                {feedbacks.map((fb) => (
                    <div
                        key={fb.id}
                        className="border rounded-2xl p-4 shadow-sm bg-white flex-shrink-0 w-full md:w-1/5 md:min-w-[200px]">
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