import image_provider_default from "assets/images/map_provider-default.jpg";
import image_provider_satellite from "assets/images/map_provider-satellite.jpg";
import { MapProvider } from "consts";
import React, { useCallback, useEffect, useMemo, useState } from "react";

type Props = {
  providerDefault: MapProvider;
  providerSatellite: MapProvider;
  onChange: (provider: MapProvider) => any;
};

export const MapProviderToggle: React.FC<Props> = props => {
  const [isActiveDefault, setIsActiveDefault] = useState<boolean>(true);

  const visibleThumbnail: string = useMemo(
    () => (isActiveDefault ? image_provider_satellite : image_provider_default),
    [isActiveDefault]
  );

  useEffect(
    () =>
      props.onChange(
        isActiveDefault ? props.providerDefault : props.providerSatellite
      ),
    [isActiveDefault, props]
  );

  const handleClick = useCallback(() => setIsActiveDefault(!isActiveDefault), [
    isActiveDefault
  ]);

  return (
    <div className={"rounded cursor-pointer overflow-hidden"}>
      <div
        className={"bg-cover"}
        style={{
          width: 60,
          height: 60,
          backgroundImage: `url('${visibleThumbnail}')`
        }}
        onClick={handleClick}
        title="Změnit zobrazení mapy"
      />
    </div>
  );
};
