import { MapContainer, TileLayer, Polyline, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import address1 from "../SidebarIcons/shipment/arrow1.png";
import address2 from "../SidebarIcons/shipment/arrow2.png";
import address3 from "../SidebarIcons/shipment/arrow3.png";

const customIcon1 = new L.Icon({
  iconUrl: address1,
  shadowUrl: markerShadow,
  iconSize: [21, 21],
  // iconAnchor: [12, 41],
  // popupAnchor: [1, -34],
});

const customIcon2 = new L.Icon({
  iconUrl: address2,
  shadowUrl: markerShadow,
  iconSize: [21, 21],
  // iconAnchor: [12, 41],
  // popupAnchor: [1, -34],
});
const customIcon3 = new L.Icon({
  iconUrl: address3,
  shadowUrl: markerShadow,
  iconSize: [21, 21],
  // iconAnchor: [12, 41],
  // popupAnchor: [1, -34],
});

const MapComponent = () => {
  const positions1 = [
    [47.5, -71.1],
    [47.8, -68.5],
    [46.8, -65.5],
  ];

  const positions2 = [
    [46.8, -65.5],
    [47.2, -62.0],
    [48.5, -59.0],
    [49.2, -57.5],
  ];

  return (
    <MapContainer
      center={[47, -65]}
      zoom={5}
      style={{ height: "175px", width: "449px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Green Route */}
      <Polyline positions={positions1} color="#38C29B" weight={4} />

      {/* Blue Route */}
      <Polyline positions={positions2} color="#4F45E4" weight={4} />

      {/* Markers */}
      <Marker position={positions1[0]} icon={customIcon2} />
      <Marker position={positions2[positions2.length - 1]} icon={customIcon3} />
      <Marker position={positions2[positions2.length - 2]} icon={customIcon3} />
      <Marker position={positions2[positions2.length - 4]} icon={customIcon1} />
    </MapContainer>
  );
};

export default MapComponent;
