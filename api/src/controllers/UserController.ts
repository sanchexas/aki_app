import { Request,Response,NextFunction } from "express";
import UserService from "../services/UserService";
const userService = new UserService();
import { IUser } from "../interfaces/IUser";
import { UserDto } from "../dtos/UserDto";

 class UserController{
    async create(req:Request,res:Response,next:NextFunction){
        try
        {
            console.log(req.body)
            const user:IUser = req.body as IUser;
            const userDto:UserDto = await userService.createUser(user);
            return res.status(200).send(userDto)
        }
        catch(e:any)
        {
            res.status(400).send(e);
        }
    }
}
export default new  UserController