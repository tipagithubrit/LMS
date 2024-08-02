import { Route, Routes } from 'react-router-dom'
import './App.css'


import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import NotFound from './Pages/NotFound';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import CourseList from './Pages/Course/CourseList';
import Contact from './Pages/Contact';
import Denied from './Pages/Denied';
import CourseDescription from './Pages/Course/CourseDescription';
import RequireAuth from './Components/Auth/RequireAuth';
import CreateCourse from './Pages/Course/CreateCourse';
import Profile from './Pages/User/Profile';
import EditPRofile from './Pages/User/EditProfile';
import Checkout from './Pages/Payment/Checkout';
import CheckoutSuccess from './Pages/Payment/CheckoutSuccess';
import CheckoutFailure from './Pages/Payment/CheckoutFailure';
// import CheckoutSuccess from './Pages/Payment/CheckoutSuccess.js';

function App() {
  

  return (
    <>
     <Routes>
     <Route path="/" element={<HomePage />}> </Route>
     <Route path="/about" element={<AboutUs />}> </Route>
     <Route path = '/courses' element ={<CourseList />}> </Route>
     <Route path='/contact'element={<Contact />} />
      <Route path='/course/create' element={<CreateCourse />} /> 
     <Route path='/denied'element={<Denied />} />

     <Route path='/course/description' element={<CourseDescription />} />
     

     <Route path = '/Signup' element ={<Signup />}> </Route> 
     <Route path = '/login' element ={<Login />}> </Route> 

     <Route element={<RequireAuth allowedRoles={["ADMIN"]}/>}>
      <Route path='/course/create' element={<CreateCourse />} />
     </Route>

     <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]}/>}>
      <Route path='/user/profile' element={<Profile />} />
      <Route path='/user/editprofile' element={<EditPRofile />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/checkout/success' element={<CheckoutSuccess />} />
      <Route path='/checkout/fail' element={<CheckoutFailure />} />
      </Route>
 
   <Route path="*" element={<NotFound />}></Route>
     </Routes>

     
    </>
  )
}

export default App
