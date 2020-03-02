import { Map } from "components/Map";
import { SpotMarker } from "components/Markers/SpotMarker";
import { Filters as TFilters, getSpots, Spot } from "datasource";
import "leaflet/dist/leaflet.css";
import React, { useCallback, useEffect, useState } from "react";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { Filters } from "components/Filters";

const App = () => {
  const [spots, setSpots] = useState<Spot[]>([]);

  useEffect(() => {
    getSpots().then(spots => {
      setSpots(spots);
    });
  }, []);

  const handleChangeFilters = useCallback((filters: TFilters) => {
    getSpots(filters).then(spots => {
      setSpots(spots);
    });
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen">
      {/* Header*/}
      <Filters onChange={handleChangeFilters} />

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
          {spots.map(spot => (
            <SpotMarker
              key={spot.uid}
              location={spot.location}
              containers={spot.containers}
            />
          ))}
        </MarkerClusterGroup>
      </Map>
    </div>
  );
};

export default App;
