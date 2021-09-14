import clsx from "clsx";
import { ChangeEvent, ReactNode, ReactText, useCallback } from "react";

type Props<T> = {
  value: T;
  checked: boolean;
  onChange: (checked: boolean, value: T) => void;

  className?: string;
  label?: ReactNode;
};

export const CheckBox = <T extends ReactText>(_: Props<T>): JSX.Element => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      _.onChange(event.currentTarget.checked, _.value),
    [_]
  );

  return (
    <label className={clsx("flex items-center cursor-pointer", _.className)}>
      <input
        type="checkbox"
        onChange={handleChange}
        checked={_.checked}
        value={_.value}
      />
      <div className={_.label ? "ml-2" : ""}>{_.label}</div>
    </label>
  );
};
