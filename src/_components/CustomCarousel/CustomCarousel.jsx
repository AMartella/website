'use client'

import { useState } from "react";

const items = [1, 2, 3, 4, 5];

function CustomCarousel() {
    const [active, setActive] = useState(0);

    const prev = () => setActive((a) => (a - 1 + items.length) % items.length);
    const next = () => setActive((a) => (a + 1) % items.length);

    return (
        <div className="relative w-full flex items-center justify-center">
            <button onClick={prev} className="absolute left-0 z-10">‹</button>
            <div className="flex overflow-hidden w-96 justify-center items-center">
                {items.map((item, index) => {
                    const offset = index - active;
                    const scale = offset === 0 ? 1 : 0.7;
                    const opacity = offset === 0 ? 1 : 0.5;
                    const translateX = offset * 120; // distanza laterale

                    return (
                        <div
                            key={index}
                            style={{
                                transform: `translateX(${translateX}px) scale(${scale})`,
                                opacity,
                                transition: "all 0.3s ease",
                                zIndex: offset === 0 ? 10 : 1,
                            }}
                            className="absolute"
                        >
                            <div className="bg-primary text-white p-8 rounded-lg shadow-lg">
                                Item {item}
                            </div>
                        </div>
                    );
                })}
            </div>
            <button onClick={next} className="absolute right-0 z-10">›</button>
        </div>
    );
}

export default CustomCarousel