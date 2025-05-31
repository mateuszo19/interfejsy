import { useEffect, useState } from 'react';
import { planes } from '../../data/planes';
import { OverlayTrigger, Popover, Table } from 'react-bootstrap';
import PlaneStatus from "../PlaneStatus/PlaneStatus";

interface WeatherBlockProps {
    name: string;
    lat: number;
    lon: number;
    airportId?: number;
}

const WeatherBlock = ({ name, lat, lon, airportId }: WeatherBlockProps) => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,visibility,relative_humidity_2m,dew_point_2m,wind_direction_10m,wind_direction_80m,wind_direction_180m,wind_speed_10m,wind_speed_80m,wind_speed_180m,surface_pressure&timezone=auto`;
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
            } catch (err) {
                setError('Nie udało się pobrać danych pogodowych.');
            }
        };

        fetchWeather();
    }, [lat, lon]);

    if (error) return <div className="text-danger">{error}</div>;
    if (!data) return <div>Ładowanie...</div>;

    const now = new Date().toISOString().slice(0, 13);
    if (!data?.hourly || !data.hourly.time) return <div className="text-warning">Brak danych pogodowych</div>;
    const timeIndex = data.hourly.time.findIndex((t: string) => t.startsWith(now));
    const getValue = (key: string) => data.hourly[key]?.[timeIndex];

    const localPlanes = planes.filter(p => p.actualAirportId === airportId);

    const popover = (
        <Popover>
            <Popover.Header>✈ Samoloty na lotnisku</Popover.Header>
            <Popover.Body>
                {localPlanes.length === 0 ? (
                    <div className="text-muted">Brak samolotów</div>
                ) : (
                    <Table size="sm" bordered>
                        <thead>
                        <tr>
                            <th>Rejestracja</th>
                            <th>Model</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {localPlanes.map(plane => (
                            <tr key={plane.id}>
                                <td>{plane.registerNumber}</td>
                                <td>{plane.manufacturer} {plane.model}</td>
                                <td><PlaneStatus status={plane.status}/></td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                )}
            </Popover.Body>
        </Popover>
    );

    return (
        <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover}>
            <div className="p-2">
                <h6 className="fw-bold mb-2">{name}</h6>
                <p className="mb-2 text-muted">Samoloty na lotnisku: <strong>{localPlanes.length}</strong></p>
                <Table size="sm" borderless className="mb-0">
                    <tbody>
                    <tr><td>🌡 Temperatura:</td><td>{getValue('temperature_2m')} °C</td></tr>
                    <tr><td>👁 Widoczność:</td><td>{(getValue('visibility') / 1000).toFixed(1)} km</td></tr>
                    <tr><td>💧 Wilgotność:</td><td>{getValue('relative_humidity_2m')} %</td></tr>
                    <tr><td>🧊 Punkt rosy:</td><td>{getValue('dew_point_2m')} °C</td></tr>
                    <tr><td>🌬 Wiatr (10m):</td><td>{getValue('wind_speed_10m')} km/h, {getValue('wind_direction_10m')}°</td></tr>
                    <tr><td>📈 Ciśnienie:</td><td>{getValue('surface_pressure')} hPa</td></tr>
                    </tbody>
                </Table>
            </div>
        </OverlayTrigger>
    );
};

export default WeatherBlock;
