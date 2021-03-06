import React, { Component } from "react";
import ReactDOM from "react-dom";
import GridIcon from "./svg/GridIcon";
import Education from "./svg/Education";
import Home from "./svg/Home";
import Industrial from "./svg/Industrial";
import Other from "./svg/Other";
import Public from "./svg/Public";
import Shop from "./svg/Shop";
import Worship from "./svg/Worship";
import BuildingFact from "./BuildingFact.js";
import BuildingImage from "./BuildingImage";
import Location from "./svg/Location";

import optimiseImage from "../utils/optimiseImage";

class BuildingDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).scrollIntoView();
    window.scrollBy(0, -65);
  }

  render() {
    const { building, handleClosingBuildingDetails } = this.props;

    const {
      building_name,
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
    } = building;

    const buildingType = () => {
      switch (true) {
        case building_type.includes("Home"):
          return <Home />;
        case building_type.includes("School"):
          return <Education />;
        case building_type.includes("Factory") ||
          building_type.includes("Warehouse"):
          return <Industrial />;
        case building_type.includes("Church"):
          return <Worship />;
        case building_type.includes("Shop"):
          return <Shop />;
        case building_type.includes("Public"):
          return <Public />;
        default:
          return <Other />;
      }
    };


    const imageArr = [featured_image, second_image, third_image, fourth_image, fifth_image]
    const buildingImages = imageArr.map((image, i) => {
      if (image.length > 0) {
        const formattedImage = optimiseImage(image, "w_auto,q_30");
        return <BuildingImage key={i} image={formattedImage} />;
      }
    });

    return <main className="pa4 primary">
        <header>
          <div>
            <div className="tr" role="button" onClick={() => {
              handleClosingBuildingDetails();
            }}>
              <GridIcon />
            </div>
            <div>
              <div className="flex items-end mb4">
                {buildingType()}
                <div className="pl3 w-80">
                  {building_name && <h2 className="ma0 f3 ttc">
                      {building_name}
                    </h2>}
                  <h2 className="ma0 f3 ttc">
                    {street_number} {street_name}
                  </h2>
                  <h4 className="ma0 tt4 fw5 f5">
                    {" "}
                    <span>
                      {" "}
                      <Location />{" "}
                    </span> {postcode}{" "}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section>
          <h4 className="ma0 primary f5 b"> Historic Significance </h4>
          <p>{significance || "N/A"}</p>
        </section>

        <section className="flex flex-column">
          <div className="flex">
            <BuildingFact factName="Date Built" fact={date_built_actual} />
            <BuildingFact factName="Building Type" fact={building_type} />
          </div>
          <div className="flex">
            <BuildingFact factName="Conservation Area" fact={conservation_area} />
            <BuildingFact factName="Architectural Style" fact={architectural_style} />
          </div>
          <div className="flex">
            <BuildingFact factName="Date of Local Listing" fact={date_local_listing} />
            <BuildingFact factName="Current Use" fact={current_use} />
          </div>
        </section>

        <section>
          <h4 className="f5 b"> Description </h4>
          <p>{description}</p>
        </section>

        <section>
         {buildingImages}
        </section>
      </main>;
  }
}

export default BuildingDetails;
