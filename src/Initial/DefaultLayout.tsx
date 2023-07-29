import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Top-Nav/NavBar";
import Customizer from "./Customizer";
const DefaultLayout = (props: any) => {
    const defaultNavColor = "linear-gradient(to right, #fe8dc6, #fed1c7)";
    const [navColor, setNavColor] = useState(() => {
        const storedNavColor = localStorage.getItem('navColor');
        return storedNavColor || defaultNavColor;
    });
    const getColor = (e: any) => {
        setNavColor(e);
        localStorage.setItem('navColor', navColor);
    }


    return (
        <>
            <NavBar navColor={navColor} />
            <div style={{
                background:navColor,
                height:"10vw",
                position:"relative",
                
            
            }}></div>
            <Customizer onColorChange={getColor} />
            <Outlet />
        </>
    )
}
export default DefaultLayout;