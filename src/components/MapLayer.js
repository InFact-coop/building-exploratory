import React, {Component} from 'react';
import { Layer, Feature, GeoJSONLayer } from 'react-mapbox-gl';



class MapLayer extends Component {



  constructor(props) {
    super(props)

    this.state = {
      hovering: false,
      hoverBuilding: {}
    }

  }

  hoverBuilding = (building) => {
    // console.log('you in hoverBuilding')
    this.setState({ hoverBuilding: building, hovering: true })
  }

  hoverBuildingOff = (building) => {
    // console.log('you in hoverBuildingOff')
    this.setState({ hoverBuilding: {}, hovering: false })
  }

  shouldComponentUpdate(nextProps, nextState) {
      console.log(this.state, 'THISSSS State')
      console.log(nextState, 'NEXTTTT STATETTEEE')
      return true
  }


  render() {
    const { buildings = [], building, handleBuildingDetails, buildingHover } = this.props
    const allMarkers = buildings.map((buildingObj, i) => {
      return (
        <Feature
          key={i}
          coordinates={[buildingObj.longitude, buildingObj.latitude]}
          onClick={() => {
            handleBuildingDetails('onClick', buildingObj);
          }}
          onMouseEnter={() => {
            // handleBuildingDetails('onMouseEnter', buildingObj);
            this.hoverBuilding(buildingObj);
          }}
          onMouseLeave={() => {
            // handleBuildingDetails('onMouseLeave', buildingObj);   
            this.hoverBuildingOff(buildingObj);
          }}
        />);
    });

    return (
      <div>
        <Layer type="symbol" id="marker" layout={{ "icon-image": "circle-stroked-15" }}>
          {allMarkers}
        </Layer>
        <Layer type="symbol" id="marker-selected" layout={{ "icon-image": "circle-15" }}>
          <Feature
            coordinates={[building.longitude, building.latitude]}
          />
        </Layer>
        <Layer type="symbol" id="marker-onMouseEnter" layout={{ "icon-image": "circle-stroked-15", "icon-size": 2 }}>
          <Feature
            coordinates={[this.state.hoverBuilding.longitude, this.state.hoverBuilding.latitude]}
          />
        </Layer>

      </div>
    )

  }
}

export default MapLayer;