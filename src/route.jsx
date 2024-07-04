import {createBrowserRouter, Link} from "react-router-dom";
import Login from "./pages/Login.jsx";
import SummaryPoint from "./pages/SummaryPoint.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Test from "./pages/Test.jsx";

export const route = createBrowserRouter([
    {path: '/', element: <Login/>},
    {path: '/dashboard', element: <Dashboard/>},
    {path: '/summary-point', element: <SummaryPoint/>},
    {path: '/login', element: <Login/>},
    {path: '*', element: <Test/>},
]);