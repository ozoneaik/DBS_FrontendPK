import {Link} from "react-router-dom";
import '../assets/styles/navbar.css'

const Navbar = ({props}) => {
        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Fixed navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">

                            <li className="nav-item">
                                <Link to={'/dashboard'} className="nav-link" aria-current="page">SUM</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/summary-point'} className="nav-link " aria-current="page">ORDER</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/summary-point'} className="nav-link " aria-current="page">SERVICE</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/summary-point'} className="nav-link " aria-current="page">APPROVE</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/summary-point'} className="nav-link " aria-current="page">RECOMMEND</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/summary-point'} className="nav-link " aria-current="page">AR</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/summary-point'} className="nav-link " aria-current="page">POINT</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/summary-point'} className="nav-link " aria-current="page">RP</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/summary-point'} className="nav-link " aria-current="page">RT</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-sm btn-danger" type="submit">logout</button>
                        </form>
                    </div>
                </div>
            </nav>
    )
    }
;

export default Navbar;