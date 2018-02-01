import React from 'react';

const BuildingFact = ({factName, fact}) => {
  const newFact = !fact ? 'Unknown' : fact;
  return (
    <div className="w-50">
      <p className="b"> {factName} </p>
      <p> {newFact} </p>
    </div>
  )
};

export default BuildingFact;
