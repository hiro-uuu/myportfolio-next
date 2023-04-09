"use client";
import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  GeoJSON,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Typography } from "@mui/material";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import prefGeoJson from "../assets/pref.json";
import { Layer, LeafletMouseEvent } from "leaflet";
import { Feature } from "geojson";

const Map: React.FC = () => {
  // geojsonを取得
  const prefData: any = prefGeoJson;

  const defaultStyle = {
    weight: 2,
    opacity: 1,
    color: "green",
    fillOpacity: 0.1,
    fillColor: "transparent",
  };
  const goneStyle = {
    weight: 2,
    opacity: 1,
    color: "yellow",
    fillOpacity: 0.1,
    fillColor: "transparent",
  };

  const onEachFeature = (feature: Feature, layer: Layer) => {
    layer.on({
      mouseover: onMouseOver,
      mouseout: onMouseOut,
      // click: zoomToFeature,
    });
  };

  const onMouseOver = (event: LeafletMouseEvent) => {
    // console.log(event);
    // const targetFeature = event.target.feature;

    const layer = event.target;
    layer.setStyle({
      fillOpacity: 0.5,
      fillColor: "red",
    });
    // layer.unbindTooltip()
    // layer.bindTooltip(feature.properties.ZIP, {permanent: true, opacity: 1});

    const name = layer.feature.properties.name;
    const desc = layer.feature.properties.desc;
    const tooltipText = name + " : " + desc;

    layer.unbindTooltip();
    if (desc !== undefined) {
      layer.bindTooltip(tooltipText, {
        permanent: true,
        opacity: 1,
      });
    }
  };

  const onMouseOut = (event: LeafletMouseEvent) => {
    const layer = event.target;

    layer.feature.properties.gone
      ? layer.setStyle(goneStyle)
      : layer.setStyle(defaultStyle);

    layer.unbindTooltip();
    // layer.bindTooltip(layer.feature.properties.name, {
    //   permanent: true,
    //   opacity: 1,
    // });
  };

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
          zoom={4}
          scrollWheelZoom={false}
          style={{
            height: 350,
            width: "80%",
            padding: 5,
          }}
        >
          <ReactLeafletGoogleLayer
            apiKey={process.env.GOOGLE_API}
            type={"satellite"}
          />
          <GeoJSON
            attribution="&copy; credits due..."
            data={prefData}
            onEachFeature={onEachFeature}
            // style={pathOptions}
            style={(feature) => {
              if (feature === undefined) {
                return defaultStyle;
              }
              if (feature.properties.gone === true) {
                return goneStyle;
              } else {
                return defaultStyle;
              }
            }}
          />
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
