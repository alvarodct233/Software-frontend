export default async function subidaDeArchivos() {
    return (
        <div>

            <h2 className="text-2xl mb-4">Subir y Descargar Excel</h2>

                <form id="uploadForm" className="mb-4">
                                <input 
                                    type="file" 
                                    id="excelFile" 
                                    accept=".xlsx" 
                                    className="mb-2"
                                />
                                <button 
                                    type="submit" 
                                    className="bg-blue-500 text-white px-4 py-2"
                                    onClick={() => console.log('Subir')}
                                >
                                    Subir
                                </button>
                </form>

                            <button 
                                id="downloadButton" 
                                className="bg-green-500 text-white px-4 py-2 mb-4"
                                onClick={() => console.log('Descargar Excel')}
                            >
                                Descargar Excel
                            </button>

                        </div>
    )
}