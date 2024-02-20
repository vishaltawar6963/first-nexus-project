import logo from './logo.svg';
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <div className='d-flex align-items-center gradient-background' style={{height:'100vh'}} > 
       <BrowserRouter>
    <Routes>
     
     <Route path='/' element={<Login/>}/>
     <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </div>
 
  );
}

export default App;
