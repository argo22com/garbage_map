import { getMappedData } from "./generatedDatasource";
import { Filters, Spot } from "./types";

function applyFilters(filters: Filters, spots: Spot[]) {
  const containerTypes = filters.containerTypes;
  if (containerTypes) {
    spots = spots.filter((spot) =>
      containerTypes.every((type) =>
        spot.containers.find((container) => container.type === type)
      )
    );
  }
  return spots;
}

export async function getSpots(filters: Filters = {}): Promise<Spot[]> {
  // TODO: implement datasource selection once we need it
  let spots = await getMappedData();
  spots = applyFilters(filters, spots);

  return spots;
}
