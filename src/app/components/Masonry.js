'use client'
import { useState } from 'react'
import Image from "next/image"
import Modal from '@/app/components/Modal'
import InformacionModal from '@/app/components/InformacionModal'

{/* sizes = [48, 64, 32, 56, 72, 40, 36] */}
const Masonry = (props) => {

    const { categoriaBuscada, masonryItems } = props
    let masonryHeights = [48, 64, 32, 56, 72, 40, 36]
    const getRandomHeight = () => {
        const randomIndex = Math.floor(Math.random() * masonryHeights.length)
        return masonryHeights[randomIndex]
    }

    const [ abrirModal, setAbrirModal ] = useState(false)
    const cerrarModal = () => setAbrirModal(false)

    const [ loading, setLoading ] = useState(false)
    const [detalle, setDetalle] = useState({})
    const cargarDetalle = async (imdb_id) => {
        setLoading(true)
        const baseURL = 'https://imdb.iamidiotareyoutoo.com/search?tt='+ imdb_id 
        
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
            setDetalle(data)
            
        } catch (error) {
            console.error('Error al realizar la peticion', error)
        }
        setLoading(false)
    }


    return (
        <>
            <div className='text-[#C6C013] text-lg mx-8 font-bold'>{categoriaBuscada} encontradas ({masonryItems.length})</div>
            <div className="grid grid-cols-4 gap-4 m-8">
                {
                    masonryItems.map( (item) => (
                        <div className={`mb-4 break-inside-avoid h-48 rounded-3xl overflow-hidden relative`} key={item?.imdb_id}>
                            {/* <Image src={item?.imagen} alt='' fill className='z-0 object-cover' unoptimized /> */}
                            <img src={item?.imagen} alt='' className='z-0 object-cover w-full h-full' />
                            <div 
                                className="absolute bottom-0 bg-[#C8E5E4] opacity-80 h-16 w-full flex flex-col justify-center items-center text-[#2F3139] text-center cursor-pointer"
                                onClick={ () => { 
                                    cargarDetalle(item?.imdb_id)
                                    setAbrirModal(true) 
                                } }
                            >
                                <p className='font-bold text-ellipsis overflow-hidden whitespace-nowrap w-4/5'>{ item?.titulo }</p>
                                <p className='text-sm text-ellipsis overflow-hidden whitespace-nowrap w-11/12'>{ item?.actores }</p>
                            </div>
                        </div>
                    ) )
                }
            </div>
            
            <Modal abrirModal={abrirModal} cerrarModal={cerrarModal}>
                {
                    loading
                        ? <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#2F3139] animate-pulse'>Recuperando informacion...</div>
                        : detalle 
                            ? <InformacionModal categoriaBuscada={categoriaBuscada} detalle={detalle}/>
                            : <></>
                }
                
            </Modal>
        </>
    )
}

export default Masonry
