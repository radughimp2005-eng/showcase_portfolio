export default function Projects() {
    return (
        <main>
            <div className="black-background2"></div>
            <h1 className="recent-work">Recent work</h1>
            <div className="three-projects">
                <section className="project1">
                    <img src="/images/picooprojectimg.png" alt="Picooimg" className="picooimg"/>
                    <article className="picoo-article">
                        <div className="row">
                            <h2 className="projects-title">Picoo</h2>
                            <i className="fa-solid fa-arrow-right project-arrow"></i>
                        </div>
                        <p className="projects-description">A visually engaging and modern website demonstrating my <strong>DESIGN</strong> and <strong>FRONTEND</strong> skills</p>
                        <div className="row">
                            <p>Figma</p>
                            <p>HTML & CSS</p>
                            <p>JavaScript</p>
                        </div>
                    </article>
                </section>
                <section className="project2">
                    <img src="/images/owenbryceprojectimg.png" alt="OwenBryceImg" className="owenbryceimg"/>
                    <article className="owenbryce-article">
                        <div className="row">
                            <h2 className="projects-title">Owen Bryce</h2>
                            <i className="fa-solid fa-arrow-right project-arrow"></i>
                        </div>
                        <p className="projects-description projects-description2">A personal brand and modern website demonstranting my <strong>DESIGN</strong> skills</p>
                        <div className="row">
                            <p>Figma</p>
                            <p>Adobe Illustrator</p>
                        </div>
                    </article>
                </section>
                <section className="project3">
                    <img src="/images/movieprojectimg.png" alt="MovieImg" className="movieimg"/>
                    <article className="movie-article">
                        <div className="row">
                            <h2 className="projects-title">Movie website</h2>
                            <i className="fa-solid fa-arrow-right project-arrow"></i>
                        </div>
                        <p className="projects-description">A visually attractive creative agency website demonstranting my <strong>FRONTEND</strong> skills</p>
                        <div className="row">
                            <p>React</p>
                            <p>CSS</p>
                            <p>API</p>
                        </div>
                    </article>
                </section>
            </div>
        </main>
    );
}