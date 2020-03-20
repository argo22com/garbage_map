import classNames from "classnames";
import { ContainerType, Filters as TFilters } from "datasource";
import React, { ChangeEvent, useCallback, useMemo } from "react";

type Props = {
  value: TFilters;
  onChange: (filters: TFilters) => void;
};

/* TODO: change to keys and solve texts */
const filtersContainerType = Object.values(ContainerType);

export const Filters: React.FC<Props> = ({ value, onChange }) => {
  const containerTypes = useMemo(() => value.containerTypes || [], [
    value.containerTypes
  ]);

  const handleChangeFilterContainerType = useCallback(
    (checked: boolean, filter: ContainerType) => {
      const updated = checked
        ? [...containerTypes, filter]
        : containerTypes.filter(type => type !== filter);

      onChange({ ...value, containerTypes: updated });
    },
    [value, onChange, containerTypes]
  );

  return (
    <div className="flex">
      {filtersContainerType.map((filter, index) => (
        <FilterItem<ContainerType>
          key={`filter-containerType-${index}`}
          className={index > 0 ? "ml-5" : ""}
          value={filter}
          checked={containerTypes.includes(filter)}
          onChange={handleChangeFilterContainerType}
        >
          {filter}
        </FilterItem>
      ))}
    </div>
  );
};

type FilterProp<T> = {
  className?: string;
  value: T;
  checked: boolean;
  onChange: (checked: boolean, value: T) => void;
  children?: any;
};

const FilterItem = <T extends string>(props: FilterProp<T>) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      return props.onChange(event.currentTarget.checked, props.value);
    },
    [props]
  );

  return (
    <label
      className={classNames(
        "flex items-center cursor-pointer",
        props.className
      )}
    >
      <input
        type="checkbox"
        value={props.value}
        onChange={handleChange}
        checked={props.checked}
      />
      <div className={props.children ? "ml-2" : ""}>{props.children}</div>
    </label>
  );
};
