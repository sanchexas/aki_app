import { Link } from 'react-router-dom';
import PaintStarsByRate from './PaintStarsByRate';
import ImageSlider from './ImageSlider';
import { useState } from 'react';

type AreaCardType ={
    id?: number
    imgPath?: string
    title: string
    pricePerHour: number | string
    space: number | string
}
const AreaCard = ({id, imgPath, title, pricePerHour, space}: AreaCardType) =>{

    let testData = ["https://vibirai.ru/image/720087.jpg","https://pro-dachnikov.com/uploads/posts/2021-10/1633801623_12-p-kak-sdelat-doma-kak-v-studii-foto-12.jpg", "https://phonoteka.org/uploads/posts/2021-04/1619113061_25-phonoteka_org-p-podsvetka-fona-v-studii-26.jpg"]

    return(
        <Link to='' className="area__card">
            <div className="area">
                <ImageSlider slides={testData} dots/> 
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
