import { useEffect, useState } from "react";
import { ICords } from "../@types";

export function useGeolocation(): ICords | null {
  const [location, setLocation] = useState<null | ICords>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        setLocation({
          lat: latitude,
          lon: longitude,
        });
      });
    } else {
      alert("This site need geolocation to fetch planes around you");
    }
  }, []);

  return location;
}
