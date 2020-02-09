import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";

export const Map: React.FC = ({ children }) => {
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

  return (
    <LeafletMap
      center={position}
      zoom={13}
      className="w-screen h-screen"
      maxZoom={19}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </LeafletMap>
  );
};

const position: [number, number] = [48.973393, 14.471742];
