import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CadPatient = () => {
    const [patient, setPatient] = useState({
        name: '',
        dob: '',
        gender: '',
        email: '',
        enderece: ''
    });
    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatient({
            ...patient,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/patient/add', patient);
            if (response.status === 202) {
                setPatient({
                    name: '',
                    dob: '',
                    gender: '',
                    email: '',
                    enderece: ''
                });

                navigate('/');


            }
            console.log('cadastro realizado com sucesso')
        } catch (error) {
            console.log('There was an error adding the patient!', error);
            alert('Error adding patient');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Cadastro</h2>
                <p className='text-center'>
                    Faça seu cadastro para poder consultar e marcar exames
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="nome" className="block text-gray-700">
                            Nome
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={patient.name}
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
                            value={patient.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />

                    </div>
                    <div className="mb-4">
                        <label htmlFor="senha" className="block text-gray-700">
                            Gender
                        </label>
                        <input
                            type="text"
                            name="gender"
                            value={patient.gender}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />

                    </div>
                    <div className="mb-4">
                        <label htmlFor="dob" className="block text-gray-700">
                            Date of birth:
                        </label>
                        <input
                            type="date"
                            name="dob"
                            value={patient.dob}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required />

                    </div>

                    <div className="mb-4">
                        <label htmlFor="Address" className="block text-gray-700">
                            Address:
                        </label>
                        <input
                            type="text"
                            name="enderece"
                            value={patient.enderece}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required />

                    </div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Cadastrar
                        </button>

                        {/**
                         * 
                    <Link to={responseStatus === 202 || responseStatus ===200 ||responseStatus===201 ? '/home' : '#'}>
                    </Link>
                         * * */}
                </form>
                <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-5">
                    <div className="px-6 py-4 text-center">
                        <Link to={"/"}>
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CadPatient