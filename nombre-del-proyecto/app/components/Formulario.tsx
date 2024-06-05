export default async function Formulario() {
    return (
        <div>
                        <h2 className="text-2xl mb-4">Formulario</h2>
                        <form id="dataForm">
                            <div className="mb-4">
                                <label className="block">Nombre</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    className="w-full px-2 py-1 border border-gray-300"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block">Cargo</label>
                                <input 
                                    type="text" 
                                    id="position" 
                                    className="w-full px-2 py-1 border border-gray-300"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="w-full px-2 py-1 border border-gray-300"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block">Teléfono</label>
                                <input 
                                    type="text" 
                                    id="phone" 
                                    className="w-full px-2 py-1 border border-gray-300"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block">Responsable</label>
                                <input 
                                    type="text" 
                                    id="manager" 
                                    className="w-full px-2 py-1 border border-gray-300"
                                />
                            </div>
                            <button 
                                type="submit" 
                                className="bg-blue-500 text-white px-4 py-2"
                            >
                                Subir
                            </button>
                        </form>
                    </div>
    )
}