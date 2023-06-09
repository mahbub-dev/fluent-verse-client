/* eslint-disable no-unused-vars */

import { useLocation } from "react-router-dom"
import { useAuth } from "../Hooks/useAuth"
import NotFoundPage from "../Pages/404page"
// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ identifire, children }) => {
    const { user } = useAuth()
    if (identifire !== user?.role) {
        return <NotFoundPage />
    }
    return (
        <div>{children}</div>
    )
}

export default PrivateRoute