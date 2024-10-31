import React from 'react'
import Menu from '@/app/components/Menu'

const PlantillaPrincipal = ({children}) => {
    return (
        <section className='bg-[#2F3139] flex flex-col text-white h-screen'>
            <Menu />
            {children}
        </section>
    )
}

export default PlantillaPrincipal