import React, { useState } from "react";
import { FcSettings } from "react-icons/fc";
import { CustomizerColor } from "../Utils/Constants";
const Customizer = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [color, setColor] = useState(CustomizerColor)



    const toggleCustomizer = (e: any) => {
        e.preventDefault();
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };
    const handleColorChange = (e: any) => {
        props.onColorChange(e);
        localStorage.setItem('navColor', e);
    };
    return (
        <div style={{
            position: "fixed", top: "150px", left: "97%",
            zIndex: "100"
        }}>
            <div className="icon">
                <button className={`rotate-icon`} onClick={toggleCustomizer}>
                    <FcSettings size={30} color="white"/>
                </button>
            </div>

            <div style={{ display: "flex", padding: ".8em", position: "relative", right: "10vw"}}>

                {
                    isOpen && (
                        <div className={`color-options`}

                        >
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(4, 1fr)",
                                gridRowGap: "8px",
                                gridColumnGap: "5px"
                                , padding: "10px",background:"white" ,borderRadius:"5px"
                            }}>
                                {
                                    color.map((item) => {
                                        return (
                                            <>
                                                <div style={{
                                                    background: item.color,
                                                    height: "20px",
                                                    width: "20px",
                                                }}
                                                    onClick={() => handleColorChange(item.color)}
                                                ></div>

                                            </>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    )
                }


            </div>
        </div>
    )
}
export default Customizer;