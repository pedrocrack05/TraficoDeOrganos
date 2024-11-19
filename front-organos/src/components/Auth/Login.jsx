import React, { useState } from 'react';
import api from '../../services/api';
import '../../styles/Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', { email, password });
      const { token } = response.data;

      // Guardar token en localStorage
      localStorage.setItem('token', token);

      // Redirigir a otra página
      window.location.href = '/organs';
    } catch (err) {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="auth-container">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit" className="btn-primary">Ingresar</button>
      </form>
      <a href="/register">¿No tienes una cuenta? Regístrate</a>
    </div>
  );
};

export default Login;
