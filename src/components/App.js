import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState('all');

  useEffect(() =>{
    fetch('http://localhost:3001/pets')
    .then(response => response.json())
    .then(data => setPets(data));

  }, [])

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters
              pets={pets}
              setPets={setPets}
              filters={filters}
              setFilters={setFilters}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser
              pets={pets}
              setPets={setPets}
              filters={filters}
              setFilters={setFilters} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
