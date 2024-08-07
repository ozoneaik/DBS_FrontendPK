import React from 'react';
import {Link} from "react-router-dom";

function Test(props) {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Fixed navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1"
                                   aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="SearchComponent" aria-label="SearchComponent"/>
                                <button className="btn btn-outline-success" type="submit">SearchComponent</button>
                        </form>
                    </div>
                </div>
            </nav>

            <main className="container">
                <div className="bg-light p-5 rounded">
                    <h1>Navbar example</h1>
                    <p className="lead">This example is a quick exercise to illustrate how fixed to top navbar works. As
                        you scroll, it will remain fixed to the top of your browser’s viewport.</p>
                    <Link to={'/dashboard'} className="btn btn-lg btn-primary" role="button">View navbar
                        docs »</Link>
                </div>
            </main>
        </>
);
}

export default Test;