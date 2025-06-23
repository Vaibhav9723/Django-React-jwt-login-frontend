import Reg from './Component/Reg'
import Login from './Component/Login'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Component/Home';


const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/reg' element={<Reg/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App