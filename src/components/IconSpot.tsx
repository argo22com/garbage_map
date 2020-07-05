import classNames from "classnames";
import { Icon } from "components/Icon";
import { Container } from "datasource";
import React from "react";
import { containerTypes } from "utils/container";

type Props = {
  containers: Container[];
};

export const IconSpot: React.FC<Props> = ({ containers }) => {
  return (
    <div className="w-full h-full flex justify-center items-center p-1 rounded-full bg-white shadow cursor-default">
      {containers.map((container, index) => (
        <div
          className={index > 0 ? "-ml-1" : ""}
          key={`spot_marker-trash-${container.uid}`}
          title={containerTypes[container.type].name}
        >
          <Icon
            type={"trash"}
            className={classNames("w-2", containerTypes[container.type].color)}
          />
        </div>
      ))}
    </div>
  );
};
