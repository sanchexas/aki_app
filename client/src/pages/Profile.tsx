import { Routes, Route, Link, Outlet, NavLink,} from 'react-router-dom';
import data from '../testData.json';
import Account from '../components/Account';
import TestComponent from '../components/TestComponent';

const Profile = () =>{
    return(
        <div className="profile__page">
            <div className='profile__list'>
                <h1>Профиль</h1>
                <div className='profile__list__items'>
                    <Link to='/profile'>Учетная запись</Link>
                    <Link to='/profile/test'>Тест</Link>
                </div>
            </div>
            <div className='profile__content'>
                <Outlet/>
            </div>
        </div>
    );
}

export default Profile;