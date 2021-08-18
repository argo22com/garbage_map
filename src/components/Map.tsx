import { MapProviderToggle } from "components/MapProviderToggle";
import { TileLayer } from "components/TileLayer";
import { MAP_PROVIDERS, MapProvider } from "consts";
import React, { HTMLAttributes, useState } from "react";
import { MapContainer } from "react-leaflet";
import classNames from "classnames";

type Props = HTMLAttributes<HTMLDivElement>;

const defaultMapProvider: MapProvider = MAP_PROVIDERS[0];

export const Map = ({ className, children }: Props): JSX.Element => {
  const [mapProvider, setMapProvider] =
    useState<MapProvider>(defaultMapProvider);

  /*
   * default icon is broken, this is temp (copy-paste) solution
   * source: https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-410450387
   * issue: https://github.com/PaulLeCam/react-leaflet/issues/453
   * */
  /*React.useEffect(() => {
      delete Icon.Default.prototype._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
        iconUrl: require("leaflet/dist/images/marker-icon.png"),
        shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
      });
    }, []);*/

  const handleChangeProvider = (provider: MapProvider) => {
    setMapProvider(provider);
  };

  return (
    <div className={classNames("flex flex-col h-full", className)}>
      <MapContainer center={position} zoom={13} className="w-full h-full">
        <TileLayer provider={mapProvider} />

        {children}
      </MapContainer>
      <div
        className="absolute bottom-0 left-0 m-2"
        // TODO: replace via className
        style={{ zIndex: 400 }}
      >
        <MapProviderToggle
          providers={MAP_PROVIDERS}
          activeProvider={mapProvider}
          onChange={handleChangeProvider}
        />
      </div>
    </div>
  );
};

const position: [number, number] = [48.973393, 14.471742];
