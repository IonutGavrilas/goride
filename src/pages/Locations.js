import { useState, useEffect, memo } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import "./Locations.css"; // Import CSS

const defaultCenter = { lat: 45.7489, lng: 21.2087 }; // Timișoara, Romania

const locations = [
  { lat: 45.7495, lng: 21.2101 },
  { lat: 45.7502, lng: 21.2115 },
  { lat: 45.7478, lng: 21.2093 },
];

const Locations = memo(() => {
  const [userLocation, setUserLocation] = useState(null);
  const [map, setMap] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude }),
      () => console.warn("Geolocation permission denied")
    );
  }, []);

  const onMapLoad = (mapInstance) => {
    setMap(mapInstance);
  
    if (!window.google || !window.google.maps || !window.google.maps.marker) {
      console.error("Google Maps API not fully loaded yet.");
      return;
    }
  
    const { AdvancedMarkerElement } = window.google.maps.marker;
    const { MarkerClusterer } = window.google.maps;
  
    const markers = locations.map(
      (loc) => new AdvancedMarkerElement({ position: loc, map: mapInstance })
    );
  
    new MarkerClusterer({ markers, map: mapInstance });
  };
  

  if (loadError) return <p className="error-message">Error loading Google Maps</p>;
  if (!isLoaded) return <p className="loading-message">Loading map...</p>;

  return (
    <div className="map-container">
      <GoogleMap
        onLoad={onMapLoad}
        mapContainerClassName="map-box"
        center={userLocation || defaultCenter}
        zoom={12}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
        }}
      />
    </div>
  );
});

export default Locations;
