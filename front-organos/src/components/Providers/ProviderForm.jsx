import React, { useState } from 'react';
import api from '../../services/api';
import '../../styles/Providers.css';

function ProviderForm({ provider, onSuccess }) {
  const [name, setName] = useState(provider?.name || '');
  const [contact, setContact] = useState(provider?.contact || '');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      if (provider) {
        // Actualizar un proveedor existente
        await api.put(`/providers/${provider.id}`, { name, contact });
        setMessage('Provider updated successfully!');
      } else {
        // Crear un nuevo proveedor
        await api.post('/providers', { name, contact });
        setMessage('Provider created successfully!');
      }
      onSuccess();
      setName('');
      setContact('');
    } catch (error) {
      setMessage('Error saving provider. Please try again.');
      console.error('Error saving provider:', error);
    }
  };

  return (
    <div className="providers-form">
      <h2>{provider ? 'Edit Provider' : 'Add Provider'}</h2>
      {message && (
        <p className={`message ${message.includes('Error') ? 'error' : 'success'}`}>
          {message}
        </p>
      )}
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
        <button type="submit" className="btn-primary">
          {provider ? 'Update' : 'Create'}
        </button>
      </form>
    </div>
  );
}

export default ProviderForm;
