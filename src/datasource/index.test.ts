import { getSpots } from "datasource/index";

test("getSpots returns non-empty list", () => {
  getSpots().then(data => {
    expect(data.length).toBeGreaterThan(0);
  });
});
