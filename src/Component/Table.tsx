import { useEffect, useState } from "react";
import { SiMicrosoftexcel } from 'react-icons/si';
import { useParams } from "react-router-dom";
import FileUtil from "../Utils/Excel";
import { Model } from "../Utils/SampleData";
import Callback from "./Callback";
const Table = (props: any) => {
    // const [operatordata, setoperatorData] = useState(Model.operatorData);
    const [operator, setOpeartor] = useState(Model.operatorData);
    const [columns, setColumn] = useState([Model.columns]);
    const [columndata, setColumnData] = useState([Model.columnData]);
    const [columndata1, setColumnData1] = useState([Model.columnData]);
    const [columndata2, setColumnData2] = useState([Model.columnData]);
    const [tobeShow, setTobeShow] = useState('');
    const [vandor, setVendor] = useState([Model.vendoradd]);
    const [vendorColumn, setVendorColumn] = useState([Model.columns])
    const [vandorMenus, setVendorMen] = useState([Model.vendomenu]);
    const [vendorComp, setComp] = useState('');
    const [vendName, setVendName] = useState('');
    const [added, setAdded] = useState(false);
    const [lpurl, setUrl] = useState('');
    const [isButtonClicked, setIsButtonClicked] = useState(false)
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    const [startDate, setStartdate] = useState(today.toISOString().slice(0, 10));
    const fiveDaysAgo = new Date();
    fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);
    const lastdate = fiveDaysAgo.toISOString().split('T')[0];
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const [fromDate, setFromDate] = useState(fiveDaysAgo.toISOString().split('T')[0]);
    const [toDate, setToDate] = useState(yesterday.toISOString().split('T')[0]);
    const [formData, setFormData] = useState(Model.vendor);
    const { countyname, data } = useParams();

    
    useEffect(() => {
        const decodedData = JSON.parse(decodeURIComponent(JSON.stringify(data)));
        setOpeartor(decodedData);
    }, [data]);


    const download = () => {
        FileUtil.generateExcel(props.service, columns, columndata1, props.service);
    }
    const onFromDateChange = (e: any) => {
        setFromDate(e.target.value)
    }

    const onToDateChange = (e: any) => {
        setToDate(e.target.value)
    }

    const getOption = (e: any) => {
        showOptionComp(e.target.value);
    }

    const showOptionComp = (e: any) => {
        setTobeShow(e);
    }

    const vendorOption = (e: any) => {
        setComp(e.target.value);
    }
    const findVendor = (e: any) => {
        setVendName(e.target.value)
    }


    const closeDiv = () => {
        setAdded(false);
    }

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }



    // const fetch1 = () => {
    //     if (childRef.current) {
    //         childRef.current.childMethod();
    //     }
    // }
    // const handleSubmit = () => {
    //     HttpReq.PostReq(`${BASE_URL}/${props.service}/add/vendor`, formData).then((response) => {
    //         if (response.data.code === 200) {
    //             setUrl(response.data.lpUrl)
    //             setAdded(true);
    //             toast.success(response.data.statusCode, {
    //                 position: 'top-right',
    //                 autoClose: 5000, // Duration the notification should be shown (in milliseconds)
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //             });
    //         } else {
    //             toast.error('Failed to add vendor!', {
    //                 position: 'top-right',
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //             });
    //         }




    //     })
    // }
    // const copy = async () => {
    //     await navigator.clipboard.writeText(lpurl);
    //     console.log("check ")
    //     toast.success("Copied", {
    //         position: 'top-right',
    //         autoClose: 5000, // Duration the notification should be shown (in milliseconds)
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //     });
    // }



    return (
        <div className="Dashboard">
        <h3 style={{ color: "white" }}>{props.service}</h3>
        <div className="inCont">
            <div className="topNav">
                <select name="" id="" style={{ border: "1.5px solid #55acee" }} className="gradientOutline" onChange={getOption}>
                    {operator.map((item) => {
                        return (
                            <><option value={item.operatorData} >{item?.operatorData}</option></>
                        )
                    })}
                </select>

                {
                    tobeShow === 'Advertizer' ? (<>
                        <div className={`DATE`} style={{
                            display: "flex",
                            justifyContent: "left"

                        }}>
                            <select onChange={vendorOption} style={{ border: "1.5px solid #55acee" }} name="" id="">
                                {
                                    vandorMenus.map((item) => {

                                        return (
                                            <>
                                                <option value={item?.menu}>{item?.menu}</option>
                                            </>
                                        )
                                    })
                                }
                            </select>
                            {
                                tobeShow === 'Advertizer' && vendorComp === 'Update Vendor' ? (<>

                                    <select

                                        onChange={findVendor}

                                        style={{
                                            padding: ".5em 3em",
                                            borderRadius: "5px",
                                            outline: "none",
                                            border: "1.5px solid #55acee",
                                        }} name="" id="">

                                        <option>Choose Advertizer</option>
                                        {
                                            columndata2.map((item) => {
                                                return (
                                                    <>
                                                        {
                                                            item.values.map((val) => {
                                                                return (
                                                                    <>
                                                                        {
                                                                            val.name === 'Advertizer-Name' ? (
                                                                                <>
                                                                                    <option value={val.count}>{val.count}</option>
                                                                                </>
                                                                            ) : null
                                                                        }
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </>
                                                )
                                            })
                                        }
                                    </select>
                                </>) : null
                            }

                        </div>

                    </>) : null

                }
                {
                    tobeShow === 'MIS' || tobeShow === 'Advertizer' && vendorComp === 'Callback' ? (<>
                        <div className={`DATE`}>
                            <input type="date" defaultValue={lastdate} name="from" onChange={onFromDateChange} />
                            <span className={"mr-1 mt-1"}>TO</span>
                            <input type="date" defaultValue={formattedDate} name="to" onChange={onToDateChange} />
                            {tobeShow === 'MIS' ? (<>

                                {/* <button type="submit" onClick={fetch1} >fetch</button> */}
                                <label onClick={download}><SiMicrosoftexcel size={24} /></label>
                            </>) : null

                            }
                        </div>
                    </>) : null

                }
                {
                    tobeShow === 'Advertizer' && vendorComp === 'Vendor Details' || vendorComp === 'Update Vendor' ? (
                        <><input type="text" style={{
                            borderRadius: "20px",
                            outline: "none",
                            border: "1.5px solid #55acee",
                            position: "relative",
                            right: "80px",
                            paddingLeft: "20px"



                        }} placeholder="Search by advertizer name or CPID" /></>
                    ) : null
                }

            </div>
            {
                tobeShow === 'MIS' ? (<>
                    {/* <Mis ref={childRef} navColor={props.navColor} livedate={startDate} service={props.service} startDate={fromDate} enddate={toDate} /> */}
                </>) : tobeShow === 'Advertizer' && vendorComp === 'Vendor Details' ? (<>
                    <Callback navColor={props.navColor} service={props.service} /></>
                ) : tobeShow === 'Advertizer' && vendorComp === 'Add Vendor' ? (
                    <>
                        <div className="advertizer">
                            <p>Note : for any replacement use <b>&#123;clickid&#125;</b></p>

                            <table >
                                <thead className="bg-primary">
                                    <tr style={{ background: props.navColor }}>
                                        {
                                            vandor.map((item) => {
                                                return (
                                                    item.column.map((val) => {
                                                        return (
                                                            <>
                                                                <td style={{ padding: "6px 20px" }}>{val?.name}</td>
                                                            </>
                                                        )
                                                    })
                                                )
                                            }
                                            )
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {
                                            vandor.map((item) => {
                                                return (
                                                    item.inputValue.map((val) => {
                                                        return (

                                                            <td >
                                                                {
                                                                    val.name === "cut" || val.name === "counter" || val.name === "callbackLimit" || val.name === "dailyCapping" ? (
                                                                        <>
                                                                            <input onChange={handleChange} style={{ padding: ".8em" }} type="number" name={val?.name} id="" />
                                                                        </>
                                                                    ) :
                                                                        val.name === "postbackUrl" ?
                                                                            (
                                                                                <input type="text" onChange={handleChange} style={{ width: "20vw", padding: ".8em" }} name="callback_url" id="" />
                                                                            ) : <input type="text" onChange={handleChange} style={{ padding: ".8em" }} name={val?.name} id="" />

                                                                }
                                                            </td>

                                                        )
                                                    })
                                                )
                                            }
                                            )
                                        }
                                    </tr>

                                </tbody>
                            </table>

                            {/* <div className="btn_submit"><button onClick={handleSubmit}>Submit  </button>
                                <button type="reset">Reset  </button>
                            </div> */}

                            {
                                added ?
                                    (
                                        <div className="after-adding">
                                            <label>Promotion URL</label>
                                            <p
                                                // onClick={copy}
                                                style={{
                                                    width: "50vw", padding: ".8em", alignSelf: "center", border: 'none',
                                                    outline: '#55acee .5px solid', textAlign: "center", cursor: "pointer"
                                                    , borderRadius: "5px"
                                                }}
                                            >{lpurl}</p>
                                            <button style={{ background: "#808080" }} onClick={closeDiv}>Close</button>
                                        </div>
                                    ) : null
                            }
                        </div>


                    </>
                ) : tobeShow === 'Advertizer' && vendorComp === 'Callback' ? (
                    <>
                    {/* <Livecallback navColor={props.navColor} livedate={startDate} service={props.service} startDate={fromDate} enddate={toDate} />  */}
                    </>
                ) : tobeShow === 'Advertizer' && vendorComp === 'Supress Logic' ? (
                    <><h1>To be done suppress</h1></>
                ) : tobeShow === 'Advertizer' && vendorComp === 'Update Vendor' ? (
                    <>
                    {/* <UpdateVendor service={props.service} vendName={vendName} vendor={columndata2} column={vendorColumn} /> */}
                    </>
                ) : null
            }




        </div >

    </div >

    )
}
export default Table;