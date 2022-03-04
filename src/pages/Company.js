import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'

const Company = () => {
    const storedToken = localStorage.getItem("fuelToken")
    const [name, setName] = useState("")
    const [email, setemail] = useState("")
    const [id, setid] = useState("")
    
    useEffect(() => {
        axios({
            method: "get",
            url: `${process.env.REACT_APP_BASE_URL}Company/Details`,
            headers: {
                "Authorization": `Bearer ${storedToken}`
            }
        })
        .then(res => {
            setName(res.data.data.company.name)
            setemail(res.data.data.company.email)
            setid(res.data.data.company.id)
        })
        .catch(err => console.log(err))
    }, [storedToken])

    return (
        <div className="flexDash">
            <Sidebar />
            <main>
                <h2 className='mgbot'>Company Details</h2>
                {
                    name 
                    ?
                    <>
                        <div className="formField">
                            <label htmlFor="name">Name</label>
                            <p>{name}</p>
                        </div>
                        <div className="formField">
                            <label htmlFor="email">Email</label>
                            <p>{email}</p>
                        </div>
                        <div className="formField">
                            <label htmlFor="id">ID</label>
                            <p>{id}</p>
                        </div>
                    </>
                    :
                    <></>
                }
            </main>
        </div>
    )
}

export default Company