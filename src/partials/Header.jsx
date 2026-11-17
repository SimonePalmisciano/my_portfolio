function Header() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg">
                    <div>
                        <a className="navbar-brand" href="#">
                            SP
                        </a>
                    </div>
                    <div className="d-flex justify-content-between">
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
                        <button className="btn">
                            Contattami
                        </button>
                    </div>

                </nav>
            </header>
        </>
    )
}
export default Header