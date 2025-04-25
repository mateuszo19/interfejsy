import {airports} from "../../data/airports";

const getAirportCodeById = (airportId: number): string => {
    return airports.find(airport => airport.id === airportId)?.code ?? "-"
}

export default getAirportCodeById;