import { useState, useEffect, memo } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import "./Locations.css";

const defaultCenter = { lat: 45.7489, lng: 21.2087 }; // Timișoara, Romania

const locations = [
  { lat: 45.7640, lng: 21.2250 },
  { lat: 45.7771, lng: 21.2336},
  { lat: 45.7774, lng: 21.2111 },
  { lat: 45.7620, lng: 21.2460 },
  { lat: 45.7633, lng: 21.2114 },
  { lat: 45.7502, lng: 21.2315 },
  { lat: 45.7478, lng: 21.2093 },
  { lat: 45.7548, lng: 21.2457 },
  { lat: 45.7366, lng: 21.2376 },
  { lat: 45.7552, lng: 21.2237 },
  { lat: 45.7441, lng: 21.2258 },
  { lat: 45.7325, lng: 21.2112 },
];

const mapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  fullscreenControl: true,
  streetViewControl: false,
  mapId: "2ae4b60718c205df", 
};


const Locations = memo(() => {
  const [userLocation, setUserLocation] = useState(null);
  const [map, setMap] = useState(null);
  const libraries = ["marker"];


  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries, 
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
      },
      (error) => console.warn("Geolocation permission denied", error)
    );
  }, []);

  const onMapLoad = (mapInstance) => {
    setMap(mapInstance);
  
    if (!window.google || !window.google.maps) {
      console.error("Google Maps API not fully loaded yet.");
      return;
    }
  
    if (!window.google.maps.marker?.AdvancedMarkerElement) {
      console.error("AdvancedMarkerElement is not available. Ensure 'marker' library is loaded.");
      return;
    }

    const { AdvancedMarkerElement } = window.google.maps.marker;
  
    const markers = locations.map(
      (loc) => new AdvancedMarkerElement({ position: loc, map: mapInstance })
    );


    new MarkerClusterer({ markers, map: mapInstance });
  };

  if (loadError) return <p className="error-message">Eroare incarcare Google Maps</p>;
  if (!isLoaded) return <p className="loading-message">Incarcare harta...</p>;

  return (
    <div className="locations">
      <div className="map-container">
      <GoogleMap
        onLoad={onMapLoad}
        mapContainerClassName="map-box"
        center={defaultCenter}
        zoom={14}
        options={mapOptions}
      />
    </div>
    </div>
  );
});

export default Locations;
