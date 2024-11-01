import PlantillaPrincipal from "../layouts/PlantillaPrincipal"
import Galeria from "@/app/components/Galeria"
import Modal from "@/app/components/Modal"

const Detalle = () => {
    return (
        <PlantillaPrincipal>
            <Galeria />
            <Modal>
                Saludo
            </Modal>
        </PlantillaPrincipal>
    )
}

export default Detalle