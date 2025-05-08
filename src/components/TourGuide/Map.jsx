import { useEffect, useRef, useState } from "react";
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
  height: "450px",
};

const Map = ({ data }) => {
  const extractLatLng = url => {
    const match = url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
    if (match) {
      const [, lat, lng] = match;
      return { latitude: parseFloat(lat), longitude: parseFloat(lng) };
    }
    return null;
  };

    const GoogleApiKey = import.meta.env.VITE_GOOGLE_API_KEY;
    
    console.log(GoogleApiKey);
    

  const coordinates = extractLatLng(data);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBP_63liD8mOmG2MqruuRgwryln5d9aSNY",
    libraries: [
      "places",
      "directions",
      "geocoding",
      "streetview",
      "drawing",
      "geometry",
      "journeySharing",
      "maps",
      "marker",
      "core",
      "places",
      "routes",
      "visualization",
    ],
  });

  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [directionsService, setDirectionsService] = useState(null);
  const [travelMode, setTravelMode] = useState("DRIVING");
  const [userLocation, setUserLocation] = useState(null);
  const [journeyStarted, setJourneyStarted] = useState(false);
  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);
  const [waypoints, setWaypoints] = useState([]);
  const [alternateRoutes, setAlternateRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [estimatedArrivalTime, setEstimatedArrivalTime] = useState(null);
  const [travelDetails, setTravelDetails] = useState(null);
  const [showTraffic, setShowTraffic] = useState(false);
  const [markers, setMarkers] = useState([]); // State to store markers
  const [selectedRouteIndex, setSelectedRouteIndex] = useState(null);

  const mapRef = useRef(null);
  const startAutocompleteRef = useRef(null);
  const endAutocompleteRef = useRef(null);

  // Initialize directions service
  useEffect(() => {
    if (isLoaded && !directionsService) {
      setDirectionsService(new window.google.maps.DirectionsService());
    }
  }, [isLoaded, directionsService]);

  // Get real-time location
  useEffect(() => {
    if (navigator.geolocation) {
      const geoWatch = navigator.geolocation.watchPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });

          if (journeyStarted && !startLocation) {
            setStartLocation({ lat: latitude, lng: longitude });
            calculateRoute({ lat: latitude, lng: longitude }, endLocation);
          }
        },
        error => console.error("Error getting location:", error),
        { enableHighAccuracy: true }
      );

      return () => navigator.geolocation.clearWatch(geoWatch);
    }
  }, [journeyStarted, endLocation]);

  // Initialize autocomplete for start and end locations
  useEffect(() => {
    if (isLoaded) {
      startAutocompleteRef.current = new window.google.maps.places.Autocomplete(
        document.getElementById("start-address"),
        { types: ["geocode"] }
      );
      endAutocompleteRef.current = new window.google.maps.places.Autocomplete(
        document.getElementById("end-address"),
        { types: ["geocode"] }
      );

      startAutocompleteRef.current.addListener("place_changed", () => {
        const place = startAutocompleteRef.current.getPlace();
        if (place.geometry) {
          setStartLocation({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          });
        }
      });

      endAutocompleteRef.current.addListener("place_changed", () => {
        const place = endAutocompleteRef.current.getPlace();
        if (place.geometry) {
          setEndLocation({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          });
        }
      });
    }
  }, [isLoaded]);

  // Recalculate route when travel mode or waypoints change
  useEffect(() => {
    if (startLocation && endLocation) {
      calculateRoute(startLocation, endLocation, waypoints);
    }
  }, [travelMode, waypoints]);

  // Function to calculate and display route
  const calculateRoute = (start, end, waypoints = []) => {
    if (!directionsService || !start || !end) return;

    directionsService.route(
      {
        origin: start,
        destination: end,
        waypoints: waypoints.map(waypoint => ({
          location: waypoint,
          stopover: true,
        })),
        travelMode: window.google.maps.TravelMode[travelMode],
        provideRouteAlternatives: true,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirectionsResponse(result);
          setAlternateRoutes(result.routes);
          setSelectedRoute(result.routes[0]);

          const leg = result.routes[0].legs[0];
          const duration = Math.round(leg.duration.value / 60); // duration in minutes
          const arrivalTime = new Date(Date.now() + duration * 60000);

          setEstimatedArrivalTime(arrivalTime);
          setTravelDetails({
            distance: leg.distance.text,
            duration: convertTime(duration),
          });
        } else {
          console.error("Directions request failed:", status);
        }
      }
    );
  };

  // Convert time from minutes to hours and days if necessary
  const convertTime = minutes => {
    if (minutes < 60) return `${minutes} mins`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hrs`;
    const days = Math.floor(hours / 24);
    return `${days} days`;
  };

  // Handle map click to set locations or waypoints
  const handleMapClick = event => {
    const clickedLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };

    // Set start location on first click (if not already set)
    if (!startLocation) {
      setStartLocation(clickedLocation);
      setMarkers(prevMarkers => [
        ...prevMarkers,
        { location: clickedLocation, type: "start" },
      ]);
    }
    // Set end location on second click (if start location is set)
    else if (!endLocation) {
      setEndLocation(clickedLocation);
      setMarkers(prevMarkers => [
        ...prevMarkers,
        { location: clickedLocation, type: "end" },
      ]);
    }
    // Add waypoints for additional clicks
    else {
      setWaypoints(prevWaypoints => [...prevWaypoints, clickedLocation]);
      setMarkers(prevMarkers => [
        ...prevMarkers,
        { location: clickedLocation, type: "waypoint" },
      ]);
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={
          userLocation || {
            lat: coordinates?.latitude,
            lng: coordinates?.longitude,
          }
        } // Default to Dhaka if no user location
        zoom={14}
        onClick={handleMapClick}
        ref={mapRef}
      >
        {userLocation && <Marker position={userLocation} />}
        {waypoints.map((waypoint, index) => (
          <Marker key={index} position={waypoint} />
        ))}
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
        {showTraffic && <TrafficLayer />}
      </GoogleMap>
    </div>
  );
};

export default Map;
