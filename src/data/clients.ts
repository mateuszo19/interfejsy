import {ClientInterface} from "../interfaces/client.interface";

export const clients: ClientInterface[] = [
    {
        id: 1,
        first_name: "Jan",
        last_name: "Kowalski",
        email: "jan.kowalski@example.com",
        idNumber: "PL1234567890",
        pilotLicence: {
            countryOfOrigin: "Polska",
            id: "PL-PLT-0001",
            rights: { PPL: true, CPL: false, ATPL: false, IR: true, NVFR: true }
        },
        dateOfBirth: new Date("1985-04-12"),
        nationality: "Polska"
    },
    {
        id: 2,
        first_name: "Anna",
        last_name: "Nowak",
        email: "anna.nowak@example.com",
        idNumber: "PL9876543210",
        pilotLicence: {
            countryOfOrigin: "Polska",
            id: "PL-PLT-0002",
            rights: { PPL: true, CPL: true, ATPL: false, IR: true, NVFR: false }
        },
        dateOfBirth: new Date("1990-11-23"),
        nationality: "Polska"
    },
    {
        id: 3,
        first_name: "Peter",
        last_name: "Schmidt",
        email: "peter.schmidt@example.de",
        idNumber: "DE123456789",
        pilotLicence: {
            countryOfOrigin: "Niemcy",
            id: "DE-PLT-0003",
            rights: { PPL: true, CPL: true, ATPL: true, IR: true, NVFR: true }
        },
        dateOfBirth: new Date("1978-03-15"),
        nationality: "Niemcy"
    },
    {
        id: 4,
        first_name: "Sophie",
        last_name: "Müller",
        email: "sophie.mueller@example.de",
        idNumber: "DE987654321",
        pilotLicence: {
            countryOfOrigin: "Niemcy",
            id: "DE-PLT-0004",
            rights: { PPL: true, CPL: false, ATPL: false, IR: false, NVFR: true }
        },
        dateOfBirth: new Date("1992-08-30"),
        nationality: "Niemcy"
    },
    {
        id: 5,
        first_name: "Carlos",
        last_name: "García",
        email: "carlos.garcia@example.es",
        idNumber: "ES234567891",
        pilotLicence: {
            countryOfOrigin: "Hiszpania",
            id: "ES-PLT-0005",
            rights: { PPL: true, CPL: true, ATPL: false, IR: true, NVFR: true }
        },
        dateOfBirth: new Date("1983-07-19"),
        nationality: "Hiszpania"
    },
    {
        id: 6,
        first_name: "Lucia",
        last_name: "Martínez",
        email: "lucia.martinez@example.es",
        idNumber: "ES345678912",
        pilotLicence: {
            countryOfOrigin: "Hiszpania",
            id: "ES-PLT-0006",
            rights: { PPL: true, CPL: false, ATPL: false, IR: false, NVFR: false }
        },
        dateOfBirth: new Date("1995-02-11"),
        nationality: "Hiszpania"
    },
    {
        id: 7,
        first_name: "John",
        last_name: "Smith",
        email: "john.smith@example.co.uk",
        idNumber: "UK123456789",
        pilotLicence: {
            countryOfOrigin: "Wielka Brytania",
            id: "UK-PLT-0007",
            rights: { PPL: true, CPL: true, ATPL: true, IR: true, NVFR: true }
        },
        dateOfBirth: new Date("1980-01-01"),
        nationality: "Wielka Brytania"
    },
    {
        id: 8,
        first_name: "Emily",
        last_name: "Brown",
        email: "emily.brown@example.co.uk",
        idNumber: "UK987654321",
        pilotLicence: {
            countryOfOrigin: "Wielka Brytania",
            id: "UK-PLT-0008",
            rights: { PPL: true, CPL: false, ATPL: false, IR: true, NVFR: true }
        },
        dateOfBirth: new Date("1989-10-10"),
        nationality: "Wielka Brytania"
    },
    {
        id: 9,
        first_name: "Tomasz",
        last_name: "Zieliński",
        email: "t.zielinski@example.com",
        idNumber: "PL1122334455",
        pilotLicence: {
            countryOfOrigin: "Polska",
            id: "PL-PLT-0009",
            rights: { PPL: true, CPL: false, ATPL: false, IR: false, NVFR: false }
        },
        dateOfBirth: new Date("1975-05-05"),
        nationality: "Polska"
    },
    {
        id: 10,
        first_name: "Katarzyna",
        last_name: "Wiśniewska",
        email: "k.wisniewska@example.com",
        idNumber: "PL6677889900",
        pilotLicence: {
            countryOfOrigin: "Polska",
            id: "PL-PLT-0010",
            rights: { PPL: true, CPL: true, ATPL: false, IR: true, NVFR: false }
        },
        dateOfBirth: new Date("1998-12-21"),
        nationality: "Polska"
    },
    {
        id: 11,
        first_name: "Andreas",
        last_name: "Keller",
        email: "a.keller@example.de",
        idNumber: "DE567890123",
        pilotLicence: {
            countryOfOrigin: "Niemcy",
            id: "DE-PLT-0011",
            rights: { PPL: true, CPL: true, ATPL: true, IR: true, NVFR: false }
        },
        dateOfBirth: new Date("1982-09-09"),
        nationality: "Niemcy"
    },
    {
        id: 12,
        first_name: "María",
        last_name: "López",
        email: "m.lopez@example.es",
        idNumber: "ES098765432",
        pilotLicence: {
            countryOfOrigin: "Hiszpania",
            id: "ES-PLT-0012",
            rights: { PPL: true, CPL: false, ATPL: false, IR: false, NVFR: true }
        },
        dateOfBirth: new Date("1991-06-14"),
        nationality: "Hiszpania"
    },
    {
        id: 13,
        first_name: "Oliver",
        last_name: "Taylor",
        email: "o.taylor@example.co.uk",
        idNumber: "UK111222333",
        pilotLicence: {
            countryOfOrigin: "Wielka Brytania",
            id: "UK-PLT-0013",
            rights: { PPL: true, CPL: true, ATPL: false, IR: true, NVFR: true }
        },
        dateOfBirth: new Date("1987-04-08"),
        nationality: "Wielka Brytania"
    },
    {
        id: 14,
        first_name: "Barbara",
        last_name: "Maj",
        email: "b.maj@example.com",
        idNumber: "PL9988776655",
        pilotLicence: {
            countryOfOrigin: "Polska",
            id: "PL-PLT-0014",
            rights: { PPL: true, CPL: false, ATPL: false, IR: false, NVFR: false }
        },
        dateOfBirth: new Date("1979-07-22"),
        nationality: "Polska"
    },
    {
        id: 15,
        first_name: "Jakub",
        last_name: "Sikora",
        email: "jakub.sikora@example.com",
        idNumber: "PL4455667788",
        pilotLicence: {
            countryOfOrigin: "Polska",
            id: "PL-PLT-0015",
            rights: { PPL: true, CPL: true, ATPL: false, IR: true, NVFR: true }
        },
        dateOfBirth: new Date("1993-03-03"),
        nationality: "Polska"
    }
];