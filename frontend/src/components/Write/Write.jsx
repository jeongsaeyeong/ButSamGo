import React from 'react'
import Back from '../../assets/img/icon/back.svg'
import { useNavigate } from 'react-router-dom';

const Write = () => {
    const navigation = useNavigate();

    const onBack = () => {
        navigation(-1)
    }
    return (
        <div className='Write_wrap container'>
            <div>
                <button onClick={() => { onBack() }} className='back_btn'><img src={Back} alt="" /></button>
                <input type="text" placeholder='제목을 입력해주세요' />
                <input className='file' type="file" name="" id="" />
                <textarea name="" id="" placeholder='내용을 입력해주세요'></textarea>
                <div>
                    <button className='write_btn'>등록하기</button>
                </div>
            </div>
        </div>
    )
}

export default Write