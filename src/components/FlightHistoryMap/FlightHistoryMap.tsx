import { MapContainer, TileLayer, Polyline, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useMemo } from 'react';
import {FlightsHistory} from "../../interfaces/flightsHistory.interface";
import {AirportInterface} from "../../interfaces/airport.interface";

interface MapProps {
    flights: FlightsHistory[];
    airports: AirportInterface[];
}

const createParabola = (
    start: [number, number],
    end: [number, number],
    height: number = 10,
    segments: number = 50
): [number, number][] => {
    const points: [number, number][] = [];

    for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const lat = start[0] + (end[0] - start[0]) * t;
        const lng = start[1] + (end[1] - start[1]) * t;
        const offset = Math.sin(Math.PI * t) * height;

        const bearing = Math.atan2(end[1] - start[1], end[0] - start[0]);
        const offsetLat = offset * Math.cos(bearing + Math.PI / 2) / 111;
        const offsetLng = offset * Math.sin(bearing + Math.PI / 2) / (111 * Math.cos(lat * (Math.PI / 180)));

        points.push([lat + offsetLat, lng + offsetLng]);
    }

    return points;
};

const FlightsMap = ({ flights, airports }: MapProps) => {
    const center = [52.0, 19.0];

    const getAirportById = (id: number): AirportInterface | undefined =>
        airports.find((airport) => airport.id === id);

    const lines = useMemo(() => {
        return flights
            .map((flight) => {
                const departureAirport = getAirportById(flight.departure.airportId);
                const arrivalAirport = getAirportById(flight.arrival.airportId);

                if (!departureAirport || !arrivalAirport) return null;

                const from = [departureAirport.coordinates.lat, departureAirport.coordinates.lng] as [number, number];
                const to = [arrivalAirport.coordinates.lat, arrivalAirport.coordinates.lng] as [number, number];
                const path = createParabola(from, to);

                const tooltip = `
                    <strong>Flight ID:</strong> ${flight.id}<br/>
                    <strong>From:</strong> ${departureAirport.code}<br/>
                    <strong>To:</strong> ${arrivalAirport.code}<br/>
                    <strong>Date:</strong> ${flight.departure.date}<br/>
                    <strong>Plane ID:</strong> ${flight.planeId}
                `;

                return { path, tooltip };
            })
            .filter(Boolean);
    }, [flights, airports]);

    return (
        <MapContainer center={[52.4064, 16.9252]} zoom={5} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
            />
            {lines.map((line, index) => (
                <Polyline
                    key={index}
                    positions={line!.path}
                    pathOptions={{ color: 'blue', weight: 3 }}
                >
                    <Tooltip direction="top" sticky>
                        <div dangerouslySetInnerHTML={{ __html: line!.tooltip }} />
                    </Tooltip>
                </Polyline>
            ))}
        </MapContainer>
    );
};

export default FlightsMap;
