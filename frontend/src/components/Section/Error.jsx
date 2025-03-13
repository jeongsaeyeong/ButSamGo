import React from 'react'
import Errorimg from '../../assets/img/icon/error.svg'

const Error = ({ errormsg, setError }) => {
    return (
        <div className='Error_wrap'>
            <div className="pop_wrap">
                <img src={Errorimg} alt="" />
                <p>{errormsg}</p>
                <div className="btn_box">
                    <button onClick={() => { setError(false) }} className='ok'>확인</button>
                </div>
            </div>
        </div>
    )
}

export default Error