import React, { useState, useEffect } from "react";
// import { MODEL } from "../Utils/MODEL";
// import { BASE_URL } from "../Utils/Constant";
// import HttpReq from "../Service/HttpReq";
import { LuCopy } from"react-icons/lu";
import { toast } from "react-toastify";
import { Model } from "../Utils/SampleData";
const Callback = (props: any) => {
    const [columns, setColumn] = useState([Model.columns]);
    const [columndata, setColumnData] = useState([Model.columnData]);
    // useEffect(() => {

    //     getRow();

    // }, []);

    // const getRow = () => {
    //     HttpReq.GetReq(`${BASE_URL}/${props.service}/vendor`).then((response) => {
    //         setColumn(response.data.columns);
    //         setColumnData(response.data.datas);
    //     });
    // }

    const Check = (e: any) => {
        console.log(e);
    }
    const Copy =(e:any)=>
    {
        navigator.clipboard.writeText(e)
        toast.success("Copied", {
            position: 'top-right',
            autoClose: 5000, // Duration the notification should be shown (in milliseconds)
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <div className="table-container">

            <table >
                <div className="table">
                    <thead className="bg-primary">
                        <tr style={{background:props.navColor}}>
                            {
                                columns.map((item) => {
                                    return (
                                        <>
                                            <td style={{ padding: "10px 20px",width:"20vw",height:"2.5vw", textAlign: "center", }}>{item?.columnName}</td>
                                        </>
                                    )
                                }
                                )
                            }
                            <td style={{ padding: "10px 20px", textAlign: "center", }}>Action</td>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            columndata.map((item) => {
                                return (
                                    <><tr>
                                        {
                                            item.values.map((value) => {
                                                return (
                                                    <>
                                                        {

                                                            value?.name === 'LP-Url' ? (
                                                                <td style={{
                                                                    padding: "5px 5px",
                                                                    textAlign: "center",
                                                                    width: "9%"

                                                                }}>{value.count}
                                                                    <LuCopy style={{ cursor: "pointer" }}
                                                                        onClick={() => {
                                                                            Copy(value.count)
                                                                        }}
                                                                    />


                                                                </td>
                                                            ) : <td style={{
                                                                padding: "5px 5px",
                                                                textAlign: "center",
                                                                width: "9%"

                                                            }}>{value.count}
                                                            </td>

                                                        }



                                                    </>
                                                )
                                            }
                                            )
                                        }


                                        <td style={{
                                            padding: "5px 5px",
                                            textAlign: "center",
                                            width: "9%"

                                        }}><button style={{cursor:"pointer",background:"red",color:"white",padding:".3em",outline:"",border:"none",borderRadius:"5px"}} onClick={() => Check(item)}>Delete</button>
                                        
                                        <button style={{marginLeft:"20px", cursor:"pointer",background:"green",color:"white",padding:".3em",outline:"",border:"none",borderRadius:"5px"}} onClick={() => Check(item)}>Edit</button>
                                        
                                        </td>
                                        
                                    </tr>
                                    </>
                                )
                            }
                            )
                        }
                    </tbody>
                </div>
            </table>
        </div>

    )
}
export default Callback;