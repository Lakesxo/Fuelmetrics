import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import axios from 'axios'
import DriverCard from '../components/DriverCard'

const Driver = () => {
    const storedToken = localStorage.getItem("fuelToken")
    const [drivers, setDrivers] = useState([])
    const companyId = "96f583d7-7395-412d-bb7c-5f6747ab479b"
    
    useEffect(() => {
        axios({
            method: "get",
            url: `${process.env.REACT_APP_BASE_URL}Drivers/All?companyId=${companyId}`,
            headers: {
                "Authorization": `Bearer ${storedToken}`
            }
        })
        .then(res => {
            setDrivers(res.data)
        })
        .catch(err => console.log(err.response.data))
    }, [storedToken])

    return (
        <div className="flexDash">
            <Sidebar />
            <main>
                <h2>Company Drivers</h2>
                <div className="driverList">
                    {
                        drivers.map((driver) => <DriverCard key={driver.id} id={driver.id} name={driver.name} email={driver.email} state={driver.state} />)
                    }
                </div>
            </main>
        </div>
    )
}

export default Driver