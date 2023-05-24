import { AreaHolderDto } from "../dtos/AreaHolderDto";
import { UserDto } from "../dtos/UserDto";
import { ApiError } from "../exceptions/api_errors";
import { IAreaHolder, IUser } from "../interfaces/Users";
import { AreaHolder } from "../models/AreaHolder";
import { Industry } from "../models/Industry";
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
    async createAreaHolder(areaReq:IAreaHolder){

        const userDto:UserDto = await this.createUser(areaReq)
        const user:User = await User.findOne({where:{email:userDto.email}}) as User
        
        const holder = await AreaHolder.create({
            id:user.id,
            position:areaReq.position,
            area_name:areaReq.area_name,
            description:areaReq.description,
            organisation:areaReq.organisation,
            industry:areaReq.industry
        })
        const industry = await Industry.findByPk(areaReq.industry) as Industry;
        const areaDto:AreaHolderDto = new AreaHolderDto(holder,user,industry);
        return areaDto;

    }
}
export default UserService;