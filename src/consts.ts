export type MapProvider = {
  name: string;
  url: string;
  options: {
    maxZoom: number;
    attribution: string;
  };
};

export const MAP_PROVIDER_DEFAULT: MapProvider = {
  name: "Wikimedia",
  url: "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png",
  options: {
    maxZoom: 19,
    attribution:
      '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>'
  }
};

export const MAP_PROVIDER_SATELLITE: MapProvider = {
  name: "Esri.WorldImagery",
  url:
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  options: {
    maxZoom: 19,
    attribution:
      "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
  }
};
