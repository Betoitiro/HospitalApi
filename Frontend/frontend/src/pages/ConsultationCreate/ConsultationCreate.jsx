import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddConsultation = () => {
    const [consultation, setConsultation] = useState({
        appointmentDateTime: '',
        description: '',
        status: '',
        doctor_id: '',
        patient_id: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setConsultation(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/consultation/add', {
                appointmentDateTime: consultation.appointmentDateTime,
                description: consultation.description,
                status: consultation.status,
                doctor: {
                    id: consultation.doctor_id
                },
                patient: {
                    id: consultation.patient_id
                }
            });

            if (response.status === 201) { 
                setConsultation({
                    appointmentDateTime: '',
                    description: '',
                    status: '',
                    doctor_id: '',
                    patient_id: ''
                });
                navigate('/home');
            }
            console.log('Consulta criada com sucesso');
        } catch (error) {
            console.log('Ocorreu um erro ao adicionar a consulta!', error);
            alert('Erro ao adicionar consulta');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Nova Consulta</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="appointmentDateTime" className="block text-gray-700">
                            Data e Hora da Consulta
                        </label>
                        <input
                            type="datetime-local"
                            name="appointmentDateTime"
                            value={consultation.appointmentDateTime}
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
                            value={consultation.description}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="status" className="block text-gray-700">
                            Status
                        </label>
                        <select
                            name="status"
                            value={consultation.status}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Selecione o status</option>
                            <option value="CONFIRMADA">Confirmada</option>
                            <option value="REALIZADA">Realizada</option>
                            <option value="CANCELADA">Cancelada</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="doctor_id" className="block text-gray-700">
                            ID do Médico
                        </label>
                        <input
                            type="text"
                            name="doctor_id"
                            value={consultation.doctor_id}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="patient_id" className="block text-gray-700">
                            ID do Paciente
                        </label>
                        <input
                            type="text"
                            name="patient_id"
                            value={consultation.patient_id}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Criar Consulta
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddConsultation;
