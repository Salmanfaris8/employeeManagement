import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Add from './pages/Add'
import Edit from './pages/Edit'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/:id/edit' element={<Edit/>}/>
    </Routes>
    </>
  )
}

export default App
