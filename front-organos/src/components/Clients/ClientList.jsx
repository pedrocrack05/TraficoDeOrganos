import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import '../../styles/Clients.css';

function ClientList() {
  const [clients, setClients] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await api.get('/clients', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setClients(response.data);
      } catch (err) {
        setError('Error fetching clients. Please try again.');
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="clients-container">
      <h2>Client List</h2>
      {error && <p className="error-message">{error}</p>}
      <table className="clients-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Medical History</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.contact}</td>
              <td>{client.medicalHistory}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientList;
