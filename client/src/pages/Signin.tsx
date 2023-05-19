import { useState } from "react";
import userController from "../controllers/user.controller";
import { useNavigate } from "react-router-dom";

const SignIn = () =>{
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const redirect = useNavigate();
    function submit(){
        userController.auth(
            {
                email: email, 
                password: password
            }
        ).then((response)=>{
            if(response === 200){
                redirect('/signin');
            }
        })
    }
    return(
        <div>
            <form action="" className='form__default'>
                <h2>Вход</h2>
                <div className='form__item'>
                    <span>E-mail</span>
                    <input className='input__default' type="email" required onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='form__item'>
                    <span>Пароль</span>
                    <input className='input__default' type="password" required onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <br/>
                <button className="btn__default" onClick={(e)=>{submit();  e.preventDefault()}}>Войти</button>
            </form>
        </div>
    );
}

export default SignIn;