import { Location } from "datasource";
import React from "react";
import { Marker } from "react-leaflet";

type Props = {
  location: Location;
};

export const SpotMarker: React.FC<Props> = props => {
  return (
    <Marker position={[props.location.latitude, props.location.longitude]} />
  );
};
