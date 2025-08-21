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

function Card({ text, bgColor, icon, link }) {
    return (
        <Link href={link}>
            <CardPrimitive className={
                cn("items-center justify-end my-6 transform transition-transform duration-500 hover:-translate-y-3 cursor-pointer",
                    "w-60 h-60",
                    bgColor)}>
                <CardContent>
                    <Image src={icon} alt="hero" width={70} height={70} />
                </CardContent>
                <CardFooter>
                    <Medium text={text} className={"font-medium text-amber-300"} />
                </CardFooter>
            </CardPrimitive>
        </Link>
    )
}

export default Card