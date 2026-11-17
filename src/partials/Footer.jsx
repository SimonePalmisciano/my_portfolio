function Footer() {
    return (
        <footer className="site-footer">
            <div className="">
                <a className="brand footer-brand" href="#hero">
                    <span className="" aria-hidden="true" />
                    <span>Portfolio</span>
                </a>
                <p>Progettato e realizzato con cura da Simone.</p>
                <a className="" href="#hero">Torna su ↑</a>
                <span className="footer-copyright">© {new Date().getFullYear()} Simone Palmisciano</span>
            </div>
        </footer>
    )
}
export default Footer