import { MapProviderToggle } from "components/MapProviderToggle";
import {
  MAP_PROVIDER_DEFAULT,
  MAP_PROVIDER_SATELLITE,
  MapProvider
} from "consts";
import React, { useState } from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";

export const Map: React.FC = ({ children }) => {
  const [mapProvider, setMapProvider] = useState<MapProvider>(
    MAP_PROVIDER_DEFAULT
  );

  /*
   * default icon is broken, this is temp (copy-paste) solution
   * source: https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-410450387
   * issue: https://github.com/PaulLeCam/react-leaflet/issues/453
   * */
  React.useEffect(() => {
    const L = require("leaflet");

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png")
    });
  }, []);

  const handleChangeProvider = (provider: MapProvider) =>
    setMapProvider(provider);

  return (
    <div>
      <LeafletMap
        center={position}
        zoom={13}
        className="w-screen h-screen"
        maxZoom={19}
      >
        <TileLayer
          attribution={mapProvider.options.attribution}
          url={mapProvider.url}
        />
        {children}
      </LeafletMap>
      <div
        className="absolute bottom-0 left-0 m-2"
        // TODO: replace via className
        style={{ zIndex: 400 }}
      >
        <MapProviderToggle
          providerDefault={MAP_PROVIDER_DEFAULT}
          providerSatellite={MAP_PROVIDER_SATELLITE}
          onChange={handleChangeProvider}
        />
      </div>
    </div>
  );
};

const position: [number, number] = [48.973393, 14.471742];
