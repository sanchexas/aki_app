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
            background: "#f2f2f2",
            width: "280px",
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
            <form className="areas__page__header">
                <input type="text" className='input__default__light' style={{width: "300px"}}/>
                <Select 
                    options={data.testOptions} 
                    styles={colorStyles} 
                    placeholder="Индустрия" 
                    noOptionsMessage={({inputValue}) => !inputValue ? "" : "Не найдено"} 
                />
                <Select 
                    options={data.testOptions} 
                    styles={colorStyles} 
                    placeholder="Индустрия" 
                    noOptionsMessage={({inputValue}) => !inputValue ? "" : "Не найдено"} 
                />
                <button className="btn__default">
                    больше
                </button>
            </form>
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