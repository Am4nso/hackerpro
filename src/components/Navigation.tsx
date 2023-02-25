import React from "react";
import {Link} from "react-router-dom";


const Navigation = () => {
    return (
        <div className={"nav-bar"}>
            <div className={"right-nav"}>
                <Link to={"/"} style={{color: "white", textDecoration: "none", fontWeight: 800, cursor: "pointer"}}>👾 Hacker Pro</Link>
                <button className={"nav-button"}
                        onClick={() => document.getElementById('how')!.scrollIntoView()}>How it works?
                </button>
                <button className={"nav-button"}
                        onClick={() => document.getElementById('about')!.scrollIntoView()}>About
                </button>
            </div>
            <div>
                <Link to={"/join"} style={{color: "white", textDecoration: "none"}} className={"join-now"}>Join Now</Link>
            </div>
        </div>
    )
}


export default Navigation;