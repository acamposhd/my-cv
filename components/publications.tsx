import { IWork, IPublications } from '../data/data';

interface PublicationsProps {
    data: IPublications[];
}

const Publications = ({ data }: PublicationsProps) => {
    return (
        <>
            <h3>Publications</h3>
            <article className="Experience">
                {
                    data.map((publication, index) => (
                        <div key={`publication_${index}`} className="Experience-work">
                            <div className="Experience-work-title">
                                <h4 className="Experience-work-position">{publication.title}</h4>
                                <span className="Experience-work-duration">{publication.duration}</span>
                            </div>
                            <div className="Experience-work-place">
                                <img src={publication.logo} alt={publication.company} />
                                <div>
                                    <h6 className="Experience-work-company">{publication.company}</h6>
                                    <span className="Experience-work-location">{publication.location}</span>
                                </div>
                            </div>

                            <ul className="Experience-work-description">
                                {publication.description.map((point, index) => (
                                    <li key={`point_${index}`} >{point}</li>
                                ))}
                            </ul>
                            <div className="Experience-work-stack">
             
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
                    .Experience-work:first-child{
                        padding-top: 0;
                    }
                    .Experience-work-title {
                        display: flex;
                        align-items: baseline;
                    }

                    .Experience-work-duration {
                        font-size: 1rem;
                        margin: 0 1rem
                        opacity: .5;
                        margin-left: 1rem;
                    }

                    .Experience-work-place {
                        display: flex;
                        align-items: center;
                        margin: .5rem 0;
                    }

                    .Experience-work-place img {
                        max-height: 45px;
                        max-width: 100px;
                        justify-self: center
                    }

                    .Experience-work-place div {
                        display: flex;
                        flex-direction: column;
                        margin-left: 1rem;
                    }

                    .Experience-work-stack{
                        display: flex;
                        flex-wrap: wrap;
                        margin-top: 1rem;
                    }

                    .Experience-work-tool{
                        display: flex;
                        align-items: center;
                        margin: .5rem 1rem;
                    }

                    .Experience-work-tool img{
                        width: 20px;
                        margin-right: .5rem;
                    }
                `}
            </style>
        </>
    );
}

export default Publications;