import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Agreement = () => {
  const [consultations, setConsultations] = useState([]);
  const [newConsultation, setNewConsultation] = useState({
    appointmentDateTime: '',
    description: '',
    doctorId: '', // Adicione um estado para armazenar o ID do médico
    patientId: '', // Adicione um estado para armazenar o ID do paciente
  });

  useEffect(() => {
    fetchConsultations();
  }, []);

  const fetchConsultations = async () => {
    try {
      const response = await axios.get('http://localhost:8080/consultation/all');
      setConsultations(response.data);
    } catch (error) {
      console.error('Error fetching consultations', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewConsultation({ ...newConsultation, [name]: value });
  };

  const addConsultation = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/consultation/add', newConsultation);
      fetchConsultations(); // Atualiza a lista de consultas após adicionar uma nova
      setNewConsultation({
        appointmentDateTime: '',
        description: '',
        doctorId: '',
        patientId: '',
      });
    } catch (error) {
      console.error('Error adding consultation', error);
    }
  };

  return (
    <div>
      <h1>Consultations</h1>
      <form onSubmit={addConsultation}>
        <label htmlFor="appointmentDateTime">Appointment Date Time</label>
        <input
          type="text"
          id="appointmentDateTime"
          name="appointmentDateTime"
          value={newConsultation.appointmentDateTime}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={newConsultation.description}
          onChange={handleChange}
        />
        {/* Adicione campos de seleção para médico e paciente e atualize os estados doctorId e patientId */}
        <button type="submit">Add Consultation</button>
      </form>
      <ul>
        {consultations.map((consultation) => (
          <li key={consultation.id}>
            Appointment Date Time: {consultation.appointmentDateTime}<br />
            Description: {consultation.description}<br />
            {/* Render other consultation fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Agreement;
