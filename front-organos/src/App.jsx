import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import OrganList from './components/Organs/OrganList';
import OrganForm from './components/Organs/OrganForm';
import ProviderList from './components/Providers/ProviderList';
import ClientList from './components/Clients/ClientList';
import ClientForm from './components/Clients/ClientForm';
import RelocationList from './components/Relocation/RelocationList';
import QAList from './components/QualityAssurance/QAList';
import QAForm from './components/QualityAssurance/QAForm';
import './styles/App.css';

function PrivateRoute({ children, isAuthenticated }) {
  return isAuthenticated ? children : <Navigate to="/auth/login" />;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verifica el estado de autenticación al cargar el componente
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Elimina el token
    setIsAuthenticated(false); // Actualiza el estado de autenticación
  };

  return (
    <Router>
      {/* Renderiza el Header solo si el usuario está autenticado */}
      {isAuthenticated && <Header onLogout={handleLogout} />}
      <div className="container mt-4">
        <Routes>
          {/* Rutas públicas */}
          <Route
            path="/auth/login"
            element={
              isAuthenticated ? <Navigate to="/organs" /> : <Login setIsAuthenticated={setIsAuthenticated} />
            }
          />
          <Route
            path="/register"
            element={
              isAuthenticated ? <Navigate to="/organs" /> : <Register />
            }
          />

          {/* Rutas protegidas */}
          <Route
            path="/organs"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <OrganList />
              </PrivateRoute>
            }
          />
          <Route
            path="/organs/new"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <OrganForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/organs/:id/edit"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <OrganForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/providers"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <ProviderList />
              </PrivateRoute>
            }
          />
          <Route
            path="/clients"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <ClientList />
              </PrivateRoute>
            }
          />
          <Route
            path="/clients/new"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <ClientForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/relocations"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <RelocationList />
              </PrivateRoute>
            }
          />
          <Route
            path="/quality-assurance"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <QAList />
              </PrivateRoute>
            }
          />
          <Route
            path="/quality-assurance/new"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <QAForm />
              </PrivateRoute>
            }
          />
          {/* Redirección por defecto */}
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
