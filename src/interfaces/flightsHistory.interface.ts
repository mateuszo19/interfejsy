interface FlightData {
    airportId: number;
    date: string;
    timeUTC: string;
    engineWorkingHours: number;
}

export interface FlightsHistory {
    id: number;
    planeId: number;
    clientId: number;
    departure: FlightData,
    arrival: FlightData
}