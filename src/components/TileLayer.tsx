import { MapProvider } from "consts";
import { usePrevious } from "hooks/usePrevious";
import { Layer, tileLayer } from "leaflet";
import { useEffect, useMemo } from "react";
import { useMap } from "react-leaflet";

type TileLayerProps = {
  provider: MapProvider;
};

export const TileLayer = ({ provider }: TileLayerProps): null => {
  const map = useMap();
  const previousProvider = usePrevious(provider);

  const previousLayer = useMemo<Layer | undefined>(
    () =>
      previousProvider &&
      tileLayer(previousProvider.url, {
        id: previousProvider.url,
        attribution: previousProvider.options.attribution,
        maxZoom: previousProvider.options.maxZoom,
      }),
    [previousProvider]
  );

  const newLayer = useMemo<Layer>(
    () =>
      tileLayer(provider.url, {
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
