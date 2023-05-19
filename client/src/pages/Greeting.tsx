import { Link } from "react-router-dom";
import vector from '../images/vector_greet.webp'

const Greeting = () =>{
    return(
        <div className="greet__page">
            <div className="greeting">
                <div className="greet__title">
                    <span>агенство</span>
                    <span>креативных</span>
                    <span>индустрий</span>
                </div>
                <p>Агентство креативных индустрий является единым окном для взаимодействия
                органов власти и представителей креативного предпринимательства Москвы.</p>
                <div style={{display: "flex", gap:"40px"}}>
                    <Link to="/signupas" className='btn__bordered'>Зарегистрироваться</Link>
                    <Link to="/signin" className='btn__default'>Войти</Link>
                </div>
            </div>
            <img className="greet__vector" src={vector} alt="vector" />
        </div>
    );
}

export default Greeting;