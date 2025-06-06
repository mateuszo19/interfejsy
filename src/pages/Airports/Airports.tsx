import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import CustomPopUp from "../../components/CustomPopUp/CustomPopUp";
import { airports as initialAirports } from "../../data/airports";
import { AirportInterface } from "../../interfaces/airport.interface";

const Airports = () => {
    const [showAddModal, setShowAddModal] = useState(false);
    const [airports, setAirports] = useState<AirportInterface[]>(initialAirports);
    const [newAirport, setNewAirport] = useState<AirportInterface>({
        id: -1,
        code: "",
        name: "",
        coordinates: {
            lat: 0,
            lng: 0
        }
    });

    const handleInputChange = (field: keyof AirportInterface, value: any) => {
        setNewAirport((prev) => ({ ...prev, [field]: value }));
    };

    const handleCoordinatesChange = (field: "lat" | "lng", value: number) => {
        setNewAirport((prev) => ({
            ...prev,
            coordinates: {
                ...prev.coordinates,
                [field]: value
            }
        }));
    };

    const handleAddAirport = () => {
        const newEntry: AirportInterface = {
            ...newAirport,
            id: airports.length > 0 ? airports[airports.length - 1].id + 1 : 0
        };
        setAirports([...airports, newEntry]);
        setShowAddModal(false);
    };

    return (
        <section className="Airports grow p-2 bg-gray-200">
            <div className="flex flex-col gap-2 w-full h-full p-3 bg-white shadow rounded-2xl">
                <div className="flex justify-between">
                    <h1 className="font-bold mb-2">Lotniska</h1>
                    <Button variant="outline-success" onClick={() => setShowAddModal(true)}>Dodaj</Button>
                </div>

                <div className="max-h-[500px] overflow-y-auto rounded-md border">
                    <table className="table w-full text-sm text-left">
                        <thead className="sticky top-0 bg-white z-10">
                        <tr>
                            <th>lp.</th>
                            <th>Kod ICAO</th>
                            <th>Nazwa</th>
                            <th>Szerokość</th>
                            <th>Długość</th>
                        </tr>
                        </thead>
                        <tbody>
                        {airports.map((airport, i) => (
                            <tr key={airport.id}>
                                <td>{i + 1}</td>
                                <td>{airport.code}</td>
                                <td>{airport.name}</td>
                                <td>{airport.coordinates.lat}</td>
                                <td>{airport.coordinates.lng}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex gap-4 p-4">
                    <div className="w-40 h-40 p-4 items-center rounded-xl shadow flex flex-col justify-between">
                        <span className="text-5xl">{airports.length}</span>
                        <span className="text-center font-bold">Liczba lotnisk</span>
                    </div>
                </div>
            </div>

            <CustomPopUp
                header="Dodaj lotnisko"
                body={
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Kod ICAO</Form.Label>
                            <Form.Control
                                value={newAirport.code}
                                onChange={(e) => handleInputChange("code", e.target.value)}
                                required
                                placeholder="np. EPKT"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Nazwa lotniska</Form.Label>
                            <Form.Control
                                value={newAirport.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                required
                                placeholder="np. Katowice – Pyrzowice"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Szerokość (lat)</Form.Label>
                            <Form.Control
                                type="number"
                                step="0.0001"
                                value={newAirport.coordinates.lat}
                                onChange={(e) => handleCoordinatesChange("lat", parseFloat(e.target.value))}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Długość (lng)</Form.Label>
                            <Form.Control
                                type="number"
                                step="0.0001"
                                value={newAirport.coordinates.lng}
                                onChange={(e) => handleCoordinatesChange("lng", parseFloat(e.target.value))}
                                required
                            />
                        </Form.Group>
                    </Form>
                }
                cancelButton={{ text: "Anuluj" }}
                confirmButton={{ text: "Dodaj lotnisko", onClick: handleAddAirport }}
                show={showAddModal}
                handleClose={() => setShowAddModal(false)}
            />
        </section>
    );
};

export default Airports;
