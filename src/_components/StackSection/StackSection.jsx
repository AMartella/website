'use client'

import { useState, React } from 'react'
import Image from 'next/image'
import BigXL from '../Text/BigXL/BigXL';

const tools = [
    { tool: "React", image: "/react.svg", alt: "react" },
    { tool: "Next.js", image: "/next_logo.svg", alt: "next" },
    { tool: "Figma", image: "/figma.svg", alt: "figma" },
    { tool: "Adobe In Design", image: "/adobeid.svg", alt: "adobeid" },
    { tool: "Svelte", image: "/svelte.svg", alt: "svelte" },
    { tool: "Amazon Web Services", image: "/aws.svg", alt: "aws" },
    { tool: "Laravel", image: "/laravel.svg", alt: "laravel" },
    { tool: "Wordpress", image: "/wordpress.svg", alt: "wordpress" },
    { tool: "Nest.js", image: "/nestjs.svg", alt: "nestjs" },
    { tool: "Vue", image: "/vue.svg", alt: "vue" },
]

function StackSection() {
    const baseWord = "le migliori tecnologie";
    const [word, setWord] = useState(baseWord);

    const handleHover = (newWord) => {
        setWord(newWord);
    };

    return (
        <div className='md:w-2/3 mx-auto py-6 px-6 md:px-20'>
            <BigXL text={"Trasformiamo la tua idea in realtà con"} className={"text-center text-amber-400 font-semibold"} />
            <BigXL className="text-center text-cyan-400 font-semibold" text={word} />
            <div className='grid grid-cols-5 md:grid-cols-10 items-center justify-items-center mt-6 md:mt-18'>
                {tools && tools.map((t, i) => (
                    <div key={i} className="flex items-center justify-center w-full cursor-pointer md:hover:scale-110 my-5"
                        onMouseEnter={() => handleHover(t.tool)} onMouseLeave={() => setWord(baseWord)}
                        onTouchStart={() => handleHover(t.tool)} >
                        <Image src={t.image} alt="react" width={50} height={50} className='w-8 h-8 md:w-16 md:h-16' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StackSection