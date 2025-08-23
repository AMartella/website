'use client'

import { useState, useEffect } from 'react'
import Logo from '../Logo/Logo'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import Big from '../Text/Big/Big'
import Medium from '../Text/Medium/Medium'

function Header() {
    const [headerFixed, setHeaderFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHeaderFixed(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    return (
        <div className={`
            ${headerFixed ? "fixed top-0 left-0 w-full z-50 md:px-20 shadow-amber-600 shadow-sm md:shadow-md bg-white/95 animate-fade-in text-cyan-600" :
                "relative bg-cyan-900 text-white"}`}>
            {headerFixed && <div className='absolute bottom-0 left-0 w-full'>
                <span className='absolute w-full animate-run-header'>
                    <div className='w-3 h-1 bg-amber-600/80 shadow-amber-600 shadow-sm md:shadow-lg' />
                </span>
            </div>}
            <div className='flex justify-between items-center px-4 py-2 md:px-12 md:py-4'>
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