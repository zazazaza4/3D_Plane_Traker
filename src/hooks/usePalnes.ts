import { calcDistance, calcRotation } from "./../utils";
import { useCallback, useState } from "react";
import { FlightData } from "../@types";
import { samplePlanes } from "../samplePlanes";

export function usePlanes(location: any) {
  const [planes, setPlanes] = useState<any[]>();
  const [fetchCount, setFetchCount] = useState<number>(0);

  const fetchPlanes = useCallback(() => {
    if (fetchCount >= 2) return;
    const fetchedPlanes = samplePlanes[fetchCount].map((plane) => {
      const [id, , origin, , , lon, lat] = plane;
      const distance = calcDistance(lat, lon, location.lat, location.lon);
      return {
        id,
        origin,
        lon,
        lat,
        type: "plane",
        rotation: 0,
        distance,
      };
    });

    setPlanes((currPlanes) => {
      const newPlanes = fetchedPlanes.filter(
        (fp) => !currPlanes?.some((cp) => cp.id === fp.id)
      );

      const existingPlanes = fetchedPlanes
        .filter((fp) => currPlanes?.some((cp) => cp.id === fp.id))
        .map((plane) => {
          const { lat, lon } = plane;
          const currPlane = currPlanes?.find((cp) => cp.id === plane.id);
          const {
            lat: prevLat,
            lon: prevLon,
            rotation: prevRotation,
          } = currPlane;
          const rotation =
            lat !== prevLat || lon !== prevLon
              ? calcRotation(lat, lon, prevLat, prevLon)
              : prevRotation;

          return {
            ...plane,
            rotation,
          };
        });
      const newState = [...newPlanes, ...existingPlanes];
      return newState.sort((a, b) => {
        return a.distance - b.distance;
      });
    });

    if (samplePlanes[fetchCount]) {
      setPlanes(samplePlanes[fetchCount]);
    }
    setFetchCount((prev) => prev + 1);
  }, []);

  return planes;
}
