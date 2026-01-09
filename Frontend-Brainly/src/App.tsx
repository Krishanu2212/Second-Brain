import './App.css'
import { Dashboard } from './pages/Dashboard'
import { Auth } from './pages/Auth'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SharedUserDashboard } from './pages/SharedUserDashboard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/signup' element={<Auth type='signup'/>}/>
        <Route path='/signin' element={<Auth type='signin'/>}/>
        <Route path='/sharedUserDashboard/:hash' element={<SharedUserDashboard />}/>
      </Routes>
    </BrowserRouter>
    )
}

export default App
