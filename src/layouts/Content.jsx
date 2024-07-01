import Navbar from "./Navbar.jsx";
import {Outlet} from "react-router-dom";

const Content = () => {
    return (
        <>
            <Navbar/>
            <div className={'container-fluid mt-3'}>
                <div className={'row'}>
                    <div className={'col-12'}>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Content;