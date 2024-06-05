import Link from "next/link";

export default async function Panel() {
    return (
        <div>
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

                    <div className="absolute top-0 right-0 m-4 p-8 bg-white shadow-lg rounded-lg w-72">

                        <div className="mb-4 text-lg text-gray-700">Nombre:</div>

                        <div className="text-lg text-gray-700">Apellido:</div>

                    </div>
                    <div className="flex flex-col items-center justify-center w-full mt-24 h-48 bg-red-500 text-white text-center text-2xl mb-4">
                        Sistema de Alert
                    </div>

                    <div className="flex flex-col h-60 md:flex-row w-full px-4">

                    <Link href="/subida-de-activos"className="flex-1 m-4 md:h-80 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
                        <button>Subida de Activos</button>
                    </Link>

                    <Link href="/subida-de-personal" className="flex-1 m-4 md:h-80 bg-green-500 text-white rounded-lg hover:bg-green-700">
                        <button>Subida de Personal</button>
                    </Link>

                    <Link href="/procesos" className="flex-1 m-4 md:h-80 bg-yellow-500 text-white rounded-lg hover:bg-yellow-700">
                        <button>Procesos</button>
                    </Link>

                    </div>

                </div>
        </div>
    )
}