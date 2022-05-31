import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// This Importing can be done in any order
//Here, Router is the alias for router. So We Can Use Router inPlace of BrowserRouter

import Home from "./Pages/Home";
import First from "./Pages/First";
import Second from "./Pages/Second";
import App from "./App";

//These are Import "FUNCTIONNAME" from "PAGELOCATION/PAGENAME"
// In AnimationPlaybackEvent, Home is the function name or "Export Default Value" of Home and ./Pages is where home is placed and Home after that is Home.js

//REACT ROUTER DOM DOCUMENTATION:- https://www.npmjs.com/package/react-dom

import React from "react";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Cart from "./Pages/Cart";
import Data from "./Hooks/Data";
import FetchData from "./Hooks/FetchData";
import Main from "./Hooks/Main";

const MyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/First" element={<First />} />

        {/* HERE, '/First' is the our custom defined path. we can give say /f or any <First /> is the FUNCTIONNAME or "export default First" from the export of First.
                       <Route path='/f' element={<First />}>



                </Route>

                <Route path="/Second" element={<Second />} />


                {/* <Route path="/" element={<App />} /> */}

        {/* This will create what will display in default without switching */}

        <Route path="/" element={<Home />} />

        <Route path="/Login" element={<Login />}></Route>

        <Route path="/Signup" element={<Signup></Signup>}></Route>

        <Route path="/Cart" element={<Cart />} />

        <Route path="/Data" element={<Data />} />

        <Route path="/FetchData" element={<FetchData />} />

        <Route path="/Main" element={<Main></Main>}></Route>
      </Routes>
    </Router>
  );
};

export default MyRouter;
