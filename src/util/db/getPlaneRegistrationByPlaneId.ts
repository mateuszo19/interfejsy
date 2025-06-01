import {planes} from "../../data/planes";

const getPlaneRegistrationByPlaneId = (id:number): string => {
    return planes.find((p) => p.id === id)?.registerNumber ?? '-';
};

export default getPlaneRegistrationByPlaneId;