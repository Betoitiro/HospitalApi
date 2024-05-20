import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CadDoctor = () => {
    const [doctor, setDoctor] = useState({
        name: '',
        crm: '',
        specialty: '',
        email: '',
        time: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDoctor({
            ...doctor,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/doctor/add', doctor);
            if (response.status === 201) {
                alert('Médico adicionado com sucesso');
                setDoctor({
                    name: '',
                    crm: '',
                    specialty: '',
                    email: '',
                    time: ''
                });
                navigate('/home');
            }
        } catch (error) {
            console.error('Houve um erro ao adicionar o médico!', error);
            alert('Erro ao adicionar médico');
        }
    };



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Cadastro</h2>
                <p className='text-center'>
                    faça seu cadastro para poder operar no nosso hospital
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="nome" className="block text-gray-700">
                            Nome
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={doctor.name}
                            onChange={handleChange} required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                        />

                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={doctor.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />

                    </div>
                    <div className="mb-4">
                        <label htmlFor="crm" className="block text-gray-700">
                            crm
                        </label>
                        <input
                            type="numeric"
                            name="crm"
                            value={doctor.crm}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                    <label htmlFor="specialty" className="block text-gray-700">
                        specialty
                        </label>
                        <input
                            type="text"
                            name="specialty"
                            value={doctor.specialty}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />

                    </div>

                    <div>
                    <label htmlFor="time" className="block text-gray-700">
                        time
                        </label>
                        <input
                            type="text"
                            name="time"
                            value={doctor.time}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <br />

                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Cadastrar medico
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CadDoctor