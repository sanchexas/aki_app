import Axios, { AxiosError } from "axios";
import apiPath from "../api-path";
import Cookies from "universal-cookie";

Axios.defaults.withCredentials = true;
type User = {
    email: string
    middlename: string
    name: string
    phone: string
    second_name: string
}
class UserController{
    async create(data: object){
        let result: any;
        await Axios.post(`${apiPath}/users/create`, data).then((response)=>{
            const userResult: User = response.data;
            if(response.status === 200){
                result = response.status;
                const cookies = new Cookies();
                cookies.set('email', userResult.email);
            } // прописать проверку для статусов 400 и выше, неправильно введен пароль и так далее
        }).catch(function (error: AxiosError) {
            if (error) {
                result = "Что то не так с сервером";
            } 
        });
        return result;
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserController();