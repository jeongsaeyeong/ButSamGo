import React from 'react'
import { Link } from 'react-router-dom'

const JoinSuccess = () => {
    return (
        <div className='JoinSuccess_wrap container'>
            <h1>회원가입 완료!</h1>
            <Link className='goLogin' to='/login'>메인 화면으로 가기</Link>
        </div>
    )
}

export default JoinSuccess