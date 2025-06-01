import {clients} from "../../data/clients";

const getClientNationalityById = (id: number): string => {
    return clients.find((p) => p.id === id)?.nationality ?? '-';
};

export default getClientNationalityById;