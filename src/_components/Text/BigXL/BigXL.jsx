import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

function BigXL({ text, link, className }) {
    return (
        <>{link ? <Link
            className={cn("text-3xl md:text-6xl py-4", className)}
            href={link}>{text}</Link> :
            <p className={cn("text-3xl md:text-6xl py-4", className)}>{text}</p>}</>
    )
}

export default BigXL