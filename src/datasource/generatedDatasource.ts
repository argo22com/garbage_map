import { Container, ContainerType, Spot } from "datasource/index";
import rawSpots from "./generated/spots.json";
import rawContainers from "./generated/trashes.json";

export async function getMappedData(): Promise<Spot[]> {
  // map raw containers json to correct type
  const containerMap = new Map<string, Container>(
    rawContainers.map((rawContainer) => {
      return [
        rawContainer.uid,
        {
          uid: rawContainer.uid,
          clearDay: rawContainer.clear_day,
          type: rawContainer.type as ContainerType,
        },
      ];
    })
  );

  // map raw spots json to correct type
  return rawSpots.map((rawSpot) => {
    return {
      uid: rawSpot.uid,
      address: rawSpot.location.address_simple,
      location: {
        latitude: rawSpot.location.location_latitude,
        longitude: rawSpot.location.location_longitude,
      },
      containers: rawSpot.trashes
        .filter((uid) => containerMap.has(uid))
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        .map((uid) => containerMap.get(uid)!),
    };
  });
}
