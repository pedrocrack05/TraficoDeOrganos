import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import '../../styles/Organs.css';

const OrganList = () => {
  const [organs, setOrgans] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrgans = async () => {
      try {
        const response = await api.get('/organs', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setOrgans(response.data);
      } catch (err) {
        setError('Error fetching organs. Please try again.');
      }
    };

    fetchOrgans();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">Organ List</h2>
      {error && <p className="error-message">{error}</p>}
      <table className="organ-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Status</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {organs.map((organ) => (
            <tr key={organ.id}>
              <td>{organ.type}</td>
              <td>{organ.status}</td>
              <td>{organ.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrganList;
