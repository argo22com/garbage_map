import { getMappedData } from "datasource/generatedDatasource";

test("properly maps spots and containers", () => {
  // mock spots - we don't care about actual data, but about the structure, which has to remain the same
  jest.mock("./generated/spots.json", () => [
    {
      id: 1,
      location: {
        address_simple: "A. Trägera 266/113",
        location_latitude: 49.005944075539205,
        location_longitude: 14.476660503581881,
        location_origin_x: 1162728.497,
        location_origin_y: 755191.194,
      },
      trashes: ["t1", "t2"],
      uid: "0cbcb8b2-7de5-4603-bc9a-da5b699d9172",
    },
  ]);
  // mock trashes - we don't care about actual data, but about the structure, which has to remain the same
  jest.mock("./generated/trashes.json", () => [
    {
      capacity: "1 x 2500 l, spodní výsyp",
      clear_day: "úterý",
      clear_frequency: "1 x týdně",
      mark: "0cbcb8b2-7de5-4603-bc9a-da5b699d9172",
      type: "Papír",
      uid: "t1",
    },

    {
      capacity: "1 x 2500 l, spodní výsyp",
      clear_day: "pátek, úterý",
      clear_frequency: "2 x týdně",
      mark: "0cbcb8b2-7de5-4603-bc9a-da5b699d9172",
      type: "Kovy",
      uid: "t2",
    },
  ]);
  getMappedData().then((data) => expect(data).toMatchSnapshot());
});
