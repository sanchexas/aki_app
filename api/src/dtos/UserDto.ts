import { IsNotEmpty, IsString,IsEmail, IsPhoneNumber, isNotEmpty, Length } from "class-validator";
import {  Validate,Validator } from "sequelize-typescript";
import { User } from "../models/User";

export class UserDto{
    @IsNotEmpty()
    @IsString()
    public second_name:string;

    @IsNotEmpty()
    @IsString()
    public name:string;

    @IsString()
    public middlename:string;
    
    @IsNotEmpty()
    @IsEmail()
    public email:string;
    
    @IsNotEmpty()
    @IsPhoneNumber()
    public phone: string;
    constructor(model:User)
    {
        this.middlename = model.middlename;
        this.email = model.email;
        this.name = model.name;
        this.second_name = model.name;
        this.phone = model.phone
    }
}