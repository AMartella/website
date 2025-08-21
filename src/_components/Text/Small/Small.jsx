import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

function Small({ text, link, className }) {
    return (
        <>{link ? <Link
            className={cn("text-xs md:text-md py-2", className)}
            href={link}>{text}</Link> :
            <p className={cn("text-xs md:text-md py-2", className)}>{text}</p>}</>
    )
}

export default Small