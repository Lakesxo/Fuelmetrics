import React from 'react'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  return (
    <div className="flexDash">
        <Sidebar />
        <main>
            <div className="cent">
                <h3>Welcome to Fuelmetrics test made by Ridwan Ajanaku. Please proceed to any other tab to get started</h3>
            </div>
        </main>
    </div>
  )
}

export default Dashboard