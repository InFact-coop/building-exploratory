import React from 'react';

const BuildingFact = ({factName, fact }) => {
  return (
    <div className="w-50">
      <p className="b"> {factName} </p>
      <p> {fact || 'N/A'} </p>
    </div>
  )
};

export default BuildingFact;
