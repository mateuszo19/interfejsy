import { planes } from "../../data/planes";
import {PlaneStatusType} from "../../type/planeStatus.type";

const Planes = () => {

    const getPlaneStatus = (status: PlaneStatusType) => {
        switch (status) {
            case "free":
                return <span className="badge text-bg-success">Dostępny</span>;
            case "rented":
                return <span className="badge text-bg-secondary">Wynajęty</span>;
            case "service":
                return <span className="badge text-bg-warning">Serwis</span>;
            case "damaged":
                return <span className="badge text-bg-danger">Uszkodzony</span>;
        }
    }

    return (
        <section className="grow p-2 bg-gray-200">
            <div className="w-full h-full p-3 bg-white shadow rounded-2xl">
                <h1 className="font-bold mb-2">Samoloty</h1>

                {/* Kontener z ustaloną wysokością i przewijaniem */}
                <div className="max-h-[500px] overflow-y-auto rounded-md border">
                    <table className="table w-full text-sm text-left">
                        <thead className="sticky top-0 bg-white z-10">
                        <tr>
                            <th scope="col">lp.</th>
                            <th scope="col">Producent</th>
                            <th scope="col">Model</th>
                            <th scope="col">Numer boczny</th>
                            <th scope="col">Status</th>
                            <th scope="col">Rocznik</th>
                            <th scope="col">Lotnisko</th>
                            <th scope="col">Przebieg [Wh]</th>
                            <th scope="col">Cena za godzinę [zł]</th>
                        </tr>
                        </thead>
                        <tbody>
                        {planes.map((plane, i) => (
                            <tr key={plane.id}>
                                <th scope="row">{i + 1}</th>
                                <td>{plane.manufacturer}</td>
                                <td>{plane.model}</td>
                                <td>{plane.registerNumber}</td>
                                <td>{getPlaneStatus(plane.status)}</td>
                                <td>{plane.yeaOfProduction}</td>
                                <td>{plane.actualAirport}</td>
                                <td>{plane.mileage}</td>
                                <td>{plane.pricePerHour}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className='p-4'>
                    <div className="w-40 h-40 p-4 items-center rounded-xl shadow flex flex-col justify-between">
                        <span className='text-5xl'>{planes.length}</span>
                        <span className='text-center font-bold'>Liczba samolotów</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Planes;