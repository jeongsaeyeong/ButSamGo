import React, { useState } from 'react'
import Back from '../../assets/img/icon/back.svg'
import { Link, useNavigate } from 'react-router-dom'
import Error from '../Section/Error';

const Join = () => {
    const [username, setUsername] = useState('');
    const [useremail, setUseremail] = useState('');
    const [userpass, setUserpass] = useState('');
    const [userpassre, setUserpassre] = useState('');
    const [error, setError] = useState(false);
    const [errormsg, setErrorMsg] = useState('');

    const navigation = useNavigate();

    const onBack = () => {
        navigation(-1)
    }

    const onJoin = () => {
        if (username & useremail & userpass & userpassre) {
            setError(true);
            setErrorMsg('빈칸을 채워주세요!')
            return
        }

        if (userpass !== userpassre) {
            setError(true)
            setErrorMsg('비밀번호가 일치하지 않습니다!')
            return
        }
        handleRegister();
    }

    const handleRegister = async () => {
        const response = await fetch("http://ooooo0516.dothome.co.kr/backend/join.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ useremail, username, userpass }),
        });
        const data = await response.json();
        alert(data.success ? navigation('/joinsuccess') : "회원가입 실패!");
    };

    return (
        <div className='Join_wrap container'>
            <button onClick={() => { onBack() }} className='back_btn'><img src={Back} alt="" /></button>
            <h2>회원가입</h2>
            <input value={username} onChange={(e) => { setUsername(e.target.value) }} type="text" placeholder='이름을 입력해주세요.' />
            <input value={useremail} onChange={(e) => { setUseremail(e.target.value) }} type="text" placeholder='이메일을 입력해주세요.' />
            <input value={userpass} onChange={(e) => { setUserpass(e.target.value) }} type="password" placeholder='비밀번호를 입력해주세요.' />
            <input value={userpassre} onChange={(e) => { setUserpassre(e.target.value) }} type="password" placeholder='비밀번호를 재입력해주세요.' />
            <button onClick={() => { onJoin() }} className='join_button'>회원가입 하기</button>
            <Link to='/login'>로그인 하기</Link>
            {error ? (<Error errormsg={errormsg} setError={setError} />) : (<></>)}
        </div>
    )
}

export default Join