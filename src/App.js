import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './layouts/main/Main'
import Products from './pages/Products/Products'
import AboutUs from './pages/About us/AboutUs'
import Contacts from './pages/Contacts/Contacts'


const App = () => {
  return (
    <div>

        <Routes>

          <Route path='/' element={<Main />} />
          <Route path='/products' element={<Products />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/contacts' element={<Contacts />} />

        </Routes>

    </div>
  )
}

export default App