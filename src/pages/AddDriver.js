import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import axios from 'axios'

const AddDriver = () => {
    const storedToken = localStorage.getItem("fuelToken")
    const [name, setname] = useState("")
    const [phone, setphone] = useState("")
    const [email, setemail] = useState("")
    const [address, setaddress] = useState("")
    const [city, setcity] = useState("")
    const [statee, setstatee] = useState("")
    const companyId = "96f583d7-7395-412d-bb7c-5f6747ab479b"


    const addDriver = () => {
        if (name && phone !== ""){
            axios({
                method: "post",
                url: `${process.env.REACT_APP_BASE_URL}Driver/Add/${companyId}`,
                data: { 
                    name: name,
                    phone: phone,
                    email: email,
                    address: address,
                    city: city,
                    state: statee
                },
                headers: {
                    "Authorization": `Bearer ${storedToken}`
                }
            })
            .then(res => {
                window.location.pathname  = "/drivers"
            })
            .catch(err => {
                console.log(err.response.data)
            })
        }
    }

    return (
        <div className="flexDash">
            <Sidebar />
            <main>
                <h2>Add Driver</h2>
                <div className="addDrCont">
                    <div className="formField">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" onChange={(e) => setname(e.target.value)} />
                    </div>
                    <div className="formField">
                        <label htmlFor="name">Phone Number</label>
                        <input type="text" name="number" id="number" onChange={(e) => setphone(e.target.value)} />
                    </div>
                    <div className="formField">
                        <label htmlFor="name">Email</label>
                        <input type="email" name="email" id="email" onChange={(e) => setemail(e.target.value)} />
                    </div>
                    <div className="formField">
                        <label htmlFor="name">Address</label>
                        <input type="text" name="address" id="address" onChange={(e) => setaddress(e.target.value)} />
                    </div>
                    <div className="formField">
                        <label htmlFor="name">City</label>
                        <input type="text" name="city" id="city" onChange={(e) => setcity(e.target.value)} />
                    </div>
                    <div className="formField">
                        <label htmlFor="name">State</label>
                        <input type="text" name="state" id="state" onChange={(e) => setstatee(e.target.value)} />
                    </div>
                    <button onClick={addDriver} className="login">Add driver</button>
                </div>
            </main>
        </div>
    )
}

export default AddDriver