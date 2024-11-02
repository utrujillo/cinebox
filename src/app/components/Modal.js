import Image from "next/image"
import detalle from '@/app/assets/images/detailPicture.png'
import close from '@/app/assets/icons/close.png'

const Modal = ({children, abrirModal = false, cerrarModal}) => {

    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${abrirModal ? '' : 'hidden'}`}>
            <div className="bg-white rounded-xl w-2/3 shadow-lg min-h-80 overflow-hidden relative">
                <button className="absolute top-5 right-5 z-10" onClick={ cerrarModal }>
                    <Image src={close} alt='' width={64} height={64} className='hover:opacity-50' />
                </button>
                { children }
            </div>
        </div>
    )
}

export default Modal