import { string } from "prop-types";
import { link } from "fs";

export interface IIntroduction {
    name: string;
    avatar: string;
    location: string;
    description: string;
    position: string;
}

export interface IWork {
    title: string;
    logo: string;
    company: string;
    location: string;
    duration: string;
    description: string[];
    stack: { name: string; icon: string; }[];
    link?:string;
}
export interface IPublications {
    title: string;
    company: string;
    logo: string;
    location: string;
    duration: string;
    description: string[];
    link: string;
}

export interface ISchoolAux{
    name:string;
    link?:string
}

export interface ISchoolEntity {
    name: string;
    logo: string;
    title: ISchoolAux[];
    duration: string;
    credentialLink?: string;
}

export interface ISkill {
    name: string;
    icon: string;
    current?: boolean;
}

export interface IAward {
    title: string;
    issuer: string;
    location: string;
    logo: string;
    description: string;
    link: string;
    date: string;
}

export interface ILanguage {
    name: string;
    level: string;
    link?:string;
}

export interface IContact {
    name: string;
    icon: string;
    link: string;
}

export interface IResume {
    introduction: IIntroduction;
    experience: IWork[];
    education: ISchoolEntity[];
    publications: IPublications[];
    skills: ISkill[];
    awards: IAward[];
    languages: ILanguage[];
    contact: IContact[];
}

