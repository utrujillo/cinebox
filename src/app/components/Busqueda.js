'use client'
import { useState } from 'react'
import Image from "next/image"
import lupa from '@/app/assets/icons/lupa.png'

const Busqueda = () => {

    const [ buscar, setBuscar ] = useState('')
    const [ visible, setVisible ] = useState(false)
    const toggleInput = () => { setVisible(!visible) }

    let opciones = ['Peliculas', 'Series']
    const [ categoriaActiva, setCategoriaActiva ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
        console.log(`Buscar en ${categoriaActiva} el nombre ${buscar}`)
    } 

    return (
        <div className='w-1/2 bg-white rounded-3xl text-[#2F3139] h-16 p-4 flex items-center justify-between'>
            {
                !visible &&
                <>
                    {
                        opciones.map( (opcion) => (
                            <div 
                                className={
                                    `cursor-pointer hover:bg-gray-100 h-12 p-3 rounded-2xl 
                                    ${opcion === categoriaActiva ? 'font-bold': ''}`
                                    }
                                key={opcion}
                                onClick={ () => setCategoriaActiva(opcion) }
                            >
                                { opcion }
                            </div>
                        ) )
                    }
                </>
            }
            <Image
                aria-hidden
                src={lupa}
                alt="Busqueda"
                width={32}
                height={32}
                className='cursor-pointer'
                onClick={ () => toggleInput() }
            />
            {
                visible &&
                    <form onSubmit={handleSubmit} className='w-full'>
                        <input 
                            type="text" 
                            placeholder="Introduce la pelicula a buscar"
                            name="buscar"
                            // defaultValue={buscar}
                            onChange={(e) => setBuscar( e.target.value )} 
                            className='w-full ml-2 h-10 p-3 text-[#2F3139] focus:outline-none focus:ring-0' />
                    </form>
                
            }
        </div>
    )
}

export default Busqueda