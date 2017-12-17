import React, { Component } from 'react';
import ReactMapGL, { FlyToInterpolator } from 'react-map-gl';

import Markers from './Markers.js';

class Map extends Component {

  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        latitude: this.props.mapCenter[1],
        longitude: this.props.mapCenter[0],
        zoom: this.props.mapZoom,
        bearing: 0,
        pitch: 0,
        width: ((window.innerWidth / 2)),
        height: (window.innerHeight - 64),
      },
      hovering: false,
      id: undefined,
      selectedBuildingId: undefined
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  shouldComponentUpdate(nextProps, prevState) {
    if (nextProps.building.significance && !prevState.selectedBuildingId) {
      console.log(nextProps.building.id, 'building id nextprop')
      console.log(nextProps.building.longitude, 'building longitude nextprop')
      console.log(nextProps.building.latitude, 'building latitude nextprop')
      this.selectedBuilding(nextProps.building.id);
      let longitude = nextProps.building.longitude;
      let latitude = nextProps.building.latitude;
      this.goToViewport({ longitude, latitude });
    } else if (!nextProps.building.significance && prevState.selectedBuildingId) {
      this.setState({
        selectedBuildingId: undefined
      })
    }
    return true;

  }

  resize = () => this.onViewportChange({
    width: this.props.width || window.innerWidth >= 960 ? ((window.innerWidth / 2)) : ((window.innerWidth)),
    height: this.props.height || window.innerWidth >= 960 ? (window.innerHeight - 64) : (window.innerHeight)
  });

  updateViewport = (viewport) => {
    this.setState({ viewport });
  }

  onViewportChange = viewport => this.setState({
    viewport: { ...this.state.viewport, ...viewport }
  });

  goToViewport = ({ longitude, latitude }) => {
    this.onViewportChange({
      longitude,
      latitude,
      zoom: parseInt(`${window.innerWidth <= 960 ? 14 : 15}`),
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: 1000
    });
  }

  hoveringItem = (id) => {
    console.log('hovering in hovering item')
    this.setState({ hovering: !this.state.hovering, id } )
  }

  selectedBuilding = (id) => {
    this.setState({ selectedBuildingId: id })
  }

  render() {

    const { buildings = [], handleBuildingDetails } = this.props;
    const { viewport } = this.state;

    return (
      <ReactMapGL
        { ...viewport }
        mapboxApiAccessToken={'pk.eyJ1Ijoic29oaWxwYW5keWEiLCJhIjoiY2phODdiMnM1MDQybjMycGZ3ZTE0d3RsOCJ9.4WBBpoMgECNDbRL4BahGhQ'}
        mapStyle='mapbox://styles/sohilpandya/cja87dmin0ct62sl4jxyo4tzp'
        onViewportChange={this.updateViewport}>
          { buildings.length > 0 &&
            <Markers
              {...this.state}
              handleBuildingDetails={handleBuildingDetails}
              buildings={buildings}
              hoveringItem={this.hoveringItem}
              selectedBuilding={this.selectedBuilding}
              goToViewport={this.goToViewport}
            />
          }
      </ReactMapGL>
    )
  }
}

export default Map;
