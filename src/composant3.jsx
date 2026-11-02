import React, { useState } from 'react';

function Composant3({ salaries }) {
  const [searchService, setSearchService] = useState('');
  const [resultats, setResultats] = useState([]);
  const [searched, setSearched] = useState(false); 

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = salaries.filter(
      s => s.service.nomser.toLowerCase().includes(searchService.toLowerCase())
    );
    setResultats(filtered);
    setSearched(true);
  };

  return (
    <div>
      <h2>Recherche par service:</h2>
      <form onSubmit={handleSearch}>
        <label>Entrer le nom du service:</label><br />
        <input 
          type="text" 
          value={searchService} 
          onChange={(e) => setSearchService(e.target.value)} 
        /><br />
        <button type="submit">chercher</button>
      </form>

      <div>
        <h3>Résultat</h3>
        {searched && (
          resultats.length > 0 ? (
            <ul>
              {resultats.map(s => (
                <li key={s._id}>
                  Nom : {s.nomsal} Prénom : {s.prenomsal}
                </li>
              ))}
            </ul>
          ) : (
            <p>Aucun salarié n'est affecté à ce service</p>
          )
        )}
      </div>
    </div>
  );
}

export default Composant3;