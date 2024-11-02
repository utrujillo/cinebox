import React from 'react'
import Menu from '@/app/components/Menu'
import { AppProvider } from '@/app/context/AppContext'

const PlantillaPrincipal = ({children}) => {
    return (
        <AppProvider>
            <section className='bg-[#2F3139] flex flex-col text-white min-h-screen'>
                <Menu />
                {children}
            </section>
        </AppProvider>
    )
}

export default PlantillaPrincipal