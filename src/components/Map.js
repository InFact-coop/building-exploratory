import React, { Component } from "react";
// import MapLayer from "./MapLayer";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic29oaWxwYW5keWEiLCJhIjoiY2phODdiMnM1MDQybjMycGZ3ZTE0d3RsOCJ9.4WBBpoMgECNDbRL4BahGhQ";

// const Mapbox = ReactMapboxGL({
//   accessToken:
//     "pk.eyJ1Ijoic29oaWxwYW5keWEiLCJhIjoiY2phODdiMnM1MDQybjMycGZ3ZTE0d3RsOCJ9.4WBBpoMgECNDbRL4BahGhQ"
// });

class Map extends Component {
  mapLayer;

  componentDidMount() {
    this.mapLayer = document.createElement("div");
    this.mapLayer.id = "map-inner";
    document.getElementById("map_layer").appendChild(this.mapLayer);

    const map = new mapboxgl.Map({
      container: this.mapLayer,
      style: "mapbox://styles/sohilpandya/cja87dmin0ct62sl4jxyo4tzp",
      center: [-0.1058, 51.5465],
      zoom: 12,
      containerStyle: { width: "100%" }
      // movingMethod: "flyTo"
    });

    map.getCanvas().style = {
      width: "100%",
      height: "auto",
      position: "relative"
    };

    this.props.data.getBuildings.forEach(building => {
      const markerElement = document.createElement("div");
      markerElement.classList.add(
        "h1",
        "w1",
        "bg-green",
        "ba",
        "b--green",
        "hover-bg-transparent",
        "br-100"
      );

      markerElement.addEventListener("click", () => console.log(building));

      const marker = new mapboxgl.Marker(markerElement)
        .setLngLat([building.longitude, building.latitude])
        .addTo(map);
    });
  }

  render() {
    console.log("the map layer", this.mapLayer);
    return (
      <div
        id="map_layer"
        ref={el => (this.mapLayer = el)}
        className="absolute top right left bottom"
      />
    );
  }
}

export default Map;
