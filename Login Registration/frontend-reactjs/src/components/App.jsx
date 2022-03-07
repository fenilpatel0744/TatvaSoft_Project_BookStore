import React from "react";
import {Routes,Route} from 'react-router-dom';
import Topbar from './Topbar';
import Searchbar from './Searchbar';
import Footer from './Footer';
import Login from "./Login";
import Register from "./Register";

function App(){
    return (
        <>
            <Topbar />
            <Searchbar />  
            <Routes>
                <Route exact path="/" element={<Login />}></Route>
                <Route exact path="/register" element={<Register />}></Route>    
                
            </Routes>
            <Footer />
        </>
    );
}
export default App;