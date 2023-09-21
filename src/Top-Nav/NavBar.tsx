import React from "react";
const NavBar = (props: any) => {
    return (
        <div className="bg" >
            <>
                <div className="nav">
                    <p>Voicechat</p>
                    <p>Voicechat</p>
                    <p>Voicechat</p>
                    <p>Voicechat</p>
                </div>
                <nav className="second-nav flex-div" style={{ background: props.navColor }}>
                    <p>Kenya</p>
                    <p>Kenya</p>
                    <p>Kenya</p>
                    <p>Kenya</p>
                </nav>
            </>
            <nav className="dashboard-container" style={{ background: props.navColor }}>

            </nav>


        </div>
    )
}
export default NavBar;