import { skills } from "../data/skills";

function Skills() {

    const frontSkills = skills.slice(0, 4);

    const backSkills = skills.slice(4);

    return (
        <>
            <section id="skills">
                <div className="container">
                    <header>
                        <h2>
                            Competenze
                        </h2>
                        <p>
                            Cosa conosco e di cosa sono capace
                        </p>
                    </header>
                    <h5 className="text-center">
                        FRONT END
                    </h5>
                    <div className="row">
                        <div className="skills-grid">

                            {frontSkills.map((skill) => (
                                <div className="skill" key={skill.name}>
                                    <img
                                        src={`/skills/${skill.file}`}
                                        alt={`Logo ${skill.name}`}
                                        className={skill.inverted ? 'inverted-logo' : undefined}
                                    />
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <h5 className="text-center mt-5">
                        BACK END
                    </h5>
                    <div className="row">
                        <div className="skills-grid">

                            {backSkills.map((skill) => (
                                <div className="skill" key={skill.name}>
                                    <img
                                        src={`/skills/${skill.file}`}
                                        alt={`Logo ${skill.name}`}
                                        className={skill.inverted ? 'inverted-logo' : undefined}
                                    />
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Skills