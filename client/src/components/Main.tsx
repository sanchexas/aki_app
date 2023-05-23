import Greeting from '../pages/Greeting';
import Profile from '../pages/Profile';
import SignIn from '../pages/Signin';
import SignUpTenant from '../pages/SignupTenant';
import '../styles/style.css';
import { Route, Routes, } from 'react-router-dom';
import NotFound from './NotFound';
import SignUpAs from '../pages/SignUpAs';
import SignUpLandLord from '../pages/SignupLandlord';
import Areas from '../pages/Areas';
import Account from './Account';
import TestComponent from './TestComponent';

const Main = () =>{
    return(
        <main>
            <Routes>
                <Route path='/' index element={<Greeting/>}/>
                <Route path='/profile' element={<Profile/>}>
                    <Route path='' element={<Account/>}/>
                    <Route path='test' element={<TestComponent/>}/>
                </Route>   
                <Route path='/signup/tenant' element={<SignUpTenant/>}/>
                <Route path='/signup/landlord' element={<SignUpLandLord/>}/>
                <Route path='/signupas' element={<SignUpAs/>}/>
                <Route path='/signin' element={<SignIn/>}/>
                <Route path="*" element={<NotFound/>} />
                <Route path='/areas' element={<Areas/>}/>
            </Routes>
        </main>
    );
}

export default Main;