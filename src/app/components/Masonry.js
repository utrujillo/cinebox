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

    let masonryHeights = [48, 64, 32, 56, 72, 40, 36]
    let images = [image01, image02, image03, image04, image05, image06, image07, image08]
    const getRandomHeight = () => {
        const randomIndex = Math.floor(Math.random() * masonryHeights.length)
        return masonryHeights[randomIndex]
    }

    return (
        <>
            <div className='text-[#C6C013] text-lg mx-8 font-bold'>Peliculas encontradas ({images.length})</div>
            <div className="columns-4 gap-4 m-8">
                {
                    images.map( (image, index) => (
                        <div className={`mb-4 break-inside-avoid h-${getRandomHeight()} rounded-3xl overflow-hidden relative`} key={index}>
                            <Image src={image} alt='' fill className='z-0 object-cover' />
                            <div className="absolute bottom-0 bg-[#C8E5E4] opacity-80 h-16 w-full flex flex-col justify-center items-center text-[#2F3139] text-center cursor-pointer">
                                <p className='font-bold text-ellipsis overflow-hidden whitespace-nowrap w-4/5'>The boat that rocked</p>
                                <p className='text-sm text-ellipsis overflow-hidden whitespace-nowrap w-11/12'>Philip Seymour Hoffman, Bill Nighy</p>
                            </div>
                        </div>
                    ) )
                }
            </div>
        </>
    )
}

export default Masonry
