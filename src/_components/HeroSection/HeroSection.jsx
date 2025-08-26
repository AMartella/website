import React from 'react'
import Small from '../Text/Small/Small'
import Big from '../Text/Big/Big'
import BigXL from '../Text/BigXL/BigXL'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Medium from '../Text/Medium/Medium'
import Image from 'next/image'
import Card from '../Card/Card'
import { Droplet } from 'lucide-react'

function HeroSection() {
    return (
        <>
            <div className='relative px-6 md:px-20'>
                <div className='absolute top-0 left-0 right-0 bottom-0 text-white flex border-t-2 border-t-gray-600 bg-linear-to-b from-cyan-900 to-orange-900 z-0'>
                    <div className='absolute w-0.5 top-0 left-2/12 md:left-1/10 h-full bg-gray-500'>
                        <span className="absolute h-3/12 animate-run">
                            <div className='w-0.5 h-2 bg-linear-to-t from-amber-500/90 to-amber-500/20' />
                        </span>
                        <span className="absolute h-7/12 animate-run">
                            <div className='w-0.5 h-2 bg-linear-to-t from-amber-500/90 to-amber-500/20' />
                        </span>
                    </div>
                    <div className='absolute w-0.5 top-0 left-5/12 md:left-3/10 h-full bg-gray-500'>
                        <span className="absolute h-8/12 animate-run">
                            <div className='w-0.5 h-2 bg-linear-to-t from-amber-500/90 to-amber-500/20' />
                        </span>
                        <span className="absolute h-11/12 animate-run">
                            <div className='w-0.5 h-2 bg-linear-to-t from-amber-500/90 to-amber-500/20' />
                        </span>
                    </div>
                    <div className='absolute w-0.5 top-0 left-8/12 md:left-5/10 h-full bg-gray-500'>
                        <span className="absolute h-5/12 animate-run">
                            <div className='w-0.5 h-2 bg-linear-to-t from-amber-500/90 to-amber-500/20' />
                        </span>
                        <span className="absolute h-8/12 animate-run">
                            <div className='w-0.5 h-2 bg-linear-to-t from-amber-500/90 to-amber-500/20' />
                        </span>
                    </div>
                    <div className='absolute w-0.5 top-0 left-11/12 md:left-7/10 h-full bg-gray-500'>
                        <span className="absolute h-4/12 animate-run">
                            <div className='w-0.5 h-2 bg-amber-300' />
                        </span>
                        <span className="absolute h-7/12 animate-run">
                            <div className='w-0.5 h-2 bg-amber-300' />
                        </span>
                    </div>
                    <div className='absolute hidden md:block w-0.5 top-0 md:left-9/10 h-full bg-gray-500'>
                        <span className="absolute h-8/12 animate-run">
                            <div className='w-0.5 h-2 bg-amber-300' />
                        </span>
                        <span className="absolute h-11/12 animate-run">
                            <div className='w-0.5 h-2 bg-amber-300' />
                        </span>
                    </div>
                </div>
                <div className='py-10 md:py-16'>
                    <div className='relative animate-fade-in-slow'>
                        <div className='md:flex items-center'>
                            <div className='md:max-w-2/5 md:pr-6'>
                                <Big text="Sartoria Digitale" className={"font-medium text-white md:pb-10 animate-fade-in-slow"} />
                                <Medium text="Progettiamo e sviluppiamo software su misura che crescono con la tua azienda, sicuri e scalabili fin dal primo rilascio" className={"font-normal text-white animate-fade-in-fast"} />
                                <Button className={"my-6 p-6 cursor-pointer bg-amber-400 text-white hover:bg-white hover:text-amber-400"}>
                                    <Medium text="SCOPRI DI PIÙ" link="/about" className={"font-bold"} />
                                    <ArrowRight className='w-8 h-8' />
                                </Button>

                            </div>
                            <div className='w-full md:w-1/3 mx-auto my-6 md:ml-auto md:mr-30'>
                                <Image src="/img-1.png" alt="hero" width={1000} height={1000}
                                    className='rounded-md shadow-amber-700 shadow-lg opacity-85' />
                            </div>
                        </div>
                    </div>
                    <div className='relative hidden md:block animate-fade-in-slow'>
                        <div className='flex justify-center gap-4 md:gap-6 pt-10'>
                            <Card text={"AI Automation"} bgColor={"bg-cyan-900/50 backdrop-blur-[1px]"}
                                icon={"/ai.svg"} link="/services/ai" />
                            <Card text={"Sviluppo Web"} bgColor={"bg-cyan-900/50 backdrop-blur-[1px]"}
                                icon={"/dev.svg"} link="/services/development" />
                            <Card text={"Grafica e Design"} bgColor={"bg-cyan-900/50 backdrop-blur-[1px]"}
                                icon={"/ai.svg"} link="/services/design" />
                            <Card text={"Mobile App"} bgColor={"bg-cyan-900/50 backdrop-blur-[1px]"}
                                icon={"/ai.svg"} link="/services/mobile" />
                            <Card text={"Data Solution"} bgColor={"bg-cyan-900/50 backdrop-blur-[1px]"}
                                icon={"/data-solution.svg"} link="/services/data-solution" />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default HeroSection