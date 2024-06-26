import Navbar from "./Navbar.jsx";

const Content = ({children}) => {
    return (
        <>
            <Navbar/>
            <div className={'container-fluid mt-3'}>
                <div className={'row'}>
                    <div className={'col-12'}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Content;