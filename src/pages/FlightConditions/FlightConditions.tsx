import { useState } from "react";
import { Button, Form, InputGroup, Card, Row, Col, Spinner } from "react-bootstrap";
import WeatherBlock from "../../components/WeatherBlock/WeatherBlock";
import { airports } from "../../data/airports";

const FlightConditions = () => {
    const [query, setQuery] = useState("");
    const [searchResult, setSearchResult] = useState<{ name: string; lat: number; lon: number } | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if (!query.trim()) return;

        setLoading(true);
        try {
            const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1`);
            const data = await res.json();

            if (data.results?.length > 0) {
                const place = data.results[0];
                setSearchResult({ name: place.name, lat: place.latitude, lon: place.longitude });
            } else {
                setSearchResult(null);
                alert("Nie znaleziono lokalizacji.");
            }
        } catch (e) {
            alert("Błąd podczas wyszukiwania.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="FlightConditions flex flex-col grow p-2 bg-light">
            <Card className="shadow rounded-4 p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h1 className="fw-bold mb-1">Warunki lotu</h1>
                        <p className="text-muted">Pogoda na naszych lotniskach oraz lokalizacjach docelowych</p>
                    </div>
                </div>

                <Form className="mb-4" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
                    <InputGroup>
                        <Form.Control
                            placeholder="Wyszukaj miejsce docelowe (np. Gdańsk, Berlin)"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <Button onClick={handleSearch} variant="primary">
                            {loading ? <Spinner size="sm" animation="border" /> : "Szukaj"}
                        </Button>
                    </InputGroup>
                </Form>

                {searchResult && (
                    <Card className="mb-4 shadow-sm">
                        <Card.Body>
                            <WeatherBlock
                                name={`${searchResult.name} (wyszukane)`}
                                lat={searchResult.lat}
                                lon={searchResult.lon}
                            />
                        </Card.Body>
                    </Card>
                )}

                <h5 className="fw-semibold mt-3 mb-2">Lotniska bazowe</h5>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {airports.map((airport, index) => (
                        <Col key={index}>
                            <Card className="h-100 shadow-sm">
                                <Card.Body>
                                    <WeatherBlock
                                        name={`${airport.name} (${airport.code})`}
                                        airportId={airport.id}
                                        lon={airport.coordinates.lng}
                                        lat={airport.coordinates.lat}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Card>
        </section>
    );
};

export default FlightConditions;
