export enum ContainerType {
  paper = "Papír",
  mixedGlass = "Směsné sklo",
  plastic = "Plast",
  textile = "Textil",
  oilsAndFats = "Jedlé oleje a tuky",
  clearGlass = "Bílé sklo",
  metals = "Kovy"
}

export type Container = {
  uid: string;
  type: ContainerType;
  clearDay: string;
};

type Location = {
  latitude: number;
  longitude: number;
};

export type Spot = {
  uid: string;
  /** Human readable address, street name, house number and short description */
  address: string;
  location: Location;
  containers: Container[];
};

export async function getSpots(): Promise<Spot[]> {
  return new Promise((resolve, reject) => {
    const spots = require("./generated/spots.json");
    const containers = require("./generated/trashes.json");
    const containerMap = new Map<string, Container>(
      containers.map((rawContainer: any): [string, Container] => {
        return [
          rawContainer.uid,
          {
            uid: rawContainer.uid,
            clearDay: rawContainer.clear_day,
            type: rawContainer.type
          }
        ];
      })
    );

    const result: Spot[] = spots.map((rawSpot: any) => {
      return {
        uid: rawSpot.uid,
        address: rawSpot.location.address_simple,
        location: {
          latitude: rawSpot.location.location_latitude,
          longitude: rawSpot.location.location_longitude
        },
        containers: rawSpot.trashes.map((uid: string) => containerMap.get(uid))
      };
    });

    resolve(result);
  });
}
