import {clients} from "../../data/clients";

const getClientNameById = (id: number): string => {
    const client = clients.find((p) => p.id === id);

    if(!client) return "-"

    return client?.firstName + client?.lastName;
};

export default getClientNameById;