import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const PrivateRoute = ({ children }: any) => {
    const { authenticated } = useSelector((store: RootState) => store.auth);
    const [isAuthenticated, setIsAuthenticated] = useState(authenticated);

    useEffect(() => {
        setIsAuthenticated(authenticated);
    }, [authenticated]);

    if (isAuthenticated) return children;


    toast.error("Please sign in to continue");
    // Add an empty dependency array to ensure it only runs once

    return <Navigate to="/auth" />;
};

export default PrivateRoute;
