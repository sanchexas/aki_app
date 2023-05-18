import { useState } from "react";
import userController from "../controllers/user.controller";

const SignUp = () =>{
    const [lastname, setLastname] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [middlename, setMiddlename] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    function submit(){
        userController.create(
            {
                second_name: lastname, 
                name: name, 
                middlename: middlename, 
                email: email, 
                phone: phone, 
                password: password
            }
        ).then((response)=>{
            console.log(response.data);
        })
    }
    return(
        <div>
            <form action="" className='form__default'>
                <h2>Регистрация</h2>
                <div className='form__item'>
                    <span>Фамилия</span>
                    <input className='input__default' type="text" required onChange={(e)=>setLastname(e.target.value)}/>
                </div>
                <div className='form__item'>
                    <span>Имя</span>
                    <input className='input__default' type="text" required onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className='form__item'>
                    <span>Отчество</span>
                    <input className='input__default' type="text" onChange={(e)=>setMiddlename(e.target.value)}/>
                </div>
                <div className='form__item'>
                    <span>E-mail</span>
                    <input className='input__default' type="email" required onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='form__item'>
                    <span>Телефон</span>
                    <input className='input__default' type="text" required onChange={(e)=>setPhone(e.target.value)}/>
                </div>
                <div className='form__item'>
                    <span>Пароль</span>
                    <input className='input__default' type="password" required onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <br/>
                <button className="btn__default" onClick={()=>submit()}>Зарегистрироваться</button>
            </form>
        </div>
    );
}

export default SignUp;