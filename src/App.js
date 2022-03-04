import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Company from './pages/Company'
import Dashboard from './pages/Dashboard'
import Driver from './pages/Driver'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'
import DriverDetails from './pages/DriverDetails'
import AddDriver from './pages/AddDriver'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/company" element={<PrivateRoute><Company /></PrivateRoute>} />
      <Route path="/drivers" element={<PrivateRoute><Driver /></PrivateRoute>} />
      <Route path="/add-driver" element={<PrivateRoute><AddDriver /></PrivateRoute>} />
      <Route path="/driver/details/:id" element={<PrivateRoute><DriverDetails /></PrivateRoute>} />
    </Routes>
  )
}

export default App