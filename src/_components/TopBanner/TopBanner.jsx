import React from 'react'
import Small from '../Text/Small/Small'
import { Linkedin, Mail } from 'lucide-react'
import Medium from '../Text/Medium/Medium'

function TopBanner() {
    return (
        <div className='flex justify-between items-center px-10 py-1 md:px-20 md:py-1 bg-cyan-600 text-white'>
            <div className='flex justify-between md:justify-normal md:gap-4 w-full'>
                {/* Mobile */}
                <div className="flex w-full justify-between md:hidden">
                    <Small text="info@softinnovasolutions.it" link="mailto:info@softinnovasolutions.it" />
                    <Small text="+39 333 333 3333" link="tel:+393333333333" />
                </div>

                {/* Desktop */}
                <div className="hidden md:flex w-full md:gap-4">
                    <Medium text="info@softinnovasolutions.it" link="mailto:info@softinnovasolutions.it" />
                    <Medium text="+39 333 333 3333" link="tel:+393333333333" />
                </div>
            </div>
            <div className='hidden md:flex gap-2 md:gap-4'>
                <Mail className='w-8 h-8' />
                <Linkedin className='w-8 h-8 pb-[1px]' />
            </div>
        </div>
    )
}

export default TopBanner