import { Map } from "components/Map";
import { getSpots, Spot } from "datasource";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import { Marker } from "react-leaflet";
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
            <Marker
              key={item.uid}
              position={[item.location.latitude, item.location.longitude]}
            />
          ))}
        </MarkerClusterGroup>
      </Map>
    </div>
  );
};

export default App;
