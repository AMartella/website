'use client'

import { useState, useEffect } from 'react'
import Logo from '../Logo/Logo'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import Big from '../Text/Big/Big'
import Medium from '../Text/Medium/Medium'
import { cn } from '@/lib/utils'
import { useIsMobile } from '@/hooks/useIsMobile'

function Header() {
    const [headerFixed, setHeaderFixed] = useState(false);
    const isMobile = useIsMobile(768);

    useEffect(() => {
        const handleScroll = () => {
            if (isMobile) {
                setHeaderFixed(window.scrollY > 200);
            }
            setHeaderFixed(window.scrollY > 4500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    return (
        <div className={`
            ${headerFixed ? "fixed top-0 left-0 w-full z-50 px-10 md:px-20 shadow-amber-600 shadow-sm md:shadow-md bg-white/95 animate-fade-in text-cyan-600" :
                "relative bg-cyan-900 text-white"}`}>
            {headerFixed && <div className='absolute bottom-0 left-0 w-full'>
                <span className='absolute w-full animate-run-header'>
                    <div className='w-25 h-1 bg-linear-to-l from-amber-500/70 to-amber-500/20' />
                </span>
            </div>}
            <div className={cn('flex justify-between items-center py-2', !headerFixed && 'px-4 md:px-12')}>
                <Logo />
                <div className='hidden md:flex items-center gap-5 font-bold md:text-lg'>
                    <Medium text="Home" link={"/"} />
                    <Medium text="Chi siamo" link={"/about"} />
                    <Medium text="Servizi" link={"/services"} />
                </div>
                <div className='md:hidden'>
                    <MobileMenu />
                </div>
            </div>
        </div>
    )
}

export default Header