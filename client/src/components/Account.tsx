import data from '../testData.json';

const Account = () =>{
    return(
        <div>
            <h1>Учетная запись</h1>
            <div className="account__info">
                <div className='accoint__info__head'>
                    <div className='account__info__avatar'>
                        <img src={data.testUser[0].image} alt="" />
                    </div>
                    <div className='account__info__name'>{data.testUser[0].second_name} {data.testUser[0].name} {data.testUser[0].middlename}</div>
                </div>
                <div className='account__info__main'>
                    <div className='accont__info__item'>
                        <span style={{color: "gray", fontSize: "17px"}}>Электронная почта:</span>
                        <span>{data.testUser[0].email}</span>
                    </div>
                    <div className='accont__info__item'>
                        <span style={{color: "gray", fontSize: "17px"}}>Телефон:</span>
                        <span>{data.testUser[0].phone}</span>
                    </div>
                </div>
                <div className='account__info__btns'>
                    <button className='btn__bordered__light'>Редактировать</button>
                </div>
            </div>
        </div>
    );
}

export default Account;