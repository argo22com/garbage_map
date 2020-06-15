import { Filters } from "components/Filters";
import { LeafletCluster } from "components/LeafletCluster";
import { Map } from "components/Map";
import { IconSpot } from "components/IconSpot";
import { Filters as TFilters, getSpots, Spot } from "datasource";
import L, { divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useMemo, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";

const App = () => {
  const [spots, setSpots] = useState<Spot[]>([]);
  const [filters, setFilters] = useState<TFilters>({
    containerTypes: []
  });

  /** get Leaflet Markers from spots */
  const leafletMarkers = useMemo(
    () =>
      spots.map(spot =>
        L.marker(
          new L.LatLng(spot.location.latitude, spot.location.longitude),
          {
            icon: divIcon({
              html: renderToStaticMarkup(
                <IconSpot containers={spot.containers} />
              ),
              iconSize: [32, 32],
              className: ""
            })
          }
        )
      ),
    [spots]
  );

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
        <LeafletCluster markers={leafletMarkers} />
      </Map>
    </div>
  );
};

export default App;
