import React from 'react'
import Back from '../../assets/img/icon/back.svg'
import { useNavigate } from 'react-router-dom'
import Picture from '../../assets/img/icon/picture.svg'

const Student = () => {
    const navigation = useNavigate();

    const onBack = () => {
        navigation(-1)
    }

    return (
        <div className='Student_wrap container'>
            <div>
                <button onClick={() => { onBack() }} className='back_btn'><img src={Back} alt="" /></button>
                <div className="studentid">
                    <div className="photo">
                        <img src="" alt="" />
                    </div>
                    <img src={Picture} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Student