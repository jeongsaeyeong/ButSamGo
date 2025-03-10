import React, { useState } from 'react'
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
    const [Page, setPage] = useState('Home');

    return (
        <div className='Nav_wrap'>
            <Link to='/calendar'><img onClick={() => { setPage('Calendar') }} src={Page === 'Calendar' ? Calendar_Full : Calendar} alt="" /></Link>
            <Link to='/info'><img onClick={() => { setPage('Info') }} src={Page === 'Info' ? Info_Full : Info} alt="" /></Link>
            <Link to='/'><img onClick={() => { setPage('Home') }} src={Page === 'Home' ? Home_Full : Home} alt="" /></Link>
            <Link to='/community'><img onClick={() => { setPage('Community') }} src={Page === 'Community' ? Community_Full : Community} alt="" /></Link>
            <Link to='/map'><img onClick={() => { setPage('Map') }} src={Page === 'Map' ? Map_Full : Map} alt="" /></Link>
        </div>
    )
}

export default Nav