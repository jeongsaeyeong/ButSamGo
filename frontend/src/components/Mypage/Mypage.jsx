import React from 'react'
import Profile from '../../assets/img/icon/profile.svg'

const Mypage = () => {
    return (
        <div className='Mypage_wrap container'>
            <img src={Profile} alt="" />
            <h1>김천사 님!</h1>
            <div>내 정보 확인하기</div>
            <button>로그아웃</button>
        </div>
    )
}

export default Mypage