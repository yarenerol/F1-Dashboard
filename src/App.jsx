
import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import Schedule from './pages/Schedule'


function App() {
  
  return (
    <Routes>
      <Route path='/' element={<MainPage />}/>
      <Route path='/schedule' element={<Schedule />} />
    </Routes>
  )
}

export default App
