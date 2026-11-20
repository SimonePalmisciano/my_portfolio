import { Link } from "react-router"

function Projects() {
    return (
        <>
            <section id="projects">
                <div className="container">

                    <header>
                        <h2>
                            Progetti
                        </h2>
                        <p>
                            i miei progetti sviluppati in team e singolarmente
                        </p>
                    </header>

                    <article>
                        <h4>
                            Progetto 1
                        </h4>
                        <p>
                            il mio primo progetto
                        </p>
                        <div>
                            <div className="col-12">
                                <p>

                                </p>
                            </div>
                            <div className="col-6">
                                <img src="" alt="" />
                                <Link className="btn" to="/project">
                                    Scopri di più
                                </Link>
                            </div>
                            <div className="col-6">
                                <ol>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ol>
                            </div>
                            <div className="col-12">
                                <hr />
                            </div>
                        </div>
                    </article>

                    <article>
                        <h4>
                            Progetto 1
                        </h4>
                        <p>
                            il mio primo progetto
                        </p>
                        <div>
                            <div className="col-12">
                                <p>
                                    ciao
                                </p>
                            </div>
                            <div className="col-6">
                                <img src="" alt="" />
                                <Link className="btn" to="/project">
                                    Scopri di più
                                </Link>
                            </div>
                            <div className="col-6">
                                <ol>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ol>
                            </div>
                            <div className="col-12">
                                <hr />
                            </div>
                        </div>
                    </article>

                </div>
            </section>

        </>
    )
}
export default Projects