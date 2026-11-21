import { Link } from "react-router"
import { projects } from "../data/projects.js"

function Projects() {
    /* fare la map con projects per stampare i progetti in base a quelli che ho fatto */
    return (
        <>
            <section id="projects">
                <div className="container">

                    <header>
                        <h2>
                            PROGETTI
                        </h2>
                        <p>
                            i miei progetti sviluppati in team e singolarmente
                        </p>
                    </header>

                    <section className="projects-section">

                        {projects.map((project) => {
                            return (
                                <article key={project.id}>
                                    <h4>
                                        {project.nome}
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
                                            <Link className="btn" to="/project/prometheuslabs">
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
                            )
                        })}

                    </section>

                </div>
            </section>

        </>
    )
}
export default Projects