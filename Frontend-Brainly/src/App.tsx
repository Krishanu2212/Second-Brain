import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'
import { Card } from './components/ui/Card'
import { SidebarComps } from './components/ui/SidebarComps'
import { XIcon } from './icons/XIcon'
import { Sidebar } from './components/ui/Sidebar'
import { Body } from './components/ui/Body'
import { CreateContentModal } from './components/ui/CreateContentModal'
import { Dashboard } from './pages/Dashboard'
import { Auth } from './pages/Auth'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/signup' element={<Auth type='signup'/>}/>
        <Route path='/signin' element={<Auth type='signin'/>}/>
      </Routes>
    </BrowserRouter>
    )
}

export default App
