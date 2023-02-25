import {HashRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Join from "./components/Join";
import React from "react";
import Practice from "./components/Practice";
import Shop from "./components/Shop";
import Learn from "./components/Learn";

function App() {

    return (
        <HashRouter>
            <React.Suspense fallback={"Loading"}>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/join"} element={<Join/>}/>
                    <Route path={"/practice"} element={<Practice/>}/>
                    <Route path={"/shop"} element={<Shop/>}/>
                    <Route path={"/learn"} element={<Learn/>}/>
                </Routes>
                <p style={{color:"white"}}>Created by Osama Hussein - The Eagle</p>
            </React.Suspense>
        </HashRouter>
    );
}

export default App;
