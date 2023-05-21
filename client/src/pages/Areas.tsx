import AreaCard from "../components/AreaCard";
import Select from 'react-select';
import data from '../testData.json';

const Areas = () =>{

    const colorStyles = {
        control: (styles: any) => ({
            ...styles, 
            border: "none",
            cursor: "text",
            boxShadow: "none",
            background: "rgba(0,0,0,.08)",
            width: "200px",
            height: "45px",
            color: "gray"
        }),
        option: (styles: any, state: any)=>{
            return {
                ...styles, 
                backgroundColor: "white", 
                cursor: "pointer",
                ':hover':{backgroundColor: "#f2f2f2"}, 
                borderColor: "green", 
                color: "black",
                boxShadow: "none"
            }
        },
        placeholder: (styles: any)=>{
            return {
                ...styles,
                color: "gray",
                fontWeight: "700"
            }
        },
        dropdownIndicator: (styles: any)=>{
            return {
                ...styles,
                color: "gray",
                cursor: "pointer"
            }
        },
        singleValue: (styles: any)=>{
            return {
                ...styles,
                color: "black",
                fontWeight: "700"
            }
        },
        noOptionsMessage: (styles: any) => ({
            ...styles, 
            inputValue: "dssdsd"
        }),
    }
    return(
        <div className="areas__page">
            <div className="areas__page__header">
                <Select options={data.testOptions} styles={colorStyles} placeholder="Индустрия" noOptionsMessage={({inputValue}) => !inputValue ? "sdfsdf" : "Не найдено"} />
                <Select options={data.testOptions} styles={colorStyles} placeholder="Площадь" noOptionsMessage={({inputValue}) => !inputValue ? "sdfsdf" : "Не найдено"} />
                <Select options={data.testOptions} styles={colorStyles} placeholder="Еще чо то" noOptionsMessage={({inputValue}) => !inputValue ? "sdfsdf" : "Не найдено"} />
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