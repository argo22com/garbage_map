import { getMappedData } from "./generatedDatasource";

// mock spots - we don't care about actual data, but about the structure, which has to remain the same
jest.mock("./generated/fcc.json", () => ({
  features: [
    {
      attributes: {
        Stanoviště: "Plzeňská 608/71, naproti",
        Souřadnice_nádoby: "[N 48,990591102°, E 14,463342364°]",
        Souřadnice_stanoviště: "[N 48,990644999°, E 14,463385000°]",
        Druh_odpadu: "plasty",
        Počet_nádob__ks_: 1,
        Objem_nádob__l_: 2500,
        Typ_nádoby: "spodní výsyp",
        Četnost_svozu: "1 x týdně",
        Den_svozu: "středa",
        x: 48990650000,
        y: 14463380000,
        ObjectId: 1,
      },
      geometry: { x: 14.463385, y: 48.990644999 },
    },
  ],
}));

test("properly maps spots and containers", () => {
  getMappedData().then((data) => expect(data).toMatchSnapshot());
});
