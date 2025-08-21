import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

function Medium({ text, link, className }) {
    return (
        <>{link ? <Link
            className={cn("text-lg md:text-xl py-3", className)}
            href={link}>{text}</Link> :
            <p className={cn("text-lg md:text-xl py-3", className)}>{text}</p>}
        </>
    )
}

export default Medium