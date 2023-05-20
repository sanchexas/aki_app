type AreaCardType ={
    imgPath: string
    title: string
    pricePerHour: number | string
    space: number | string
}

const AreaCard = ({imgPath, title, pricePerHour, space}: AreaCardType) =>{
    return(
        <div className="area__card">
            <div className="area">
                <div className="area__card__img">
                    <img src={imgPath} alt="" />
                </div>
                <div className="area__card__content">

                </div>
            </div>
        </div>
    );
}

export default AreaCard;
