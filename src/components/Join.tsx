import Navigation from "./Navigation";
import React from "react";
import {Link} from "react-router-dom";


const Join = () => {
    return (
        <div>
            <Navigation/>
            <div className={"sign-up"}>
                <div className={"form"}>
                    <p>Sign Up</p>
                    <input style={{marginTop: "1rem"}} type={"text"}/>
                    <br/>
                    <input style={{marginTop: "1rem", marginBottom: "2rem"}} type={"password"}/>
                    <br/>
                    <select style={{marginBottom: "2rem"}} >
                        <option>UAEU</option>
                        <option>Zayed University</option>
                    </select>
                    <br/>
                    <Link style={{color: "white", textDecoration: "none", border: "1px solid white", padding: "0.5rem"}} to={"/practice"}>Submit</Link>
                </div>
            </div>
        </div>
    )
}

export default Join;