import LandingPage from './components/LandingPage'
import './App.css';
import Profile from './components/Profile';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import MainShop from './components/MainShop';
import { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  const [isLoggedIn,setisLoggedIn] = useState(false);
  const [userid , setuserid] = useState(false)
  return (
    <> 
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<LandingPage/>}></Route>
        <Route  path = "/login" element = {<Login isLoggedIn = {isLoggedIn} setisLoggedIn = {setisLoggedIn} setuserid = {setuserid}/>}></Route>
        <Route  path = "/register" element = {<Signup isLoggedIn = {isLoggedIn} setisLoggedIn = {setisLoggedIn} setuserid = {setuserid}/>}></Route>
        <Route  path = "/shop" element = {<MainShop isLoggedIn = {isLoggedIn} setisLoggedIn = {setisLoggedIn} userid = {userid} />}></Route>
        
      </Routes>
    </BrowserRouter>

    </>

  );
}

export default App;
