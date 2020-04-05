import { Filters } from "components/Filters";
import { Map } from "components/Map";
import { SpotMarker } from "components/Markers/SpotMarker";
import { Filters as TFilters, getSpots, Spot } from "datasource";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import MarkerClusterGroup from "react-leaflet-markercluster";

const App = () => {
  const [spots, setSpots] = useState<Spot[]>([]);
  const [filters, setFilters] = useState<TFilters>({
    containerTypes: [],
  });

  /** update spots by filter value */
  useEffect(() => {
    getSpots(filters).then(setSpots);
    return;
  }, [filters]);

  return (
    <div className="flex flex-col w-screen h-screen">
      {/* Header*/}
      <Filters onChange={setFilters} value={filters} />

      <Map className="flex-grow">
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
            color: "#50C8B4", // TODO: replace by value from tailwind
          }}
        >
          {spots.map((spot) => (
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
