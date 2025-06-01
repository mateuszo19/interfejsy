import {planes} from "../../data/planes";

const getPlaneNameById = (id:number): string => {
    return planes.find((p) => p.id === id)?.model ?? '-';
};

export default getPlaneNameById;