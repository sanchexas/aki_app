import { IsNotEmpty, IsString } from "class-validator";
import { UserDto } from "./UserDto";
import { AreaHolder } from "../models/AreaHolder";
import { User } from "../models/User";
import { Industry } from "../models/Industry";

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
    constructor(areaModel:AreaHolder,user:User,industry:Industry){
        super(user);
        this.position = areaModel.position
        this.area_name = areaModel.area_name
        this.organisaion = areaModel.organisation
        this.industry = industry.name
        this.description = areaModel.description
    }

}