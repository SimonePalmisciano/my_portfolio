import Footer from "./Footer";

function Header() {
    return (
        <>
            <section
                className="d-none d-lg-flex col-lg-3 position-fixed top-0 end-0 vh-100 overflow-y-auto flex-column align-items-center p-4 bg-dark"
                id="header"
            >
                <header className="text-center mb-4">
                    <div>
                        <span id="imageAvatar">

                        </span>
                        <h1>
                            Simone Palmisciano
                        </h1>
                        <p>
                            Web Developer
                        </p>
                    </div>
                </header>

                <nav className="navbar w-100">
                    <ul className="navbar-nav flex-column w-100">
                        <li className="nav-item">
                            <a className="nav-link" href="#about">
                                Chi
                                sono</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">
                                Competenze
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">
                                Progetti
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#passions">
                                Passioni
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">
                                Contatti
                            </a>
                        </li>
                    </ul>
                </nav>

                <Footer />
            </section>

            <nav className="navbar navbar-dark bg-dark fixed-top d-lg-none">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#about">
                        Simone Palmisciano
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#mobileNavbar"
                        aria-controls="mobileNavbar"
                        aria-label="Apri o chiudi il menu"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="offcanvas offcanvas-end text-bg-dark"
                        tabIndex="-1"
                        id="mobileNavbar"
                        aria-labelledby="mobileNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="mobileNavbarLabel">
                                Navigazione
                            </h5>
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="offcanvas"
                                aria-label="Chiudi menu"
                            ></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#about" data-bs-dismiss="offcanvas">
                                        Chi
                                        sono</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#skills" data-bs-dismiss="offcanvas">
                                        Competenze
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#projects" data-bs-dismiss="offcanvas">
                                        Progetti
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#passions" data-bs-dismiss="offcanvas">
                                        Passioni
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact" data-bs-dismiss="offcanvas">
                                        Contatti
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header