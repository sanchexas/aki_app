import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userController from "../controllers/user.controller";

const SignUpLandLord = () =>{
    const [lastname, setLastname] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [middlename, setMiddlename] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [position, setPosition] = useState<string>('');
    const [areaName, setAreaName] = useState<string>('');
    const [organisation, setOrganisation] = useState<string>('');
    const [inn, setInn] = useState<string>('');
    const [industry, setIndustry] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const redirect = useNavigate();
    function submit(){
        userController.createLandLord(
            {
                second_name: lastname, 
                name: name, 
                middlename: middlename, 
                email: email, 
                phone: phone, 
                password: password,
                position: position,
                area_name: areaName,
                organisation: organisation,
                inn: inn,
                industry: industry,
                description: description
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
                <h2>Арендодатель</h2>
                <div className="two__form__blocks">
                    <div>
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
                            <input className='input__default' type="text" required onChange={(e)=>setMiddlename(e.target.value)}/>
                        </div>
                        <div className='form__item'>
                            <span>Почта</span>
                            <input className='input__default' type="text" required onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className='form__item'>
                            <span>Телефон</span>
                            <input className='input__default' type="text" required onChange={(e)=>setPhone(e.target.value)}/>
                        </div>
                        <div className='form__item'>
                            <span>Должность</span>
                            <input className='input__default' type="text" required onChange={(e)=>setPosition(e.target.value)}/>
                        </div>
                        <div className='form__item'>
                            <span>Название площадки</span>
                            <input className='input__default' type="text" required onChange={(e)=>setAreaName(e.target.value)}/>
                        </div>
                    </div>
                    <div>
                        
                        <div className='form__item'>
                            <span>Название юр. лица</span>
                            <input className='input__default' type="text" required onChange={(e)=>setOrganisation(e.target.value)}/>
                        </div>
                        <div className='form__item'>
                            <span>ИНН</span>
                            <input className='input__default' type="text" required onChange={(e)=>setInn(e.target.value)}/>
                        </div>
                        <div className='form__item'>
                            <span>Индустрия</span>
                            <select className='input__default' required onChange={(e)=>setIndustry(e.target.value)}>
                                <option value="default">default</option>
                            </select>
                        </div>
                        <div className='form__item'>
                            <span>Описание площадки</span>
                            <textarea className='input__default' rows={3} required onChange={(e)=>setDescription(e.target.value)}/>
                        </div>
                        <div className='form__item'>
                            <span>Придумайте пароль</span>
                            <input className='input__default' type="password" required onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <br />
                <button className="btn__default" onClick={(e)=>{submit();  e.preventDefault()}}>Зарегистрироваться</button>
            </form>
        </div>
    );
}

export default SignUpLandLord;