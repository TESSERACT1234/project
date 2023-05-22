import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState, useEffect} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewItem from "./components/NewItem";
import Home from "./components/Home";
import Table from "./components/Table";
import Station from "./components/Station";
import Platform from "./components/Platform";
import Login from "./components/Login";
import Signup from "./components/signup";
import Resources from "./Resources";
import Journal from "./Journal";  
import Market from "./Market";
import Journaldata from "./journaldata";
// import firebase from "firebase";
// import Horizontalchart from "./components/chart-horizontal";






function App() {
  const [useremail, setUserEmail] = useState("");
  useEffect(() => {
    setUserEmail(localStorage.getItem("email"))
  }, [])
  if(
    useremail==""|| useremail==undefined
    ){
      return (
        <>
          <BrowserRouter> 
          <Navbar /> 
            <Routes> 
              <Route index element={<Home/>} />
              {/* <Route path='/table' element={<Table/>} /> 
              <Route path='/platform' element={<Platform/>} />
              <Route path='/station' element={<Station/>} />
              <Route path='/newitem' element={<NewItem/>} /> */}
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<Signup/>} />
              <Route path='/resources' element={<Resources/>} />
              <Route path='/*' element={<Login/>} />
              {/* <Route path='/journal' element={<Journal/>} /> */}
              {/* <Route path='/market' element={<Market/>} /> */}
              {/* <Route path='/journaldata' element={<Journaldata />} /> */}
            </Routes>
          <Footer /> 
          </BrowserRouter>
        </>
      );
    }
    else {
  return (
    <>
      <BrowserRouter> 
      <Navbar useremail={useremail}/> 
        <Routes> 
          <Route index element={<Home useremail={useremail}/>} />
          {/* <Route path='/table' element={<Table/>} /> 
          <Route path='/platform' element={<Platform/>} />
          <Route path='/station' element={<Station/>} />
          <Route path='/newitem' element={<NewItem/>} /> */}
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/resources' element={<Resources/>} />
          <Route path='/journal' element={<Journal useremail={useremail}/>} />
          <Route path='/market' element={<Market/>} />
          <Route path='/journaldata' element={<Journaldata useremail={useremail} />} />
        </Routes>
      <Footer /> 
      </BrowserRouter>
    </>
  );
  }
}

export default App;
