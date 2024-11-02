'use client'
import { useState } from 'react'
import Image from "next/image"
import chevron_left from '@/app/assets/icons/chevron_left.png' 
import chevron_right from '@/app/assets/icons/chevron_right.png' 

// Importa las imágenes directamente
import gameOfThrones from '@/app/assets/images/gameOfThrones.png';
import detailPicture from '@/app/assets/images/detailPicture.png';
import image01 from '@/app/assets/images/image01.png';

const Galeria = () => {

    const [ indexActual, setIndexActual ] = useState(0)
    let images = [ gameOfThrones, detailPicture, image01 ]

    const anterior = () => {
        setIndexActual( indexActual === 0 ? images.length - 1 : indexActual - 1)
    }

    const siguiente = () => {
        setIndexActual( indexActual === images.length - 1 ? 0 : indexActual + 1)
    }

    return (
        <section className='bg-[#44464D] mx-8 my-12 h-72 p-6 rounded-3xl relative overflow-hidden flex items-center justify-between'>
            <Image
                aria-hidden
                src={chevron_left}
                alt='Imagen anterior'
                width={64}
                height={64}
                className='cursor-pointer z-10 opacity-50'
                onClick={ anterior }
            />
            <Image
                aria-hidden
                src={images[indexActual]}
                alt=''
                fill
                className='z-0 object-cover'
            />
            <Image
                aria-hidden
                src={chevron_right}
                alt='Imagen siguiente'
                width={64}
                height={64}
                className='cursor-pointer z-10 opacity-50'
                onClick={ siguiente }
            />
        </section>
    )
}

export default Galeria