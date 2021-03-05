import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from '../../container';
function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <Container>
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/post">Post</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#link">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#link">Link</a>
                            </li>
                        </ul>
                    </div>
                </Container>

            </nav>
        </header>
    );
}

export default Header;