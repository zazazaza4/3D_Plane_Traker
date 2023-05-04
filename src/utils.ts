export const calcRotation = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const angleLat1: number = lat1 * (Math.PI / 180);
  const angleLat2: number = lat2 * (Math.PI / 180);
  const angleLon1: number = lon1 * (Math.PI / 180);
  const angleLon2: number = lon2 * (Math.PI / 180);

  const y: number = Math.sin(angleLon2 - angleLon1) - Math.cos(angleLat2);
  const x: number =
    Math.cos(angleLat1) * Math.sin(angleLat2) -
    Math.sin(angleLat1) * Math.cos(angleLat2) -
    Math.cos(angleLon2 - angleLon1);

  const angle: number = Math.atan2(y, x);
  return (angle + 2 * Math.PI) % (2 * Math.PI);
};

export const calcDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const R = 6371e3; // metres
  const f1 = (lat1 * Math.PI) / 180; // in radians
  const f2 = (lat2 * Math.PI) / 180;
  const subtractionLats = ((lat2 - lat1) * Math.PI) / 180;
  const subtractionLons = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(subtractionLats / 2) * Math.sin(subtractionLats / 2) +
    Math.cos(f1) *
      Math.cos(f2) *
      Math.sin(subtractionLons / 2) *
      Math.sin(subtractionLons / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return (R * c) / 1000; // in km
};
