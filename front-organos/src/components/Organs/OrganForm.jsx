import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import '../../styles/Organs.css';

function OrganForm() {
  const { id } = useParams(); // Captura el ID si está presente
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [price, setPrice] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Indicador de carga
  const navigate = useNavigate(); // Permite redirigir a otra ruta

  // Si existe un ID, carga los datos del órgano correspondiente
  useEffect(() => {
    if (id) {
      setIsLoading(true);
      const fetchOrgan = async () => {
        try {
          const response = await api.get(`/organs/${id}`);
          const { type, status, price } = response.data;
          setType(type || ''); // Aseguramos que no haya valores nulos
          setStatus(status || '');
          setPrice(price || '');
        } catch (err) {
          console.error('Error fetching organ:', err);
        } finally {
          setIsLoading(false); // Finaliza la carga
        }
      };
      fetchOrgan();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        // Actualizar órgano existente
        await api.put(`/organs/${id}`, { type, status, price });
      } else {
        // Crear un nuevo órgano
        await api.post('/organs', { type, status, price });
      }
      navigate('/organs'); // Redirige a la lista de órganos después de enviar
    } catch (err) {
      console.error('Error saving organ:', err);
    }
  };

  // Mostrar un mensaje de carga mientras se obtienen los datos
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="organ-form">
      <h2>{id ? 'Edit Organ': 'Add Organ'}</h2>
      <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Type</label>
            <input
              type="text"
              className="form-control"
              value={type}
              onChange={(e) => setType(e.target.value)}
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
        <div className="form-group">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-primary">
          {id ? 'Update' : 'Create'}
        </button>
      </form>
    </div>
  );
}

export default OrganForm;
