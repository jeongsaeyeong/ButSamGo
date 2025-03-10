import React from 'react'
import Back from '../../assets/img/icon/back.svg'
import { Link, useNavigate } from 'react-router-dom'

const Join = () => {
    const navigation = useNavigate();

    const onBack = () => {
        navigation(-1)
    }

    const onJoin = () => {
        navigation('/joinsuccess')
    }

    return (
        <div className='Join_wrap container'>
            <button onClick={() => { onBack() }} className='back_btn'><img src={Back} alt="" /></button>
            <h2>회원가입</h2>
            <input type="text" placeholder='이름을 입력해주세요.' />
            <input type="text" placeholder='이메일을 입력해주세요.' />
            <input type="password" placeholder='비밀번호를 입력해주세요.' />
            <input type="password" placeholder='비밀번호를 재입력해주세요.' />
            <button onClick={() => { onJoin() }} className='join_button'>회원가입 하기</button>
            <Link to='/login'>로그인 하기</Link>
        </div>
    )
}

export default Join