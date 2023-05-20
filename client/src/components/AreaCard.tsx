import { Link } from 'react-router-dom';
import testImg from '../images/test.jpg';
import PaintStarsByRate from './PaintStarsByRate';
import ImageSlider from './ImageSlider';

type AreaCardType ={
    id?: number
    imgPath?: string
    title: string
    pricePerHour: number | string
    space: number | string
}
const AreaCard = ({id, imgPath, title, pricePerHour, space}: AreaCardType) =>{
let testData = ["https://pro-dachnikov.com/uploads/posts/2021-10/1633801623_12-p-kak-sdelat-doma-kak-v-studii-foto-12.jpg", "https://phonoteka.org/uploads/posts/2021-04/1619113061_25-phonoteka_org-p-podsvetka-fona-v-studii-26.jpg"]

    return(
        <Link to='' className="area__card">
            <div className="area">
                {/* <div className="area__card__img"> */}
                    {/* <img src={`${process.env.REACT_APP_API_URL}/${imgPath}`} alt="img" /> */}
                    {/* <img src={testImg} alt="img" /> */}
                    
                {/* </div> */}
                <ImageSlider slides={testData}/> 
                <div className="area__card__content">
                    <div className='area__card__title'>{title}</div>
                    <b className='area__card__price'>{pricePerHour} ₽/час</b>
                    <div className='area__card__space'>{space} м<sup>2</sup></div>
                    <PaintStarsByRate rate={3}/>
                </div>
            </div>
        </Link>
    );
}

export default AreaCard;
