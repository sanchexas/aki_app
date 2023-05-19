import Axios, { AxiosError, AxiosResponse } from "axios";
import apiPath from "../api-path";

Axios.defaults.withCredentials = true;

class UserController{
    async createUser(data: object){
        let result;
        await Axios.post(`${apiPath}/create/user`, data).then((response: AxiosResponse)=>{
            if(response.status === 200){
                result = response.status;
            } // прописать проверку для статусов 400 и выше
        }).catch(function (error: AxiosError) {
            if (error) {
                result = "Что то не так с сервером";
            } 
        });
        return result;
    }
    async createLandLord(data: object){
        let result;
        await Axios.post(`${apiPath}/create/areaholder`, data).then((response: AxiosResponse)=>{
            if(response.status === 200){
                result = response.status;
            } // прописать проверку для статусов 400 и выше
        }).catch(function (error: AxiosError) {
            if (error) {
                result = "Что то не так с сервером";
            } 
        });
        return result;
    }
    async auth(data: object){
        let result;
        await Axios.post(`${apiPath}/users/signin`, data).then((response: AxiosResponse)=>{
            if(response.status === 200){
                result = response.status;
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