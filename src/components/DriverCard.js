import React from 'react'
import { Link } from 'react-router-dom'

const DriverCard = ({ name, email, id, state }) => {
    return (
        <Link to={`/driver/details/${id}`}>
            <div className='driverCont'>
                <p className='name'>{name}</p>
                <p>{email}</p>
                <p>{state}</p>
            </div>
        </Link>
    )
}

export default DriverCard