import AreaCard from "../components/AreaCard";

const Areas = () =>{
    return(
        <div className="areas__page">
            <div className="areas__page__header">
                <input type="text" className="input__default" />
                <input type="text" className="input__default" />
                <input type="text" className="input__default" />
            </div>
            <div className="areas__page__main">
                <AreaCard title="Арт-пространство завода «Кристалл»" pricePerHour={228} space={20}/>
                <AreaCard title="Арт-пространство завода «Кристалл»" pricePerHour={228} space={20}/>
                <AreaCard title="Арт-пространство завода «Кристалл»" pricePerHour={228} space={20}/>
                <AreaCard title="Арт-пространство завода «Кристалл»" pricePerHour={228} space={20}/>
                <AreaCard title="Арт-пространство завода «Кристалл»" pricePerHour={228} space={20}/>
            </div>
        </div>
    );
}

export default Areas;