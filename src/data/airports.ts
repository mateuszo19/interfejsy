import { AirportInterface } from "../interfaces/airport.interface";

export const airports: AirportInterface[] = [
    {
        id: 0,
        code: "EPKT",
        name: "Katowice – Pyrzowice",
        coordinates: {
            lat: 50.4742,
            lng: 19.0800
        },
    },
    {
        id: 1,
        code: "EPRZ",
        name: "Rzeszów – Jasionka",
        coordinates: {
            lat: 50.1100,
            lng: 22.0183
        },
    },
    {
        id: 2,
        code: "EPLL",
        name: "Łódź – Lublinek",
        coordinates: {
            lat: 51.7219,
            lng: 19.3981
        },
    },
    {
        id: 3,
        code: "EPWR",
        name: "Wrocław – Strachowice",
        coordinates: {
            lat: 51.1027,
            lng: 16.8858
        },
    },
    {
        id: 4,
        code: "EPWA",
        name: "Warszawa – Okęcie im. Chopina",
        coordinates: {
            lat: 52.1657,
            lng: 20.9671
        },
    },
    {
        id: 5,
        code: "EPGD",
        name: "Gdańsk – Rębiechowo im. Wałęsy",
        coordinates: {
            lat: 54.3775,
            lng: 18.4661
        },
    },
    {
        id: 6,
        code: "EPPO",
        name: "Poznań – Ławica im. Wł. Węgorka",
        coordinates: {
            lat: 52.4210,
            lng: 16.8263
        },
    },
    {
        id: 7,
        code: "LEAL",
        name: "Alicante – Elche Airport",
        coordinates: {
            lat: 38.2822,
            lng: -0.5582
        },
    },
    {
        id: 8,
        code: "EDDF",
        name: "Frankfurt am Main Airport",
        coordinates: {
            lat: 50.0379,
            lng: 8.5622
        },
    },
    {
        id: 9,
        code: "EGLL",
        name: "London Heathrow Airport",
        coordinates: {
            lat: 51.4700,
            lng: -0.4543
        },
    },
    {
        id: 10,
        code: "LSZH",
        name: "Zürich Airport",
        coordinates: {
            lat: 47.4647,
            lng: 8.5492
        },
    },
    {
        id: 11,
        code: "LIMC",
        name: "Milan Malpensa Airport",
        coordinates: {
            lat: 45.6306,
            lng: 8.7281
        },
    }
];