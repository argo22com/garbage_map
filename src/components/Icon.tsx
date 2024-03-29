import { CSSProperties } from "react";
import { ReactComponent as IconTrash } from "assets/images/icons/trash.svg";
import clsx from "clsx";

const icons = {
  trash: IconTrash,
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
export const Icon = ({ type, className, style }: Props): JSX.Element => {
  const Icon = icons[type];
  return <Icon className={clsx("fill-current", className)} style={style} />;
};
