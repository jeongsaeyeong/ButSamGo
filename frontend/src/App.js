import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Section/Main'
import Header from './components/Section/Header'
import Nav from './components/Section/Nav'
import Calendar from './components/Calendar/Calendar'
import Community from './components/Community/Community'
import Info from './components/Info/Info'
import Map from './components/Map/Map'
import Login from './components/User/Login'
import Join from './components/User/Join'
import Mypage from './components/Mypage/Mypage'
import JoinSuccess from './components/User/JoinSuccess'
import Detail from './components/Detail/Detail'
import Write from './components/Write/Write'
import Student from './components/User/Student'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/community' element={<Community />} />
        <Route path='/write' element={<Write />} />
        <Route path='/community/:page' element={<Detail />} />
        <Route path='/info' element={<Info />} />
        <Route path='/map' element={<Map />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/joinsuccess' element={<JoinSuccess />} />
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/studentid' element={<Student />} />
      </Routes>
      <Nav />
    </BrowserRouter>
  )
}

export default App