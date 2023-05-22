import { Request,Response,NextFunction } from "express";
import { AreaDto } from "../dtos/AreaDto";
import { AreaHolder } from "../models/AreaHolder";
import AreaService from "../services/AreaService";
import { Industry } from "../models/Industry";
const areaService = new AreaService();

class AreaController{
    async getAll(req:Request,res:Response,next:NextFunction){
        try{
        const areas:AreaHolder[] = await AreaHolder.findAll({include:Industry});
        const areaDto:AreaDto[] = await areaService.getAll(areas);
        return res.status(200).send(areaDto);
    }
    catch(e:any)
    {
        console.log(e)
        res.status(400).send(e.message);
    }
    }
}
export default new AreaController