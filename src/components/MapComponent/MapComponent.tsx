import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet';

import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapComponent = () => {
    return (
        <MapContainer
            center={[52.4064, 16.9252]}
            zoom={3}
            scrollWheelZoom={false}
            className="h-[400px] w-full border box-border rounded-xl">
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/*{airports.map((airport) => (*/}
            {/*    <Marker position={[airport.coordinates.lat,airport.coordinates.lng]}>*/}
            {/*        <Popup>*/}
            {/*            {airport.code}*/}
            {/*            <br/>*/}
            {/*            {airport.name}*/}
            {/*            <br/>*/}
            {/*            <div className='m-auto w-10 h-10 rounded-full border flex flex-row items-center font-bold text-xl justify-center'>*/}
            {/*                {getNumberOfPlanesByAirportId(airport.id)}*/}
            {/*            </div>*/}
            {/*        </Popup>*/}
            {/*    </Marker>*/}
            {/*))}*/}
        </MapContainer>
    );
};

export default MapComponent;
