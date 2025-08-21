import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

function Big({ text, link, className }) {
    return (
        <>{link ? <Link
            className={cn("text-xl md:text-3xl", className)}
            href={link}>{text}</Link> :
            <p className={cn("text-xl md:text-3xl", className)}>{text}</p>}</>
    )
}

export default Big