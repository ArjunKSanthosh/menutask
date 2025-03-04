import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import AddItems from './Components/AddItems'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/add' Component={AddItems}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
