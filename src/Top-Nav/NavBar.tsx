
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Model } from "../Utils/SampleData";
import DataService from "../Utils/URL";

const NavBar = (props: any) => {

    const [service, setService] = useState(Model.serviceArray);
    const [country, setCountry] = useState(Model.countryArray);
    const [openCountry, setOpenCountry] = useState(null);
    useEffect(() => {
        getService();
        selectCountry(0);
    }, []);

    const getService = () => {
        DataService.getService().then(response => {
            setService(response);
        });

    }

    const getCountryById = (serviceId: any) => {
        DataService.getCountry(serviceId).then(response => {
            setCountry(response)
        })
    }

    const selectCountry = (e: any) => {
        if (openCountry === e) {
            setOpenCountry(null);
        } else {
            setOpenCountry(e);
        }

    }

    return (
        <div className="bg" >
            <>
                <div className="nav">
                    {
                        service.map((item) => {
                            return (
                                <Link to={item.routeing}> <p onClick={() => getCountryById(item.serviceId)} >{item.servicename}</p></Link>
                            )
                        })
                    }
                </div>
                <nav className="second-nav flex-div" style={{ background: props.navColor }}>

                    {
                        country.length > 0 ? country.map((item) => {
                            return (
                                <>
                                    <div className="country-wrapper">
                                        <p data-bs-toggle="modal" data-bs-target="#drop-country" onClick={() => selectCountry(item.id)}>{item.countryname}</p>
                                        {
                                            item.id === openCountry ? (
                                                <>
                                                    <div className="menu-content">
                                                        <div className="drop-nav">
                                                            {
                                                                item.operator.map((value) => {
                                                                    return (
                                                                        <div className="w-100" onClick={() => selectCountry(0)}> <Link to={`${value.name}/${encodeURIComponent(JSON.stringify(value.operatordata))}`}> <span >{value.name}</span></Link></div>
                                                                    )
                                                                })

                                                            }
                                                        </div>
                                                    </div>
                                                </>
                                            ) : null
                                        }
                                    </div >
                                </>

                            )
                        }) : null
                    }




                </nav>


            </>
        </div >
    )
}
export default NavBar;