import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "450px",
};

const center = {
  lat: 6.1319, // Example: Lomé, Togo
  lng: 1.2228,
};

function TheMap() {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default TheMap;
