import { getMappedData } from "datasource/generatedDatasource";

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

export type Location = {
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

export function getSpots(): Promise<Spot[]> {
  return new Promise(async (resolve, reject) => {
    // TODO: implement datasource selection once we need it
    resolve(await getMappedData());
  });
}
