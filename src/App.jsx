import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Composant3 from './composant3';

function App() {
  const [salaries, setSalaries] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/salaries')
      .then(response => setSalaries(response.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Router>
      <nav style={{ padding: '10px' }}>
        <Link to="/">Accueil / Salariés</Link> | <Link to="/recherche">Recherche par Service</Link>
      </nav>
      <Routes>
        <Route path="/" element={
          <div>
            <h2>Liste des Salariés</h2>
            <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th>Nom</th><th>Prénom</th><th>Fonction</th><th>Service</th>
                </tr>
              </thead>
              <tbody>
                {salaries.map(s => (
                  <tr key={s._id}>
                    <td>{s.nomsal}</td>
                    <td>{s.prenomsal}</td>
                    <td>{s.fonction}</td>
                    <td>{s.service.nomser}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        } />
        <Route path="/recherche" element={<Composant3 salaries={salaries} />} />
      </Routes>
    </Router>
  );
}