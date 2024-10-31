import Image from "next/image"
import imagen from '@/app/assets/images/gameOfThrones.png'
import chevron_left from '@/app/assets/icons/chevron_left.png' 
import chevron_right from '@/app/assets/icons/chevron_right.png' 

const Galeria = () => {
    return (
        <section className='bg-[#44464D] mx-8 my-12 h-72 p-6 rounded-3xl relative overflow-hidden flex items-center justify-between'>
            <Image
                aria-hidden
                src={chevron_left}
                alt='Imagen anterior'
                width={64}
                height={64}
                className='cursor-pointer z-10 opacity-50'
            />
            <Image
                aria-hidden
                src={imagen}
                alt=''
                fill
                className='z-0 object-cover'
            />
            <Image
                aria-hidden
                src={chevron_right}
                alt='Imagen siguiente'
                width={64}
                height={64}
                className='cursor-pointer z-10 opacity-50'
            />
        </section>
    )
}

export default Galeria