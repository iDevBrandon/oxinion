import React, { useState } from "react";
import Header from "../components/common/Header/Header";
import ReactMapGL from "react-map-gl";

const MyLocal = () => {
  const [viewport, setViewport] = useState({
    width: "40vw",
    height: "40vh",
    latitude: 45.4211,
    longitude: -75.6976,
    zoom: 8,
  });
  return (
    <div>
      <Header />
      <p>Refer Yelp or Airbnb</p>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(nextViewport: any) => setViewport(nextViewport)}
      >
        markers here
      </ReactMapGL>
    </div>
  );
};

export default MyLocal;
