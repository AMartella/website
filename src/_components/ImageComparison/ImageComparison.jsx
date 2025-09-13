import React from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'
import Big from '../Text/Big/Big'
import { Button } from '@/components/ui/button'
import Medium from '../Text/Medium/Medium'
import { ArrowRight } from 'lucide-react'

function ImageComparison() {
    return (
        <div className="flex flex-col md:flex-row py-6 px-6 md:px-20 gap-6 md:gap-0 my-6">
            <div className="flex flex-col gap-2 md:w-1/2">
                <Big text="Diamo colore alle idee" />
                <Big text="Il nostro logo racconta la trasformazione da semplice idea a simbolo riconoscibile." />
                <Button className={"my-6 p-6 cursor-pointer bg-gray-400 text-white hover:bg-cyan-600 hover:text-amber-300 md:w-1/2"}>
                    <Medium text="Scopri la nostra storia" link="/about" className={"font-bold"} />
                    <ArrowRight className='w-8 h-8' />
                </Button>
            </div>
            <ReactCompareSlider className='w-full md:w-1/2 mx-auto' keyboardIncrement="5%" position={25}
                itemOne={<ReactCompareSliderImage src="/SIS_Logo.png" alt="prima" />}
                itemTwo={<ReactCompareSliderImage src="/SIS_Logo.png" alt="dopo" className="grayscale" />}
            />
        </div>
    )
}

export default ImageComparison