import { Request,Response,NextFunction } from "express";
import UserService from "../services/UserService";
const userService = new UserService();
import { IAreaHolder, IUser } from "../interfaces/Users";
import { UserDto } from "../dtos/UserDto";
import { AreaHolderDto } from "../dtos/AreaHolderDto";

 class UserController{
    async createUser(req:Request,res:Response,next:NextFunction){
        try
        {
            const user:IUser = req.body as IUser;
            const userDto:UserDto = await userService.createUser(user);
            return res.status(200).send(userDto)
        }
        catch(e:any)
        {
            console.log(e)
            res.status(400).send(e.message);
        }
    }
    async createAreaHolder(req:Request,res:Response,next:NextFunction){
        try{
            const areaHolder:IAreaHolder = req.body as IAreaHolder;
            const dto:AreaHolderDto = await userService.createAreaHolder(areaHolder);
            return res.status(200).send(dto)
        }
        catch(e:any)
        {
            console.log(e)
            res.status(400).send(e.message);
        }
    }
}
export default new  UserController