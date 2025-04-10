import Login from './routes/Login.jsx'
import Home from './routes/Home.jsx'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
function App() {

  return (
  <BrowserRouter>

    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>

  </BrowserRouter>
    
  )
}

export default App
