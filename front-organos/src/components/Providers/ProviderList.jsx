import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import '../../styles/Providers.css';

const ProviderList = () => {
  const [providers, setProviders] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const response = await api.get('/providers');
        setProviders(response.data);
      } catch (err) {
        setError('Error fetching providers. Please try again.');
      }
    };

    fetchProviders();
  }, []);

  return (
    <div className="providers-container">
      <h1>Providers List</h1>
      {error && <p className="error-message">{error}</p>}
      <table className="providers-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Organ type</th>
          </tr>
        </thead>
        <tbody>
          {providers.map((provider) => (
            <tr key={provider.id}>
              <td>{provider.name}</td>
              <td>{provider.contact}</td>
              <td>{provider.organType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProviderList;
