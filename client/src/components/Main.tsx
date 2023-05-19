import Greeting from '../pages/Greeting';
import Profile from '../pages/Profile';
import SignIn from '../pages/Signin';
import SignUp from '../pages/Signup';
import '../styles/style.css';
import { Route, Routes, } from 'react-router-dom';
import NotFound from './NotFound';

const Main = () =>{
    return(
        <main>
            <Routes>
                <Route path='/' index element={<Greeting/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/signin' element={<SignIn/>}/>
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </main>
    );
}

export default Main;