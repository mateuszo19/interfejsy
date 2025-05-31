import { planes } from "../../data/planes";
import { clients as initialClients } from "../../data/clients";
import { useState } from "react";
import CustomPopUp from "../../components/CustomPopUp/CustomPopUp";
import { Button, Form } from "react-bootstrap";
import { AvailableNationality } from "../../type/nationality.type";
import { ClientInterface, NewClientInterface } from "../../interfaces/client.interface";

const Clients = () => {
    const [showAddNewClientModal, setShowAddNewClientModal] = useState(false);
    const [clients, setClients] = useState<ClientInterface[]>(initialClients);
    const [newClient, setNewClient] = useState<NewClientInterface>({
        firstName: "",
        lastName: "",
        email: "",
        idNumber: "",
        pilotLicence: {
            countryOfOrigin: "",
            id: "",
            rights: {
                PPL: false,
                CPL: false,
                ATPL: false,
                IR: false,
                NVFR: false
            }
        },
        dateOfBirth: new Date(),
        nationality: "Polska"
    });

    const handleInputChange = (field: keyof NewClientInterface, value: any) => {
        setNewClient((prev) => ({
            ...prev!,
            [field]: value
        }));
    };

    const handleLicenceRightChange = (right: keyof NewClientInterface["pilotLicence"]["rights"], value: boolean) => {
        setNewClient((prev) => ({
            ...prev!,
            pilotLicence: {
                ...prev!.pilotLicence,
                rights: {
                    ...prev!.pilotLicence.rights,
                    [right]: value
                }
            }
        }));
    };

    const handleAddClient = () => {
        const newClientWithId: ClientInterface = {
            ...newClient,
            id: clients.length > 0 ? clients[clients.length - 1].id + 1 : 0
        };
        setClients([...clients, newClientWithId]);
        setShowAddNewClientModal(false);
    };

    const pilotRights: (keyof NewClientInterface["pilotLicence"]["rights"])[] = [
        "PPL", "IR", "CPL", "ATPL", "NVFR"
    ];

    return (
        <section className="Clients grow p-2 bg-gray-200">
            <div className="flex flex-col gap-2 w-full h-full p-3 bg-white shadow rounded-2xl">
                <div className='flex justify-between'>
                    <h1 className="font-bold mb-2">Klienci</h1>
                    <div className='flex items-center'>
                        <Button variant="outline-success" onClick={() => setShowAddNewClientModal(true)}>
                            Dodaj
                        </Button>
                    </div>
                </div>
                <div className="max-h-[500px] overflow-y-auto rounded-md border">
                    <table className="table w-full text-sm text-left">
                        <thead className="sticky top-0 bg-white z-10">
                        <tr>
                            <th>lp.</th>
                            <th>Imię</th>
                            <th>Nazwisko</th>
                            <th>Email</th>
                            <th>Data urodzenia</th>
                            <th>Numer dowodu</th>
                            <th>Licencja pilota</th>
                            <th>Uprawnienia</th>
                            <th>Narodowość</th>
                        </tr>
                        </thead>
                        <tbody>
                        {clients.map((client, i) => {
                            const { id, firstName, lastName, email, dateOfBirth, idNumber, pilotLicence, nationality } = client;
                            const { ATPL, PPL, CPL, IR, NVFR } = pilotLicence.rights;

                            return (
                                <tr key={id}>
                                    <th>{i + 1}</th>
                                    <td>{firstName}</td>
                                    <td>{lastName}</td>
                                    <td>{email}</td>
                                    <td>{(new Date(dateOfBirth)).toLocaleDateString()}</td>
                                    <td>{idNumber}</td>
                                    <td>{pilotLicence.id} ({pilotLicence.countryOfOrigin})</td>
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
            <CustomPopUp
                header='Dodaj klienta'
                body={
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Imię</Form.Label>
                            <Form.Control value={newClient.firstName} onChange={(e) => handleInputChange("firstName", e.target.value)} required type="text" placeholder="Podaj imię" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Nazwisko</Form.Label>
                            <Form.Control value={newClient.lastName} onChange={(e) => handleInputChange("lastName", e.target.value)} required type="text" placeholder="Podaj nazwisko" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={newClient.email} onChange={(e) => handleInputChange("email", e.target.value)} required type="email" placeholder="Podaj email" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Data urodzenia</Form.Label>
                            <Form.Control value={newClient.dateOfBirth.toISOString().substring(0,10)} onChange={(e) => handleInputChange("dateOfBirth", new Date(e.target.value))} required type="date" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Numer dowodu</Form.Label>
                            <Form.Control value={newClient.idNumber} onChange={(e) => handleInputChange("idNumber", e.target.value)} required type="text" placeholder="Podaj numer dowodu" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Numer licencji pilota</Form.Label>
                            <Form.Control value={newClient.pilotLicence.id} onChange={(e) => setNewClient((prev) => ({ ...prev!, pilotLicence: { ...prev!.pilotLicence, id: e.target.value } }))} required type="text" placeholder="Podaj numer licencji" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Kraj wydania licencji</Form.Label>
                            <Form.Control value={newClient.pilotLicence.countryOfOrigin} onChange={(e) => setNewClient((prev) => ({ ...prev!, pilotLicence: { ...prev!.pilotLicence, countryOfOrigin: e.target.value } }))} required type="text" placeholder="Podaj kraj" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Rodzaj uprawnień</Form.Label>
                            <div className="mb-3">
                                {pilotRights.map(right => (
                                    <Form.Check
                                        inline
                                        key={right}
                                        label={right}
                                        checked={newClient.pilotLicence.rights[right]}
                                        onChange={(e) => handleLicenceRightChange(right, e.target.checked)}
                                    />
                                ))}
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Narodowość</Form.Label>
                            <Form.Select value={newClient.nationality} onChange={(e) => handleInputChange("nationality", e.target.value as AvailableNationality)} required>
                                <option value="Polska">Polska</option>
                                <option value="Niemcy">Niemcy</option>
                                <option value="Hiszpania">Hiszpania</option>
                                <option value="Wielka Brytania">Wielka Brytania</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                }
                cancelButton={{ text: 'Anuluj' }}
                confirmButton={{ text: 'Dodaj klienta', onClick: handleAddClient }}
                show={showAddNewClientModal}
                handleClose={() => setShowAddNewClientModal(false)}
            />
        </section>
    );
};

export default Clients;