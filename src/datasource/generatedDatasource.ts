import fccFeatures from "./generated/fcc.json";
import { ContainerType, Spot } from "./types";

const ctype = ContainerType;
const typeMap = {
  plasty: ctype.plastic,
  "sklo barevné": ContainerType.mixedGlass,
  papír: ContainerType.paper,
  textil: ContainerType.textile,
  "sklo bílé": ContainerType.clearGlass,
  "tuky/oleje": ContainerType.oilsAndFats,
  kovy: ContainerType.metals,
};

export async function getMappedData(): Promise<Spot[]> {
  const spots: Map<string, Spot> = new Map();

  fccFeatures.features.forEach((feature) => {
    const name = feature.attributes["Stanoviště"];
    if (!name) {
      return;
    }

    const rawType = feature.attributes["Druh_odpadu"] as keyof typeof typeMap;
    const type = typeMap[rawType];
    if (!type) {
      return;
    }

    const spot: Spot = spots.get(name) || {
      uid: name,
      address: name,
      location: {
        latitude: feature.geometry.y,
        longitude: feature.geometry.x,
      },
      containers: [],
    };

    spot.containers.push({
      uid: feature.attributes.ObjectId.toString(),
      type,
      clearDay: feature.attributes.Den_svozu,
    });

    spots.set(name, spot);
  });

  return [...spots.values()];
}
