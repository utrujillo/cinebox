import React from 'react'
import Busqueda from '@/app/components/Busqueda'
import Image from "next/image"
import logo from '@/app/assets/logo.png'

const Menu = () => {
    return (
        <section className='flex justify-between w-full p-5'>
            <div className='flex items-center'>
                <Image
                    aria-hidden
                    src={logo}
                    alt="Globe icon"
                    width={66}
                    height={66}
                />
                <div className='ml-3 text-2xl font-bold'>Cinebox</div>
            </div>

            <Busqueda />
            <div>&nbsp;</div>
        </section>
    )
}

export default Menu