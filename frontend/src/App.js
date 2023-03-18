import LandingPage from './components/LandingPage'
import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  const [isLoggedIn,setisLoggedIn] = useState(false);

  return (
    <> 
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<LandingPage/>}></Route>
        <Route isLoggedIn = {isLoggedIn} setisLoggedIn = {setisLoggedIn} path = "/login" element = {<Login/>}></Route>
        <Route isLoggedIn = {isLoggedIn} setisLoggedIn = {setisLoggedIn}  path = "/register" element = {<Signup/>}></Route>
      </Routes>
    </BrowserRouter>

    </>

  );
}

export default App;
