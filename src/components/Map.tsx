"use client";
import dynamic from "next/dynamic";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Typography } from "@mui/material";

const Map: React.FC = () => {
  return (
    <>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Typography variant="h6">
          地図を埋め込んだWebアプリケーションをよく作成していました。
        </Typography>
        <Typography>
          Leafletを使用して行ったことのある都道府県を表示してみました。
        </Typography>
      </div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <MapContainer
          center={[35, 135]}
          zoom={5}
          scrollWheelZoom={false}
          style={{
            height: 300,
            width: "80%",
            padding: 5,
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
