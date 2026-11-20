function Skills() {
    const skills = [
        { name: 'HTML', file: 'html5.svg' },
        { name: 'CSS', file: 'css3.svg' },
        { name: 'JavaScript', file: 'javascript.svg' },
        { name: 'React', file: 'react.svg' },
        { name: 'Express', file: 'express.svg', inverted: true },
        { name: 'Node.js', file: 'nodejs.svg' },
        { name: 'PHP', file: 'php.svg' },
        { name: 'MySQL', file: 'mysql.svg' },
    ]

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
                    <div className="skills-grid">
                        {skills.map((skill) => (
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
            </section>
        </>
    )
}
export default Skills