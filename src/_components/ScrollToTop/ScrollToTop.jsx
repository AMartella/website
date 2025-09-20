'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

function ScrollToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 500)
        }
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    if (!visible) return null

    return (
        <button
            onClick={scrollToTop}
            className="z-99 fixed cursor-pointer bottom-6 right-6 p-4 rounded-full bg-amber-400 text-white shadow-lg hover:bg-cyan-400 transition"
        >
            <ArrowUp className="w-6 h-6" />
        </button>
    )
}

export default ScrollToTop;