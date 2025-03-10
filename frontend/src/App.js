import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Section/Main'
import Header from './components/Section/Header'
import Nav from './components/Section/Nav'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <Nav />
    </BrowserRouter>
  )
}

export default App