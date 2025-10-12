import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetClose,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter
} from "@/components/ui/sheet"
import { Menu, XIcon } from 'lucide-react'
import Logo from '../Logo/Logo'
import Link from 'next/link'
import Small from '../Text/Small/Small'
import Big from '../Text/Big/Big'
import Medium from '../Text/Medium/Medium'

function MobileMenu() {
    return (
        <Sheet>
            <SheetTrigger><Menu className='w-8 h-8' /></SheetTrigger>
            <SheetContent className="w-[85vw] bg-white shadow-lg gap-0 [&>button:first-of-type]:hidden">
                <SheetHeader>
                    <div className='flex justify-between items-center'>
                        <SheetTitle><Logo className={"w-45 h-15"} path={"/SIS_Logo.png"} /></SheetTitle>
                        <SheetClose>
                            <XIcon className='w-7 h-7 text-amber-600' />
                        </SheetClose>
                    </div>
                    <hr className='mt-2 mx-1' />
                </SheetHeader>
                <nav className="flex flex-col gap-6 px-6 py-3 text-lg font-medium text-cyan-600">
                    <Big text="Home" link={"/"} />
                    <Big text="Chi siamo" link={"/about"} />
                    <Big text="Servizi" link={"/services"} />
                </nav>
                <SheetFooter>
                    <div className='flex gap-2'>
                        <Small text="Mail:" className={"font-bold"} />
                        <Small text="info@softinnovasolutions.it" link="mailto:info@softinnovasolutions.it" />
                    </div>
                    <div className='flex gap-2'>
                        <Small text="Tel:" className={"font-bold"} />
                        <Small text="333333333" link="tel:333333333" />
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenu