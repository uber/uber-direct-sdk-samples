import React, { useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

import { useMapBounds, useMapOptions, useMapDirections } from 'src/hooks';
import Polyline from 'src/components/polyline';

const Map = ({ pickup, dropoff }) => {
  const [map, setMap] = useState(null);
  const onLoad = React.useCallback((map) => {
    setMap(map);
  }, []);

  useMapBounds(map, pickup, dropoff);

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  const { mapContainerStyle, options } = useMapOptions();
  const path = useMapDirections(pickup, dropoff);

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={options}
    >
      <Marker position={pickup?.latLng} icon="/pickup-marker.svg" />
      <Marker position={dropoff?.latLng} icon="/dropoff-marker.svg" />
      <Polyline path={path} />
    </GoogleMap>
  );
};

export default Map;
