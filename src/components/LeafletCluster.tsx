import "leaflet";
import "leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { useEffect } from "react";
import { Marker } from "leaflet";
import { useMap } from "react-leaflet";

// require "leaflet" and "leaflet.markercluster"
// source: https://github.com/Leaflet/Leaflet.markercluster/issues/725#issuecomment-405752647
const L = window["L"];

// TODO: try replace leaflet.markercluster by https://github.com/akursat/react-leaflet-cluster and solve ts-ignore
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: leaflet types doesn't work properly
const clusterGroup = L.markerClusterGroup({
  disableClusteringAtZoom: 17,
  spiderfyOnMaxZoom: false,
});

type Props = {
  markers: Marker[];
};

export const LeafletCluster = ({ markers }: Props): null => {
  const map = useMap();

  useEffect(() => {
    clusterGroup.clearLayers();

    markers.map((marker) => marker.addTo(clusterGroup));

    map?.addLayer(clusterGroup);
  }, [markers, map]);

  return null;
};
