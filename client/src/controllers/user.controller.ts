import Axios from "axios";
import apiPath from "../api-path";

Axios.defaults.withCredentials = true;

class UserController{
    async create(data: object){
        const response = await Axios.post(`${apiPath}/users/create`, data);
        return response;
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserController();