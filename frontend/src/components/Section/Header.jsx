import React from 'react'
import Logo from '../../assets/img/icon/logo_row.png'
import Mypage from '../../assets/img/icon/mypage.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='Header_Wrap'>
            <Link to='/' className="logo"><img src={Logo} alt="" /></Link>
            <Link to='/mypage'><img src={Mypage} alt="" /></Link>
        </div>
    )
}

export default Header