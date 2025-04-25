import {planes} from "../../data/planes";

const getNumberOfPlanesByAirportId = (airportId: number): number => {
    return planes.filter((plane) => plane.actualAirportId === airportId).length;
};

export default getNumberOfPlanesByAirportId;