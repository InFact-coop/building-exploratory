import React from 'react';

const BuildingCard = ({building}) => {
  let optimisedImg = building.featured_image.split('/');
  optimisedImg.splice(6, 0, 'c_scale,q_50,w_250')
  optimisedImg = optimisedImg.join('/');
  return (
    <div>
      <p>{building.street_name}</p>
      <img src={optimisedImg} />
    </div>
  )
};

export default BuildingCard;
