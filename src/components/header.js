import React from "react";
import { Link } from "gatsby";


const Header = () => {
    return(

        <header className="bg-light w-100 header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light container">
                <div className="container-fluid d-flex justify-content-around">
                    <div className="logo"><a className="navbar-brand fs-1" href="/">SGR</a></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav w-100 d-flex justify-content-end">
                        <li className="nav-item">
                            <Link className="nav-link text-dark" aria-current="page" href="/portafolio">PORTAFOLIO</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" href="#">SERVICIOS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" href="#">ACERCA</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" href="#">CONTACTO</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}


export default Header