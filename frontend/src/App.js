import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Section/Main'
import Schedule from './components/Schedule/Schedule'
import Log from './components/Article/Log'
import Notice from './components/Article/Notice'
import Profile from './components/User/Profile'
import Setting from './components/Setting/Setting'
import Nav from './components/Section/Nav'
import BarWrap from './components/Section/BarWrap'

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/schedule' element={<Schedule />} />
                <Route path='/notice' element={<Notice />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/setting' element={<Setting />} />
                <Route path='/log/:type' element={<Log />} />
            </Routes>
            <BarWrap />
        </BrowserRouter>
    )
}

export default App