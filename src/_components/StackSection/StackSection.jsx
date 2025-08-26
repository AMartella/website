'use client'

import { useState, React } from 'react'
import Medium from '../Text/Medium/Medium'
import Image from 'next/image'
import Big from '../Text/Big/Big';

const tools = [
    { tool: "React", image: "/react.svg", alt: "react" },
    { tool: "Next.js", image: "/next_logo.svg", alt: "next" },
    { tool: "Adobe In Design", image: "/adobeid.svg", alt: "adobeid" },
    { tool: "Figma", image: "/figma.svg", alt: "figma" },
    { tool: "Svelte", image: "/svelte.svg", alt: "svelte" },
    { tool: "Amazon Web Services", image: "/aws.svg", alt: "aws" },
    { tool: "Laravel", image: "/laravel.svg", alt: "laravel" },
    { tool: "Wordpress", image: "/wordpress.svg", alt: "wordpress" },
    { tool: "Nest.js", image: "/nestjs.svg", alt: "nestjs" },
    { tool: "Vue", image: "/vue.svg", alt: "vue" },
]

function StackSection() {
    const baseWord = "Pippo";
    const [word, setWord] = useState(baseWord);

    const handleHover = (newWord) => {
        setWord(newWord);
    };

    return (
        <div className='w-2/3 mx-auto'>
            <Medium text={"Alcuni dei nostri strumenti"} className={"text-center"} />
            <Big className="text-center" text={word} />
            <div className='grid grid-cols-5 md:grid-cols-10 items-center justify-items-center mt-6'>
                {tools && tools.map((t, i) => (
                    <div className="flex items-center justify-center w-full cursor-pointer md:hover:scale-110 my-5" onMouseEnter={() => handleHover(t.tool)} onMouseLeave={() => setWord(baseWord)}>
                        <Image key={i} src={t.image} alt="react" width={50} height={50} className='w-8 h-8 md:w-12 md:h-12' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StackSection