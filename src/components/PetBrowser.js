import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, filters}) {
  const filteredPets = pets.filter(pet => {
    return pet.type === filters || filters === 'all'
  })

  debugger
  const card = filteredPets.map(pet => {
    return <Pet key={pet.id}{...pet} />
  })
  return <div className="ui cards">{card}</div>;
}

export default PetBrowser;
