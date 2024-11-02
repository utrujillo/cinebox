'use client'
import { useState } from 'react'
import Image from "next/image"
import lupa from '@/app/assets/icons/lupa.png'

const Busqueda = () => {

    const [ visible, setVisible ] = useState(false)
    const [ peliculas, setPeliculas ] = useState('')
    const [ series, setSeries ] = useState('')
    const toggleInput = () => { setVisible(!visible) }
    const active = (el) => {
        if (el == 'peliculas') {
            setPeliculas( peliculas.length == 0 ? 'font-bold' : '' )
            setSeries('')
        }else if ( el === 'series' ){
            setSeries( series.length === 0 ? 'font-bold' : '' )
            setPeliculas('')
        }
    }

    return (
        <div className='w-1/2 bg-white rounded-3xl text-[#2F3139] h-16 p-4 flex items-center justify-between'>
            {
                !visible &&
                <>
                    <div className={'cursor-pointer hover:bg-gray-100 h-12 p-3 rounded-2xl '+ peliculas} onClick={ () => active('peliculas') }>Peliculas</div>
                    <div className={`cursor-pointer hover:bg-gray-100 h-12 p-3 rounded-2xl ${series}`} onClick={ () => active('series') }>Series</div>
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
                    <input 
                        type="text" 
                        placeholder="Introduce la pelicula a buscar" 
                        className='w-full ml-2 h-10 p-3 text-[#2F3139] focus:outline-none focus:ring-0' />
                
            }
        </div>
    )
}

export default Busqueda