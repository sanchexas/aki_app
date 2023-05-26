import { useEffect, useRef, useState } from 'react';
import data from '../testData.json';
import userController from '../controllers/user.controller';

const Account = () =>{
    const [edit, setEdit] = useState<boolean>(false);
    const [editPhoto, setEditPhoto] = useState<boolean>(false);
    const [image, setImage] = useState<string>();
    const [imageFile, setImageFile] = useState<File>();
    const [preview, setPreview] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [phone, setPhone] = useState<string>();
    const fileInput = useRef<HTMLInputElement>(null);
    const formElement = useRef<HTMLFormElement>(null);
    const editHandler = () =>{
        (edit === false) ? setEdit(true) : setEdit(false);
    }
    const editPhotoHandler = () =>{
        (editPhoto === false) ? setEditPhoto(true) : setEditPhoto(false);
    }
    const submitFormAvatar = async (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        if(formElement.current){
            const formData = new FormData(formElement.current);
            await userController.uploadImage(formData);
            window.location.reload();
        }
    }
    const submitProfileChanges = async () =>{
        await userController.updateProfile({
            email: email,
            phone: phone
        })
    }
    useEffect(()=>{
        if(imageFile !== undefined){
            const fileReader = new FileReader();
            fileReader.onloadend = () =>{
                setPreview(fileReader.result as string);
            }
            fileReader.readAsDataURL(imageFile);
        }
    },[imageFile]);
    useEffect(()=>{
        //получения юзера из бд
        setEmail(data.testUser[0].email);
        setPhone(data.testUser[0].phone);
        setImage(data.testUser[0].image);
    },[]);
    return(
        <div>
            <h1>Учетная запись</h1>
            <div className="account__info">
                <div className='accoint__info__head'>
                    <div className='account__info__avatar' onClick={()=>{editPhotoHandler(); setEdit(false)}}>
                        <img src={data.testUser[0].image} alt="avatar" />
                    </div>
                    <div>{data.testUser[0].second_name} {data.testUser[0].name} {data.testUser[0].middlename}</div>
                </div>
                {(!edit) ? 
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
                :
                <div className='account__info__main'>
                    <div className='accont__info__item'>
                        <span style={{color: "gray", fontSize: "17px"}}>Электронная почта:</span>
                        <input className='input__default__light' type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className='accont__info__item'>
                        <span style={{color: "gray", fontSize: "17px"}}>Телефон:</span>
                        <input className='input__default__light' type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    </div>
                </div>
                }
                {(!edit) ?
                    <div className='account__info__btns'>
                        <button className='btn__bordered__light' onClick={()=>editHandler()}>Редактировать</button>
                    </div>
                :
                    <div className='account__info__btns'>
                        <button className='btn__bordered__light' onClick={()=>editHandler()}>Отмена</button>
                        <button className='btn__default' onClick={()=>submitProfileChanges()}>Сохранить</button>
                    </div>
                }
                
            </div>
            <div onClick={()=>setEditPhoto(false)} style={{
                position: "fixed",
                width: "100%",
                height: "100vh",
                background: "rgba(0, 0, 0, 0.290)",
                top: "0px",
                left: "0px",
                display: editPhoto ? "flex" : "none",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <form className='avatar__editor__window' ref={formElement} onClick={(e)=>e.stopPropagation()} onSubmit={submitFormAvatar} encType='multipart/form-data'>
                    <div className='avatar__edit'>
                        <img src={(preview) ? preview : image} alt="avatar" />
                    </div>
                    <input type="file" 
                        ref={fileInput}
                        style={{display: "none"}}
                        name='image'
                        accept='image/*'
                        onChange={(event)=>{
                            if(event.target.files !== null){
                                const file = event.target.files[0];
                                setImageFile(file);
                            }
                        }}    
                    />
                    <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                        <button className='btn__bordered__light' onClick={(e)=>{
                            e.preventDefault();
                            fileInput.current?.click();
                        }}>Загрузить</button>
                        <button className='btn__default' type='submit'>Сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Account;