import React from 'react'
import { Link } from 'react-router-dom'

const Consultation = () => {
    return (
        <div>
            <div className="text-center p-20"> {/* Substituí p-100px por p-24 (6rem) porque 100px não é uma classe padrão do Tailwind */}
                <h1>Menu de Consulta</h1>
            </div>

            <div className="mb-5  "></div> {/* Adiciona um espaçamento de 100px abaixo desta div */}

            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-4 text-center">
                    <Link to={"/consultationCreat"}>
                        Consultation criar consulta
                    </Link>
                </div>
            </div>


            <div className="mb-5  "></div> {/* Adiciona um espaçamento de 100px abaixo desta div */}

            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-4 text-center">
                    <Link to={"/consultationFindAll"}>
                        Consultar todas as consultas
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Consultation