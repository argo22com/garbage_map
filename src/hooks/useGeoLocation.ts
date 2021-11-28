import { useState, useEffect } from "react";

type Coords = {
  latitude: number;
  longitude: number;
};

type UseGeoLocationReturn = {
  coords?: Coords;
  error?: string;
};

export const useGeoLocation = (): UseGeoLocationReturn => {
  const [position, setPosition] = useState<Coords>();
  const [error, setError] = useState<string>();

  const onChange = ({ coords }: { coords: Coords }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };

  const onError = (error: GeolocationPositionError) => setError(error.message);

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) return setError("Geolocation is not supported");

    const watcher = geo.watchPosition(onChange, onError);

    // clean-up
    return () => geo.clearWatch(watcher);
  }, []);

  return { coords: position, error };
};
