
import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import Schedule from './pages/Schedule'
import MeetingDetail from './pages/MeetingDetail'
import DriversChampionship from './pages/DriversChampionship'
import ConstructorsChampionship from './pages/ConstructorsChampionship'


function App() {
  
  return (
    <Routes>
      <Route path='/' element={<MainPage />}/>
      <Route path='/schedule'>
        <Route index element={<Schedule />}/>
        <Route path=':meeting_key' element={<MeetingDetail />}/>
      </Route>
      <Route path='/drivers-championship' element={<DriversChampionship />}></Route>
      <Route path='constructors-championship' element={<ConstructorsChampionship />} />
    </Routes>
  )
}

export default App
