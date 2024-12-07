import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder";

const GetCoordinates = ({ setCoords, setCortinate }) => {
  const map = useMap();

  useEffect(() => {
    const geocoder = L.Control.geocoder({
      defaultMarkGeocode: true,
    }).addTo(map);

    return () => {
      map.removeControl(geocoder);
    };
  }, [map]);

  useMapEvent("click", (e) => {
    const { lat, lng } = e.latlng;
    setCoords({ lat, lng });
    setCortinate({ lat, lng });
  });

  return null;
};

const MapWithCoordinates = ({ setCortinate, data }) => {
  const [coords, setCoords] = useState({
    lat: data?.latitude || 51.505,
    lng: data?.longitude || -0.09,
  });

  return (
    <div>
      <MapContainer
        center={coords}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Handle coordinates update and search control */}
        <GetCoordinates setCoords={setCoords} setCortinate={setCortinate} />
        <Marker position={coords}>
          <Popup>اینجا خوبه؟</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapWithCoordinates;
