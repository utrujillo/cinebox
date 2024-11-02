'use client'
import { useContext } from 'react'
import PlantillaPrincipal from "@/app/layouts/PlantillaPrincipal"
import SinInformacion from "@/app/components/SinInformacion"
import CargadorEsqueleto from '@/app/components/CargadorEsqueleto'
import Galeria from "@/app/components/Galeria"
import Masonry from "@/app/components/Masonry"
import { AppContext } from '@/app/context/AppContext'

export default function Home() {

	const { isLoading, peliculas, categoriaBuscada } = useContext(AppContext)
	const images = peliculas.map( (pelicula) => {
		return categoriaBuscada === 'Peliculas' 
					? pelicula['#IMG_POSTER']
					: pelicula['photo_url'][0]
	} )

	return (
		<PlantillaPrincipal>
			{
				isLoading
					? <CargadorEsqueleto />
					: peliculas.length === 0 
						? <SinInformacion mensaje='Por favor, busca el elemento deseado' />
						: <>
							<Galeria images={images} />
							<Masonry />
						</>
			}
			
		</PlantillaPrincipal>
	)
}
