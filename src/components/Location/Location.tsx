'use client'

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { Map } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerHouse from "./MarkerHouse/MarkerHouse";

export const Location = () => {
  const coordinatePoint = { lat: 23.6345, lng: -102.5528 };

  // Key estable calculada una sola vez
  const mapKey = useMemo(
    () => `${coordinatePoint.lat}-${coordinatePoint.lng}`,
    [coordinatePoint.lat, coordinatePoint.lng]
  );

  const centerMarkert = (position: { lat: number; lng: number }, fnMap: Map) => {
    fnMap.flyTo({ lat: position.lat, lng: position.lng });
  };

  const pathname = usePathname();

  return (
    <div id="location" key={pathname}>
        <MapContainer
            key={mapKey}
            center={coordinatePoint}
            zoom={6}
            scrollWheelZoom={false}
            className="h-175"
        >
        
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
        />
        
        <MarkerHouse selectMarker={centerMarkert} />
        
        </MapContainer>
    </div>
  );
};

export default Location;
