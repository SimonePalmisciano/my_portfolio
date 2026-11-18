import Footer from "./Footer";

function Header() {
    return (
        <section
            className="col-3 position-fixed top-0 end-0 vh-100 overflow-y-auto d-flex flex-column align-items-center p-4 bg-dark"
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
                            Chi sono
                        </a>
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
    )
}
export default Header