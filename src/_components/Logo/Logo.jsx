import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

function Logo({ className }) {
    return (
        <Image
            src="/SIS_Logo.png"
            alt="Logo"
            width={200}
            height={200}
            className={cn("w-40 h-13 md:w-63 md:h-20", className)}
        />
    )
}

export default Logo