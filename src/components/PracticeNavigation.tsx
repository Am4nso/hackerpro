import React from "react";
import {Link} from "react-router-dom";
import { Icon } from '@iconify/react';
import uiUserProfile from '@iconify/icons-healthicons/ui-user-profile';

const PracticeNavigation = () => {
    return (
        <div className={"nav-bar"}>
            <div className={"right-nav"}>
                <Link to={"/"} style={{color: "white", textDecoration: "none", fontWeight: 800, cursor: "pointer"}}>👾 Hacker Pro</Link>
                <Link style={{textDecoration: "none"}} className={"nav-button"} to={"/learn"}>Learn
                </Link>
                <Link style={{textDecoration: "none"}} className={"nav-button"} to={"/practice"}>Practice
                </Link>
            </div>
            <div style={{display: "flex", alignItems: "center", gap: "2rem"}}>
                <Link style={{color: "white", textDecoration: "none"}} to={"/shop"}>Points: 500</Link>
                <Icon style={{fontSize: "2rem", cursor: "pointer"}} icon={uiUserProfile} />
            </div>
        </div>
    )
}


export default PracticeNavigation;