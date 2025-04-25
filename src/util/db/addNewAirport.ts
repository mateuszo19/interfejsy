import {AirportInterface} from "../../interfaces/airport.interface";
import {airports} from "../../data/airports";

const addNewAirport = (newAirport: Omit<AirportInterface, "id">): AirportInterface => {
    const newId = airports.length > 0 ? airports[airports.length - 1].id + 1 : 0;
    const airportWithId: AirportInterface = {
        id: newId,
        ...newAirport
    };

    airports.push(airportWithId);
    return airportWithId;
};