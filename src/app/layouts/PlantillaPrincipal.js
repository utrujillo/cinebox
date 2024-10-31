import React from 'react'
import Menu from '@/app/components/Menu'

const PlantillaPrincipal = ({children}) => {
    return (
        <section className='bg-[#2F3139] text-white h-screen relative'>
            <Menu />
            {children}
        </section>
    )
}

export default PlantillaPrincipal