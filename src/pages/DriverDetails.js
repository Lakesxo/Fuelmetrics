import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import axios from 'axios'

const DriverDetails = () => {
    const storedToken = localStorage.getItem("fuelToken")
    let driverId = window.location.pathname.split("/")[3]
    const companyId = "96f583d7-7395-412d-bb7c-5f6747ab479b"
    const [name, setName] = useState("")
    const [email, setemail] = useState("")
    const [number, setnumber] = useState("")
    const [address, setaddress] = useState("")
    const [statee, setstatee] = useState("")
    const [city, setcity] = useState("")

    useEffect(() => {
        axios({
            method: "get",
            url: `${process.env.REACT_APP_BASE_URL}Driver/Details/${driverId}`,
            headers: {
                "Authorization": `Bearer ${storedToken}`
            }
        })
        .then(res => {
            console.log(res.data)
            setName(res.data.data.name)
            setemail(res.data.data.email)
            setnumber(res.data.data.phone)
            setaddress(res.data.data.address)
            setstatee(res.data.data.state)
            setcity(res.data.data.city)
        })
        .catch(err => console.log(err.response.data))
    }, [storedToken, driverId])

    const deleteDriver  = () => {
        axios({
            method: "delete",
            url: `${process.env.REACT_APP_BASE_URL}Driver/Delete/${companyId}/${driverId}`,
            headers: {
                "Authorization": `Bearer ${storedToken}`
            }
        })
        .then(res => {
            window.location.pathname = "/drivers"
        })
        .catch(err => {
            console.log(err.response.data)
        })
    }

    return (
        <div className="flexDash">
            <Sidebar />
            <main>
                <h2 className='mgbot'>Driver Details</h2>
                {
                    name 
                    ?
                    <>
                        <div className="formField">
                            <label htmlFor="name">Name</label>
                            <p>{name}</p>
                        </div>
                        <div className="formField">
                            <label htmlFor="name">email</label>
                            <p>{email}</p>
                        </div>
                        <div className="formField">
                            <label htmlFor="name">Phone number</label>
                            <p>{number}</p>
                        </div>
                        <div className="formField">
                            <label htmlFor="name">Address</label>
                            <p>{address}</p>
                        </div>
                        <div className="formField">
                            <label htmlFor="name">State</label>
                            <p>{statee}</p>
                        </div>
                        <div className="formField">
                            <label htmlFor="name">City</label>
                            <p>{city}</p>
                        </div>
                        <button onClick={deleteDriver} className="delete">Delete driver</button>
                    </>
                    :
                    <></>
                }
            </main>
        </div>
    )
}

export default DriverDetails