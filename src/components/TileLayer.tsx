import { MapProvider } from "consts";
import { usePrevious } from "hooks/usePrevious";
import { Layer } from "leaflet";
import React, { useEffect, useMemo } from "react";
import { useMap } from "react-leaflet";

const L = require("leaflet");

type TileLayerProps = {
  provider: MapProvider;
};

export const TileLayer: React.FC<TileLayerProps> = ({ provider }) => {
  const map = useMap();
  const previousProvider = usePrevious(provider);

  const previousLayer = useMemo<Layer | undefined>(
    () =>
      previousProvider &&
      L.tileLayer(previousProvider.url, {
        id: previousProvider.url,
        attribution: previousProvider.options.attribution,
        maxZoom: previousProvider.options.maxZoom,
      }),
    [previousProvider]
  );

  const newLayer = useMemo<Layer>(
    () =>
      L.tileLayer(provider.url, {
        id: provider.url,
        attribution: provider.options.attribution,
        maxZoom: provider.options.maxZoom,
      }),
    [provider]
  );

  /*
   * Toggle provider
   * */
  useEffect(() => {
    previousLayer && map.removeLayer(previousLayer);
    map.addLayer(newLayer);
  }, [previousLayer, newLayer, map]);

  /*
   * Sync maxZoom between active MapProvider and Map
   * */
  useEffect(() => {
    if (map.getMaxZoom() === provider.options.maxZoom) return;
    map.setMaxZoom(provider.options.maxZoom);
  }, [provider, map]);

  /*
   * Un-zoom Map to the MapProvider's maxZoom value when current Map zoom is too low
   * */
  useEffect(() => {
    if (map.getZoom() <= provider.options.maxZoom) return;
    map.setZoom(provider.options.maxZoom);
  }, [provider, map]);

  return null;
};
