import { ContainerType } from "datasource/types";

export type ContainerTypes = {
  [key in ContainerType]: {
    name: string;
    color: string;
  };
};

export const containerTypes: ContainerTypes = {
  [ContainerType.paper]: {
    name: "Papír",
    color: "text-container-paper",
  },
  [ContainerType.plastic]: {
    name: "Plasty",
    color: "text-container-plastics",
  },
  [ContainerType.clearGlass]: {
    name: "Bílé sklo",
    color: "text-container-glass_white",
  },
  [ContainerType.mixedGlass]: {
    name: "Směsné sklo",
    color: "text-container-glass_mixed",
  },
  [ContainerType.textile]: {
    name: "Textil",
    color: "text-container-textile",
  },
  [ContainerType.oilsAndFats]: {
    name: "Jedlé oleje a tuky",
    color: "text-container-oils_edible",
  },
  [ContainerType.metals]: {
    name: "Kovy",
    color: "text-container-metals",
  },
};

export const containerTypeKeys = Object.values(ContainerType);
