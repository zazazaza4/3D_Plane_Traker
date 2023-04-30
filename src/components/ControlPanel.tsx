import { Dispatch, FC, SetStateAction } from "react";
import { IMarker } from "../@types";

interface ControlPanelProps {
  markers: IMarker[];
  activeMarkerId: string;
  setActiveMarkerId: Dispatch<SetStateAction<string>>;
}

export const ControlPanel: FC<ControlPanelProps> = ({
  markers,
  setActiveMarkerId,
  activeMarkerId,
}) => {
  const activeMarkerIndex: number = markers.findIndex(
    (marker) => marker.id === activeMarkerId
  );
  const activeMarker: IMarker | undefined = markers[activeMarkerIndex];

  if (!activeMarker) return null;

  return (
    <>
      <div>
        <span>{`Marker: ${activeMarkerIndex + 1}/${markers.length}`}</span>
        <span>|</span>
        <span>Type: {activeMarker.type === "plane" ? "🛩" : "🕺🏼"}</span>
        <span>|</span>
        <span>Lat: {activeMarker.lat.toFixed(2)}</span>
        <span>|</span>
        <span>Log: {activeMarker.log.toFixed(2)}</span>
      </div>
      <div>
        <button
          disabled={markers.length <= 1 || activeMarkerIndex === 0}
          onClick={() => {
            setActiveMarkerId(markers[activeMarkerIndex - 1].id);
          }}
        >
          Prev
        </button>
        <button
          disabled={
            markers.length <= 1 || activeMarkerIndex === markers.length - 1
          }
          onClick={() => {
            setActiveMarkerId(markers[activeMarkerIndex + 1].id);
          }}
        >
          Next
        </button>
        <p className="info">Click earth to toggle zoom</p>
      </div>
    </>
  );
};
