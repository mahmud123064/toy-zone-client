import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="text-center">
            {/* <progress className="progress progress-success w-56" value="0" max="100"></progress> <br />
            <progress className="progress progress-success w-56" value="10" max="100"></progress> */}
           
        </div>
    }

    if (user) {
        return children;
    }

    // return <Navigate to = '/login' replace></Navigate>

    return <Navigate state={{ from: location }} to="/login" replace={true}></Navigate>
};

export default PrivateRoute;