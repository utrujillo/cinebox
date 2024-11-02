'use client'
import { useState } from 'react'
import Image from "next/image"
import Modal from '@/app/components/Modal'

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

    return (
        <>
            <div className='text-[#C6C013] text-lg mx-8 font-bold'>{categoriaBuscada} encontradas ({masonryItems.length})</div>
            <div className="grid grid-cols-4 gap-4 m-8">
                {
                    masonryItems.map( (item) => (
                        <div className={`mb-4 break-inside-avoid h-48 rounded-3xl overflow-hidden relative`} key={item?.imdb_id}>
                            <Image src={item?.imagen} alt='' fill className='z-0 object-cover' unoptimized />
                            <div 
                                className="absolute bottom-0 bg-[#C8E5E4] opacity-80 h-16 w-full flex flex-col justify-center items-center text-[#2F3139] text-center cursor-pointer"
                                onClick={ () => setAbrirModal(true) }
                            >
                                <p className='font-bold text-ellipsis overflow-hidden whitespace-nowrap w-4/5'>{ item?.titulo }</p>
                                <p className='text-sm text-ellipsis overflow-hidden whitespace-nowrap w-11/12'>{ item?.actores }</p>
                            </div>
                        </div>
                    ) )
                }
            </div>
            
            <Modal abrirModal={abrirModal} cerrarModal={cerrarModal}>
                Informacion
                {/* <div className="h-96 w-full relative">
                    <Image src={detalle} alt='' fill className='z-0 object-cover' />
                </div>
                <div className='flex flex-col text-[#2F3139] p-6'>
                    <p className='font-bold text-2xl text-center'>
                        Pirates of the Caribbean: The Curse of the Black Pearl
                    </p>
                    <p className='text-xl text-center'>
                        Blacksmith Will Turner teams up with eccentric pirate Captain; Jack Sparrow to save Elizabeth Swann, the governor daughter and his love, from Jack former pirate allies, who are now undead.
                    </p>
                    <p className='text-right mt-11'>
                        <span className='font-bold'>Fecha de estreno</span>
                        <span className='ml-4'>2003-07-10</span>
                    </p>
                    <p className='text-right'>
                        <span className='font-bold'>Califiación</span>
                        <span className='ml-4'>8.1</span>
                    </p>
                </div> */}
            </Modal>
        </>
    )
}

export default Masonry
