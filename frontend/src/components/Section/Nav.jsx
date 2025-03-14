import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../../assets/img/icon/home.svg'
import Schedule from '../../assets/img/icon/schedule.svg'
import Log from '../../assets/img/icon/community.svg'
import Notice from '../../assets/img/icon/notice.svg'
import Profile from '../../assets/img/icon/profile.png'
import Setting from '../../assets/img/icon/setting.svg'

const Nav = () => {
    return (
        <div className='Nav_wrap'>
            <Link to='/'><img src={Home} alt={Home} /></Link>
            <Link to='/schedule'><img src={Schedule} alt={Schedule} /></Link>
            <Link to='/log/log'><img src={Log} alt={Log} /></Link>
            <Link to='/notice'><img src={Notice} alt={Notice} /></Link>
            <Link to='/profile'><img src={Profile} alt={Profile} /></Link>
            <Link to='/setting'><img src={Setting} alt={Setting} /></Link>
        </div>
    )
}

export default Nav