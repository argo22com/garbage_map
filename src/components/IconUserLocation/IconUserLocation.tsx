import { HTMLAttributes } from "react";
import clsx from "clsx";
import css from "./IconUserLocation.module.css";

type UserLocationMarkerProps = Omit<HTMLAttributes<HTMLDivElement>, "children">;

export const IconUserLocation = ({
  className,
  ...rest
}: UserLocationMarkerProps): JSX.Element => (
  <div className={clsx(css.icon, className)} {...rest} />
);
