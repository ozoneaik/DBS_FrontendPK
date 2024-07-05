import {createBrowserRouter, Link} from "react-router-dom";
import Login from "./pages/Login.jsx";
import SummaryPoint from "./pages/SummaryPoint.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Test from "./pages/Test.jsx";
import Services from "./pages/Services.jsx";
import Approve from "./pages/Approve.jsx";
import Recommend from "./pages/Recommend.jsx";
import Ar from "./pages/Ar.jsx";
import Point from "./pages/Point.jsx";

export const route = createBrowserRouter([
    {path: '/', element: <Login/>},
    {path: '/dashboard', element: <Dashboard/>},
    {path: '/summary-point', element: <SummaryPoint/>},
    {path : '/services', element: <Services />},
    {path : '/approve', element: <Approve/>},
    {path : '/recommend', element: <Recommend/>},
    {path : '/ar', element: <Ar/>},
    {path : '/point', element: <Point/>},
    {path: '/login', element: <Login/>},
    {path: '*', element: <Test/>},
]);