import Image from "next/image"
import no_info from '@/app/assets/icons/no_info.png'

const SinInformacion = () => {
    return (
        <section className='text-white grow grid place-items-center'>
            <article className="text-center">
                <Image
                    aria-hidden
                    src={no_info}
                    alt="Sin informacion"
                    width={526}
                    height={526}
                />
                <div className='text-[32px]'>Por favor, busca el elemento deseado</div>
            </article>
        </section>
    )
}

export default SinInformacion