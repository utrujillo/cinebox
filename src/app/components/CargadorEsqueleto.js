const CargadorEsqueleto = () => {
    return (
        <>
            <section className='bg-[#44464D] mx-8 my-12 h-72 p-6 rounded-3xl relative animate-pulse'>
                <div className='flex items-center h-full'>
                    <div className='rounded-full bg-white text-white w-32 h-32 opacity-10'></div>
                    <div className='flex flex-col grow ml-5 gap-12'>
                        <div className='rounded-lg h-6 bg-white opacity-10'></div>
                        <div className='grid grid-cols-3 h-6 gap-4'>
                            <div className='rounded-lg h-6 bg-white col-span-2 opacity-10'></div>
                            <div className='rounded-lg h-6 bg-white col-span-1 opacity-10'></div>
                        </div>
                        <div className='rounded-lg h-6 bg-white opacity-10'></div>
                    </div>
                </div>
            </section>

            {/* sizes = [48, 64, 32, 56, 72, 40, 36] */}
            <div className="columns-4 gap-4 m-8 animate-pulse">
                <div className="mb-4 break-inside-avoid bg-white h-48 opacity-10 rounded-3xl"></div>
                <div className="mb-4 break-inside-avoid bg-white h-64 opacity-10 rounded-3xl"></div>
                <div className="mb-4 break-inside-avoid bg-white h-32 opacity-10 rounded-3xl"></div>
                <div className="mb-4 break-inside-avoid bg-white h-48 opacity-10 rounded-3xl"></div>
            </div>
        </>
    )
}

export default CargadorEsqueleto