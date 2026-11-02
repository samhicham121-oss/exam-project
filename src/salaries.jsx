import React from 'react';

function ListeSalaries({ salaries }) {
  return (
    <div>
      <h2>Liste des Salariés</h2>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Fonction</th>
            <th>Service</th>
          </tr>
        </thead>
        <tbody>
          {salaries.map((s) => (
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
  );
}

export default ListeSalaries;