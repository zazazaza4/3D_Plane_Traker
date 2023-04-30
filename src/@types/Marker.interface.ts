export interface IMarker {
  id: string;
  lat: number;
  lon: number;
  type?: "plane" | "human";
}
