import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ExamsFindAll = () => {
  const [examss, setexamss] = useState([]);

  useEffect(() => {
    const fetchexamss = async () => {
      try {
        const response = await axios.get('http://localhost:8080/exams/all');
        setexamss(response.data);
      } catch (error) {
        console.log('Erro ao carregar as consultas:', error);
      }
    };

    fetchexamss();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center font-bold mb-4 text-3xl">Consultas</h1>
      <div className='text-center'>
        <h2 className='mt-10 text-2xl'>Lista de Consultas</h2>
        <ul className='mt-10 space-y-8'>
          {examss.map(exams => (
            <li key={exams.id} className='bg-white shadow-md rounded-lg p-6'>
              <p className="text-lg"><strong>Data e Hora:</strong> {exams.appointmentDateTime}</p>
              <p className="text-lg"><strong>Descrição:</strong> {exams.description}</p>
              <p className="text-lg"><strong>Status:</strong> {exams.status}</p>
              <p className="text-lg"><strong>Médico:</strong> {exams.doctor?.name || 'N/A'}</p>
              <p className="text-lg"><strong>ID do Médico:</strong> {exams.doctor?.id || 'N/A'}</p>
              <p className="text-lg"><strong>Paciente:</strong> {exams.patient?.name || 'N/A'}</p>
              <p className="text-lg"><strong>ID do Paciente:</strong> {exams.patient?.id || 'N/A'}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center mt-10">
        <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Home
        </Link>
      </div>
    </div>
  );
}

export default ExamsFindAll;
