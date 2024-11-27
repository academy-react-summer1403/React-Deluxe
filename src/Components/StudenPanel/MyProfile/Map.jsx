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

const MapWithCoordinates = ({ setCortinate, data }) => {
  const [coords, setCoords] = useState({
    lat: data?.latitude,
    lng: data?.longitude,
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
        <GetCoordinates setCoords={setCoords} setCortinate={setCortinate} />

        <Marker position={coords}>
          <Popup>A popup for the marker.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapWithCoordinates;
