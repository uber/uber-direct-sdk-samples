import { useEffect } from 'react';

const useMapBounds = (map, pickup, dropoff) => {
  useEffect(() => {
    if (!map) return;

    const bounds = new window.google.maps.LatLngBounds();

    if (pickup && pickup.latLng) {
      bounds.extend(new google.maps.LatLng(pickup.latLng));
    }
    if (dropoff && dropoff.latLng) {
      bounds.extend(new google.maps.LatLng(dropoff.latLng));
    }

    if (pickup || dropoff) {
      map.fitBounds(bounds, {
        padding: {
          top: 50,
          right: 25,
          bottom: 50,
          left: 25,
        },
      });
    } else {
      map.setCenter(new google.maps.LatLng({ lat: 0, lng: -100 }));
      map.setZoom(1);
    }

    if ((pickup && !dropoff) || (!pickup && dropoff)) {
      const listener = google.maps.event.addListener(map, 'idle', () => {
        if (map.getZoom() > 15) map.setZoom(15);
        google.maps.event.removeListener(listener);
      });
    }
  }, [map, pickup, dropoff]);
};

export default useMapBounds;
