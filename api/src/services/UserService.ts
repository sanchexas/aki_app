import { UserDto } from "../dtos/UserDto";
import { ApiError } from "../exceptions/api_errors";
import { IUser } from "../interfaces/IUser";
import { User } from "../models/User";
import * as bcrypt from 'bcrypt'

class UserService{

    async createUser(userReq:IUser){
        let candidate = await User.findAll({where:{email:userReq.email}})
        if (candidate.length>0)
            throw ApiError.BadRequest("Пользователь с такой почтой уже зарегистрирован")
        const hashPassword = await bcrypt.hash(userReq.password,3)
        
        const user = await User.create({
            email:userReq.email,    
            second_name:userReq.second_name,
            name:userReq.name,
            middlename:userReq.middlename,
            phone:userReq.phone,
            password:hashPassword
        });
        const userDto:UserDto = new UserDto(user)
        return userDto;
    }
}
export default UserService;