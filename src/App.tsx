import { Map } from "components/Map";
import { SpotMarker } from "components/Markers/SpotMarker";
import { getSpots, Spot } from "datasource";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import MarkerClusterGroup from "react-leaflet-markercluster";

const App = () => {
  const [spots, setSpots] = useState<Spot[]>([]);

  useEffect(() => {
    getSpots().then(spots => {
      setSpots(spots);
    });
  }, []);

  return (
    <div className="w-screen h-screen">
      <Map>
        {/*
          MarkerClusterGroup
          forked version used
          switch on the original after release new MarkerClusterGroup version with merged pull request:
          https://github.com/YUzhva/react-leaflet-markercluster/pull/86
        */}
        <MarkerClusterGroup
          disableClusteringAtZoom={16}
          spiderfyOnMaxZoom={false}
          polygonOptions={{
            color: "#50C8B4" // TODO: replace by value from tailwind
          }}
        >
          {spots.map(item => (
            <SpotMarker key={item.uid} location={item.location} />
          ))}
        </MarkerClusterGroup>
      </Map>
    </div>
  );
};

export default App;
