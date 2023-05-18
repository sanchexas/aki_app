import { IsNotEmpty } from "class-validator";

export interface IUser{
    second_name:string;
    name:string;
    middlename:string;
    email:string;
    phone: string;
    password:string;
}