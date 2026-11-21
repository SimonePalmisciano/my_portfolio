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
                                    <h4 className="text-uppercase">
                                        {project.nome}
                                    </h4>
                                    <p>
                                        {project.short_description}
                                    </p>
                                    <div>
                                        <div className="col-12">
                                            <p>
                                                {project.description}
                                            </p>
                                        </div>
                                        <div className="col-6">
                                            <img src={project.imgHome} alt={project.name} />
                                            <Link className="btn" to="/project/prometheuslabs">
                                                Scopri di più
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <ol>
                                                {project.detail_list.map((detail) => {
                                                    return (
                                                        <li key={project.id}>{detail}</li>
                                                    )
                                                })}
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