import classNames from "classnames";
import { ContainerType, Filters as TFilters } from "datasource";
import React, { useCallback, useEffect, useMemo, useState } from "react";

type Props = {
  onChange: (filters: TFilters) => any;
};

/* TODO: change to keys and solve texts */
const filtersContainerType = Object.values(ContainerType);

export const Filters: React.FC<Props> = ({ onChange }) => {
  const [activeContainerTypes, setActiveContainerTypes] = useState<
    ContainerType[]
  >([]);

  const activeFilters = useMemo<TFilters>(
    () => ({
      containerTypes: activeContainerTypes
    }),
    [activeContainerTypes]
  );

  const handleChangeContainerTypesFilter = useCallback(
    (value: ContainerType) => {
      const updatedActiveContainerTypesFilter = activeContainerTypes.includes(
        value
      )
        ? activeContainerTypes.filter(type => type !== value)
        : [...activeContainerTypes, value];
      setActiveContainerTypes(updatedActiveContainerTypesFilter);
    },
    [activeContainerTypes]
  );

  useEffect(() => {
    onChange(activeFilters);
  }, [onChange, activeFilters]);

  return (
    <div className="flex">
      {filtersContainerType.map((filter, index) => (
        <FilterItem<ContainerType>
          key={`filter-containerType-${index}`}
          className={index > 0 ? "ml-5" : ""}
          value={filter}
          onClick={handleChangeContainerTypesFilter}
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
  onClick: (value: T) => any;
  children?: any;
};

const FilterItem = <T extends string>(props: FilterProp<T>) =>
  useMemo(
    () => (
      <label
        className={classNames(
          "flex items-center cursor-pointer",
          props.className
        )}
      >
        <input
          type="checkbox"
          onClick={() => props.onClick(props.value)}
          value={props.value}
        />
        <div className={props.children ? "ml-2" : ""}>{props.children}</div>
      </label>
    ),
    [props]
  );
