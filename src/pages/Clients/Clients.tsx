import {planes} from "../../data/planes";
import {clients} from "../../data/clients";

const Clients = () => {
    return (
        <section className="grow p-2 bg-gray-200">
            <div className="w-full h-full p-3 bg-white shadow rounded-2xl">
                <h1 className="font-bold mb-2">Klienci</h1>

                {/* Kontener z ustaloną wysokością i przewijaniem */}
                <div className="max-h-[500px] overflow-y-auto rounded-md border">
                    <table className="table w-full text-sm text-left">
                        <thead className="sticky top-0 bg-white z-10">
                        <tr>
                            <th scope="col">lp.</th>
                            <th scope="col">Imię</th>
                            <th scope="col">Nazwisko</th>
                            <th scope="col">Email</th>
                            <th scope="col">Data urodzenia</th>
                            <th scope="col">Numer dowodu</th>
                            <th scope="col">Licencja pilota</th>
                            <th scope="col">Uprawnienia</th>
                            <th scope="col">Narodowość</th>
                        </tr>
                        </thead>
                        <tbody>
                        {clients.map((client, i) => {
                            const {id, first_name, last_name, email, dateOfBirth, idNumber, pilotLicence, nationality} = client;
                            const { ATPL, PPL, CPL, IR, NVFR } = pilotLicence.rights;

                            return (
                                <tr key={id}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{first_name}</td>
                                    <td>{last_name}</td>
                                    <td>{email}</td>
                                    <td>{(new Date(dateOfBirth)).toLocaleDateString()}</td>
                                    <td>{idNumber}</td>
                                    <td>{pilotLicence.id} ({pilotLicence.countryOfOrigin}) </td>
                                    <td>
                                        <ul>
                                            {ATPL && <li>ATPL</li>}
                                            {PPL && <li>PPL</li>}
                                            {CPL && <li>CPL</li>}
                                            {IR && <li>IR</li>}
                                            {NVFR && <li>NVFR</li>}
                                        </ul>
                                    </td>
                                    <td>{nationality}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
                <div className='flex flex-row gap-4 p-4'>
                    <div className="w-40 h-40 p-4 items-center rounded-xl shadow flex flex-col justify-between">
                        <span className='text-5xl'>{clients.length}</span>
                        <span className='text-center font-bold'>Liczba klientów</span>
                    </div>
                    <div className="w-40 h-40 p-4 items-center rounded-xl shadow flex flex-col justify-between">
                        <span className='text-5xl text-red-500 font-bold'>{planes.filter((plane) => plane.status === 'damaged').length}</span>
                        <span className='text-center font-bold'>Liczna uszkodzonych samolotów</span>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Clients;