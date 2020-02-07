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
    resolve([
      {
        uid: "123-123-123",
        address: "dummy data",
        location: {
          latitude: 14.123,
          longitude: 15.345
        },
        containers: []
      }
    ]);
  });
}
