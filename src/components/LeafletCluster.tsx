import L, { Marker } from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import React, { useEffect } from "react";
import { useMap } from "react-leaflet";

const markerClusterGroup = L.markerClusterGroup({
  disableClusteringAtZoom: 17,
  spiderfyOnMaxZoom: false,
});

type Props = {
  markers: Marker[];
};

export const LeafletCluster: React.FC<Props> = ({ markers }) => {
  const map = useMap();

  useEffect(() => {
    markerClusterGroup.clearLayers();

    markers.map((marker) => marker.addTo(markerClusterGroup));

    map?.addLayer(markerClusterGroup);
  }, [markers, map]);

  return null;
};
