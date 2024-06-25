export interface EverythingForm {
    id?: number | null; // Optional as the ID will be assigned by the server
    name: string;
    age: number;
    gender: GenderType;
    email: string;
    password: string;
    selectSingle: number;
    selectMultiple: number[];
    textarea: string;
    fileInput?: File | null; // Optional as file input is not always present
    checkbox: boolean;
}
export enum GenderType {
    Male = 'Male',
    Female = 'Female'
}