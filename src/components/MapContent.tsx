"use client";
import dynamic from "next/dynamic";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapContent = () => {
  const Map = React.useMemo(
    () =>
      dynamic(() => import("./Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return <Map />;
};

export default MapContent;
