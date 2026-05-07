export interface IIntroduction {
    name: string;
    avatar: string;
    location: string;
    description: string;
    position: string;
}

export type IDescriptionItem = string | string[];

export interface IWork {
    title: string;
    logo: string;
    company: string;
    location: string;
    duration: string;
    description: IDescriptionItem[];
    stack: { name: string; icon: string; }[];
    link?: string;
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

export interface ISchoolAux {
    name: string;
    link?: string
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
    link?: string;
}

export interface IContact {
    name: string;
    icon: string;
    link: string;
}

export interface IProject {
    name: string;
    role: string;
    logo?: string;
    duration: string;
    description: IDescriptionItem[];
    stack: { name: string; icon: string; }[];
    link?: string;
}

export interface ICertification {
    name: string;
    issuer: string;
    logo: string;
    credentialId?: string;
    date?: string;
    link?: string;
}

export interface IResume {
    introduction: IIntroduction;
    experience: IWork[];
    education: ISchoolEntity[];
    publications: IPublications[];
    projects: IProject[];
    skills: ISkill[];
    awards: IAward[];
    certifications: ICertification[];
    languages: ILanguage[];
    contact: IContact[];
}

const Resume: IResume = {
    introduction: {
        name: "Alberto Campos Hernández",
        avatar: "./images/profile.jpeg",
        location: "Aguascalientes, México",
        description: "Senior software engineer with 9+ years of experience designing, building, and shipping production software across the full stack — from REST and GraphQL APIs to web and mobile interfaces. Combines strong engineering fundamentals with applied AI integration, alongside a Master's in Applied Artificial Intelligence (ITESM, GPA 9.8) and a track record across professional, academic, and entrepreneurial contexts.",
        position: "Sr. Front-End Engineer & Practice Lead @ Svitla Systems"
    },
    experience: [
        {
            title: 'Sr. Front-End Engineer & Practice Lead',
            company: 'Svitla Systems',
            logo: './images/svitla.png',
            duration: 'Jun 2022 — Present',
            location: 'Remote (Aguascalientes, México)',
            description: [
                'Architect and develop React/TypeScript front-end applications for automotive and enterprise clients, implementing SSR, dynamic code-splitting, and performance optimisation strategies.',
                'Act as practice lead for a team of 30+ engineers across LATAM, providing technical guidance and sharing industry best practices.',
                'Deliver internal tech talks, sharing knowledge of the latest technologies and trends across engineering teams.',
                'Conduct technical interviews for candidates to ensure the engineering quality bar is upheld across the company.',
                'Define and enforce front-end architecture patterns across teams, conducting code reviews and establishing coding standards that reduced production defect rates via SonarQube gate enforcement.',
                'Drive CI/CD pipeline improvements through Jenkins, shortening release cycles and increasing deployment reliability across multiple concurrent client engagements.',
                'Collaborate directly with product, design, and QA stakeholders to translate business requirements into scalable component-based architectures and define test scenarios during sprint planning.',
                'Mentor other developers, providing one-on-one guidance and supporting their growth on industry best practices.',
            ],
            stack: [
                { name: 'React', icon: 'https://cdn.svgporn.com/logos/react.svg' },
                { name: 'TypeScript', icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg' },
                { name: 'Next.js', icon: 'https://cdn.svgporn.com/logos/nextjs-icon.svg' },
                { name: 'SCSS', icon: 'https://cdn.svgporn.com/logos/sass.svg' },
                { name: 'Context API', icon: 'https://cdn.svgporn.com/logos/react.svg' },
                { name: 'Atomic design', icon: 'https://cdn.svgporn.com/logos/atomic.svg' },
                { name: 'Jenkins', icon: 'https://cdn.svgporn.com/logos/jenkins.svg' },
                { name: 'SonarQube', icon: 'https://cdn.svgporn.com/logos/sonarqube.svg' },
                { name: 'Jest', icon: 'https://cdn.svgporn.com/logos/jest.svg' },
                { name: 'AWS Lambda', icon: 'https://cdn.svgporn.com/logos/aws-lambda.svg' },
                { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg' },
                { name: 'Gitflow', icon: 'https://cdn.svgporn.com/logos/git-icon.svg' },
            ],
            link: "https://svitla.com/"
        },
        {
            title: 'Professor',
            company: 'Universidad Tecnológica Metropolitana de Aguascalientes',
            logo: './images/utmat.png',
            duration: 'May 2023 — Aug 2025',
            location: 'Aguascalientes, México',
            description: [
                'Designed curriculum, practical assignments, and assessment rubrics aligned with industry standards across seven undergraduate courses in AI, cloud, and software engineering.',
                'Mentored students through team projects, providing code reviews, technical guidance, and one-on-one support to help them progress toward industry-ready skills.',
                'Collaborated with academic peers on program planning and continuous improvement of course content based on emerging technologies and student outcomes.',
                'Subjects taught:',
                [
                    'Programming for Artificial Intelligence',
                    'Cloud Databases',
                    'Database Systems',
                    'Object-Oriented Programming',
                    'Data Structures',
                    'Operating Systems',
                    'Cybersecurity',
                ],
            ],
            stack: [
                { name: 'Python', icon: 'https://cdn.svgporn.com/logos/python.svg' },
                { name: 'Java', icon: 'https://cdn.svgporn.com/logos/java.svg' },
                { name: 'C++', icon: 'https://cdn.svgporn.com/logos/c-plusplus.svg' },
                { name: 'PyTorch', icon: 'https://cdn.svgporn.com/logos/pytorch-icon.svg' },
                { name: 'scikit-learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
                { name: 'Pandas', icon: 'https://cdn.svgporn.com/logos/pandas.svg' },
                { name: 'MySQL', icon: 'https://cdn.svgporn.com/logos/mysql.svg' },
                { name: 'PostgreSQL', icon: 'https://cdn.svgporn.com/logos/postgresql.svg' },
                { name: 'MongoDB', icon: 'https://cdn.svgporn.com/logos/mongodb.svg' },
                { name: 'AWS', icon: 'https://cdn.svgporn.com/logos/aws.svg' },
                { name: 'Linux', icon: 'https://cdn.svgporn.com/logos/linux-tux.svg' },
                { name: 'Bash', icon: 'https://cdn.svgporn.com/logos/bash-icon.svg' },
                { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg' },
            ]
        },
        {
            title: 'Sr. Full-Stack Engineer',
            company: 'Irys',
            logo: './images/irys.png',
            duration: 'Sep 2020 — Jun 2022',
            location: 'San Antonio, TX (Remote)',
            description: [
                'Designed and built end-to-end features across web and mobile — from GraphQL/REST API design in Node.js/Express to React Native components published to iOS and Android.',
                'Participated in all phases of the software development lifecycle, from product definition and prototyping through to production release.',
                'Built prototypes and engaged in full-stack application development to validate product hypotheses with stakeholders.',
                'Integrated AWS AppSync and Amplify for real-time data synchronisation, reducing perceived latency and improving offline resilience for mobile users.',
                'Authored technical design documentation covering architecture decisions, API contracts, and the underlying methodology behind each design choice.',
                'Collaborated with QA on sprint-level test scenarios to cut regression cycles, and contributed to peer code review to safeguard overall software quality.',
            ],
            stack: [
                { name: 'React', icon: 'https://cdn.svgporn.com/logos/react.svg' },
                { name: 'React Native', icon: 'https://cdn.svgporn.com/logos/react.svg' },
                { name: 'Node.js', icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg' },
                { name: 'Express', icon: 'https://cdn.svgporn.com/logos/express.svg' },
                { name: 'GraphQL', icon: 'https://cdn.svgporn.com/logos/graphql.svg' },
                { name: 'AWS AppSync', icon: 'https://cdn.svgporn.com/logos/aws.svg' },
                { name: 'AWS Amplify', icon: 'https://cdn.svgporn.com/logos/aws.svg' },
                { name: 'AWS Lambda', icon: 'https://cdn.svgporn.com/logos/aws-lambda.svg' },
                { name: 'AWS DynamoDB', icon: 'https://cdn.svgporn.com/logos/aws-dynamodb.svg' },
                { name: 'AWS Cognito', icon: 'https://cdn.svgporn.com/logos/aws-cognito.svg' },
                { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg' },
            ],
            link: "https://heyirys.com/"
        },
        {
            title: 'Professor',
            company: 'Universidad Tecnológica de Aguascalientes',
            logo: './images/utags.png',
            duration: 'Sep 2021 — Dec 2022',
            location: 'Aguascalientes, México',
            description: [
                'Designed curriculum, practical assignments, and assessment rubrics aligned with industry standards across multiple undergraduate courses in modern web and mobile development.',
                'Mentored students through team projects, providing code reviews, technical guidance, and one-on-one support to help them progress toward industry-ready skills.',
                'Collaborated with academic peers on program planning and continuous improvement of course content based on emerging technologies and student outcomes.',
                'Subjects taught:',
                [
                    'Progressive Web Applications',
                    'Mobile Development',
                    'Web Development',
                    'Software Architecture',
                    'Service Oriented Web Applications',
                    'Web Applications for Industry 4.0',
                ],
            ],
            stack: [
                { name: 'React', icon: 'https://cdn.svgporn.com/logos/react.svg' },
                { name: 'React Native', icon: 'https://cdn.svgporn.com/logos/react.svg' },
                { name: 'JavaScript', icon: 'https://cdn.svgporn.com/logos/javascript.svg' },
                { name: 'TypeScript', icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg' },
                { name: 'HTML5', icon: 'https://cdn.svgporn.com/logos/html-5.svg' },
                { name: 'CSS3', icon: 'https://cdn.svgporn.com/logos/css-3.svg' },
                { name: 'Node.js', icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg' },
                { name: 'Express', icon: 'https://cdn.svgporn.com/logos/express.svg' },
                { name: 'GraphQL', icon: 'https://cdn.svgporn.com/logos/graphql.svg' },
                { name: 'AWS Amplify', icon: 'https://cdn.svgporn.com/logos/aws.svg' },
                { name: 'AWS Cognito', icon: 'https://cdn.svgporn.com/logos/aws-cognito.svg' },
                { name: 'AWS AppSync', icon: 'https://cdn.svgporn.com/logos/aws.svg' },
                { name: 'AWS DynamoDB', icon: 'https://cdn.svgporn.com/logos/aws-dynamodb.svg' },
                { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg' },
            ]
        },
        {
            title: 'Jr. → Mid → Sr. Full-Stack Engineer',
            company: 'Thincrs',
            logo: './images/thincrs.png',
            duration: 'Aug 2017 — Sep 2020',
            location: 'Guadalajara, México',
            description: [
                'Progressed from Junior to Senior in three years; owned the full product — landing page, admin portal, and REST API — end-to-end, from architecture through production deployment.',
                'Built and deployed Python (scikit-learn) ML prediction models exposed via a Laravel REST API, consumed by both web and mobile clients in production.',
                'Integrated the REST API with React and Angular front-ends, ensuring consistent contracts across multiple consumers.',
                'Migrated legacy Angular codebase to React, reducing bundle size; built Puppeteer scrapers and configured Jenkins CI/CD pipelines for GitLab repositories.',
                'Involved in the planning and design phases for new applications, contributing to scope, architecture, and roadmap decisions.',
            ],
            stack: [
                { name: 'Angular', icon: 'https://cdn.svgporn.com/logos/angular-icon.svg' },
                { name: 'React', icon: 'https://cdn.svgporn.com/logos/react.svg' },
                { name: 'Node.js', icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg' },
                { name: 'Laravel', icon: 'https://cdn.svgporn.com/logos/laravel.svg' },
                { name: 'PHP', icon: 'https://cdn.svgporn.com/logos/php.svg' },
                { name: 'Python', icon: 'https://cdn.svgporn.com/logos/python.svg' },
                { name: 'scikit-learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
                { name: 'MySQL', icon: 'https://cdn.svgporn.com/logos/mysql.svg' },
                { name: 'Jenkins', icon: 'https://cdn.svgporn.com/logos/jenkins.svg' },
                { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg' },
            ],
            link: "https://thincrs.com/"
        },
        {
            title: 'Full-Stack Developer',
            company: 'Universidad Tecnológica de Aguascalientes',
            logo: './images/utags.png',
            duration: 'Jan 2019 — Dec 2020',
            location: 'Aguascalientes, México',
            description: [
                'Full-stack development across multiple internal projects using the MEAN and MEIN stacks.',
                'Led cross-functional teams and contributed to planning/design phases for new applications.',
                'Subject teacher for multi-platform application development, mentoring junior developers and students.',
            ],
            stack: [
                { name: 'MongoDB', icon: 'https://cdn.svgporn.com/logos/mongodb.svg' },
                { name: 'Express', icon: 'https://cdn.svgporn.com/logos/express.svg' },
                { name: 'Angular', icon: 'https://cdn.svgporn.com/logos/angular-icon.svg' },
                { name: 'Bootstrap', icon: 'https://cdn.svgporn.com/logos/bootstrap.svg' },
                { name: 'Node.js', icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg' },
                { name: 'TypeScript', icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg' },
                { name: 'Ionic', icon: 'https://cdn.svgporn.com/logos/ionic.svg' },
                { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg' },
            ]
        },
    ],
    projects: [
        {
            name: 'Scribo — AI-Powered macOS Meeting Assistant',
            role: 'Independent project',
            duration: 'In progress',
            description: [
                'Building a native macOS application — both menu-bar and full desktop experience — for AI-powered meeting recording, real-time transcription, and smart note-taking, with LLM-based summarisation and action-item extraction.',
                'Full product ownership: Core Audio pipeline for system and microphone capture, SwiftUI interface following macOS HIG across menu-bar and desktop windows, and Anthropic/OpenAI API integration for contextual note generation.',
            ],
            stack: [
                { name: 'Swift', icon: 'https://cdn.svgporn.com/logos/swift.svg' },
                { name: 'SwiftUI', icon: 'https://cdn.svgporn.com/logos/swift.svg' },
                { name: 'Core Audio', icon: 'https://cdn.svgporn.com/logos/apple.svg' },
                { name: 'Anthropic API', icon: 'https://cdn.svgporn.com/logos/anthropic-icon.svg' },
                { name: 'OpenAI API', icon: 'https://cdn.svgporn.com/logos/openai-icon.svg' },
                { name: 'Xcode', icon: 'https://cdn.svgporn.com/logos/xcode.svg' },
            ]
        },
    ],
    education: [
        { name: 'Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)', logo: './images/itesm.svg', title: [{ name: "Master's in Applied Artificial Intelligence — GPA 9.8 / 10", link: "https://drive.google.com/file/d/1klqGPyyC3mBIuVTkIlTqfjlAX_BAKN_J/view?usp=sharing" }], duration: 'Jan 2024 — Mar 2026' },
        { name: 'Universidad Tecnológica de Aguascalientes', logo: './images/utags.png', title: [{ name: 'B.Eng. in Information Technologies Engineering — Graduated with Honors (9.6 / 10)', link: "https://drive.google.com/file/d/1klqGPyyC3mBIuVTkIlTqfjlAX_BAKN_J/view?usp=sharing" }], duration: 'Sep 2016 — Aug 2020' },
        { name: 'Universidad Tecnológica el Retoño', logo: './images/utr.png', title: [{ name: 'TSU (Associate) in Information Technologies', link: 'https://drive.google.com/file/d/1klqGPyyC3mBIuVTkIlTqfjlAX_BAKN_J/view?usp=sharing' }], duration: '2014 — 2016' },
        { name: 'Massachusetts Institute of Technology', logo: './images/mit.svg', title: [{ name: 'Leading Digital Transformation (online)', link: 'https://drive.google.com/file/d/1mLq9PracAVlS_jGonx4NOPMuSInTR3g0/view?usp=sharing' }], duration: '2020' },
        { name: 'Algonquin College', logo: './images/ac.png', title: [{ name: 'Programming & IT Management — Academic Exchange (Ottawa)', link: 'https://drive.google.com/file/d/1WJXy2NJ5pv7u_OabFpm6rO_ItWa1WjwA/view?usp=sharing' }], duration: 'Sep 2019 — Dec 2019' },
        { name: 'Pima Community College', logo: './images/pima.png', title: [{ name: 'ESL & Business Management — Academic Exchange (Tucson)', link: 'https://drive.google.com/drive/folders/1EWrExdYOMfuhdA84hI8r3JPFdSx5zyeT?usp=sharing' }], duration: 'Aug 2016 — Dec 2016' },
        { name: 'Universidad Autónoma de Aguascalientes', logo: './images/uaa.jpg', title: [{ name: 'Android Development Course', link: 'https://drive.google.com/file/d/1fjpchjzOeNHi6nugN1G4Kytz0sBcvT8w/view?usp=sharing' }], duration: 'Mar 2018 — Jun 2018' },
        { name: 'LinkedIn Learning', logo: 'https://cdn.svgporn.com/logos/linkedin.svg', title: [{ name: 'Visual Studio Code Course', link: 'https://drive.google.com/file/d/1d4fwyjpDkaku49nkpvrslnZzh3bUkrRU/view?usp=sharing' }], duration: '2019' },
        {
            name: 'Platzi', logo: './images/platzi.png', title: [
                { name: 'Carrera Bases de Datos', link: "https://drive.google.com/file/d/1ykl1lhA9PAFY4SswFHnOVP77bTQafl_s/view?usp=sharing" },
                { name: 'Carrera Escuela de Inglés', link: "https://drive.google.com/file/d/1_QInJ20Q8-cQL3UP3Gv1AYK9GrMlue7U/view?usp=sharing" },
                { name: 'Carrera Desarrollo Backend con Go', link: "https://drive.google.com/file/d/1k5JvGKuqDJs4y6AEjOa4KPOnGav9l_6x/view?usp=sharing" },
                { name: 'Curso de Java SE', link: "https://drive.google.com/file/d/1du9GL1WuQUxHVV2g2qfKBh4_MMy0dM34/view?usp=sharing" },
                { name: 'Curso de Go', link: "https://drive.google.com/file/d/16K82p7zcTB2q7Rg2ZVijWu00l23Y12F1/view?usp=sharing" },
                { name: 'Curso de MongoDB', link: "https://drive.google.com/file/d/199HYQkywELbg6Vjcs0-Uu8FnEcqiQzIl/view?usp=sharing" },
                { name: 'Curso de Buenas Prácticas', link: "https://drive.google.com/file/d/1h3tjSbAI5iR19MmeBKXUfw21IhQvGoTg/view?usp=sharing" },
                { name: 'Curso de HTML y CSS', link: "https://drive.google.com/file/d/1CDvBQhLxaLGKGril1Qh4OC042ftlQgfk/view?usp=sharing" },
                { name: 'Curso de Seguridad Informática', link: "https://drive.google.com/file/d/13WR_pUUhF2HdAtiSDh98IPKUFfYcRT3F/view?usp=sharing" },
                { name: 'Curso de PHP con Laravel', link: "https://drive.google.com/file/d/1xoYfitKYbzfGeXt2Km96GQqSFySntJe_/view?usp=sharing" },
                { name: 'Curso de POO', link: "https://drive.google.com/file/d/17yGlcp-bfF-z0IQ3LupbESaRKbVixN18/view?usp=sharing" },
                { name: 'Curso de Redes de Internet', link: "https://drive.google.com/file/d/17DvfvnblWyTMzXAkcdR3iu2yNPApU1Vb/view?usp=sharing" },
                { name: 'Curso de SCRUM', link: "https://drive.google.com/file/d/1B0ZLkBKKt-3eTgcLfu8WeftTxh5o4Hqq/view?usp=sharing" },
                { name: 'Curso de SQL y MySQL', link: "https://drive.google.com/file/d/1hI3P6lFFxy1jMpTYOjyClrX09FGgUYfz/view?usp=sharing" },
                { name: 'Curso de Bases de Datos', link: "https://drive.google.com/file/d/1QP1fXI-DWCUb-wWKkA7jpi28h4MhLAFc/view?usp=sharing" },
                { name: 'Curso de Línea de Comandos', link: "https://drive.google.com/file/d/1TwWhbGH5YM2gewWqri0VZ5-tyVgqkESx/view?usp=sharing" },
                { name: 'Curso de Google Cloud Platform', link: "https://drive.google.com/file/d/1ILwXNzlSDcIODnShOxWcxs-ekE6k27Yy/view?usp=sharing" },
            ], duration: '2019 — 2020'
        },
        { name: 'MongoDB University', logo: './images/mongou.png', title: [{ name: 'MongoDB Basics', link: 'https://drive.google.com/file/d/1l1Sz3XH7WRcCfPFAHeBceLEa99VJVdhg/view?usp=sharing' }], duration: 'Aug 2019' },
        {
            name: 'HackerRank', logo: './images/hackerrank.png', title: [
                { name: 'JavaScript Basics', link: 'https://drive.google.com/file/d/1FFPlmVaWSeWPOQZan1SBaOsZRMGyomeM/view?usp=sharing' },
                { name: 'REST API Intermediate', link: 'https://drive.google.com/file/d/172FzWrhOcD8JJYBe9j6rOlqQuWMtvFIA/view?usp=sharing' },
            ], duration: 'Sep 2020'
        },
    ],
    publications: [
        {
            title: 'Understanding the Crowd Markets that Workers and Requesters Imagine',
            company: 'ACM Collective Intelligence Conference (CI 2019)',
            logo: './images/cm.png',
            duration: '2019',
            location: 'Pittsburgh, PA',
            description: [
                'Carlos Toxtli, Juan Pablo Castillo, Alberto Campos, Benjamin V. Hanrahan, Kotaro Hara, Chris Callison-Burch, Jeffrey Bigham, Kristy Milland, Abigail Adams, Saiph Savage'
            ],
            link: 'https://ci.acm.org/2019/assets/proceedings/CI2019__paper_60.pdf'
        }
    ],
    skills: [
        { name: 'TypeScript', icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg', current: true },
        { name: 'JavaScript', icon: 'https://cdn.svgporn.com/logos/javascript.svg', current: true },
        { name: 'React', icon: 'https://cdn.svgporn.com/logos/react.svg', current: true },
        { name: 'SCSS', icon: 'https://cdn.svgporn.com/logos/sass.svg', current: true },
        { name: 'Storybook', icon: 'https://cdn.svgporn.com/logos/storybook-icon.svg', current: true },
        { name: 'Jest', icon: 'https://cdn.svgporn.com/logos/jest.svg', current: true },
        { name: 'SonarQube', icon: 'https://cdn.svgporn.com/logos/sonarqube.svg', current: true },
        { name: 'GitHub Actions', icon: 'https://cdn.svgporn.com/logos/github-actions.svg', current: true },
        { name: 'Jira', icon: 'https://cdn.svgporn.com/logos/jira.svg', current: true },
        { name: 'Swift', icon: 'https://cdn.svgporn.com/logos/swift.svg', current: true },
        { name: 'SwiftUI', icon: 'https://cdn.svgporn.com/logos/swift.svg', current: true },
        { name: 'Xcode', icon: 'https://cdn.svgporn.com/logos/xcode.svg', current: true },
        { name: 'Anthropic API', icon: 'https://cdn.svgporn.com/logos/anthropic-icon.svg', current: true },
        { name: 'OpenAI API', icon: 'https://cdn.svgporn.com/logos/openai-icon.svg', current: true },
        { name: 'Python', icon: 'https://cdn.svgporn.com/logos/python.svg', current: true },
        { name: 'PyTorch', icon: 'https://cdn.svgporn.com/logos/pytorch-icon.svg', current: true },
        { name: 'TensorFlow', icon: 'https://cdn.svgporn.com/logos/tensorflow.svg', current: true },
        { name: 'scikit-learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', current: true },
        { name: 'Pandas', icon: 'https://cdn.svgporn.com/logos/pandas.svg', current: true },
        { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg', current: true },
        { name: 'Supabase', icon: 'https://cdn.svgporn.com/logos/supabase-icon.svg', current: true },
        { name: 'Next.js', icon: 'https://cdn.svgporn.com/logos/nextjs-icon.svg' },
        { name: 'React Native', icon: 'https://cdn.svgporn.com/logos/react.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.svgporn.com/logos/tailwindcss-icon.svg' },
        { name: 'Redux', icon: 'https://cdn.svgporn.com/logos/redux.svg' },
        { name: 'Zustand', icon: 'https://cdn.svgporn.com/logos/react.svg' },
        { name: 'React Query / SWR', icon: 'https://cdn.svgporn.com/logos/react-query-icon.svg' },
        { name: 'Expo', icon: 'https://cdn.svgporn.com/logos/expo-icon.svg' },
        { name: 'Ionic', icon: 'https://cdn.svgporn.com/logos/ionic.svg' },
        { name: 'Node.js', icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg' },
        { name: 'Express', icon: 'https://cdn.svgporn.com/logos/express.svg' },
        { name: 'GraphQL', icon: 'https://cdn.svgporn.com/logos/graphql.svg' },
        { name: 'Flask', icon: 'https://cdn.svgporn.com/logos/flask.svg' },
        { name: 'Django', icon: 'https://cdn.svgporn.com/logos/django.svg' },
        { name: 'FastAPI', icon: 'https://cdn.svgporn.com/logos/fastapi-icon.svg' },
        { name: 'Laravel', icon: 'https://cdn.svgporn.com/logos/laravel.svg' },
        { name: 'PHP', icon: 'https://cdn.svgporn.com/logos/php.svg' },
        { name: 'AWS', icon: 'https://cdn.svgporn.com/logos/aws.svg' },
        { name: 'AWS Lambda', icon: 'https://cdn.svgporn.com/logos/aws-lambda.svg' },
        { name: 'AWS DynamoDB', icon: 'https://cdn.svgporn.com/logos/aws-dynamodb.svg' },
        { name: 'AWS AppSync', icon: 'https://cdn.svgporn.com/logos/aws.svg' },
        { name: 'AWS Amplify', icon: 'https://cdn.svgporn.com/logos/aws.svg' },
        { name: 'Firebase', icon: 'https://cdn.svgporn.com/logos/firebase.svg' },
        { name: 'Jenkins', icon: 'https://cdn.svgporn.com/logos/jenkins.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.svgporn.com/logos/postgresql.svg' },
        { name: 'MySQL', icon: 'https://cdn.svgporn.com/logos/mysql.svg' },
        { name: 'MongoDB', icon: 'https://cdn.svgporn.com/logos/mongodb.svg' },
        { name: 'SQLite', icon: 'https://cdn.svgporn.com/logos/sqlite.svg' },
        { name: 'Figma', icon: 'https://cdn.svgporn.com/logos/figma.svg' },
        { name: 'Postman', icon: 'https://cdn.svgporn.com/logos/postman-icon.svg' },
    ],
    awards: [
        {
            title: 'Honorable Mention — B.Eng. in Information Technologies',
            logo: './images/utags.png',
            location: 'Aguascalientes, México',
            issuer: 'Universidad Tecnológica de Aguascalientes',
            description: 'Recognised with the best GPA across all engineering majors (9.6 / 10), graduating with honors.',
            link: 'https://drive.google.com/file/d/1JBGksnJ2pF-a55z6SdGj9Y612fD4Nhed/view?usp=sharing',
            date: '2020'
        },
        {
            title: 'Honorable Mention — TSU in Information Technologies',
            logo: './images/utr.png',
            location: 'Aguascalientes, México',
            issuer: 'Universidad Tecnológica el Retoño',
            description: 'Recognised among the top GPAs in the IT associate degree class.',
            link: 'https://drive.google.com/file/d/1W95ZWriBJY5sPt1YamYpXiAJYjo9oPs2/view?usp=sharing',
            date: '2016 — 2018'
        },
        {
            title: 'Talent Hackathon Finalist',
            logo: './images/talent.png',
            location: 'Guadalajara, México',
            issuer: 'Talent Network',
            description: 'Finalist team — built a web app analysing sentiment of news on Twitter to detect and classify fake news.',
            link: 'https://docs.google.com/presentation/d/1dIo6zhKyyUEfm4v3PKpuQMlzXGi10rxLB_AIcJmyNro/edit?usp=sharing',
            date: 'April 2018'
        },
        {
            title: 'Rumbo a Japón',
            logo: './images/rei.png',
            location: 'Tokyo, Japan',
            issuer: 'Talent Network',
            description: 'Recognised as one of the 10 young promises of the state, with meetings with authorities across multiple cities in Japan.',
            link: 'https://drive.google.com/drive/folders/1eGYdPm9LNiyN0hPg4LNh5TvSzyBSbvyI?usp=sharing',
            date: 'April 2014'
        },
    ],
    certifications: [
        {
            name: 'AWS Certified Cloud Practitioner',
            issuer: 'Amazon Web Services',
            logo: 'https://cdn.svgporn.com/logos/aws.svg',
            credentialId: 'HLQ960NK8JBQ189Q',
            link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/HLQ960NK8JBQ189Q',
        },
        {
            name: 'Fundamentals of Deep Learning',
            issuer: 'NVIDIA Deep Learning Institute',
            logo: 'https://cdn.svgporn.com/logos/nvidia.svg',
            credentialId: '1tO0Ys3ITkGJkXM3sgBKrQ',
            link: 'https://learn.nvidia.com/certificates?id=1utL1iXDTuO6YOPTQyFXjQ',
        },
        {
            name: 'Generative AI with Diffusion Models',
            issuer: 'NVIDIA Deep Learning Institute',
            logo: 'https://cdn.svgporn.com/logos/nvidia.svg',
            credentialId: 'TauXuWfURMOBYNutOVkopw',
            link: 'https://learn.nvidia.com/certificates?id=D6YKbMsAS4CBKQSopnBx-A',
        },
        {
            name: 'Certificado de Alta Especialidad: Inteligencia artificial y aprendizaje automático',
            issuer: 'Tecnológico de Monterrey',
            logo: './images/itesm.svg',
            date: 'Aug 5, 2024',
            link: 'https://www.credential.net/35cdaa17-561b-4a5b-8530-096fa1ac0364#acc.FeJSA5c8',
        },
        {
            name: 'Certificado de Alta Especialidad: Visualización de datos',
            issuer: 'Tecnológico de Monterrey',
            logo: './images/itesm.svg',
            date: 'Aug 5, 2024',
            link: 'https://www.credential.net/7f0f1a34-5c4e-436e-a615-8ea03a80e1e5#acc.5SNe3mi0',
        },
        {
            name: 'Certificado de Alta Especialidad: Internet de las cosas y redes de sensores',
            issuer: 'Tecnológico de Monterrey',
            logo: './images/itesm.svg',
            date: 'Apr 20, 2024',
            link: 'https://www.credential.net/b99b6751-35bc-4cd7-a30c-d838598fdd7b#acc.tef185X7',
        },
        {
            name: 'Certificado de Alta Especialidad: Ciencia de datos',
            issuer: 'Tecnológico de Monterrey',
            logo: './images/itesm.svg',
            date: 'Apr 20, 2024',
            link: 'https://www.credential.net/557ed335-731a-40c9-8902-20ca7ef3a72b#acc.XaeIxkzu',
        },
        {
            name: 'Generative AI in Action',
            issuer: 'IBM SkillsBuild',
            logo: 'https://cdn.svgporn.com/logos/ibm.svg',
            date: 'Jun 16, 2025',
            link: 'https://www.credly.com/badges/48a72b8f-d625-49af-b953-920061e67234/public_url',
        },
        {
            name: 'Getting Started with Enterprise Data Science',
            issuer: 'IBM',
            logo: 'https://cdn.svgporn.com/logos/ibm.svg',
            date: 'Mar 16, 2024',
            link: 'https://www.credly.com/badges/ed3d4b00-049c-4e25-b71c-c8a671c37706/public_url',
        },
    ],
    languages: [
        {
            name: 'Spanish',
            level: 'Native'
        },
        {
            name: 'English',
            level: 'C1 — ITEP certified',
            link: 'https://drive.google.com/file/d/1MstZQcQz7T6Kh6_vtqMAPDwn1jEKBOFa/view?usp=sharing'
        },
    ],
    contact: [
        { name: 'linkedin.com/in/acamposhd', icon: './images/linkedin.png', link: 'https://www.linkedin.com/in/acamposhd/' },
        { name: 'github.com/acamposhd', icon: 'https://cdn.svgporn.com/logos/github-icon.svg', link: 'https://github.com/acamposhd' },
        { name: 'albertocamposhdez@hotmail.com', icon: 'https://cdn.svgporn.com/logos/google-gmail.svg', link: 'mailto:albertocamposhdez@hotmail.com' },
    ]
};

export default Resume;
