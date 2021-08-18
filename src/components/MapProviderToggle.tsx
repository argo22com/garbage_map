import { MapProvider } from "consts";
import { useCallback, useMemo } from "react";

type Props = {
  providers: MapProvider[];
  activeProvider: MapProvider;
  onChange: (provider: MapProvider) => void;
};

export const MapProviderToggle = (_: Props): JSX.Element => {
  // TODO: compare by provider ID after ID implementation
  const indexOfActiveProvider = useMemo<number>(
    () => _.providers.findIndex((item) => item.url === _.activeProvider.url),
    [_.providers, _.activeProvider]
  );

  const isActiveProviderLast = useMemo(
    () => indexOfActiveProvider + 1 >= _.providers.length,
    [indexOfActiveProvider, _.providers]
  );

  const indexOfNextProvider = useMemo<number>(
    () => (isActiveProviderLast ? 0 : indexOfActiveProvider + 1),
    [indexOfActiveProvider, isActiveProviderLast]
  );

  const nextProvider = useMemo<MapProvider>(
    () => _.providers[indexOfNextProvider],
    [_.providers, indexOfNextProvider]
  );

  const handleClick = useCallback(
    () => _.onChange(nextProvider),
    [nextProvider, _]
  );

  return (
    <div className={"rounded cursor-pointer overflow-hidden"}>
      <div
        className={"bg-cover"}
        style={{
          width: 60,
          height: 60,
          backgroundImage: `url('${nextProvider.thumbnail}')`,
        }}
        onClick={handleClick}
        title="Změnit zobrazení mapy"
      />
    </div>
  );
};
