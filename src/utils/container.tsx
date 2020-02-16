import { ContainerType } from "datasource";

export function getContainerColor(type: ContainerType): string {
  if (type === ContainerType.paper) {
    return "text-container-paper";
  }
  if (type === ContainerType.plastic) {
    return "text-container-plastics";
  }
  if (type === ContainerType.clearGlass) {
    return "text-container-glass_white";
  }
  if (type === ContainerType.mixedGlass) {
    return "text-container-glass_mixed";
  }
  if (type === ContainerType.textile) {
    return "text-container-textile";
  }
  if (type === ContainerType.oilsAndFats) {
    return "text-container-oils_edible";
  }
  if (type === ContainerType.metals) {
    return "text-container-metals";
  }

  console.warn("Unknown trash type:", type);
  return "text-black";
}
