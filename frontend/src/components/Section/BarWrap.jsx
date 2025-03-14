import React from 'react'
import Dday from './Dday'
import Profile from './Profile'
import Time from './Time'

const BarWrap = () => {
    return (
        <div className='BarWrap_wrap'>
            <Dday />
            <Profile />
            <Time />
        </div>
    )
}

export default BarWrap