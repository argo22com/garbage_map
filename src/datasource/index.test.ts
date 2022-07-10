import { getSpots } from "./index";
import { ContainerType } from "./types";

test("getSpots returns non-empty list", () => {
  getSpots().then((data) => {
    expect(data.length).toBeGreaterThan(0);
  });
});

test("getSpots correctly filters by single containerTypes", () => {
  getSpots({
    containerTypes: [ContainerType.metals],
  }).then((data) => {
    data.forEach((spot) => {
      expect(
        spot.containers.filter(
          // every spot has at least one metal container
          (container) => container.type === ContainerType.metals
        ).length
      ).toBeGreaterThan(0);
    });
  });
});

test("getSpots correctly filters by multiple containerTypes", () => {
  getSpots({
    containerTypes: [ContainerType.metals, ContainerType.clearGlass],
  }).then((data) => {
    data.forEach((spot) => {
      expect(
        spot.containers.filter(
          // every spot has at least one metal container
          (container) => container.type === ContainerType.metals
        ).length
      ).toBeGreaterThan(0);
      expect(
        spot.containers.filter(
          // every spot has at least one clearGlass container
          (container) => container.type === ContainerType.clearGlass
        ).length
      ).toBeGreaterThan(0);
    });
    // and at least one matched
    expect(data.length).toBeGreaterThan(0);
  });
});
