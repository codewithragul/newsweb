import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Header from './components/Header'
import AsideBar from './components/AsideBar'
import Business from './components/Business'
import World from './Pages/World'
import Sports from './components/Sports'
import Entertainment from './components/Entertainment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <AsideBar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/business' element={<Business />} />
          <Route path='/world' element={<World />} />
          <Route path='/sports' element={<Sports />} />
          <Route path='/entertainment' element={<Entertainment />} />



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
