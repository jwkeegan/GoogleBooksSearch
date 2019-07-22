import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="/">
                    Google Books
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/saved">Saved</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
