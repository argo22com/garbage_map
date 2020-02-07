import { getSpots } from "datasource/index";

test("getSpots returns promise of array", () => {
  getSpots().then(data => expect(data).toHaveLength(1));
});
