import {AvailableNationality} from "../type/nationality.type";

export interface ClientInterface {
    id: number
    first_name: string;
    last_name: string;
    email: string;
    idNumber: string;
    pilotLicence: {
        countryOfOrigin: string;
        id: string;
        rights: {
            PPL: boolean;
            CPL: boolean;
            ATPL: boolean;
            IR: boolean;
            NVFR: boolean;
        };
    };
    dateOfBirth: Date;
    nationality: AvailableNationality;
}