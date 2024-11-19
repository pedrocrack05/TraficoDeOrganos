import React, { useState } from 'react';
import api from '../../services/api';
import '../../styles/QA.css';

function QAForm({ task, onSuccess }) {
  const [qaTask, setQATask] = useState(task?.task || '');
  const [status, setStatus] = useState(task?.status || '');
  const [assignedTo, setAssignedTo] = useState(task?.assignedTo || '');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      if (task) {
        // Update existing QA task
        await api.put(`/quality-assurance/${task.id}`, { qaTask, status, assignedTo });
        setMessage('QA task updated successfully!');
      } else {
        // Create new QA task
        await api.post('/quality-assurance', { qaTask, status, assignedTo });
        setMessage('QA task created successfully!');
      }
      onSuccess();
      setQATask('');
      setStatus('');
      setAssignedTo('');
    } catch (err) {
      setMessage('Error saving QA task. Please try again.');
      console.error('Error saving QA task:', err);
    }
  };

  return (
    <div className="qa-form">
      <h2>{task ? 'Edit QA Task' : 'Add QA Task'}</h2>
      {message && (
        <p className={`message ${message.includes('Error') ? 'error' : 'success'}`}>
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Task</label>
          <input
            type="text"
            className="form-control"
            value={qaTask}
            onChange={(e) => setQATask(e.target.value)}
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
          <label className="form-label">Assigned To</label>
          <input
            type="text"
            className="form-control"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-primary">
          {task ? 'Update' : 'Create'}
        </button>
      </form>
    </div>
  );
}

export default QAForm;
