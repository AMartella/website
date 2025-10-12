import { Button } from '@/components/ui/button'
import React from 'react'
import Medium from '../Text/Medium/Medium'
import { ArrowRight } from 'lucide-react'

function CTA({ text, link, ...props }) {
    return (
        <Button className={"my-6 p-6 cursor-pointer bg-amber-400 text-white hover:bg-white hover:text-sky-400 hover:scale-105"}>
            <Medium text={text} link={link} className={"font-bold"} />
            <ArrowRight className='w-8 h-8' />
        </Button>
    )
}

export default CTA