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
  height: "600px",
};

const TestMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA_G_EhWhTWpRYaE6_kR8txUKUkmZkvNiQ", // Use environment variable
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

  // Handle travel mode change
  const handleTravelModeChange = event => {
    setTravelMode(event.target.value);
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

  // Start Journey: Track user movement
  const handleStartJourney = () => {
    if (!startLocation || !endLocation) {
      alert("Please select both a start and end location.");
      return;
    }
    setJourneyStarted(true);
    calculateRoute(startLocation, endLocation, waypoints);
  };

  // End Journey: Reset to current location and clear journey data
  const handleEndJourney = () => {
    setJourneyStarted(false);
    setStartLocation(null);
    setEndLocation(null);
    setWaypoints([]);
    setDirectionsResponse(null);
    setAlternateRoutes([]);
    setEstimatedArrivalTime(null);
    setTravelDetails(null);
    setUserLocation(null); // Set current location back to the starting point
    mapRef.current.panTo({ lat: 23.8103, lng: 90.4125 });
    mapRef.current.setZoom(14); // Reset zoom
  };

  // Clear Route: Reset all route-related states and remove markers

  // Format time display in local time with AM/PM
  const formatTime = time => {
    if (!time) return "";
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return time.toLocaleString([], options);
  };

  // Toggle traffic visibility
  const toggleTraffic = () => {
    setShowTraffic(prevState => !prevState);
  };

  // Handle route selection
  const handleRouteSelect = event => {
    const newRouteIndex = parseInt(event.target.value, 10); // Get the selected index from the dropdown
    if (alternateRoutes[newRouteIndex]) {
      setSelectedRouteIndex(newRouteIndex);
      setSelectedRoute(alternateRoutes[newRouteIndex]);
      setDirectionsResponse({ routes: [alternateRoutes[newRouteIndex]] });
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex mb-10 mt-[200px]">
      {/* Left Panel */}
      <div className="w-1/3 p-8 bg-white rounded-xl shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Route Planner</h1>
        <label htmlFor="start-address" className="block font-semibold mb-2">
          Start Location
        </label>
        <input
          id="start-address"
          type="text"
          placeholder="Enter start address"
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <label htmlFor="end-address" className="block font-semibold mb-2">
          End Location
        </label>
        <input
          id="end-address"
          type="text"
          placeholder="Enter end address"
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <div className="flex justify-between">
          <button
            onClick={handleStartJourney}
            className="bg-green-500 text-white p-2 rounded-md w-full mr-4"
          >
            Start Journey
          </button>
          <button
            onClick={handleEndJourney}
            className="bg-red-500 text-white p-2 rounded-md w-full"
          >
            End Journey
          </button>
        </div>
        <div className="mt-4">
          <label htmlFor="mode-of-transport" className="block font-semibold">
            Travel Mode
          </label>
          <select
            id="mode-of-transport"
            value={travelMode}
            onChange={handleTravelModeChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          >
            <option value="DRIVING">Driving</option>
            <option value="WALKING">Walking</option>
            <option value="BICYCLING">Bicycling</option>
            <option value="TRANSIT">Public Transport</option>
          </select>
        </div>

        <div className="mt-4">
          <label htmlFor="alternate-routes" className="block font-semibold">
            Alternate Routes
          </label>
          <select
            id="alternate-routes"
            value={selectedRouteIndex}
            onChange={handleRouteSelect}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          >
            {alternateRoutes.map((route, index) => (
              <option key={index} value={index}>
                Route {index + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={showTraffic}
              onChange={toggleTraffic}
              className="h-4 w-4"
            />
            <span>Show Traffic</span>
          </label>
        </div>

        <div className="mt-4">
          {travelDetails && (
            <div>
              <div className="font-semibold">Distance:</div>
              <div>{travelDetails.distance}</div>
              <div className="font-semibold">Duration:</div>
              <div>{travelDetails.duration}</div>
              <div className="font-semibold">Estimated Arrival:</div>
              <div>{formatTime(estimatedArrivalTime)}</div>
            </div>
          )}
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-2/3 p-4">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={userLocation || { lat: 23.8103, lng: 90.4125 }} // Default to Dhaka if no user location
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
    </div>
  );
};

export default TestMap;
