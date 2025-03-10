import React from 'react'
import Calendar from '../../assets/img/icon/calendar.svg'
import Calendar_Full from '../../assets/img/icon/calendar_full.svg'
import Home from '../../assets/img/icon/home.svg'
import Home_Full from '../../assets/img/icon/home_full.svg'
import Info from '../../assets/img/icon/info.svg'
import Info_Full from '../../assets/img/icon/info_full.svg'
import Community from '../../assets/img/icon/community.svg'
import Community_Full from '../../assets/img/icon/community_full.svg'
import Map from '../../assets/img/icon/map.svg'
import Map_Full from '../../assets/img/icon/map_full.svg'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='Nav_wrap'>
            <Link path='/'><img src={Calendar} alt="" /></Link>
            <Link path='/'><img src={Info} alt="" /></Link>
            <Link path='/'><img src={Home_Full} alt="" /></Link>
            <Link path='/'><img src={Community} alt="" /></Link>
            <Link path='/'><img src={Map} alt="" /></Link>
        </div>
    )
}

export default Nav