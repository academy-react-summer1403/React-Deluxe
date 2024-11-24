import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const GetCoordinates = ({ setCoords, setCortinate }) => {
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      setCoords({ lat, lng });
      setCortinate({ lat, lng });
    },
  });

  return null;
};

const MapWithCoordinates = ({ setCortinate }) => {
  const [coords, setCoords] = useState({ lat: null, lng: null });

  return (
    <div>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <GetCoordinates setCoords={setCoords} setCortinate={setCortinate} />

        <Marker position={coords}>
          <Popup>A popup for the marker.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapWithCoordinates;
