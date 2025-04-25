import {NewClientInterface} from "../../interfaces/client.interface";
import {clients} from "../../data/clients";

const addNewClient = (client: NewClientInterface) => {
    if(!client) return;
    if(!client.email) return;
    if(!client.firstName) return;
    if(!client.lastName) return;
    if(!client.dateOfBirth) return;
    if(!client.idNumber) return;
    if(!client.pilotLicence) return;
    if(!client.nationality) return;

    clients.push({
        id: clients.length > 0 ? clients[clients.length - 1].id + 1 : 0,
        ...client,
    })

};

export default addNewClient;