import Image from "next/image"

const InformacionModal = ({detalle}) => {

    const datos = {
        'imagen': detalle?.short?.image,
        'titulo': detalle?.short?.name,
        'descripcion': detalle?.short?.description,
        'estreno': `${detalle?.top?.releaseDate?.day}-${detalle?.top?.releaseDate?.month}-${detalle?.top?.releaseDate?.year}`,
        'puntuacion': detalle?.short?.aggregateRating?.ratingValue
    }
    
    console.log('datos', datos)

    return (
        <>
            {/* <p className='text-black'>Algo</p> */}
            <div className="h-96 w-full relative overflow-hidden">
                <img src={datos?.imagen} alt='' className='z-0 object-cover w-full h-full' />
            </div>
            <div className='flex flex-col text-[#2F3139] p-6'>
                <p className='font-bold text-2xl text-center'>
                    {datos?.titulo}
                </p>
                <p className='text-xl text-center'>
                    {datos?.descripcion}
                </p>
                <p className='text-right mt-11'>
                    <span className='font-bold'>Fecha de estreno</span>
                    <span className='ml-4'>{datos?.estreno}</span>
                </p>
                <p className='text-right'>
                    <span className='font-bold'>Califiación</span>
                    <span className='ml-4'>{datos?.puntuacion}</span>
                </p>
            </div>
        </>
    )
}

export default InformacionModal