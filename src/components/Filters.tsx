import { CheckBox } from "components/CheckBox";
import { ContainerType, Filters as TFilters } from "datasource";
import React, { useCallback } from "react";
import { containerTypeKeys, containerTypes } from "utils/container";

type Props = {
  activeFilters: TFilters;
  onChange: (filters: TFilters) => void;
};

export const Filters: React.FC<Props> = ({ activeFilters, onChange }) => {
  const handleChange = useCallback(
    (newFilters: Partial<TFilters>) =>
      onChange({ ...activeFilters, ...newFilters }),
    [onChange, activeFilters]
  );

  const handleChangeContainerType = useCallback(
    (newFilters: ContainerType[]) =>
      handleChange({ containerTypes: newFilters }),
    [handleChange]
  );

  return (
    <div className="flex flex-col flex-wrap p-2">
      <FilterGroupContainerTypes
        activeFilters={activeFilters.containerTypes || []}
        onChange={handleChangeContainerType}
      />
    </div>
  );
};

type FilterGroupProps<T> = {
  activeFilters: T[];
  onChange: (newActiveFilters: T[]) => void;
};

const FilterGroupContainerTypes: React.FC<FilterGroupProps<
  ContainerType
>> = _ => {
  const handleChange = useCallback(
    (isActive: boolean, newFilter: ContainerType) => {
      const newActiveFilters = isActive
        ? [..._.activeFilters, newFilter]
        : _.activeFilters.filter(activeFilter => activeFilter !== newFilter);

      _.onChange(newActiveFilters);
    },
    [_]
  );

  return (
    <div className="flex flex-wrap -m-2">
      {containerTypeKeys.map((filter, index) => (
        <div
          key={`filter-containerType-${index}`}
          className="w-1/2 md:w-auto p-2"
        >
          <CheckBox
            value={filter}
            checked={_.activeFilters.includes(filter)}
            onChange={handleChange}
            label={containerTypes[filter].name}
          />
        </div>
      ))}
    </div>
  );
};
