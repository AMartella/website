import React from 'react'
import {
    Card as CardPrimitive,
    CardContent,
    CardFooter
} from "@/components/ui/card"
import Medium from '../Text/Medium/Medium'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import Small from '../Text/Small/Small'

function Card({ text, bgColor, icon, link }) {
    return (
        <Link href={link}>
            <CardPrimitive className={
                cn("items-center justify-center transform transition-transform duration-500 hover:-translate-y-3 cursor-pointer",
                    "w-40 h-40",
                    bgColor)}>
                <CardContent>
                    <Image src={icon} alt="hero" width={35} height={35} />
                </CardContent>
                <CardFooter>
                    <Small text={text} className={"font-medium text-amber-300 text-sm"} />
                </CardFooter>
            </CardPrimitive>
        </Link>
    )
}

export default Card