import React from 'react'
import Logo from '../Logo/Logo'
import Medium from '../Text/Medium/Medium'
import Small from '../Text/Small/Small'

function Footer() {
    return (
        <>
            <div className='bg-yellow-500 py-0.5 rounded-sm'></div>
            <div className='flex flex-col gap-4 font-bold my-8'>
                <Logo />
                <div className='flex flex-col gap-2 items-center'>
                    <Small text="Vico Grimaldi 3, 84085 Mercato San Severino (SA)" className={"font-medium text-gray-500"} />
                    <Small text="P.IVA: 03041240643 – REA: SA-510126" className={"font-medium text-gray-500"} />
                </div>
            </div>
        </>
    )
}

export default Footer