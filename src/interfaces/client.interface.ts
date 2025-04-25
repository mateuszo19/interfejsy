import {AvailableNationality} from "../type/nationality.type";

export interface NewClientInterface {
    firstName: string;
    lastName: string;
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

export interface ClientInterface extends NewClientInterface{
    id: number
}