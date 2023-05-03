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
      return {
        id,
        origin,
        lon,
        lat,
        type: "plane",
        rotation: 0,
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
          const rotation = lat !== prevLat || lon !== prevLon;
        });
      return newPlanes;
    });

    if (samplePlanes[fetchCount]) {
      setPlanes(samplePlanes[fetchCount]);
    }
    setFetchCount((prev) => prev + 1);
  }, []);

  return planes;
}
