import {createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";

export const route = createBrowserRouter([
    {path: '/' ,element: <h1>Page Route from /</h1>},
    {path: '/login' ,element: <Login/>},
    {path: '/main',element: <App/>}
]);