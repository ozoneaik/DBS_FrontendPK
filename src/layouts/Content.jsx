import Navbar from "./Navbar.jsx";
const Content = ({children}) => {
    return (
        <>
            <Navbar/>
            <main className={'container-fluid'} style={{marginTop: 80}}>
                <div className={'row'}>
                    <div className={'col-12'}>
                        {children}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Content;