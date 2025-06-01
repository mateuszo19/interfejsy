import { planes } from "../../data/planes";
import getAirportNameById from "../../util/db/getAirportNameById";
import getAirportCodeById from "../../util/db/getAirportCodeById";
import {Button} from "react-bootstrap";
import PlaneStatus from "../../components/PlaneStatus/PlaneStatus";

const Planes = () => {

    return (
        <section className="grow p-2 bg-gray-200">
            <div className="flex flex-col gap-2 w-full h-full p-3 bg-white shadow rounded-2xl">
                <div className='flex justify-between'>
                    <h1 className="font-bold mb-2">Samoloty</h1>
                    <div className='flex items-center'>
                        <Button variant="outline-success">Dodaj</Button>
                    </div>
                </div>
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
                                <td><PlaneStatus status={plane.status}/></td>
                                <td>{plane.yeaOfProduction}</td>
                                <td data-bs-toggle="tooltip" data-bs-placement="top" title= {getAirportNameById(plane.actualAirportId)}>{getAirportCodeById(plane.actualAirportId)}</td>
                                <td>{plane.mileage}</td>
                                <td>{plane.pricePerHour}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className='flex flex-row gap-4 p-4'>
                    <div className="w-40 h-40 p-4 items-center rounded-xl shadow flex flex-col justify-between">
                        <span className='text-5xl'>{planes.length}</span>
                        <span className='text-center font-bold'>Liczba samolotów</span>
                    </div>
                    <div className="w-40 h-40 p-4 items-center rounded-xl shadow flex flex-col justify-between">
                        <span className='text-5xl text-red-500 font-bold'>{planes.filter((plane) => plane.status === 'damaged').length}</span>
                        <span className='text-center font-bold'>Liczna uszkodzonych samolotów</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Planes;