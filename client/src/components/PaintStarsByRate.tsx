import RateStar from "./RateStar";

type PaintStarProps ={
    rate: number
}

const PaintStarsByRate = ({rate}: PaintStarProps) =>{
    return(
        <div style={{display: "flex", gap: "5px"}}>
            {[...Array(5)].map((_, i)=>{
                const  ratingValue = i + 1;
                return(
                    <RateStar key={i} color={ratingValue <= rate ? 'rgb(231, 67, 98)' : '#cccccc'}/>
                );
            })}
        </div>
    );
}

export default PaintStarsByRate;