import React, { Component } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Head from "next/head";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { Search, Locate, AlertWindow, Header } from "../components";
import mapStyles from "../mapStyles";

//variable containing all gmaps libraries
const libraries = ["places"];

//varaible containing map styles
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

//variable containing center point of map on first load
const center = {
  lat: 43.4641,
  lng: -80.525383,
};

export default function App() {
  //hook that notifies when script is loaded

  const { isLoaded, loadError } = useLoadScript({
    //passing in specific gogle maps library
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    //passing in the rest of the libraries from external variable so doesn't re-render weirdly
    libraries,
  });

  //error statements for load errors
  if (loadError) {
    return "Error";
  }
  if (!isLoaded) return "Loading map...";

  return (
    <>
      <div>
        <Header />

        <GoogleMap
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={15}
          center={center}
          options={{
            styles: mapStyles,
            disableDefaultUI: true,
            zoomControl: true,
          }}
        ></GoogleMap>
      </div>
    </>
  );
}
