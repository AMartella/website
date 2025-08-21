import React from 'react'
import Logo from '../Logo/Logo'
import Link from 'next/link'
import { Home, Info, ListTree } from 'lucide-react'
import MobileMenu from '../MobileMenu/MobileMenu'

function Header() {
    return (
        <div className='flex justify-between items-center bg-gradient-to-r from-cyan-800 to-cyan-900 px-4 py-6 md:px-12 md:py-10 text-white'>
            <Logo className={"animate-fade-in-fast"} />
            <div className='hidden md:flex items-center gap-5 font-bold md:text-lg'>
                <Link href="/" >
                    <span>HOME</span>
                </Link>
                <Link href="/about">
                    <span>CHI SIAMO</span>
                </Link>
                <Link href="/contact">
                    <span>SERVIZI</span>
                </Link>
            </div>
            <div className='md:hidden'>
                <MobileMenu />
            </div>
        </div>
    )
}

export default Header