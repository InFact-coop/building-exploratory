import React from 'react';

import BuildingCard from './BuildingCard';

const BuildingsList = ({buildings = []}) => {
  return buildings.map((building, i) => {
    return <BuildingCard key={i} building={building}/>
  })
};

export default BuildingsList;
