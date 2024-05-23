import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from "./layout/Header"
import Collection from './pages/Collection'
import Shop from './pages/Shop'
import Add from './pages/Add'
import Detail from './pages/Detail'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Collection/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/:detailId' element={<Detail/>}/>
      <Route path='/add' element={<Add/>}/>
    </Routes>
    </>
  )
}

export default App
