import { ContainerType } from "datasource";

const containerColors: { [key in ContainerType]: string } = {
  [ContainerType.paper]: "text-container-paper",
  [ContainerType.plastic]: "text-container-plastics",
  [ContainerType.clearGlass]: "text-container-glass_white",
  [ContainerType.mixedGlass]: "text-container-glass_mixed",
  [ContainerType.textile]: "text-container-textile",
  [ContainerType.oilsAndFats]: "text-container-oils_edible",
  [ContainerType.metals]: "text-container-metals"
};

export function getContainerColor(type: ContainerType): string {
  if (!containerColors[type]) {
    console.warn("undefined container type:", type);
    return "text-black";
  }
  return containerColors[type];
}
