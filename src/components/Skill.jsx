import React from 'react'

const Skill = () => {
    const skills = ['html', 'css', 'javascript', 'node express', 'react']
    return (
        <section>
            <div calssName="t-wrap">
                <h2>Skill</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <ul className="skills">
                    {skills.map((skill, i) => (
                        <li key={i}>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </section >
    )
}

export default Skill