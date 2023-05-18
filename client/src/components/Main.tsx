import Greeting from '../pages/Greeting';
import Profile from '../pages/Profile';
import SignIn from '../pages/Signin';
import SignUp from '../pages/Signup';
import '../styles/style.css';
import { Route, Routes } from 'react-router-dom';

const Main = () =>{
    return(
        <main>
            <Routes>
                <Route path='/' index element={<Greeting/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/signin' element={<SignIn/>}/>
            </Routes>
            {/* <button className='btn__default'>Зарегистрироваться</button>
            <br></br>
            <button className='btn__bordered'>Войти</button>
            <br /> */}
            {/* <form action="" className='form__default'>
                <div className='form__item'>
                    <span>E-mail</span>
                    <input className='input__default' type="text" required/>
                </div>
                <div className='form__item'>
                    <span>Пароль</span>
                    <input className='input__default' type="password" required/>
                </div>
            </form> */}
        </main>
    );
}

export default Main;