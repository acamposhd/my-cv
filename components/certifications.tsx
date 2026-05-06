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
                        <div className="Certifications-cert-place">
                            <img src={cert.logo} alt={cert.issuer} />
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
                    </div>
                ))}
            </article>
            <style jsx>
                {`
                    .Certifications {
                        display: flex;
                        flex-direction: column;
                        border-bottom: 1px solid rgba(200, 200, 200, 0.2);
                        padding: 0 1rem;
                        padding-bottom: 3rem;
                    }
                    .Certifications-cert {
                        margin: 1rem 0;
                    }
                    .Certifications-cert-place {
                        display: flex;
                        align-items: center;
                    }
                    .Certifications-cert-place img {
                        max-height: 35px;
                        max-width: 60px;
                        margin-right: .75rem;
                    }
                    .Certifications-cert-text {
                        display: flex;
                        flex-direction: column;
                    }
                    .Certifications-cert-issuer {
                        font-size: .9rem;
                        opacity: .8;
                    }
                    .Certifications-cert-id {
                        font-size: .75rem;
                        opacity: .6;
                        margin-top: 2px;
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
