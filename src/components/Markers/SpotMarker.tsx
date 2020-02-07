import { Location } from "datasource";
import React from "react";
import { Marker } from "react-leaflet";

type Props = Location;

export const SpotMarker: React.FC<Props> = props => {
  return <Marker position={[props.latitude, props.longitude]} />;
};
