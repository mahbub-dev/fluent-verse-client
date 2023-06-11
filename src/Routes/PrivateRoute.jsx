/* eslint-disable no-unused-vars */

import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../Hooks/useAuth"
// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ identifire, children }) => {
    const { user } = useAuth()
    if (identifire !== user?.role) {
        return <p className="text-white">sorry! you don't have access to this page</p>
    }
    return (
        <div>{children}</div>
    )
}

export default PrivateRoute