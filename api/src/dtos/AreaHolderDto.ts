import { IsNotEmpty, IsString } from "class-validator";
import { UserDto } from "./UserDto";
import { AreaHolder } from "../models/AreaHolder";
import { User } from "../models/User";

export class AreaHolderDto extends UserDto{
    @IsNotEmpty()
    @IsString()
    position:string;

    @IsNotEmpty()
    @IsString()
    area_name:string;

    @IsNotEmpty()
    @IsString()
    organisaion:string;

    @IsNotEmpty()
    @IsString()
    industry:string;

    @IsNotEmpty()
    @IsString()
    description:string;
    constructor(areaModel:AreaHolder,user:User){
        super(user);
        this.position = areaModel.position
        this.area_name = areaModel.area_name
        this.organisaion = areaModel.organisation
        this.industry = areaModel.indust.name
        this.description = areaModel.description
    }

}