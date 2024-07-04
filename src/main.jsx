import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {route} from "./route.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/styles/custom.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={route}>
    </RouterProvider>
)
