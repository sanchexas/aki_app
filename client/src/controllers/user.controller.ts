import Axios, { AxiosError, AxiosResponse } from "axios";

Axios.defaults.withCredentials = true;

class UserController{
    async createUser(data: object){
        let result;
        await Axios.post(`${process.env.REACT_APP_API_URL}/users/create/user`, data).then((response: AxiosResponse)=>{
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
        await Axios.post(`${process.env.REACT_APP_API_URL}/users/create/areaholder`, data).then((response: AxiosResponse)=>{
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
        await Axios.post(`${process.env.REACT_APP_API_URL}/users/create/signin`, data).then((response: AxiosResponse)=>{
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