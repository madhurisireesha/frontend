import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Edit from './Edit'
import Add from './Add'
import Home from './Home'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/edit/:id' Component={Edit}/>
         <Route path='/add/' Component={Add}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
