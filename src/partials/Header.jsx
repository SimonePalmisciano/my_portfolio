import Footer from "./Footer";

function Header() {
    return (
        <>
            <section className="" id="header">
                <header>
                    <div>
                        <span id="imageAvatar">

                        </span>
                        <h1>
                            Simone Palmisciano
                        </h1>
                        <p>Web Developer</p>
                    </div>
                </header>
                <nav className="navbar navbar-expand-lg d-flex justify-content-between">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#about">
                                    Su di Me
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">
                                    Skills
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">
                                    Progetti
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#journey">
                                    Journey
                                </a>
                            </li>
                        </ul>
                        <div>
                            <a
                                className="btn"
                                href="#contacts">
                                Contattami
                            </a>
                        </div>
                    </div>

                </nav>
                <Footer />
            </section>
        </>
    )
}
export default Header