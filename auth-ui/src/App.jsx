import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Login from './pages/login'
import Signup from './pages/signup'

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Navigate to="/login" />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
