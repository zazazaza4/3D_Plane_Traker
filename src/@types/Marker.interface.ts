export interface IMarker {
  id: string;
  lat: number;
  log: number;
  type?: "plane" | "human";
}
