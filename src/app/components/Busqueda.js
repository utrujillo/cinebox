import Image from "next/image"
import lupa from '@/app/assets/icons/lupa.png'

const Busqueda = () => {
    return (
        <div className='w-1/2 bg-white rounded-3xl text-[#2F3139] h-16 p-4 flex items-center justify-between'>
            <div className='cursor-pointer hover:bg-gray-100 h-12 p-3 rounded-2xl'>Peliculas</div>
            <div className='cursor-pointer hover:bg-gray-100 h-12 p-3 rounded-2xl'>Series</div>
            <Image
                aria-hidden
                src={lupa}
                alt="Busqueda"
                width={32}
                height={32}
                className='cursor-pointer'
            />

            <input 
                type="text" 
                placeholder="Introduce la pelicula a buscar" 
                className='w-full ml-2 h-10 p-3 text-[#2F3139]' />
            
        </div>
    )
}

export default Busqueda