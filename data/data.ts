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
    description: string[];
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
                'Define and enforce front-end architecture patterns across teams, conducting code reviews and establishing coding standards that reduced production defect rates via SonarQube gate enforcement.',
                'Drive CI/CD pipeline improvements through Jenkins, shortening release cycles and increasing deployment reliability across multiple concurrent client engagements.',
                'Collaborate directly with product and design stakeholders to translate business requirements into scalable component-based architectures.',
            ],
            stack: [
                { name: 'React', icon: 'https://cdn.svgporn.com/logos/react.svg' },
                { name: 'TypeScript', icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg' },
                { name: 'Next.js', icon: 'https://cdn.svgporn.com/logos/nextjs-icon.svg' },
                { name: 'SCSS', icon: 'https://cdn.svgporn.com/logos/sass.svg' },
                { name: 'Jenkins', icon: 'https://cdn.svgporn.com/logos/jenkins.svg' },
                { name: 'SonarQube', icon: 'https://cdn.svgporn.com/logos/sonarqube.svg' },
                { name: 'Jest', icon: 'https://cdn.svgporn.com/logos/jest.svg' },
                { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg' },
            ],
            link: "https://svitla.com/"
        },
        {
            title: 'Instructor',
            company: 'Universidad Tecnológica Metropolitana de Aguascalientes',
            logo: './images/utmat.png',
            duration: 'May 2023 — Aug 2025',
            location: 'Aguascalientes, México',
            description: [
                'Taught seven undergraduate courses across AI, cloud, and software engineering: Programming for Artificial Intelligence, Cloud Databases, Database Systems, Object-Oriented Programming, Data Structures, Operating Systems, and Cybersecurity.',
                'Designed curriculum, practical assignments, and assessment rubrics aligned with industry standards; mentored students through team projects with code reviews and technical guidance.',
            ],
            stack: [
                { name: 'Python', icon: 'https://cdn.svgporn.com/logos/python.svg' },
                { name: 'JavaScript', icon: 'https://cdn.svgporn.com/logos/javascript.svg' },
                { name: 'TypeScript', icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg' },
                { name: 'MySQL', icon: 'https://cdn.svgporn.com/logos/mysql.svg' },
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
                'Integrated AWS AppSync and Amplify for real-time data synchronisation, reducing perceived latency and improving offline resilience for mobile users.',
                'Authored technical design documentation covering architecture decisions and API contracts; collaborated with QA on sprint-level test scenarios to cut regression cycles.',
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
            title: 'Jr. → Mid → Sr. Full-Stack Engineer',
            company: 'Thincrs',
            logo: './images/thincrs.png',
            duration: 'Aug 2017 — Sep 2020',
            location: 'Guadalajara, México',
            description: [
                'Progressed from Junior to Senior in three years; owned the full product — landing page, admin portal, and REST API — end-to-end, from architecture through production deployment.',
                'Built and deployed Python (scikit-learn) ML prediction models exposed via a Laravel REST API, consumed by both web and mobile clients in production.',
                'Migrated legacy Angular codebase to React, reducing bundle size; built Puppeteer scrapers and configured Jenkins CI/CD pipelines for GitLab repositories.',
            ],
            stack: [
                { name: 'Angular', icon: 'https://cdn.svgporn.com/logos/angular-icon.svg' },
                { name: 'React', icon: 'https://cdn.svgporn.com/logos/react.svg' },
                { name: 'Node.js', icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg' },
                { name: 'Laravel', icon: 'https://cdn.svgporn.com/logos/laravel.svg' },
                { name: 'PHP', icon: 'https://cdn.svgporn.com/logos/php.svg' },
                { name: 'Python', icon: 'https://cdn.svgporn.com/logos/python.svg' },
                { name: 'scikit-learn', icon: 'https://cdn.svgporn.com/logos/scikit-learn.svg' },
                { name: 'MySQL', icon: 'https://cdn.svgporn.com/logos/mysql.svg' },
                { name: 'Jenkins', icon: 'https://cdn.svgporn.com/logos/jenkins.svg' },
                { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg' },
            ],
            link: "https://thincrs.com/"
        },
    ],
    projects: [
        {
            name: 'Scribo — AI-Powered macOS Meeting Assistant',
            role: 'Independent project',
            duration: 'In progress',
            description: [
                'Building a native macOS menu-bar application for AI-powered meeting recording, real-time transcription, and smart note-taking, with LLM-based summarisation and action-item extraction.',
                'Full product ownership: Core Audio pipeline for system and microphone capture, SwiftUI interface following macOS HIG, and Anthropic/OpenAI API integration for contextual note generation.',
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
        { name: 'Next.js', icon: 'https://cdn.svgporn.com/logos/nextjs-icon.svg', current: true },
        { name: 'React Native', icon: 'https://cdn.svgporn.com/logos/react.svg', current: true },
        { name: 'Tailwind CSS', icon: 'https://cdn.svgporn.com/logos/tailwindcss-icon.svg', current: true },
        { name: 'SCSS', icon: 'https://cdn.svgporn.com/logos/sass.svg', current: true },
        { name: 'Node.js', icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg', current: true },
        { name: 'Python', icon: 'https://cdn.svgporn.com/logos/python.svg', current: true },
        { name: 'GraphQL', icon: 'https://cdn.svgporn.com/logos/graphql.svg', current: true },
        { name: 'AWS', icon: 'https://cdn.svgporn.com/logos/aws.svg', current: true },
        { name: 'PostgreSQL', icon: 'https://cdn.svgporn.com/logos/postgresql.svg', current: true },
        { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg', current: true },
        { name: 'Figma', icon: 'https://cdn.svgporn.com/logos/figma.svg', current: true },
        { name: 'Jest', icon: 'https://cdn.svgporn.com/logos/jest.svg', current: true },
        { name: 'Redux', icon: 'https://cdn.svgporn.com/logos/redux.svg' },
        { name: 'Zustand', icon: 'https://cdn.svgporn.com/logos/react.svg' },
        { name: 'React Query / SWR', icon: 'https://cdn.svgporn.com/logos/react-query-icon.svg' },
        { name: 'Expo', icon: 'https://cdn.svgporn.com/logos/expo-icon.svg' },
        { name: 'Ionic', icon: 'https://cdn.svgporn.com/logos/ionic.svg' },
        { name: 'Express', icon: 'https://cdn.svgporn.com/logos/express.svg' },
        { name: 'Flask', icon: 'https://cdn.svgporn.com/logos/flask.svg' },
        { name: 'Django', icon: 'https://cdn.svgporn.com/logos/django.svg' },
        { name: 'FastAPI', icon: 'https://cdn.svgporn.com/logos/fastapi-icon.svg' },
        { name: 'Laravel', icon: 'https://cdn.svgporn.com/logos/laravel.svg' },
        { name: 'PHP', icon: 'https://cdn.svgporn.com/logos/php.svg' },
        { name: 'PyTorch', icon: 'https://cdn.svgporn.com/logos/pytorch-icon.svg' },
        { name: 'TensorFlow', icon: 'https://cdn.svgporn.com/logos/tensorflow.svg' },
        { name: 'scikit-learn', icon: 'https://cdn.svgporn.com/logos/scikit-learn.svg' },
        { name: 'Pandas', icon: 'https://cdn.svgporn.com/logos/pandas.svg' },
        { name: 'Anthropic API', icon: 'https://cdn.svgporn.com/logos/anthropic-icon.svg' },
        { name: 'OpenAI API', icon: 'https://cdn.svgporn.com/logos/openai-icon.svg' },
        { name: 'AWS Lambda', icon: 'https://cdn.svgporn.com/logos/aws-lambda.svg' },
        { name: 'AWS DynamoDB', icon: 'https://cdn.svgporn.com/logos/aws-dynamodb.svg' },
        { name: 'AWS AppSync', icon: 'https://cdn.svgporn.com/logos/aws.svg' },
        { name: 'AWS Amplify', icon: 'https://cdn.svgporn.com/logos/aws.svg' },
        { name: 'Supabase', icon: 'https://cdn.svgporn.com/logos/supabase-icon.svg' },
        { name: 'Firebase', icon: 'https://cdn.svgporn.com/logos/firebase.svg' },
        { name: 'Jenkins', icon: 'https://cdn.svgporn.com/logos/jenkins.svg' },
        { name: 'GitHub Actions', icon: 'https://cdn.svgporn.com/logos/github-actions.svg' },
        { name: 'SonarQube', icon: 'https://cdn.svgporn.com/logos/sonarqube.svg' },
        { name: 'MySQL', icon: 'https://cdn.svgporn.com/logos/mysql.svg' },
        { name: 'MongoDB', icon: 'https://cdn.svgporn.com/logos/mongodb.svg' },
        { name: 'SQLite', icon: 'https://cdn.svgporn.com/logos/sqlite.svg' },
        { name: 'Xcode', icon: 'https://cdn.svgporn.com/logos/xcode.svg' },
        { name: 'Postman', icon: 'https://cdn.svgporn.com/logos/postman-icon.svg' },
        { name: 'Jira', icon: 'https://cdn.svgporn.com/logos/jira.svg' },
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
        },
        {
            name: 'Fundamentals of Deep Learning',
            issuer: 'NVIDIA Deep Learning Institute',
            logo: 'https://cdn.svgporn.com/logos/nvidia.svg',
            credentialId: '1tO0Ys3ITkGJkXM3sgBKrQ',
        },
        {
            name: 'Generative AI with Diffusion Models',
            issuer: 'NVIDIA Deep Learning Institute',
            logo: 'https://cdn.svgporn.com/logos/nvidia.svg',
            credentialId: 'TauXuWfURMOBYNutOVkopw',
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
