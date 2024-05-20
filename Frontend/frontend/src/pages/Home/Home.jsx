import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className="text-center p-20"> {/* Substituí p-100px por p-24 (6rem) porque 100px não é uma classe padrão do Tailwind */}
                <h1>Home</h1>
            </div>

            <div className="mb-5  "></div> {/* Adiciona um espaçamento de 100px abaixo desta div */}

            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-4 text-center">
                    <Link to={"/consultation"}>
                        Consultation
                    </Link>
                </div>
            </div>
            <div className="mb-10"></div> {/* Adiciona um espaçamento de 100px abaixo desta div */}

            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-4 text-center">
                    <Link to={"/exams"}>
                        Exams
                    </Link>
                </div>
            </div>

            <div className="mb-10"></div> {/* Adiciona um espaçamento de 100px abaixo desta div */}

            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-4 text-center">
                    <Link to={"/doc"}>
                        Register doctor
                    </Link>
                </div>
            </div>

            <div className="mb-10"></div> {/* Adiciona um espaçamento de 100px abaixo desta div */}

            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-4 text-center">
                    <Link to={"/cadPatient"}>
                        Register Patient
                    </Link>
                </div>
            </div>

            <div className="mb-10"></div> {/* Adiciona um espaçamento de 100px abaixo desta div */}

            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-4 text-center">
                    <Link to={"/about"}>
                        About
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Home