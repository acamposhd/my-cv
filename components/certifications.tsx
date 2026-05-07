import { ICertification } from "../data/data";

interface CertificationsProps {
    data: ICertification[];
}

const Certifications = ({ data }: CertificationsProps) => {
    return (
        <>
            <h3>Certifications</h3>
            <article className="Certifications">
                {data.map((cert, index) => (
                    <div key={`cert_${index}`} className="Certifications-cert">
                        <img className="Certifications-cert-logo" src={cert.logo} alt={cert.issuer} />
                        <div className="Certifications-cert-text">
                            <h6 className="Certifications-cert-name">
                                {cert.name}
                                {cert.link && <a href={cert.link} target="_blank"> <img src="https://img.icons8.com/officexs/16/000000/external-link.png" /></a>}
                            </h6>
                            <span className="Certifications-cert-issuer">{cert.issuer}</span>
                            {cert.credentialId && <span className="Certifications-cert-id">ID: {cert.credentialId}</span>}
                            {cert.date && <span className="Certifications-cert-date">{cert.date}</span>}
                        </div>
                    </div>
                ))}
            </article>
            <style jsx>
                {`
                    .Certifications {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                        gap: 1.25rem 1.5rem;
                        border-bottom: 1px solid rgba(200, 200, 200, 0.2);
                        padding: 0 1rem;
                        padding-bottom: 3rem;
                    }
                    .Certifications-cert {
                        display: flex;
                        align-items: center;
                        gap: .75rem;
                    }
                    .Certifications-cert-logo {
                        flex-shrink: 0;
                        width: 40px;
                        height: 40px;
                        object-fit: contain;
                    }
                    .Certifications-cert-text {
                        display: flex;
                        flex-direction: column;
                        min-width: 0;
                    }
                    .Certifications-cert-issuer {
                        font-size: .9rem;
                        opacity: .8;
                    }
                    .Certifications-cert-id {
                        font-size: .75rem;
                        opacity: .6;
                        margin-top: 2px;
                        word-break: break-all;
                    }
                    .Certifications-cert-date {
                        font-size: .75rem;
                        opacity: .6;
                    }
                `}
            </style>
        </>
    );
};

export default Certifications;
