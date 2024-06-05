import Formulario from "../components/Formulario"
import Organigrama from "../components/Organigrama"
import subidaDeArchivos from "../components/subidaDeArchivos"

export default async function SubidaPersonal() {
    return (
        <div className="bg-gray-100 p-8">

            <div className="container mx-auto">

                <div className="grid grid-cols-2 gap-4">
                    {/* <div>
                        <subidaDeArchivos/>
                    </div> */}

                    <div>
                        <Formulario/>
                    </div>
                </div>
                    <Organigrama/>
                </div>

        </div>
    )
}