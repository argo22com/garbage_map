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
  name: "Mapy.cz",
  url: "https://mapserver.mapy.cz/bing/{z}-{x}-{y}",
  options: {
    maxZoom: 19,
    attribution:
      '<a title="Seznam.cz, a.s., 2020 |  EOX IT Services GmbH |  OpenStreetMap" href="https://o.seznam.cz" target="_blank" rel="noopener">© Seznam.cz, a.s.</a>'
  }
};