const Resume: IResume = {
    introduction: {
        name: "Alberto Campos",
        avatar: "./images/avatar.png",
        location: "México",
        description: "Full-Stack developer",
        position: "Full-Stack developer @Thincrs & Full-Stack developer @UTAGS "
    },
    experience: [
        {
            title: 'Full-Stack Developer',
            company: 'Thincrs',
            logo: './images/thincrs.png',
            duration: 'July 2017 - Present',
            location: 'Guadalajara, Mexico',
            description: [
                'Full-stack development of the landing page, REST API and internship admin',
                "Development of ML models for predictions, then connect those to the Laravel's REST API",
                "Integration of the REST API with the React and Angular projects",
                "Configuration of Jenkins and pipelines to deploy the GitLab Repositories",
                'Involved into the planning/designing phase for the applications.'
            ],
            stack: [
                { name: 'Angular', icon: 'https://cdn.svgporn.com/logos/angular-icon.svg' },
                { name: 'React', icon: 'https://cdn.svgporn.com/logos/react.svg' },
                { name: 'Nodejs', icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg' },
                { name: 'Laravel', icon: 'https://cdn.svgporn.com/logos/laravel.svg' },
                { name: 'MySQL', icon: 'https://cdn.svgporn.com/logos/mysql.svg' },
                { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg' },
                { name: 'Python', icon: 'https://cdn.svgporn.com/logos/python.svg' },
                { name: 'Flask', icon: 'https://cdn.svgporn.com/logos/flask.svg' },
                { name: 'Jenkins', icon: 'https://cdn.svgporn.com/logos/jenkins.svg' }
            ],
            link:"https://thincrs.com/"
        },
        {
            title: 'Full-Stack Developer',
            company: 'Universidad Tecnológica de Aguascalientes',
            logo: './images/utags.png',
            duration: 'January 2019 - Present',
            location: 'Aguascalientes, México',
            description: [
                'Full-stack development for different projects using the MEAN and MEIN stacks',
                'Leader of different teams',
                'Subject teacher of multi-platform application development',
                'Involved into the planning/designing phase for the applications.'
            ],
            stack: [
                { name: 'MongoDB', icon: 'https://cdn.svgporn.com/logos/mongodb.svg' },
                { name: 'Expressjs', icon: 'https://cdn.svgporn.com/logos/express.svg' },
                { name: 'Angular', icon: 'https://cdn.svgporn.com/logos/angular-icon.svg' },
                { name: 'Bootstrap', icon: 'https://cdn.svgporn.com/logos/bootstrap.svg' },
                { name: 'Nodejs', icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg' },
                { name: 'Typescript', icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg' },
                { name: 'Ionic', icon: 'https://cdn.svgporn.com/logos/ionic.svg' },
                { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg' },
            ]
        }
    ],
    education: [
        { name: 'Universidad Tecnológica de Aguascalientes', logo: './images/utags.png', title: [{name:'Information Technologies Engineering Degree'}], duration: '2019 - 2020' },
        { name: 'Universidad Tecnológica el Retoño', logo: './images/utr.png', title: [{name:'Information Technologies Associate Degree'}], duration: '2016 - 2018' },
        { name: 'Massachusetts Institute of Technology', logo: './images/mit.svg', title: [{name:'Digital Transformation Course', link:'https://drive.google.com/file/d/1mLq9PracAVlS_jGonx4NOPMuSInTR3g0/view?usp=sharing'}], duration: '2020' },
        { name: 'Algonquin College of Applied Arts and Technology', logo: './images/ac.png', title: [{name:'Computer Science Courses'}], duration: 'September 2019 - December 2019' },
        { name: 'Pima Community College', logo: './images/pima.png', title: [{name:'Business Management Courses'}], duration: 'August 2016 - December 2016' },
        { name: 'Universidad Autónoma de Aguascalientes', logo: './images/uaa.jpg', title: [{name:'Android Development Course'}], duration: 'March 2018 - June 2018' },
        { name: 'Linkedin Learning', logo: 'https://cdn.svgporn.com/logos/linkedin.svg', title: [{name:'Visual Studio Code Course', link:'https://drive.google.com/file/d/1d4fwyjpDkaku49nkpvrslnZzh3bUkrRU/view?usp=sharing'}], duration: '2019'},
        { name: '', logo: './images/platzi.png', title: [
            {name:'Carrera Bases de Datos', link:"https://drive.google.com/file/d/1ykl1lhA9PAFY4SswFHnOVP77bTQafl_s/view?usp=sharing"},
            {name:'Carrera Escuela de Inglés', link:"https://drive.google.com/file/d/1_QInJ20Q8-cQL3UP3Gv1AYK9GrMlue7U/view?usp=sharing"},
            {name:'Carrera Desarrollo Backend con Go', link:"https://drive.google.com/file/d/1k5JvGKuqDJs4y6AEjOa4KPOnGav9l_6x/view?usp=sharing"},
            {name:'Curso de Java SE', link:"https://drive.google.com/file/d/1du9GL1WuQUxHVV2g2qfKBh4_MMy0dM34/view?usp=sharing"}, 
            {name:'Curso de Go', link:"https://drive.google.com/file/d/16K82p7zcTB2q7Rg2ZVijWu00l23Y12F1/view?usp=sharing"},
            {name:'Curso de MongoDB', link:"https://drive.google.com/file/d/199HYQkywELbg6Vjcs0-Uu8FnEcqiQzIl/view?usp=sharing"},
            {name:'Curso de Buenas Prácticas', link:"https://drive.google.com/file/d/1h3tjSbAI5iR19MmeBKXUfw21IhQvGoTg/view?usp=sharing"},
            {name:'Curso de HTML Y CSS', link:"https://drive.google.com/file/d/1CDvBQhLxaLGKGril1Qh4OC042ftlQgfk/view?usp=sharing"},
            {name:'Curso de Seguridad Informática', link:"https://drive.google.com/file/d/13WR_pUUhF2HdAtiSDh98IPKUFfYcRT3F/view?usp=sharing"},
            {name:'Curso de PHP con Laravel', link:"https://drive.google.com/file/d/1xoYfitKYbzfGeXt2Km96GQqSFySntJe_/view?usp=sharing"},
            {name:'Curso de POO', link:"https://drive.google.com/file/d/17yGlcp-bfF-z0IQ3LupbESaRKbVixN18/view?usp=sharing"},
            {name:'Curso de Redes de Internet', link:"https://drive.google.com/file/d/17DvfvnblWyTMzXAkcdR3iu2yNPApU1Vb/view?usp=sharing"},
            {name:'Curso de SCRUM', link:"https://drive.google.com/file/d/1B0ZLkBKKt-3eTgcLfu8WeftTxh5o4Hqq/view?usp=sharing"},
            {name:'Curso de SQL y MySQL', link:"https://drive.google.com/file/d/1hI3P6lFFxy1jMpTYOjyClrX09FGgUYfz/view?usp=sharing"},
            {name:'Curso de Bases de Datos', link:"https://drive.google.com/file/d/1QP1fXI-DWCUb-wWKkA7jpi28h4MhLAFc/view?usp=sharing"},
            {name:'Curso de Línea de Comandos', link:"https://drive.google.com/file/d/1TwWhbGH5YM2gewWqri0VZ5-tyVgqkESx/view?usp=sharing"},
            {name:'Curso de Google Cloud Platform', link:"https://drive.google.com/file/d/1ILwXNzlSDcIODnShOxWcxs-ekE6k27Yy/view?usp=sharing"}], duration: '2019 - 2020', credentialLink: 'https://drive.google.com/drive/folders/1wJ1mw0QJXFJt7gd4t79lq1_3s90u8PF6?usp=sharing' },
        { name: '', logo: './images/mongou.png', title: [{name:'MongoDB Basics', link:'https://drive.google.com/file/d/1l1Sz3XH7WRcCfPFAHeBceLEa99VJVdhg/view?usp=sharing' }], duration: 'August 2019', credentialLink:'https://drive.google.com/file/d/1l1Sz3XH7WRcCfPFAHeBceLEa99VJVdhg/view?usp=sharing'}
        
    ],
    publications: [
        {
            title: 'Understanding the Crowd Markets that Workers and Requesters Imagine',
            company: 'Carnegie Mellon University, CI, ACM Collective Intelligence Conference Series',
            logo: './images/cm.png',
            duration: '2019',
            location: 'Pittsburgh, USA',
            description: [
                'Carlos Toxtli, Juan Pablo Castillo, Alberto Campos, Benjamin V. Hanraha, Kotaro Hara, Chris Callison-Burch, Jeffrey Bigham, Kristy Milland, Abigail Adams, Saiph Savage'
            ],
            link:'https://ci.acm.org/2019/assets/proceedings/CI_2019_paper_60.pdf'
        }
        
    ],
    skills: [
        { name: 'JavaScript', icon: 'https://cdn.svgporn.com/logos/javascript.svg', current:true },
        { name: 'React', icon: 'https://cdn.svgporn.com/logos/react.svg', current: true },
        { name: 'Laravel', icon: 'https://cdn.svgporn.com/logos/laravel.svg', current: true },
        { name: 'TypeScript', icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg', current: true },
        { name: 'Angular', icon: 'https://cdn.svgporn.com/logos/angular-icon.svg', current:true },
        { name: 'Ionic', icon: 'https://cdn.svgporn.com/logos/ionic.svg', current:true },
        { name: 'Node.js', icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg', current: true },
        { name: 'MongoDB', icon: 'https://cdn.svgporn.com/logos/mongodb.svg', current: true },
        { name: 'MySQL', icon: 'https://cdn.svgporn.com/logos/mysql.svg', current: true },
        { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg', current: true },
        { name: 'Jira', icon: 'https://cdn.svgporn.com/logos/jira.svg', current: true },
        { name: 'HTML5', icon: 'https://cdn.svgporn.com/logos/html-5.svg', current: true },
        { name: 'CSS3', icon: 'https://cdn.svgporn.com/logos/css-3.svg', current: true },
        { name: 'Bootstrap', icon: 'https://cdn.svgporn.com/logos/bootstrap.svg', current: true },
        { name: 'Jenkins', icon: 'https://cdn.svgporn.com/logos/jenkins.svg', current: true },
        { name: 'Java', icon: 'https://cdn.svgporn.com/logos/java.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.svgporn.com/logos/postgresql.svg' },
        { name: 'C#', icon: 'https://cdn.svgporn.com/logos/c.svg' },
        { name: 'Go', icon: 'https://cdn.svgporn.com/logos/go.svg' },
        { name: 'PHP', icon: 'https://cdn.svgporn.com/logos/php.svg' },
        { name: 'Sass', icon: 'https://cdn.svgporn.com/logos/sass.svg'},
        { name: 'Zeit', icon: 'https://cdn.svgporn.com/logos/zeit-icon.svg'},
    ],
    awards: [
        {
            title: 'Honorable Mention in the IT Associate Degree',
            logo: './images/utr.png',
            location: 'Aguascalientes, Mexico',
            issuer: 'Universidad Tecnológica el Retoño',
            description: 'Recoginized as one of the best grades in the IT associate degree coursed from 2016 to 2018',
            link: 'http://www.youtube.com/watch?feature=player_embedded&v=QQL9PpvNwRo',
            date: 'September 2016 - December 2018'
        },
        {
            title: 'Talent Hackaton Finalist',
            logo: './images/talent.png',
            location: 'Guadalajara, Mexico',
            issuer: 'Talent Network',
            description: 'Part of the team finalist in the Talent Hackathon 2018, developing a web application that analize sentiments of news on Twitter in order to find and classify fake news',
            link: 'http://www.youtube.com/watch?feature=player_embedded&v=QQL9PpvNwRo',
            date: 'April 2018'
        },
        {
            title: 'Rumbo a Japón',
            logo: './images/rei.png',
            location: 'Tokyo, Japan',
            issuer: 'Talent Network',
            description: 'Winner of the `Rumbo a Japón` award in which I was recognized as one of the 10 young promises of the state, then having meetings with authorities through different cities at Japan ',
            link: 'http://www.youtube.com/watch?feature=player_embedded&v=QQL9PpvNwRo',
            date: 'April 2014'
        },
    ],
    languages: [
        {
            name: 'English',
            level: 'Professional working proficiency',
            link: 'https://drive.google.com/file/d/1MstZQcQz7T6Kh6_vtqMAPDwn1jEKBOFa/view?usp=sharing'
        },
        {
            name: 'Spanish',
            level: 'Native or bilingual proficiency'
        }
    ],
    contact: [
        { name: 'Alberto Campos', icon: './images/linkedin.png', link: 'https://www.linkedin.com/in/albertocamposh/' },
        { name: 'acamposhd', icon: 'https://cdn.svgporn.com/logos/github-icon.svg', link: 'https://github.com/acamposhd' },
        { name: 'albertocamposhdez@hotmail.com', icon: 'https://cdn.svgporn.com/logos/google-gmail.svg', link: 'mailto:albertocamposhdez@hotmail.com' },
    ]
};

export default Resume;