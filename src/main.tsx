import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import SingupPortal from './SingupPortal.tsx'
import LoginPortal from './LoginPortal.tsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/singup' element={<SingupPortal />} />
        <Route path='/login' element={<LoginPortal />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </Router>
  </StrictMode>,
)
