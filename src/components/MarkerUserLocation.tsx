import { divIcon } from "leaflet";
import { Marker } from "react-leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { useGeoLocation } from "hooks/useGeoLocation";
import { IconUserLocation } from "components/IconUserLocation/IconUserLocation";

export const MarkerUserLocation = (): JSX.Element | null => {
  const userLocation = useGeoLocation();
  console.log(userLocation);
  if (!userLocation.coords) return null;

  const { latitude, longitude } = userLocation.coords;

  return (
    <Marker
      icon={divIcon({
        html: renderToStaticMarkup(<IconUserLocation />),
        iconSize: [16, 16],
        className: "", // disable default styles
      })}
      position={[latitude, longitude]}
    />
  );
};
