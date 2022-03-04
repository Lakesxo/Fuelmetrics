import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    let location = window.location.pathname

    const logout = () => {
        localStorage.removeItem("fuelToken")
        window.location.pathname = "/"
    }

    return (
        <div className='sidebar'>
            <div className="logo">
                <h2>FUELMETRICS TEST</h2>
            </div>
            <div className="navLinks">
                <Link to="/dashboard">
                    <button className={location === "/dashboard" ? "links active" : "links"}>Dashboard</button>
                </Link>
                <Link to="/company"><button className={location === "/company" ? "links active" : "links"}>Company</button></Link>
                <Link to="/drivers"><button className={location === "/drivers" ? "links active" : location === `/driver/details/${window.location.pathname.split("/")[3]}` ? "links active" : "links"}>Drivers</button></Link>
                <Link to="/add-driver"><button className={location === "/add-driver" ? "links active" : "links"}>Add Driver</button></Link>
                <button onClick={logout} className="logout">Logout</button>
            </div>
        </div>
    )
}

export default Sidebar