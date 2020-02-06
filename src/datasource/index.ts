import { LatLng } from "leaflet";

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

export type Spot = {
  uid: string;
  /** Human readable address, street name, house number and short description */
  address: string;
  location: LatLng;
  containers: Container[];
};
