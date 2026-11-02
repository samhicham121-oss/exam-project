import React, { useState } from 'react';

function Composant1() {
  const [matricule, setMatricule] = useState('');
  const [marque, setMarque] = useState('Toyota');
  const [dateCirculation, setDateCirculation] = useState('');
  const [couleur, setCouleur] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [voiture, setVoiture] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setVoiture({ matricule, marque, dateCirculation, couleur });
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Gestion Voitures</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Matricule:</label><br />
          <input 
            type="text" 
            value={matricule} 
            onChange={(e) => setMatricule(e.target.value)} 
          />
        </div>
        <div>
          <label>Marque:</label><br />
          <select value={marque} onChange={(e) => setMarque(e.target.value)}>
            <option value="Toyota">Toyota</option>
            <option value="Renault">Renault</option>
            <option value="Dacia">Dacia</option>
          </select>
        </div>
        <div>
          <label>Date de mise en circulation:</label><br />
          <input 
            type="date" 
            value={dateCirculation} 
            onChange={(e) => setDateCirculation(e.target.value)} 
          />
        </div>
        <div>
          <label>Couleur:</label><br />
          <input 
            type="text" 
            value={couleur} 
            onChange={(e) => setCouleur(e.target.value)} 
          />
        </div>
        <br />
        <button type="submit">Confirmer</button>
      </form>

      {submitted && voiture && (
        <div>
          <h3>Récapitulatif des informations :</h3>
          <ul>
            <li>Matricule : {voiture.matricule}</li>
            <li>Marque : {voiture.marque}</li>
            <li>Date Mise en circulation : {voiture.dateCirculation}</li>
            <li>Couleur : {voiture.couleur}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Composant1;