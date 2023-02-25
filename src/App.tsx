import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Join from "./components/Join";
import React from "react";
import Practice from "./components/Practice";
import Shop from "./components/Shop";

function App() {

    return (
        <BrowserRouter>
            <React.Suspense fallback={"Loading"}>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/join"} element={<Join/>}/>
                    <Route path={"/practice"} element={<Practice/>}/>
                    <Route path={"/shop"} element={<Shop/>}/>
                </Routes>
                <p style={{color:"white"}}>Created by Osama Hussein - The Eagle</p>
            </React.Suspense>
        </BrowserRouter>
    );
}

export default App;
