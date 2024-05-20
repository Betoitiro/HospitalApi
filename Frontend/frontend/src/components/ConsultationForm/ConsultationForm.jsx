import React from 'react'
import { useState, useEffect } from 'react';
import axiosConfig from '../../utils/axiosConfig';

const ConsultationForm = ({ onAdd }) => {
  const [appointmentDateTime, setAppointmentDateTime] = useState('');
  const [description, setDescription] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [patientId, setPatientId] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchDoctors();
    fetchPatients();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axiosConfig.get('/doctor/all');
      setDoctors(response.data);
    } catch (error) {
      console.error('Error fetching doctors', error);
    }
  };

  const fetchPatients = async () => {
    try {
      const response = await axiosConfig.get('/patient/all');
      setPatients(response.data);
    } catch (error) {
      console.error('Error fetching patients', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newConsultation = { appointmentDateTime, description, doctor: { id: doctorId }, patient: { id: patientId } };

    try {
      await axiosConfig.post('/consultation/add', newConsultation);
      onAdd();
      setAppointmentDateTime('');
      setDescription('');
      setDoctorId('');
      setPatientId('');
    } catch (error) {
      console.error('Error adding consultation', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="appointmentDateTime">
          Appointment DateTime
        </label>
        <input
          type="text"
          id="appointmentDateTime"
          value={appointmentDateTime}
          onChange={(e) => setAppointmentDateTime(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="YYYY-MM-DDTHH:MM:SS"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Description
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Description"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="doctor">
          Doctor
        </label>
        <select
          id="doctor"
          value={doctorId}
          onChange={(e) => setDoctorId(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select a Doctor</option>
          {Array.isArray(doctors) &&
            doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name}
              </option>
            ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patient">
          Patient
        </label>
        <select
          id="patient"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select a Patient</option>
          {Array.isArray(patients) ? (
            patients.map((patient) => (
              <option key={patient.id} value={patient.id}>
                {patient.name}
              </option>
            ))
          ) : (
            <option value="">No Patients Found</option>
          )}
        </select>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Consultation
        </button>
      </div>
    </form>
  );

}

export default ConsultationForm