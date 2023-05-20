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
            <Link to='/areas' style={{width: "200px"}} className="btn__default">Каталог площадок</Link>
            </div>
            <img className="greet__vector" src={vector} alt="vector" />
        </div>
    );
}

export default Greeting;