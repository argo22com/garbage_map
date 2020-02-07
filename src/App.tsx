import { Map } from "components/Map";
import { getSpots, Spot } from "datasource";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import { Marker } from "react-leaflet";

const App = () => {
  const [spots, setSpots] = useState<Spot[]>([]);

  useEffect(() => {
    getSpots().then(spots => {
      setSpots(spots);
    });
  }, []);

  return (
    <div className="w-screen h-screen￿">
      <Map>
        {spots.map(item => (
          <Marker
            key={item.uid}
            position={[item.location.latitude, item.location.longitude]}
          />
        ))}
      </Map>
    </div>
  );
};

export default App;
