import { Routes as AllRoutes, Route } from "react-router-dom"
import PrivateRoute from "./PrivateRoute";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Todo from "../pages/Todo";

const Routes = () => {
    return (
        <AllRoutes>
            <Route path="/" element={<PrivateRoute><Todo /></PrivateRoute>} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
        </AllRoutes>
    )
}

export default Routes