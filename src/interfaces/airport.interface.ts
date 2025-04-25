export interface AirportInterface {
    id: number;
    code: string;
    name: string;
    coordinates: {
        lat: number;
        lng: number;
    }
}