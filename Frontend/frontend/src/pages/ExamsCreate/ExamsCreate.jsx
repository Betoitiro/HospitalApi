import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ExamsCreate = () => {
    const [exams, setExams] = useState({
        typeOfExams: '',
        description: '',
        dateTime: '',
        status: '',
        consultation_id: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExams(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/exams/add', {
                typeOfExams: exams.typeOfExams,
                description: exams.description,
                dateTime: exams.dateTime,
                status: exams.status,
                consultation: {
                    id: exams.consultation_id
                }
            });

            if (response.status === 201) {
                setExams({
                    typeOfExams: '',
                    description: '',
                    dateTime: '',
                    status: '',
                    consultation_id: ''
                });
                navigate('/');
            }
            console.log('Exame criado com sucesso');
        } catch (error) {
            console.log('Ocorreu um erro ao adicionar o exame!', error);
            alert('Erro ao adicionar exame');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Novo Exame</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="typeOfExams" className="block text-gray-700">
                            Tipo de Exame
                        </label>
                        <input
                            type="text"
                            name="typeOfExams"
                            value={exams.typeOfExams}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700">
                            Descrição
                        </label>
                        <textarea
                            name="description"
                            value={exams.description}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="dateTime" className="block text-gray-700">
                            Data e Hora do Exame
                        </label>
                        <input
                            type="datetime-local"
                            name="dateTime"
                            value={exams.dateTime}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="status" className="block text-gray-700">
                            Status
                        </label>
                        <select
                            name="status"
                            value={exams.status}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Selecione o status</option>
                            <option value="CONFIRMADA">PENDENTE</option>
                            <option value="REALIZADA">REALIZADO</option>
                            <option value="CANCELADO">CANCELADO</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="consultation_id" className="block text-gray-700">
                            ID da Consulta
                        </label>
                        <input
                            type="text"
                            name="consultation_id"
                            value={exams.consultation_id}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Criar Exame
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ExamsCreate;
