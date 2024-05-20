import React from 'react'
import { Link } from 'react-router-dom'

const Exams = () => {
  return (
    <div>
      <div className="text-center p-20">
      </div>

      <div className="mb-5  "></div> 
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4 text-center">
          <Link to={"/examsCreate"}>
             criar exams
          </Link>
        </div>
      </div>


      <div className="mb-5  "></div> {/* Adiciona um espaçamento de 100px abaixo desta div */}

      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4 text-center">
          <Link to={"/examstionFindAll"}>
            Consultar todos as exams
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Exams