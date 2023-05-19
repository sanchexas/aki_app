import { IsNotEmpty } from "class-validator";

export interface IUser{
    second_name:string;
    name:string;
    middlename:string;
    email:string;
    phone: string;
    password:string;
}
export interface IAreaHolder extends IUser{
    position:string;
    area_name:string;
    organisation:string;
    industry:number;
    inn:number;
    description:string;	
}