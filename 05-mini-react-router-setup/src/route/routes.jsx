import { Navigate } from "react-router-dom";
import App from "../App";
import Applied from "../pages/Applied";
import Interview from "../pages/Interview";
import Offer from "../pages/Offer";

export const ROUTES = {
    ROOT: '/',
    DASHBOARD: '/dashboard',
    APPLIED: '/applied',
    INTERVIEW: '/interview',
    OFFER: '/offer',
};

const routes = [
    {
        path: ROUTES.ROOT,
        element: <Navigate to={ROUTES.APPLIED} />,
    },
    // do conditional navigation like this
    // { path: '/', element: isLoggedIn ? <Dashboard /> : <Navigate to='/login' />}
    {
        path: ROUTES.APPLIED,
        element: <Applied />,
    },
    {
        path: ROUTES.INTERVIEW,
        element: <Interview />,
    },
    {
        path: ROUTES.OFFER,
        element: <Offer />,
    }
]

export default routes;