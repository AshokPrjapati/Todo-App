import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: any) => {
    const isLoggedin = useSelector((store: RootState) => store.authManager.isAuth)

    if (isLoggedin) return children;
    return <Navigate to="/signin" />;
};

export default PrivateRoute;
