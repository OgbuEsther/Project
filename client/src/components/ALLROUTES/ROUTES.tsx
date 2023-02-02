import React from "react";
import { useRoutes } from "react-router-dom";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import HeroCat from "../CATALOGUEPAGE/HeroCat";
import Contact from "../CONTACTUS/Contact";
import HomeScreen from "../HomeScreen";
import Hero2 from "../PAGEONE/Hero2";



const ROUTES  = () =>{
    let elements = useRoutes([
        {
            path : "/",
            element : <HomeScreen />
        },
        {
            path : "/catalog",
            element : <HeroCat />
        },
        {
            path : "/home",
            element : <HomeScreen />
        },
        {
            path : "/contact",
            element : <Contact />
        },
        {
            path : "/signup",
            element : <SignUp />
        },
        {
            path : "/signin",
            element : <SignIn />
        }
    ])
    return(
        <div>{elements} </div>
    )
}


export default ROUTES