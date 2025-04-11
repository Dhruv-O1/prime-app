import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PrimeForm } from './componnent/PrimeForm'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import { ShowData } from './componnent/ShowData'

function App() {
  const [count, setCount] = useState(0)

  axios.defaults.baseURL = "http://localhost:3011"

  return (
    <>
    <Routes>
      <Route path='/' element={<PrimeForm/>}></Route>
      <Route path='/get' element={<ShowData/>}></Route>
    </Routes>
     
    </>
  )
}

export default App
