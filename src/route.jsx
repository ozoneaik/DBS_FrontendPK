import {createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Content from "./layouts/Content.jsx";
import SummaryPoint from "./pages/SummaryPoint.jsx";

export const route = createBrowserRouter([
    {path: '/', element: <h1>Page Route from /</h1>},
    {
       element: <Content/>, children:
            [
                {path: '/main', element: <App/>},
                {path: '/summary-point', element : <SummaryPoint/>}
            ]
    },
    {path: '/login', element: <Login/>},
]);