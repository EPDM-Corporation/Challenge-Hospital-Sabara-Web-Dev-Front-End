import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Sobre from './routes/Sobre.jsx'
import System from './routes/System.jsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<Error />} />
        <Route path='/system' element={<System />} />
        <Route path='/sobre' element={<Sobre />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App
