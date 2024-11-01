import Image from "next/image"
import image01 from '@/app/assets/images/image01.png'
import image02 from '@/app/assets/images/image02.png'
import image03 from '@/app/assets/images/image03.png'
import image04 from '@/app/assets/images/image04.png'
import image05 from '@/app/assets/images/image05.png'
import image06 from '@/app/assets/images/image06.png'
import image07 from '@/app/assets/images/image07.png'
import image08 from '@/app/assets/images/image08.png'

{/* sizes = [48, 64, 32, 56, 72, 40, 36] */}
const Masonry = () => {

    return (
        <>
            <div className='text-[#C6C013] text-lg mx-8 font-bold'>Peliculas encontradas (x)</div>
            <div className="columns-4 gap-4 m-8">
                <div className="mb-4 break-inside-avoid h-48 rounded-3xl overflow-hidden relative">
                    <Image src={image01} alt='' fill className='z-0 object-cover' />
                    <div className="absolute bottom-0 bg-[#C8E5E4] opacity-80 h-16 w-full flex flex-col justify-center items-center text-[#2F3139] text-center cursor-pointer">
                        <p className='font-bold text-ellipsis overflow-hidden whitespace-nowrap w-4/5'>The boat that rocked</p>
                        <p className='text-sm text-ellipsis overflow-hidden whitespace-nowrap w-11/12'>Philip Seymour Hoffman, Bill Nighy</p>
                    </div>
                </div>
                <div className="mb-4 break-inside-avoid h-64 rounded-3xl overflow-hidden relative">
                    <Image src={image02} alt='' fill className='z-0 object-cover' />
                    <div className="absolute bottom-0 bg-[#C8E5E4] opacity-80 h-16 w-full flex flex-col justify-center items-center text-[#2F3139] text-center cursor-pointer">
                        <p className='font-bold text-ellipsis overflow-hidden whitespace-nowrap w-4/5'>The boat that rocked</p>
                        <p className='text-sm text-ellipsis overflow-hidden whitespace-nowrap w-11/12'>Philip Seymour Hoffman, Bill Nighy</p>
                    </div>
                </div>
                <div className="mb-4 break-inside-avoid h-32 rounded-3xl overflow-hidden relative">
                    <Image src={image03} alt='' fill className='z-0 object-cover' />
                    <div className="absolute bottom-0 bg-[#C8E5E4] opacity-80 h-16 w-full flex flex-col justify-center items-center text-[#2F3139] text-center cursor-pointer">
                        <p className='font-bold text-ellipsis overflow-hidden whitespace-nowrap w-4/5'>The boat that rocked</p>
                        <p className='text-sm text-ellipsis overflow-hidden whitespace-nowrap w-11/12'>Philip Seymour Hoffman, Bill Nighy</p>
                    </div>
                </div>
                <div className="mb-4 break-inside-avoid h-48 rounded-3xl overflow-hidden relative">
                    <Image src={image04} alt='' fill className='z-0 object-cover' />
                    <div className="absolute bottom-0 bg-[#C8E5E4] opacity-80 h-16 w-full flex flex-col justify-center items-center text-[#2F3139] text-center cursor-pointer">
                        <p className='font-bold text-ellipsis overflow-hidden whitespace-nowrap w-4/5'>The boat that rocked</p>
                        <p className='text-sm text-ellipsis overflow-hidden whitespace-nowrap w-11/12'>Philip Seymour Hoffman, Bill Nighy</p>
                    </div>
                </div>
                <div className="mb-4 break-inside-avoid h-56 rounded-3xl overflow-hidden relative">
                    <Image src={image05} alt='' fill className='z-0 object-cover' />
                    <div className="absolute bottom-0 bg-[#C8E5E4] opacity-80 h-16 w-full flex flex-col justify-center items-center text-[#2F3139] text-center cursor-pointer">
                        <p className='font-bold text-ellipsis overflow-hidden whitespace-nowrap w-4/5'>The boat that rocked</p>
                        <p className='text-sm text-ellipsis overflow-hidden whitespace-nowrap w-11/12'>Philip Seymour Hoffman, Bill Nighy</p>
                    </div>
                </div>
                <div className="mb-4 break-inside-avoid h-72 rounded-3xl overflow-hidden relative">
                    <Image src={image06} alt='' fill className='z-0 object-cover' />
                    <div className="absolute bottom-0 bg-[#C8E5E4] opacity-80 h-16 w-full flex flex-col justify-center items-center text-[#2F3139] text-center cursor-pointer">
                        <p className='font-bold text-ellipsis overflow-hidden whitespace-nowrap w-4/5'>The boat that rocked</p>
                        <p className='text-sm text-ellipsis overflow-hidden whitespace-nowrap w-11/12'>Philip Seymour Hoffman, Bill Nighy</p>
                    </div>
                </div>
                <div className="mb-4 break-inside-avoid h-40 rounded-3xl overflow-hidden relative">
                    <Image src={image07} alt='' fill className='z-0 object-cover' />
                    <div className="absolute bottom-0 bg-[#C8E5E4] opacity-80 h-16 w-full flex flex-col justify-center items-center text-[#2F3139] text-center cursor-pointer">
                        <p className='font-bold text-ellipsis overflow-hidden whitespace-nowrap w-4/5'>The boat that rocked</p>
                        <p className='text-sm text-ellipsis overflow-hidden whitespace-nowrap w-11/12'>Philip Seymour Hoffman, Bill Nighy</p>
                    </div>
                </div>
                <div className="mb-4 break-inside-avoid h-56 rounded-3xl overflow-hidden relative">
                    <Image src={image08} alt='' fill className='z-0 object-cover' />
                    <div className="absolute bottom-0 bg-[#C8E5E4] opacity-80 h-16 w-full flex flex-col justify-center items-center text-[#2F3139] text-center cursor-pointer">
                        <p className='font-bold text-ellipsis overflow-hidden whitespace-nowrap w-4/5'>The boat that rocked</p>
                        <p className='text-sm text-ellipsis overflow-hidden whitespace-nowrap w-11/12'>Philip Seymour Hoffman, Bill Nighy</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Masonry
