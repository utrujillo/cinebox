import PlantillaPrincipal from "@/app/layouts/PlantillaPrincipal"
import SinInformacion from "@/app/components/SinInformacion"

export default function Home() {
	return (
		<PlantillaPrincipal>
			<SinInformacion mensaje='Por favor, busca el elemento deseado' />
		</PlantillaPrincipal>
	)
}
