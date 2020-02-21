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

export type Filters = {
  /** List of container types user is interested in. Spot must have all specified container types to be included.
   * To disable this filter, set it to undefined (don't specify it), as empty array will return zero spots. */
  containerTypes?: ContainerType[];
};

function applyFilters(filters: Filters, spots: Spot[]) {
  const containerTypes = filters.containerTypes;
  if (containerTypes) {
    spots = spots.filter(spot =>
      containerTypes.every(type =>
        spot.containers.find(container => container.type === type)
      )
    );
  }
  return spots;
}

export function getSpots(filters: Filters = {}): Promise<Spot[]> {
  return new Promise(async (resolve, reject) => {
    // TODO: implement datasource selection once we need it
    let spots = await getMappedData();
    spots = applyFilters(filters, spots);

    resolve(spots);
  });
}
