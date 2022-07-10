import { Filters } from "components/Filters";
import { IconSpot } from "components/IconSpot";
import { LeafletCluster } from "components/LeafletCluster";
import { Map } from "components/Map";
import { getSpots } from "datasource";
import { Filters as TFilters, Spot } from "datasource/types";
import { divIcon, LatLng, marker, Marker } from "leaflet";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";

const defaultFilters: TFilters = {
  containerTypes: undefined,
};

const App: FC = () => {
  const [spots, setSpots] = useState<Spot[]>([]);
  const [filters, setFilters] = useState<TFilters>(defaultFilters);

  const handleChangeFilters = useCallback(
    (newFilters: TFilters) => setFilters(newFilters),
    []
  );

  /** get Leaflet Markers from spots */
  const leafletMarkers = useMemo<Marker[]>(
    () =>
      spots.map((spot) =>
        marker(new LatLng(spot.location.latitude, spot.location.longitude), {
          icon: divIcon({
            html: renderToStaticMarkup(
              <IconSpot containers={spot.containers} />
            ),
            iconSize: [32, 32],
            className: "",
          }),
        })
      ),
    [spots]
  );

  /** update spots by filter value */
  useEffect(() => {
    getSpots(filters).then(setSpots);
    return;
  }, [filters]);

  return (
    <div className="flex flex-col w-screen h-screen h-screen-safari-fix">
      {/* Header*/}
      <Filters activeFilters={filters} onChange={handleChangeFilters} />

      <Map className={"flex-grow"}>
        <LeafletCluster markers={leafletMarkers} />
      </Map>
    </div>
  );
};

export default App;
