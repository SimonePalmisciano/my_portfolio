function Header({ theme, onThemeToggle }) {
    return (
        <>
            <header>
                <div className="container">
                    <nav className="navbar navbar-expand-lg d-flex justify-content-between">
                        <div>
                            <a className="navbar-brand me-5" href="#">
                                SP
                            </a>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarNavDropdown">
                            <div className="d-flex gap-4">
                                <a className="nav-link" href="#about">
                                    Su di Me
                                </a>
                                <a className="nav-link" href="#skills">
                                    Skills
                                </a>
                                <a className="nav-link" href="#projects">
                                    Progetti
                                </a>
                                <a className="nav-link" href="#journey">
                                    Journey
                                </a>
                            </div>

                            <div>
                                <button
                                    className="btn theme-toggle"
                                    onClick={onThemeToggle}
                                    aria-label={`Passa al tema ${theme === "dark" ? "chiaro" : "scuro"}`}
                                    title={`Passa al tema ${theme === "dark" ? "chiaro" : "scuro"}`}
                                >
                                    {theme === "dark" ? (
                                        <svg viewBox="0 0 24 24" aria-hidden="true">
                                            <circle cx="12" cy="12" r="4" />
                                            <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
                                        </svg>
                                    )}
                                </button>
                                <a
                                    className="btn"
                                    href="#contacts">
                                    Contattami
                                </a>
                            </div>
                        </div>

                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header