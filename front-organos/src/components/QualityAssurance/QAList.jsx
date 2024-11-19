import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import '../../styles/QA.css';

const QAList = () => {
  const [qaList, setQaList] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchQA = async () => {
      try {
        const response = await api.get('/quality-assurance');
        setQaList(response.data);
      } catch (err) {
        setError('Error fetching QA tasks. Please try again.');
      }
    };

    fetchQA();
  }, []);

  return (
    <div className="qa-container">
      <h1>Quality Assurance</h1>
      {error && <p className="error-message">{error}</p>}
      <table className="qa-table">
        <thead>
          <tr>
            <th>Verification type</th>
            <th>Verification date</th>
            <th>Results</th>
          </tr>
        </thead>
        <tbody>
          {qaList.map((qa) => (
            <tr key={qa.id}>
              <td>{qa.verificationType}</td>
              <td>{qa.verificationDate}</td>
              <td>{qa.results}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QAList;
