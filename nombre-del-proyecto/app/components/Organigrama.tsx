export default async function Organigrama() {
    return (
        <div className="mt-8">
            <h2 className="text-2xl mb-4">Organigrama</h2>
            <div id="orgChart" className="bg-white p-4 border">
                <div className="container mx-auto py-8">
                    <h2 className="text-2xl font-bold mb-4 text-center">Organigrama</h2>
                    <div className="grid grid-cols-1 gap-8 justify-center">
                        <div className="flex justify-center">
                            <div className="node relative w-64 h-40 border border-gray-300 rounded-md text-center bg-gray-100">
                                <p className="font-bold mb-2">Pablo</p>
                                <p className="text-sm">Cargo: CEO</p>
                                <p className="text-sm">Email: ceo@example.com</p>
                                <p className="text-sm">Teléfono: 123-456-7890</p>
                                <p className="text-sm">Responsable: -</p>
                                <div className="line absolute border-t-2 border-red-500 w-1/2 left-1/2 transform -translate-x-1/2 top-full"></div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="node relative w-64 h-40 border border-gray-300 rounded-md text-center bg-gray-100">
                                <p className="font-bold mb-2">Miriam</p>
                                <p className="text-sm">Cargo: Director de Marketing</p>
                                <p className="text-sm">Email: marketing@example.com</p>
                                <p className="text-sm">Teléfono: 987-654-3210</p>
                                <p className="text-sm">Responsable: Jefe</p>
                                <div className="line absolute border-t-2 border-red-500 w-1/2 left-1/2 transform -translate-x-1/2 top-full"></div>
                            </div>
                            <div className="node relative w-64 h-40 border border-gray-300 rounded-md text-center bg-gray-100">
                                <p className="font-bold mb-2">Luis Miguel</p>
                                <p className="text-sm">Cargo: Gerente de Ventas</p>
                                <p className="text-sm">Email: sales@example.com</p>
                                <p className="text-sm">Teléfono: 555-555-5555</p>
                                <p className="text-sm">Responsable: Jefe</p>
                                <div className="line absolute border-t-2 border-red-500 w-1/2 left-1/2 transform -translate-x-1/2 top-full"></div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="node relative w-64 h-40 border border-gray-300 rounded-md text-center bg-gray-100">
                                <p className="font-bold mb-2">Alvaro</p>
                                <p className="text-sm">Cargo: Gerente de Redes Sociales</p>
                                <p className="text-sm">Email: socialmedia@example.com</p>
                                <p className="text-sm">Teléfono: 555-555-5555</p>
                                <p className="text-sm">Responsable: Subordinado 1</p>
                                <div className="line absolute border-t-2 border-red-500 w-1/2 left-1/2 transform -translate-x-1/2 top-full"></div>
                            </div>
                            <div className="node relative w-64 h-40 border border-gray-300 rounded-md text-center bg-gray-100">
                                <p className="font-bold mb-2">Ricardo</p>
                                <p className="text-sm">Cargo: Gerente de Contenido</p>
                                <p className="text-sm">Email: content@example.com</p>
                                <p className="text-sm">Teléfono: 111-222-3333</p>
                                <p className="text-sm">Responsable: Subordinado 1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
