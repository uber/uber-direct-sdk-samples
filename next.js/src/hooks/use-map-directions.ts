import { useState, useEffect } from 'react';

// Utility function to decode polyline
const decodePolyline = (encoded) => {
  var points = [];
  var index = 0,
    len = encoded.length;
  var lat = 0,
    lng = 0;
  while (index < len) {
    var b,
      shift = 0,
      result = 0;
    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    var dlat = result & 1 ? ~(result >> 1) : result >> 1;
    lat += dlat;

    shift = 0;
    result = 0;
    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    var dlng = result & 1 ? ~(result >> 1) : result >> 1;
    lng += dlng;

    points.push({ lat: lat / 1e5, lng: lng / 1e5 });
  }
  return points;
};

const useMapDirections = (pickup, dropoff) => {
  const [path, setPath] = useState([]);

  useEffect(() => {
    if (pickup && dropoff) {
      const fetchDirections = async () => {
        try {
          const directions = await fetch('/api/google/directions', {
            method: 'POST',
            body: JSON.stringify({
              origin: pickup.address,
              destination: dropoff.address,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const response = await directions.json();
          const points = decodePolyline(
            response.data.routes[0].overview_polyline.points
          );
          setPath(points);
        } catch (error) {
          console.error('Failed to fetch directions:', error);
          setPath([]); // Handle errors or invalid data gracefully
        }
      };

      fetchDirections();
    }
  }, [pickup, dropoff]);

  return path;
};

export default useMapDirections;
