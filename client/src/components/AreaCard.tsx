import { Link } from 'react-router-dom';
import PaintStarsByRate from './PaintStarsByRate';
import ImageSlider from './ImageSlider';
import data from '../testData.json';

type AreaCardType ={
    id?: number
    imgPath?: string
    title: string
    pricePerHour: number | string
    space: number | string
}
const AreaCard = ({id, imgPath, title, pricePerHour, space}: AreaCardType) =>{

    return(
        <Link to='' className="area__card">
            <div className="area">
                <ImageSlider slides={data.testImgUrls} dots/> 
                <div className="area__card__content">
                    <div className='area__card__title'>{title}</div>
                    <div className='area__card__space'>{space} м<sup>2</sup></div>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <b className='area__card__price'>{pricePerHour} ₽/час</b>
                        <PaintStarsByRate rate={3}/>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default AreaCard;
