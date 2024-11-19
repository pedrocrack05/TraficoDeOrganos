import React, { useState } from 'react';
import api from '../../services/api';
import '../../styles/Clients.css';

const ClientForm = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');
    try {
      const newClient = { name, contact, medicalHistory };
      await api.post('/clients', newClient);
      setSuccess('Client created successfully!');
      setName('');
      setContact('');
      setMedicalHistory('');
    } catch (err) {
      setError('Error creating client. Please try again.');
    }
  };

  return (
    <div className="clients-form">
      <h2>Create Client</h2>
      {success && <p className="message success">{success}</p>}
      {error && <p className="message error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Contact</label>
          <input
            type="text"
            className="form-control"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Medical History</label>
          <textarea
            className="form-control"
            value={medicalHistory}
            onChange={(e) => setMedicalHistory(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn-primary">Create</button>
      </form>
    </div>
  );
};

export default ClientForm;
