import React from 'react';
import GridIcon from './svg/GridIcon'

const BuildingDetails = ({ building, handleClosingBuildingDetails }) => {
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
    longitude,
    featured_image,
    second_image,
    third_image,
    fourth_image,
    fifth_image
   } = building

  return (
    <main className="pa4 primary">
      <header>
        <div>
          <div className="tr" role="button" onClick={() => { handleClosingBuildingDetails() }}>
              <GridIcon />
          </div>
          <div>

            <h2 className="primary f3 mb1 ttl ttc">{
              // TODO
              // if buildingname then show that else show stree name and things
                street_number } { street_name }
            </h2>
            <h4 className="mt0 mb4 tt4 fw5 f5"> <span> </span> {postcode} </h4>
          </div>
        </div>
      </header>

      <section>
        <h4 className="ma0 primary f5 b"> Historic Significance </h4>
        <p className="primary">{significance}</p>
      </section>
      <section className="flex flex-column">
        <div className="flex">
          <div className="w-50"> 
            <p className="b"> Date Built </p>
            <p> {date_built_actual} </p>  
          </div>
          <div className="w-50">
            <p className="b"> Building Type </p>
            <p> {building_type} </p>
          </div>
        </div>
        <div className="flex">
          <div className="w-50">
            <p className="b"> Conservation Area </p>
            <p> {conservation_area} </p>
          </div>
          <div className="w-50">
            <p className="b"> Architectural Style </p>
            <p> {architectural_style} </p>
          </div>
        </div>
        <div className="flex">
          <div className="w-50">
            <p className="b"> Date of Local Listing </p>
            <p> {date_local_listing} </p>
          </div>
          <div className="w-50"> 
            <p className="b"> Current Use </p>
            <p> {current_use} </p>  
          </div>
        </div>
      </section>

      <section>
        <h4 className="ma0 primary f5 b"> Description  </h4>
        <p className="primary">{description}</p>
      </section>

      <section>

        <img className="ba b--primary bw1" alt="" src={ featured_image } />
        {
          second_image && 
          <img className="ba b--primary bw1" alt="" src={second_image} />
        }
        {
          third_image && 
          <img className="ba b--primary bw1" alt="" src={third_image} />
        }
        {
          fourth_image && 
          <img className="ba b--primary bw1" alt="" src={fourth_image} />
        }
        {
          fifth_image && 
          <img className="ba b--primary bw1" alt="" src={fifth_image} />
        }
      </section>
    </main>
  );
};

export default BuildingDetails;
