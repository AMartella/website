import React from 'react'
import Small from '../Text/Small/Small'
import Big from '../Text/Big/Big'
import BigXL from '../Text/BigXL/BigXL'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Medium from '../Text/Medium/Medium'
import Image from 'next/image'
import Card from '../Card/Card'

function HeroSection() {
    return (
        <>
            <div className='relative px-10 md:px-20'>
                <div className='absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-cyan-800 to-cyan-900 text-white flex border-t-2 border-t-gray-500 z-0'>
                    <div className='w-1/6 border-r border-r-gray-500'></div>
                    <div className='w-1/4 border-r border-r-gray-500'></div>
                    <div className='w-1/4 border-r border-r-gray-500'></div>
                    <div className='w-1/4 border-r border-r-gray-500'></div>
                    <div className='hidden md:block w-1/4 border-r border-r-gray-500'></div>
                    <div className='w-1/12'></div>
                </div>
                <div className='relative py-10 md:py-16 animate-fade-in-slow'>
                    <div className='md:flex items-center'>
                        <div>
                            <Big text="Progetti su misura" className={"font-normal text-white animate-fade-in-fast"} />
                            <BigXL text="Diamo vita alla tua idea" className={"font-medium text-white md:pb-10 animate-fade-in-slow"} />
                            <Button className={"my-6 p-6 cursor-pointer bg-amber-400 text-white hover:bg-white hover:text-amber-400"}>
                                <Medium text="SCOPRI DI PIÙ" link="/about" className={"font-bold"} />
                                <ArrowRight className='w-8 h-8' />
                            </Button>

                        </div>
                        <div className='w-full md:w-1/3 mx-auto md:ml-auto md:mr-40'>
                            <Image src="/img-1.png" alt="hero" width={1000} height={1000}
                                className='rounded-md shadow-amber-700 shadow-lg opacity-85' />
                        </div>
                        <div className="hidden md:block absolute bottom-5 right-60">
                            <div className='w-1/3 mx-auto md:ml-auto md:mr-40'>
                                <Image src="/img-1.png" alt="hero" width={1000} height={1000}
                                    className='rounded-md shadow-amber-700 shadow-md animate-fade-in-fast' />
                            </div>
                        </div>

                    </div>
                </div>
                <div className='relative hidden md:block animate-fade-in-slow'>
                    <div className='flex justify-center gap-4 md:gap-6 mt-6'>
                        <Card text={"AI Automation"} bgColor={"bg-cyan-500/35 backdrop-blur-[1px]"}
                            icon={"/ai.svg"} link="/services/ai" />
                        <Card text={"Sviluppo Web"} bgColor={"bg-cyan-500/35 backdrop-blur-[1px]"}
                            icon={"/dev.svg"} link="/services/development" />
                        <Card text={"Grafica e Design"} bgColor={"bg-cyan-500/35 backdrop-blur-[1px]"}
                            icon={"/ai.svg"} link="/services/design" />
                        <Card text={"Mobile App"} bgColor={"bg-cyan-500/35 backdrop-blur-[1px]"}
                            icon={"/ai.svg"} link="/services/mobile" />
                        <Card text={"Data Solution"} bgColor={"bg-cyan-500/35 backdrop-blur-[1px]"}
                            icon={"/data-solution.svg"} link="/services/data-solution" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection