import {PlaneStatusType} from "../type/planeStatus.type";

export interface Plane {
    id: number;
    manufacturer: string;
    model: string;
    status: PlaneStatusType;
    registerNumber: string;
    yeaOfProduction: number;
    actualAirportId: number;
    mileage: number;
    pricePerHour: number;
}