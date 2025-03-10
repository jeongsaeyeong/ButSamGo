import React from 'react'
import Back from '../../assets/img/icon/back.svg'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigation = useNavigate();

    const onBack = () => {
        navigation('/')
    }

    const onLogin = () => {

    }

    return (
        <div className='Login_wrap container'>
            <button onClick={() => { onBack() }} className='back_btn'><img src={Back} alt="" /></button>
            <h2>로그인</h2>
            <input type="text" placeholder='아이디를 입력해주세요.' />
            <input type="password" placeholder='비밀번호를 입력해주세요.' />
            <button onClick={() => { onLogin() }} className='login_button'>로그인 하기</button>
            <Link to='/join'>회원가입 하기</Link>
        </div>
    )
}

export default Login