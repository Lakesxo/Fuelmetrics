import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const storedToken = localStorage.getItem("fuelToken")
    let location = useLocation();

    if (!storedToken){
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children
    
}

export default PrivateRoute
