import React, { useState, useEffect, useRef } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  TrafficLayer,
  useLoadScript,
} from "@react-google-maps/api";
import { useGetTouristGuideHeroSectionDataQuery } from "@/Redux/features/api/apiSlice";
import { InfinitySpin } from "react-loader-spinner";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

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
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA_G_EhWhTWpRYaE6_kR8txUKUkmZkvNiQ",
    libraries: ["places", "directions"],
  });

  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [showTraffic, setShowTraffic] = useState(true);
  const mapRef = useRef(null);

  const { id } = useParams();

  const { data, error, isLoading } = useGetTouristGuideHeroSectionDataQuery(
    id,
    {
      refetchOnFocus: true,
      refetchOnReconnect: true,
    }
  );

  useEffect(() => {
    if (isLoaded && mapRef.current) {
      const bounds = new window.google.maps.LatLngBounds();
      waypoints.forEach(waypoint => bounds.extend(waypoint));
      mapRef.current.fitBounds(bounds);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (error) {
      const errorMessage =
        error.data?.message || error.error || error.status || error.message;
      if (errorMessage) toast.error(errorMessage);
    }
  }, [error]);

  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 bg-white">
        <InfinitySpin
          visible={true}
          width="200"
          color="#004265"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    );
  }

  // Extract coordinates from map link
  const extractLatLng = url => {
    if (typeof url !== "string") return null;
    const match = url.match(/@(-?\d+\.\d+),\s*(-?\d+\.\d+)/);
    if (match) {
      const [, lat, lng] = match;
      return { latitude: parseFloat(lat), longitude: parseFloat(lng) };
    }
    return null;
  };
  

  const coordinates = extractLatLng(data?.data?.map_url);


  if (!coordinates) {
    return (
      <div className="text-center text-red-600 mt-10">
        Invalid or missing map link. Cannot load map.
      </div>
    );
  }

  return (
    <div className="w-full mt-10">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: coordinates.latitude, lng: coordinates.longitude }}
        zoom={4}
        onLoad={map => (mapRef.current = map)}
      >
        {/* {waypoints.map((waypoint, index) => (
          <Marker key={index} position={waypoint} />
        ))} */}

        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}

        {showTraffic && <TrafficLayer />}
      </GoogleMap>
    </div>
  );
};

export default CanadaMap;
