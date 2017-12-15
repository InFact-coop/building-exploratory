import React from 'react';

const BuildingFact = ({factName, fact = 'N/A' }) => {
  return (
    <div className="w-50">
      <p className="b"> {factName} </p>
      <p> {fact} </p>
    </div>
  )
};

export default BuildingFact;
