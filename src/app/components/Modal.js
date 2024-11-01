import Image from "next/image"
import detalle from '@/app/assets/images/detailPicture.png'
import close from '@/app/assets/icons/close.png'

const Modal = ({children}) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-xl w-2/3 shadow-lg overflow-hidden">
                <div className="h-96 w-full bg-red-300 relative">
                    <button className="absolute top-5 right-5 z-10">
                        <Image src={close} alt='' width={64} height={64} className='hover:opacity-50' />
                    </button>
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
                </div>
            </div>
        </div>
    )
}

export default Modal