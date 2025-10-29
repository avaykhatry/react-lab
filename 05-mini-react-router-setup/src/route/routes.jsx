import { Navigate } from "react-router-dom";
import App from "../App";
import Applied from "../pages/Applied";
import Interview from "../pages/Interview";
import Offer from "../pages/Offer";

const routes = [
    {
        path: '/',
        element: <Navigate to='/applied' />,
    },
    // do conditional navigation like this
    // { path: '/', element: isLoggedIn ? <Dashboard /> : <Navigate to='/login' />}
    {
        path:'/applied',
        element: <Applied />,
    },
    {
        path: '/interview',
        element: <Interview />,
    },
    {
        path: '/offer',
        element: <Offer />,
    }
]

export default routes;