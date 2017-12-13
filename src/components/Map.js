import React, { Component } from 'react';
import ReactMapGL, { Marker, NavigationControl, FlyToInterpolator } from 'react-map-gl';

import MarkerFilled from './svg/MarkerFilled';
import MarkerEmpty from './svg/MarkerEmpty';


class Map extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      viewport: {
        latitude: this.props.mapCenter[1],
        longitude: this.props.mapCenter[0],
        zoom: 11.5,
        bearing: 0,
        pitch: 0,
        width: ((window.innerWidth / 2)),
        height: (window.innerHeight - 64),
      },
      popupInfo: null,
      hovering: false,
      id: undefined,
      selectedBuildingId: undefined
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  shouldComponentUpdate(nextProps, prevState) {


    if (nextProps.building.significance && !prevState.selectedBuildingId) {
      console.log(nextProps.building.id, 'building id nextprop')
      console.log(nextProps.building.longitude, 'building longitude nextprop')
      console.log(nextProps.building.latitude, 'building latitude nextprop')
      this.selectedBuilding(nextProps.building.id);
      let longitude = nextProps.building.longitude;
      let latitude = nextProps.building.latitude;
      this._goToViewport({ longitude, latitude });
    } else if (!nextProps.building.significance && prevState.selectedBuildingId) {
      this.setState({
        selectedBuildingId: undefined
      })
    }
    return true;

  }

  _resize = () => this._onViewportChange({
    width: this.props.width || ((window.innerWidth / 2)),
    height: this.props.height || (window.innerHeight - 64)
  });

  _updateViewport = (viewport) => {
    this.setState({ viewport });
  }

  _onViewportChange = viewport => this.setState({
    viewport: { ...this.state.viewport, ...viewport }
  });

  _goToViewport = ({ longitude, latitude }) => {
    this._onViewportChange({
      longitude,
      latitude,
      zoom: 15,
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: 1000
    });
  }

  _hoveringItem = (id) => {
    this.setState({ hovering: !this.state.hovering, id } )
  }

  selectedBuilding = (id) => {
    this.setState({ selectedBuildingId: id })
  }

  render() {

    const { buildings = [], handleBuildingDetails, mapCenter, mapZoom } = this.props;
    const { viewport } = this.state;

    const allMarkers = buildings.length > 0 && buildings.map((buildingObj, i) => {
      let ii = ++i;
      return (
        <Marker
          key={ii}
          longitude={buildingObj.longitude}
          latitude={buildingObj.latitude}
        >
          <div
            onMouseEnter={(obj) => {
              this._hoveringItem(ii);
            }}
            onClick={() => {
              this.selectedBuilding(ii);
              handleBuildingDetails(buildingObj);
              let longitude = buildingObj.longitude;
              let latitude = buildingObj.latitude;
              this._goToViewport({longitude, latitude});
            }}
            onMouseLeave={(obj) => {
              this._hoveringItem(undefined);
            }}
          >
          {
              (this.state.hovering && this.state.id === ii) || this.state.selectedBuildingId === ii ? <MarkerFilled /> : <MarkerEmpty />
          }
          </div>
        </ Marker>
      );
    });

    return (
      <ReactMapGL
          { ...viewport }
          mapboxApiAccessToken={'pk.eyJ1Ijoic29oaWxwYW5keWEiLCJhIjoiY2phODdiMnM1MDQybjMycGZ3ZTE0d3RsOCJ9.4WBBpoMgECNDbRL4BahGhQ'}
          mapStyle='mapbox://styles/sohilpandya/cja87dmin0ct62sl4jxyo4tzp'
        onViewportChange={this._updateViewport}
        >
        { buildings.length > 0 && allMarkers }
        </ReactMapGL>
    )
  }
}

export default Map;
