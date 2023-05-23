import  Axios, { AxiosError, AxiosResponse } from "axios";

class AreaController{
    async getAll(){
        let result;
        await Axios.get(`${process.env.REACT_APP_API_URL}/area/all`).then((response: AxiosResponse)=>{
            if(response.status === 200){
                result = response.data;
            }
        }).catch(function (error: AxiosError){
            if(error){
                result = "Что то не так с сервером";
            }
        });
        return result;
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AreaController();