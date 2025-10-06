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
import BlackHole from './Blackhole'
import AnimatedCounter from '../AnimatedCounter/AnimatedCounter'

function HeroSection() {
    return (
        <>
            <div className='relative px-6 md:px-20'>
                <div className='absolute top-0 left-0 right-0 bottom-0 text-white flex border-t-2 border-t-gray-600 bg-linear-to-b from-cyan-900 to-orange-900 z-0'>
                    <div className='absolute w-0.5 top-0 left-2/12 md:left-1/10 h-full bg-gray-500/10 overflow-hidden'>
                        <span className="absolute h-full animate-run">
                            <div className='w-0.5 h-70 bg-linear-to-t from-amber-500/50 to-amber-500/10' />
                        </span>
                    </div>
                    <div className='absolute w-0.5 top-0 left-5/12 md:left-3/10 h-full bg-gray-500/10 overflow-hidden'>
                        <span className="absolute h-9/12 animate-run">
                            <div className='w-0.5 h-70 bg-linear-to-t from-amber-500/50 to-amber-500/10' />
                        </span>
                    </div>
                    <div className='absolute w-0.5 top-0 left-8/12 md:left-5/10 h-full bg-gray-500/10 overflow-hidden'>
                        <span className="absolute h-7/12 animate-run">
                            <div className='w-0.5 h-70 bg-linear-to-t from-amber-500/50 to-amber-500/10' />
                        </span>
                    </div>
                    <div className='absolute w-0.5 top-0 left-11/12 md:left-7/10 h-full bg-gray-500/10 overflow-hidden'>
                        <span className="absolute h-full animate-run">
                            <div className='w-0.5 h-70 bg-linear-to-t from-amber-500/50 to-amber-500/10' />
                        </span>
                    </div>
                    <div className='absolute hidden md:block w-0.5 top-0 md:left-9/10 h-full bg-gray-500/10 overflow-hidden'>
                        <span className="absolute h-9/12 animate-run">
                            <div className='w-0.5 h-70 bg-linear-to-t from-amber-500/50 to-amber-500/10' />
                        </span>
                    </div>
                </div>
                <div className='py-10 md:py-16'>
                    <div className='relative animate-fade-in-slow'>
                        <div className='md:flex items-center justify-center'>
                            <div className='md:max-w-full text-center'>
                                <Big text="Siamo una sartoria digitale" className={"font-medium text-white md:pb-10 animate-fade-in-slow"} />
                                <Medium text="Progettiamo e sviluppiamo software su misura che crescono con la tua azienda, sicuri e scalabili fin dal primo rilascio" className={"font-normal text-white animate-fade-in-fast"} />
                                <div className='md:w-full h-8 md:h-16'></div>
                                <Button className={"my-6 p-6 cursor-pointer bg-amber-400 text-white hover:bg-white hover:text-amber-400"}>
                                    <Medium text="CONTATTACI" link="/about" className={"font-bold"} />
                                    <ArrowRight className='w-8 h-8' />
                                </Button>
                                <div className='md:w-full h-8 md:h-16'></div>
                                <Big text="I nostri punti di forza" className={"font-medium text-white md:pb-10 animate-fade-in-slow"} />
                            </div>
                        </div>
                    </div>
                    <div className='relative animate-fade-in-slow'>
                        <div className='flex justify-around md:w-2/4 mx-auto'>
                            <div className='flex flex-col items-center'>
                                <Medium text="Clienti soddisfatti" className={"text-white md:pb-10"} />
                                <AnimatedCounter prefix={"+"} targetNumber={20} duration={5500} className={"text-white md:pb-10"} />
                            </div>
                            <div className='flex flex-col items-center'>
                                <Medium text="Progetti consegnati" className={"text-white md:pb-10"} />
                                <AnimatedCounter prefix={"+"} targetNumber={50} duration={7000} className={"text-white md:pb-10"} />
                            </div>
                            <div className='flex flex-col items-center'>
                                <Medium text="Anni di esperienza" className={"text-white md:pb-10"} />
                                <AnimatedCounter prefix={"+"} targetNumber={10} duration={4500} className={"text-white md:pb-10"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection