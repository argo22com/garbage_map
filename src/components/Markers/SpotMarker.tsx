import classNames from "classnames";
import { Icon } from "components/Icon";
import { Container, Location } from "datasource";
import { divIcon, DivIcon } from "leaflet";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Marker } from "react-leaflet";
import { getContainerColor } from "utils/container";

type Props = {
  location: Location;
  containers: Container[];
};

export const SpotMarker: React.FC<Props> = props => {
  const SpotIcon: DivIcon = divIcon({
    html: renderToStaticMarkup(
      <>
        {props.containers.map((container, index) => (
          <div
            className={index > 0 ? "-ml-1" : ""}
            key={`spot_marker-trash-${container.uid}`}
          >
            <Icon
              type={"trash"}
              className={classNames("w-2", getContainerColor(container.type))}
            />
          </div>
        ))}
      </>
    ),
    iconSize: [32, 32],
    className:
      "flex justify-center items-center p-1 rounded-full bg-white shadow cursor-default"
  });

  return (
    <Marker
      position={[props.location.latitude, props.location.longitude]}
      icon={SpotIcon}
    />
  );
};
