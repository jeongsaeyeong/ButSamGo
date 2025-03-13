import React, { useState } from 'react'
import Back from '../../assets/img/icon/back.svg'
import { Link, useNavigate } from 'react-router-dom'
import Error from '../Section/Error';

const Login = () => {
    const [useremail, setUseremail] = useState('')
    const [userpass, setUserpass] = useState('');
    const [error, setError] = useState(false);
    const [errormsg, setErrorMsg] = useState('');

    const navigation = useNavigate();

    const onBack = () => {
        navigation('/')
    }

    const onLogin = () => {
        if (!useremail && !userpass) {
            setError(true)
            setErrorMsg('빈칸을 모두 채워주세요!')
            return
        }

        handleLogin();
    }

    const handleLogin = async () => {
        const response = await fetch("http://ooooo0516.dothome.co.kr/backend/login.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ useremail, userpass }),
        });

        try {
            const data = await response.json();
            if (data.success) {
                window.localStorage.setItem('userid', data.id)
                navigation('/');
            } else {
                setError(true);
                setErrorMsg(data.error || "로그인 실패!");
            }
        } catch (error) {
            setError(true);
            setErrorMsg("서버 응답 오류!");
        }
    };


    return (
        <div className='Login_wrap container'>
            <button onClick={() => { onBack() }} className='back_btn'><img src={Back} alt="" /></button>
            <h2>로그인</h2>
            <input value={useremail} onChange={(e) => { setUseremail(e.target.value) }} type="text" placeholder='이메일을 입력해주세요.' />
            <input value={userpass} onChange={(e) => { setUserpass(e.target.value) }} type="password" placeholder='비밀번호를 입력해주세요.' />
            <button onClick={() => { onLogin() }} className='login_button'>로그인 하기</button>
            <Link to='/join'>회원가입 하기</Link>
            {error ? (<Error errormsg={errormsg} setError={setError} />) : (<></>)}
        </div>
    )
}

export default Login