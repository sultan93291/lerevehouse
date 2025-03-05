import React, { useState, useEffect, useRef } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  TrafficLayer,
  useLoadScript,
} from "@react-google-maps/api";

// Map container style
const containerStyle = {
  width: "100%",
  height: "600px",
};

// Waypoints for markers
const waypoints = [
  { lat: 45.4215, lng: -75.6992 }, // Ottawa
  { lat: 49.2827, lng: -123.1207 }, // Vancouver
  { lat: 43.6532, lng: -79.3832 }, // Toronto
  { lat: 52.1326, lng: -106.67 }, // Saskatoon
];

const CanadaMap = () => {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [showTraffic, setShowTraffic] = useState(true);
  const mapRef = useRef(null);

  // Load Google Maps API
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA_G_EhWhTWpRYaE6_kR8txUKUkmZkvNiQ",
    libraries: ["places", "directions"],
  });

  useEffect(() => {
    if (isLoaded && mapRef.current) {
      // Fit the map to show all waypoints
      const bounds = new window.google.maps.LatLngBounds();
      waypoints.forEach(waypoint => bounds.extend(waypoint));
      mapRef.current.fitBounds(bounds);
    }
  }, [isLoaded]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="w-full mt-10">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: 56.1304, lng: -106.3468 }} 
        zoom={4} // Adjusted to show the whole country
        onLoad={map => (mapRef.current = map)}
      >
        {/* Place markers for each waypoint */}
        {waypoints.map((waypoint, index) => (
          <Marker key={index} position={waypoint} />
        ))}

        {/* Show directions if available */}
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}

        {/* Show traffic layer if enabled */}
        {showTraffic && <TrafficLayer />}
      </GoogleMap>
    </div>
  );
};

export default CanadaMap;
