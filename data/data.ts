import { string } from "prop-types";

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
}
export interface IPublications {
    title: string;
    company: string;
    logo: string;
    location: string;
    duration: string;
    description: string[];
}

export interface ISchoolEntity {
    name: string;
    logo: string;
    title: any[];
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
                'Development of components for the landing page with Angular ',
                'Development of web services with Laravel',
                'Development of components for the talents and evaluators applications with React',
                "Development of ML models for predictions, then connect those to the Laravel's REST API",
                "Integration of the REST API with the React and Angular projects",
                "Configuration of Jenkins to CI with the GitLab Repositories",
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
            ]
        },
        {
            title: 'Full-Stack Developer',
            company: 'Universidad Tecnológica de Aguascalientes',
            logo: './images/utags.png',
            duration: 'January 2019 - Present',
            location: 'Aguascalientes, México',
            description: [
                'Full-stack development for different projects using the MEAN and MEIN stacks',
                'Involved into the planning/designing phase for the applications.'
            ],
            stack: [
                { name: 'MongoDB', icon: 'https://cdn.svgporn.com/logos/mongodb.svg' },
                { name: 'Expressjs', icon: 'https://cdn.svgporn.com/logos/express.svg' },
                { name: 'Angular', icon: 'https://cdn.svgporn.com/logos/angular-icon.svg' },
                { name: 'Nodejs', icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg' },
                { name: 'Typescript', icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg' },
                { name: 'Ionic', icon: 'https://cdn.svgporn.com/logos/ionic.svg' },
                { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg' },
            ]
        }
    ],
    education: [
        { name: 'Universidad Tecnológica de Aguascalientes', logo: './images/utags.png', title: ['Information Technologies Engineering, Software'], duration: '2019 - 2020' },
        { name: 'Universidad Tecnológica el Retoño', logo: './images/utr.png', title: ['Information Technologies Associate, Software'], duration: '2017 - 2018' },
        { name: 'Massachusetts Institute of Technology', logo: './images/mit.svg', title: ['Digital Transformation, Course'], duration: '2020' },
        { name: 'Algonquin College of Applied Arts and Technology', logo: './images/ac.png', title: ['Computer Science, Courses'], duration: '2019' },
        { name: 'Pima Community College', logo: './images/pima.png', title: ['Business Management, Courses'], duration: '2016' },
        { name: 'Universidad Autónoma de Aguascalientes', logo: './images/uaa.jpg', title: ['Android Development, Courses'], duration: 'March 2018 - June 2018' },
        { name: 'Linkedin Learning', logo: 'https://cdn.svgporn.com/logos/linkedin.svg', title: ['Visual Studio Code'], duration: '2019', credentialLink: 'http://www.lynda.com/React-js-tutorials/React-Testing-Debugging/592511-2.html' },
        { name: '', logo: './images/platzi.png', title: [
            'Carrera Bases de Datos',
            'Carrera Inglés para Profesionales',
            'Carrera Desarrollo Backend con Go',
            'Curso de Java SE', 
            'Curso de Node.js',
            'Curso de Go',
            'Curso de MongoDB',
            'Curso de Buenas Prácticas',
            'Curso de HTML Y CSS',
            'Curso de Seguridad Informática',
            'Curso de PHP con Laravel',
            'Curso de POO',
            'Curso de Redes de Internet',
            'Curso de SCRUM',
            'Curso de SQL y MySQL',
            'Curso de Bases de Datos',
            'Curso de Terminal y Línea de Comandos',
            'Curso de Fundamentos de Google Cloud Platform'], duration: '2019-2020', credentialLink: 'https://platzi.com/@alfrejivi/curso/1099-fundamentos-javascript-2017/diploma/detalle/' },
        { name: '', logo: './images/mongou.png', title: ['MongoDB Basics'], duration: 'August 2019' }
        
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
        }
        
    ],
    skills: [
        { name: 'JavaScript', icon: 'https://cdn.svgporn.com/logos/javascript.svg', current:true },
        { name: 'React', icon: 'https://cdn.svgporn.com/logos/react.svg', current: true },
        { name: 'Laravel', icon: 'https://cdn.svgporn.com/logos/laravel.svg', current: true },
        { name: 'TypeScript', icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg', current: true },
        { name: 'Angular', icon: 'https://cdn.svgporn.com/logos/angular-icon.svg', current:true },
        { name: 'Node.js', icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg', current: true },
        { name: 'MongoDB', icon: 'https://cdn.svgporn.com/logos/mongodb.svg', current: true },
        { name: 'MySQL', icon: 'https://cdn.svgporn.com/logos/mysql.svg', current: true },
        { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg', current: true },
        { name: 'Jira', icon: 'https://cdn.svgporn.com/logos/jira.svg', current: true },
        { name: 'HTML5', icon: 'https://cdn.svgporn.com/logos/html-5.svg', current: true },
        { name: 'CSS3', icon: 'https://cdn.svgporn.com/logos/css-3.svg', current: true },
        { name: 'Jenkins', icon: 'https://cdn.svgporn.com/logos/jenkins.svg', current: true },
        { name: 'Java', icon: 'https://cdn.svgporn.com/logos/java.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.svgporn.com/logos/postgresql.svg' },
        { name: 'C#', icon: 'https://cdn.svgporn.com/logos/c.svg' },
        { name: 'Go', icon: 'https://cdn.svgporn.com/logos/go.svg' },
        { name: 'PHP', icon: 'https://cdn.svgporn.com/logos/php.svg' },
        { name: 'Sass', icon: 'https://cdn.svgporn.com/logos/sass.svg'},
    ],
    awards: [
        {
            title: 'Honorable Mention in the IT Associate Degree',
            logo: './images/utr.png',
            location: 'Aguascalientes, Mexico',
            issuer: 'Universidad Tecnológica el Retoño',
            description: 'Recoginized as one of the best averages in the IT associate degree coursed from 2017 to 2018',
            link: 'http://www.youtube.com/watch?feature=player_embedded&v=QQL9PpvNwRo',
            date: 'January 2017 - December 2018'
        },
        {
            title: 'Talent Hackaton Finalist',
            logo: './images/talent.png',
            location: 'Guadalajara, Mexico',
            issuer: 'Talent Network',
            description: 'Team finalist in the Talent Hackathon 2018, developing a web application that analize sentiments of news on Twitter in order to find and classify fake news',
            link: 'http://www.youtube.com/watch?feature=player_embedded&v=QQL9PpvNwRo',
            date: 'April 2018'
        },
        {
            title: 'Rumbo a Japón',
            logo: './images/rei.png',
            location: 'Tokyo, Japan',
            issuer: 'Talent Network',
            description: 'Winner of the `Rumbo a Japón` award in which I was recognized as one of the 10 young promises of the state, then having meetings with authorities through different places at Japan ',
            link: 'http://www.youtube.com/watch?feature=player_embedded&v=QQL9PpvNwRo',
            date: 'April 2014'
        },
    ],
    languages: [
        {
            name: 'English',
            level: 'Professional working proficiency'
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