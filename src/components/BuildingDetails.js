import React from 'react';
import GridIcon from './svg/GridIcon';
import Education from './svg/Education';
import Home from './svg/Home';
import Industrial from './svg/Industrial';
import Other from './svg/Other';
import Public from './svg/Public';
import Shop from './svg/Shop';
import Worship from './svg/Worship';
import BuildingFact from './BuildingFact.js';
import BuildingImage from './BuildingImage';

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

            <div className="flex items-end mb4">
              {
                <div>
                  <Home />
                  <Education />
                  <Industrial />
                  <Other />
                  <Public />
                  <Shop />
                  <Worship />
                </div>
              }
              <div className="pl3">
                <h2 className="ma0 f3 ttc">{
                  // TODO
                  // if buildingname then show that else show stree name and things
                    street_number } { street_name }
                </h2>
                <h4 className="ma0 tt4 fw5 f5"> <span> </span> {postcode} </h4>
              </div>
            </div>


          </div>
        </div>
      </header>

      <section>
        <h4 className="ma0 primary f5 b"> Historic Significance </h4>
        <p>{significance || 'N/A'}</p>
      </section>

      <section className="flex flex-column">
        <div className="flex">
          <BuildingFact factName='Date Built' fact={date_built_actual} />
          <BuildingFact factName='Building Type' fact={building_type} />
        </div>
        <div className="flex">
          <BuildingFact factName='Conservation Area' fact={conservation_area} />
          <BuildingFact factName='Architectural Style' fact={architectural_style} />
        </div>
        <div className="flex">
          <BuildingFact factName='Date of Local Listing' fact={date_local_listing} />
          <BuildingFact factName='Current Use' fact={current_use} />
        </div>
      </section>

      <section>
        <h4 className="ma0 f5 b"> Description  </h4>
        <p>{description}</p>
      </section>

      <section>
        <BuildingImage image={ featured_image } />
        { second_image && <BuildingImage image={ second_image } /> }
        { third_image && <BuildingImage image={ third_image } /> }
        { fourth_image && <BuildingImage image={ fourth_image } /> }
        { fifth_image && <BuildingImage image={ fifth_image } /> }
      </section>
    </main>
  );
};

export default BuildingDetails;
