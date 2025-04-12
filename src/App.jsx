import Login from './routes/Login.jsx'
import Home from './routes/Home.jsx'
import Error from './routes/Error.jsx'
import System from './routes/System.jsx'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
function App() {

  return (
  <BrowserRouter>

    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='*' element={<Error/>}/>
      <Route path='/system' element={<System/>}/>
    </Routes>

  </BrowserRouter>
    
  )
}

export default App
