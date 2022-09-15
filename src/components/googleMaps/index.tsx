import React, { FunctionComponent } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import process from "process";

interface MapsProps {}

function Maps() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });
  
  if (isLoaded) return  <div>Loading...</div>

  return <div>Maps</div>;
}

export default Maps;
