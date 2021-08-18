import { MapProvider } from "consts";
import { usePrevious } from "hooks/usePrevious";
import { tileLayer } from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

type TileLayerProps = {
  provider: MapProvider;
};

export const TileLayer = ({ provider }: TileLayerProps): null => {
  const map = useMap();
  const previousProvider = usePrevious<MapProvider>(provider);
  const previousProviderUrl = previousProvider?.url;

  /*
   * Toggle provider
   * */
  useEffect(() => {
    // skip layer update when provider url was not changed
    if (previousProviderUrl === provider.url) return;

    // remove previous layer
    if (previousProviderUrl) {
      map.eachLayer((layer) => {
        // TODO: solve ts-ignore
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Layer type form the @types/leaflet is missing _url
        const layerUrl = layer?._url;
        if (typeof layerUrl === "string" && layerUrl === previousProviderUrl) {
          layer.remove();
        }
      });
    }

    // add new layer
    map.addLayer(
      tileLayer(provider.url, {
        id: provider.url,
        attribution: provider.options.attribution,
        maxZoom: provider.options.maxZoom,
      })
    );
  }, [
    map,
    provider.url,
    previousProviderUrl,
    provider.options.attribution,
    provider.options.maxZoom,
  ]);

  /*
   * Sync maxZoom between active MapProvider and Map
   * */
  useEffect(() => {
    if (map.getMaxZoom() === provider.options.maxZoom) return;
    map.setMaxZoom(provider.options.maxZoom);
  }, [provider.options.maxZoom, map]);

  /*
   * Un-zoom Map to the MapProvider's maxZoom value when current Map zoom is too low
   * */
  useEffect(() => {
    if (map.getZoom() <= provider.options.maxZoom) return;
    map.setZoom(provider.options.maxZoom);
  }, [provider.options.maxZoom, map]);

  return null;
};
