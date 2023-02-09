import React, {useState} from "react";

function Pet({type, gender,age,weight, name}) {
  const [isAdopted, setIsAdopted]= useState(false)

  function handleClick(event){
    setIsAdopted(true)
  }


  const adoptPet = isAdopted ? "ui disabled button" : "ui primary button"

  const alreadyAdopted = !isAdopted ? "ui disabled button" : "ui primary button"

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          { gender === 'male' ? '♀' : '♂'}
         {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button className={alreadyAdopted}>Already adopted</button>
        <button
          className={adoptPet}
          onClick={handleClick}>Adopt pet</button>
      </div>
    </div>
  );
}

export default Pet;
