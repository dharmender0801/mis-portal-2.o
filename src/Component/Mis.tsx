import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { Model } from "../Utils/SampleData";


interface MisProps {
    navColor: string; // Assuming it is a string, replace with the appropriate type
    livedate: string;
    service: any;
    startDate: string;
    enddate: string;
}
const Mis: React.ForwardRefRenderFunction<MisRef, MisProps> = (props: any, ref: any) => {
    const [columns, setColumn] = useState([Model.columns]);
    const [columndata, setColumnData] = useState([Model.columnData]);
    const [columndata1, setColumnData1] = useState([Model.columnData]);
    const [startDate, setStartdate] = useState('');
    const [enddate, setEndtdate] = useState('');


    useImperativeHandle(ref, () => ({
        childMethod,
    }));

    const childMethod = () => {
        fetch();
    }
    useEffect(() => {
        const interval = setInterval(() => {
            getData();
        }, 50 * 6 * 100);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setStartdate(props.startDate);
        setEndtdate(props.enddate);
    }, [props.startDate, props.enddate]);
    useEffect(() => {
        const JsonDta = [
            {
                name: "startdate",
                value: props.startDate
            },
            {
                name: "enddate",
                value: props.enddate
            }
        ]
        // getRow(JsonDta);
    }, [props.service]);

    const getData = () => {
        const JsonDta1 = [
            {
                name: "startdate",
                value: props.livedate
            },
            {
                name: "enddate",
                value: props.livedate
            }
        ]
        // getTotal(JsonDta1);
    }
    // const getTotal = (e: any) => {
    //     HttpReq.PostReq(`${BASE_URL}/${props.service}/voicechat/live`, e).then((response) => {
    //         setColumnData(response.data.datas);
    //     });
    // }

    const fetch = () => {
        const JsonDta = [
            {
                name: "startdate",
                value: startDate
            },
            {
                name: "enddate",
                value: enddate
            }
        ]
        console.log(JsonDta);
        // getRow(JsonDta);
    }
    // const getRow = (e: any) => {
    //     HttpReq.PostReq(`${BASE_URL}/${props.service}/voicechat/mis`, e).then((response) => {
    //         setColumn(response.data.columns);
    //         setColumnData1(response.data.datas);
    //     });
    // }


    return (
        <>
            <div className="table-container">
                <table >
                    <div className="table">
                        <div className="filter"> <FaFilter
                            style={{ position: "fixed" }} /></div>
                        <thead style={{ background: props.navColor }} className="bg-primary">
                            <tr >
                                {
                                    columns.map((item) => {
                                        return (
                                            <>
                                                <td style={{ padding: "6px 20px" }}>{item?.columnName}</td>
                                            </>
                                        )
                                    }
                                    )
                                }
                            </tr>
                            {
                                columndata.map((item) => {
                                    return (
                                        <><tr style={{ background: "green" }}>
                                            {
                                                item.values.map((value) => {
                                                    return (
                                                        <>

                                                            <td style={{ padding: "2px 25px" }}>{value.count}</td>
                                                        </>
                                                    )
                                                }

                                                )
                                            }
                                        </tr>
                                        </>
                                    )
                                }
                                )
                            }

                        </thead>

                        <tbody>

                            {
                                columndata1.reverse().map((item) => {
                                    return (
                                        <><tr>
                                            {
                                                item.values.map((value) => {
                                                    return (
                                                        <>

                                                            <td style={{ padding: ".5px 25px" }}>{value.count}</td>

                                                        </>
                                                    )
                                                }
                                                )
                                            }
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
        </>
    )
}
export default forwardRef(Mis);
export interface MisRef {
    childMethod: () => void;
}