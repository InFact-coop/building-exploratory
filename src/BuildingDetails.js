import React from 'react';


const BuildingDetails = ({ building }) => {
  const { 
    street_number,
    street_name,
    postcode,
    ward,
    conservation_area,
    date_built_actual,
    date_built_estimate,
    architectural_style,
    building_type,
    current_use,
    description,
    date_local_listing,
    significance,
    recommendation,
    latitude,
    longitude } = building

  return (
    <div>
      <div>{ significance }</div>
      <div> { street_number } </div>
      <div> { street_name } </div>
      <div> { postcode } </div>
      <div> { ward } </div>
      <div> { conservation_area } </div>
      <div> { date_built_actual } </div>
      <div> { date_built_estimate } </div>
      <div> { architectural_style } </div>
      <div> { building_type } </div>
      <div> { current_use } </div>
      <div> { description } </div>
      <div> { date_local_listing } </div>
      <div> { significance } </div>
      <div> { recommendation } </div>
    </div>
  );
};

export default BuildingDetails;
