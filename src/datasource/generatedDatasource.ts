import { Container, Spot } from "datasource/index";

export async function getMappedData(): Promise<Spot[]> {
  const rawSpots = require("./generated/spots.json");
  const rawContainers = require("./generated/trashes.json");

  // map raw containers json to correct type
  const containerMap = new Map<string, Container>(
    rawContainers.map((rawContainer: any): [string, Container] => {
      return [
        rawContainer.uid,
        {
          uid: rawContainer.uid,
          clearDay: rawContainer.clear_day,
          type: rawContainer.type,
        },
      ];
    })
  );

  // map raw spots json to correct type
  return rawSpots.map((rawSpot: any) => {
    return {
      uid: rawSpot.uid,
      address: rawSpot.location.address_simple,
      location: {
        latitude: rawSpot.location.location_latitude,
        longitude: rawSpot.location.location_longitude,
      },
      containers: rawSpot.trashes.map((uid: string) => containerMap.get(uid)),
    };
  });
}
