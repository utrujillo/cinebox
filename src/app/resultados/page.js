import PlantillaPrincipal from "../layouts/PlantillaPrincipal"
import Galeria from "@/app/components/Galeria"
import Masonry from "@/app/components/Masonry"

const Resultados = () => {
    return (
        <PlantillaPrincipal>
            <Galeria />
            <Masonry />
        </PlantillaPrincipal>
    )
}

export default Resultados