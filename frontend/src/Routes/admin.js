import { Navigate } from "react-router-dom";

const AdminRoute = () => {
    const authUser = sessionStorage.getItem("authUser");
    const token = authUser ? JSON.parse(authUser).token : null;

    if (token) {
        return <Navigate to="/dashboard" replace />;
    } else {
        return <Navigate to="/login" replace />;
    }
};

export default AdminRoute;
