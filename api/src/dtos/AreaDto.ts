import { IsNotEmpty, IsString,IsNumber } from "class-validator";
import { AreaHolder } from "../models/AreaHolder";
import { Industry } from "../models/Industry";


export class AreaDto{
    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsString()
    square:number;
    
    @IsNotEmpty()
    @IsNumber()
    cost:number;

    @IsNotEmpty()
    @IsString()
    industry:string;
    constructor(area:AreaHolder,industry:Industry){
        this.square = area.square;
        this.name = area.area_name;
        this.cost = area.cost;
        this.industry = industry.name
    }
}