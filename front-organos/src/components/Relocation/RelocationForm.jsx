import React, { useState } from 'react';
import api from '../../services/api';
import '../../styles/Relocation.css';

function RelocationForm({ relocation, onSuccess }) {
  const [clientName, setClientName] = useState(relocation?.clientName || '');
  const [destination, setDestination] = useState(relocation?.destination || '');
  const [status, setStatus] = useState(relocation?.status || '');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      if (relocation) {
        await api.put(`/relocations/${relocation.id}`, { clientName, destination, status });
        setMessage('Relocation updated successfully!');
      } else {
        await api.post('/relocation', { clientName, destination, status });
        setMessage('Relocation created successfully!');
      }
      onSuccess();
      setClientName('');
      setDestination('');
      setStatus('');
    } catch (err) {
      setMessage('Error saving relocation. Please try again.');
      console.error('Error saving relocation:', err);
    }
  };

  return (
    <div className="relocation-form">
      <h2>{relocation ? 'Edit Relocation' : 'Add Relocation'}</h2>
      {message && (
        <p className={`message ${message.includes('Error') ? 'error' : 'success'}`}>
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Client Name</label>
          <input
            type="text"
            className="form-control"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Destination</label>
          <input
            type="text"
            className="form-control"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Status</label>
          <input
            type="text"
            className="form-control"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-primary">
          {relocation ? 'Update' : 'Create'}
        </button>
      </form>
    </div>
  );
}

export default RelocationForm;
