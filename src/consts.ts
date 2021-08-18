import Image_MapProvider_SeznamBase from "assets/images/map_provider-seznam_base.jpg";
import Image_MapProvider_SeznamSatellite from "assets/images/map_provider-seznam_satellite.jpg";

export type MapProvider = {
  name: string;
  url: string;
  options: {
    maxZoom: number;
    attribution: string;
  };
  thumbnail: string;
};

const MAP_PROVIDER_DEFAULT: MapProvider = {
  name: "Mapy.cz",
  url: "https://mapserver.mapy.cz/base-m/{z}-{x}-{y}",
  options: {
    maxZoom: 17,
    attribution:
      '<a title="Seznam.cz, a.s., 2020 | OpenStreetMap" href="https://o.seznam.cz" target="_blank" rel="noopener">© Seznam.cz, a.s.</a>',
  },
  thumbnail: Image_MapProvider_SeznamBase,
};

const MAP_PROVIDER_SATELLITE: MapProvider = {
  name: "Esri",
  url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  options: {
    maxZoom: 17,
    attribution:
      "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
  },
  thumbnail: Image_MapProvider_SeznamSatellite, // TODO: replace by esri thumbnail
};

export const MAP_PROVIDERS: MapProvider[] = [
  MAP_PROVIDER_DEFAULT,
  MAP_PROVIDER_SATELLITE,
];
