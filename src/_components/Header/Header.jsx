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
                setHeaderFixed(window.scrollY > 4000);
                return;
            }
            setHeaderFixed(window.scrollY > 5500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    return (
        <div className={`
            ${headerFixed ? "fixed top-0 left-0 w-full z-50 px-10 md:px-20 shadow-cyan-600 shadow-md md:shadow-lg bg-black animate-fade-in-header text-cyan-600" :
                "relative bg-cyan-900 text-white"}`}>
            {headerFixed && <div className='absolute bottom-0 left-0 w-full'>
                <span className='absolute w-full animate-run-header'>
                    <div className='w-20 md:w-70 h-1 bg-linear-to-l from-white to-cyan-600/30' />
                </span>
            </div>}
            <div className={cn('flex justify-between items-center py-2', !headerFixed && 'px-4 md:px-12')}>
                <Logo path={"/SIS_Logo.png"} />
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