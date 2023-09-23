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
    }


    return (
        <>
            <NavBar navColor={navColor} />
            <div
                className="dashboard-container"
                style={{
                    backgroundImage: navColor,
                    height: "12vw",
                    position: "relative",
                    marginBottom: "20px"
                }} />
            <Customizer onColorChange={getColor} />
            <div className="content-container" >
                
                <Outlet />
            </div>
        </>
    )
}
export default DefaultLayout;