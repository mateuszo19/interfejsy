import {airports} from "../../data/airports";

const getAirportNameById = (airportId: number): string => {
    return airports.find(airport => airport.id === airportId)?.name ?? "-"
}

export default getAirportNameById;