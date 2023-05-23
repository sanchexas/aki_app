import { Link, Outlet,} from 'react-router-dom';

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