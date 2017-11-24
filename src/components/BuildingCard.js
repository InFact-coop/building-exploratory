import React from 'react';

const BuildingCard = ({building}) => {
  let optimisedImg = building.featured_image.split('/');
  optimisedImg.splice(6, 0, 'c_scale,q_50,w_250')
  optimisedImg = optimisedImg.join('/');

  const imgClass = {
    backgroundImage: `url(${optimisedImg})`,
    width: "100%",
    height: "20rem"
  }
  return (
    <div className="ba b--purple bw1 w-100 w-40-ns flex-grow-1 mb4 mr4">
      <div className="bb b--purple bw1 pa3">
        <p className="ma0 tc">{building.street_name}</p>
      </div>
      <div style={imgClass} className="cover bg-center">
      </div>
    </div>
  )
};

export default BuildingCard;
