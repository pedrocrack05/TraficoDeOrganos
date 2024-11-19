import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import '../../styles/Relocation.css';

function RelocationList() {
  const [relocations, setRelocations] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRelocations = async () => {
      try {
        const response = await api.get('/relocation', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setRelocations(response.data);
      } catch (err) {
        setError('Error fetching relocations. Please try again.');
      }
    };

    fetchRelocations();
  }, []);

  return (
    <div className="relocation-container">
      <h2>Relocation List</h2>
      {error && <p className="error-message">{error}</p>}
      <table className="relocation-table">
        <thead>
          <tr>
            <th>Risk</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {relocations.map((relocation) => (
            <tr key={relocation.id}>
              <td>{relocation.risk}</td>
              <td>{relocation.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RelocationList;
