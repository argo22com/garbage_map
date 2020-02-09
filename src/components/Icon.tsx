import React, { CSSProperties } from "react";
import { ReactComponent as IconTrash } from "assets/images/icons/trash.svg";
import classNames from "classnames";

const icons = {
  trash: IconTrash
};

export type IconType = keyof typeof icons;

type Props = {
  type: IconType;
  className?: string;
  style?: CSSProperties;
};

/*
 * Color can be controlled via tailwind text color utility.
 * More info: https://tailwindcss.com/docs/fill/#usage
 *
 * example of usage: <Icon type={"trash"} className="h-10 text-red-500" />
 * */
export const Icon: React.FC<Props> = ({ type, className, style }) => {
  const Icon = icons[type];
  return (
    <Icon className={classNames("fill-current", className)} style={style} />
  );
};
