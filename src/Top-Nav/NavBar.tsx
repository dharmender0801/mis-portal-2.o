import React, { useEffect, useState } from "react";
import DataService from "../Utils/URL";
import { Model } from "../Utils/SampleData";
import { Link } from "react-router-dom";

const NavBar = (props: any) => {

    const [service, setService] = useState(Model.serviceArray);
    const [country, setCountry] = useState(Model.countryArray);
    useEffect(() => {
        getService();
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
    return (
        <div className="bg" >
            <>
                <div className="nav">
                    {
                        service.map((item) => {
                            return (
                                <p onClick={() => getCountryById(item.serviceId)} >{item.servicename}</p>
                            )
                        })
                    }
                </div>
                <nav className="second-nav flex-div" style={{ background: props.navColor }}>

                    {
                        country.length > 0 ? country.map((item) => {
                            return (
                                <>
                                    <p>{item.countryname}</p>

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