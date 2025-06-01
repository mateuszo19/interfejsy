import { Card} from "react-bootstrap";
import {planes} from "../../data/planes";
import {flightsHistory} from "../../data/fightHistory";
import {airports} from "../../data/airports";
import getAirportNameById from "../../util/db/getAirportNameById";
import getAirportCodeById from "../../util/db/getAirportCodeById";
import getPlaneNameById from "../../util/db/getPlaneNameById";
import getPlaneRegistrationByPlaneId from "../../util/db/getPlaneRegistrationByPlaneId";
import getClientNameById from "../../util/db/getClientNameById";
import getClientNationalityById from "../../util/db/getClientNationalityById";

const History = () => {

    const findAirportNameById = (id: number): string => {
        const airportName = getAirportNameById(id);
        const airportCode = getAirportCodeById(id);

        return airportName + ` (${airportCode})`;
    }

    const findPlaneById = (id: number): string => {
        const model = getPlaneNameById(id);
        const registrationNmuber = getPlaneRegistrationByPlaneId(id);

        return model + ` (${registrationNmuber})`;
    }

    const findClientById = (id: number): string => {
        const clientName = getClientNameById(id);

        const nationality = getClientNationalityById(id);

        return clientName + ` (${nationality})`;
    }

    return (
        <section className="FlightConditions flex flex-col grow p-2 bg-light">
            <Card className="shadow rounded-4 p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h1 className="fw-bold mb-1">Historia lotów</h1>
                    </div>
                </div>
                <div className="max-h-[500px] overflow-y-auto rounded-md border">
                    <table className="table w-full text-sm text-left">
                        <thead className="align-middle text-center">
                        <tr>
                            <th rowSpan={2} className="border-end">Lp.</th>
                            <th colSpan={3} className="border-end">✈ Odlot</th>
                            <th colSpan={3} className="border-end">🛬 Przylot</th>
                            <th rowSpan={2} className="border-end">⏱ Silnik (h)</th>
                            <th rowSpan={2} className="border-end">✈ Samolot</th>
                            <th rowSpan={2}>👤 Klient</th>
                        </tr>
                        <tr>
                            <th className="border-end">Lotnisko</th>
                            <th className="border-end">Data</th>
                            <th className="border-end">Godzina (UTC)</th>
                            <th className="border-end">Lotnisko</th>
                            <th className="border-end">Data (UTC)</th>
                            <th className="border-end">Godzina</th>
                        </tr>
                        </thead>
                        <tbody>
                        {flightsHistory.map((record, i) => (
                            <tr key={record.id}>
                                <th scope="row">{i + 1}</th>
                                <td className="text-center">{findAirportNameById(record.departure.airportId)}</td>
                                <td className="text-center">{record.departure.date}</td>
                                <td className="text-center">{record.departure.timeUTC}</td>
                                <td className="text-center">{findAirportNameById(record.arrival.airportId)}</td>
                                <td className="text-center">{record.arrival.date}</td>
                                <td className="text-center">{record.arrival.timeUTC}</td>
                                <td className="text-center">{(record.arrival.engineWorkingHours - record.departure.engineWorkingHours).toFixed(1)}/Wh</td>
                                <td className="text-center">{findPlaneById(record.planeId)}</td>
                                <td className="text-center">{findClientById(record.clientId)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </section>
    );
};

export default History;
