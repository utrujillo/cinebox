'use client'
import { useState, useContext } from 'react'
import { AppContext } from '@/app/context/AppContext'
import Image from "next/image"
import lupa from '@/app/assets/icons/lupa.png'

const Busqueda = () => {

    const { setPeliculas } = useContext(AppContext)
    const [ buscar, setBuscar ] = useState('')
    const [ visible, setVisible ] = useState(false)
    const toggleInput = () => { setVisible(!visible) }

    let opciones = ['Peliculas', 'Series']
    const [ categoriaActiva, setCategoriaActiva ] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const baseURL = categoriaActiva === 'Series' 
                        ? 'https://imdb.iamidiotareyoutoo.com/justwatch?q='+buscar 
                        : 'https://imdb.iamidiotareyoutoo.com/search?q='+buscar
        
        try {
            // Realizamos la peticion a la API externa
            const response = await fetch(baseURL)
            // Verificamos si la respuesta es exitosa
            if(!response.ok){
                console.error(`Error en la solicitud: ${response.status}` )
            }
            // Procesar la respuesta JSON
            const data = await response.json()
            // Almacenar las peliculas en el contexto global
            setPeliculas(data.description)
        } catch (error) {
            console.error('Error al realizar la peticion', error)
        }
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
                            defaultValue={buscar}
                            onChange={(e) => setBuscar( e.target.value )} 
                            className='w-full ml-2 h-10 p-3 text-[#2F3139] focus:outline-none focus:ring-0' />
                    </form>
                
            }
        </div>
    )
}

export default Busqueda