import { ILanguage } from "../data/data";

interface LanguagesProps {
  data: ILanguage[];
}

const Languages = ({ data }: LanguagesProps) => {
  return (
    <>
      <h3>Languages</h3>
      <article className="Languages">
        {data.map((language, index) => (
          <div key={`language_${index}`} className="Languages-language">
            <h6 className="Languages-language-name"> {language.name} {language.link&&<a className="Languages-links" href={language.link} target="_blank"> <img src="https://img.icons8.com/officexs/16/000000/external-link.png"/></a>}</h6>
            <span className="Languages-language-level">{language.level}</span>
          </div>
        ))}
      </article>
      <style jsx>
        {`
          .Languages {
            display: flex;
            flex-direction: column;
            border-bottom: 1px solid rgba(200, 200, 200, 0.2);
            padding: 0 1rem;
            padding-bottom: 3rem;
          }
          .Languages-language {
            margin: 0.5rem 0;
          }
          .Languages-links {
            color: blue;
            font-size: 14px;
          }
        `}
      </style>
    </>
  );
};

export default Languages;
