import React from "react";
const NavBar = (props: any) => {
    return (
        <div>
            <div className="nav">
                <p>Voicechat</p>
                <p>Voicechat</p>
                <p>Voicechat</p>
                <p>Voicechat</p>
            </div>
            <nav className="second-nav" style={{ background: props.navColor }}>
                <p>Kenya</p>
                <p>Kenya</p>
                <p>Kenya</p>
                <p>Kenya</p>
            </nav>

        </div>
    )
}
export default NavBar;