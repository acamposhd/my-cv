import { IProject } from "../data/data";

interface ProjectsProps {
    data: IProject[];
}

const Projects = ({ data }: ProjectsProps) => {
    return (
        <>
            <h3>Projects</h3>
            <article className="Experience">
                {
                    data.map((project, index) => (
                        <div key={`project_${index}`} className="Experience-work">
                            <div className="Experience-work-title">
                                <h4 className="Experience-work-position">{project.name}</h4>
                                <span className="Experience-work-duration">{project.duration}</span>
                            </div>
                            <div className="Experience-work-place">
                                {project.logo && <img src={project.logo} alt={project.name} />}
                                <div>
                                    <h6 className="Experience-work-company">{project.role}{project.link && <a className="Languages-links" href={project.link} target="_blank"> <img src="https://img.icons8.com/officexs/16/000000/external-link.png" /></a>}</h6>
                                </div>
                            </div>

                            <ul className="Experience-work-description">
                                {project.description.map((point, pointIndex) => (
                                    Array.isArray(point) ? (
                                        <ul key={`subpoints_${pointIndex}`} className="Experience-work-subpoints">
                                            {point.map((sub, subIndex) => (
                                                <li key={`sub_${pointIndex}_${subIndex}`}>{sub}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <li key={`point_${pointIndex}`}>{point}</li>
                                    )
                                ))}
                            </ul>
                            <div className="Experience-work-stack">
                                {project.stack.map((tool, toolIndex) => (
                                    <div className="Experience-work-tool" key={`tool_${toolIndex}`}>
                                        <img src={tool.icon} />
                                        <span>{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </article>
            <style jsx>
                {`
                    .Experience {
                        display: flex;
                        flex-direction: column;
                        padding: 0 1rem;
                    }
                    .Experience-work {
                        display: flex;
                        flex-direction: column;
                        padding: 3rem 0;
                        border-bottom: 1px solid rgba(200,200,200, .2);
                    }
                    .Experience-work:first-child {
                        padding-top: 0;
                    }
                    .Experience-work-title {
                        display: flex;
                        align-items: baseline;
                    }
                    .Experience-work-duration {
                        font-size: 1rem;
                        margin-left: 1rem;
                        opacity: .5;
                    }
                    .Experience-work-place {
                        display: flex;
                        align-items: center;
                        margin: .5rem 0;
                    }
                    .Experience-work-place img {
                        max-height: 45px;
                        max-width: 100px;
                        justify-self: center;
                    }
                    .Experience-work-place div {
                        display: flex;
                        flex-direction: column;
                        margin-left: 1rem;
                    }
                    .Experience-work-subpoints {
                        margin: .25rem 0 .25rem 1.5rem;
                        padding-left: 1rem;
                        list-style-type: circle;
                    }
                    .Experience-work-subpoints li {
                        margin: .15rem 0;
                    }
                    .Experience-work-stack {
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
                        gap: .5rem 1rem;
                        margin-top: 1rem;
                    }
                    .Experience-work-tool {
                        display: flex;
                        align-items: center;
                        min-width: 0;
                    }
                    .Experience-work-tool img {
                        width: 20px;
                        margin-right: .5rem;
                        flex-shrink: 0;
                    }
                    .Experience-work-tool span {
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                `}
            </style>
        </>
    );
};

export default Projects;
