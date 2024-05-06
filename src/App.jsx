import { Route, Routes } from 'react-router-dom'
import './App.css'


import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import NotFound from './Pages/NotFound';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {
  

  return (
    <>
     <Routes>
     <Route path="/" element={<HomePage />}> </Route>
     <Route path="/about" element={<AboutUs />}> </Route>
     

     <Route path = '/Signup' element ={<Signup />}> </Route> 
     <Route path = '/login' element ={<Login />}> </Route> 
 
   <Route path="*" element={<NotFound />}></Route>
     </Routes>

     {/* <HomeLayout /> */}
    </>
  )
}

export default App
