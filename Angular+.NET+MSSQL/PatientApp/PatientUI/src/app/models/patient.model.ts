import { Gender } from "./Gender";
export interface Patient {
    id?: number; // made the id field nullable
    firstname: string;
    lastname: string;
    gender: Gender; // added gender field with optional type
    dob?: Date; // added date of birth field with optional type
    phoneNo: string;
    address?: string; // added address field with optional type
}
// {
//     "firstName": "string",
//     "lastName": "string",
//     "gender": "string",
//     "dateOfBirth": "2024-05-24T05:43:47.271Z",
//     "phoneNumber": "5227653212",
//     "address": "string"
//   }