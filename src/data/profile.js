import lubnaDisplayPicture from '../assets/Lubna.jpeg'
import aboutBg from '../assets/1.png'
import experienceBg from '../assets/2.png'
import skillsBg from '../assets/3.png'


const profile = {
    name: "Lubna Khamis",
    username: "lubnakhamis1409",
    title: "Frontend/Web Developer",
    location: "Doha, Qatar",
    // bio: "Chaotic by nature, clean code by force. I like watching something and telling myself I'll be productive after this episode. I'm also perpetually one hobby away from having a personality!",
    bio: `Chaotic by nature, clean code by force💔🥀 \nDesign is my passion (not) \nPerpetually one hobby away from having a personality (•ᴗ<)✧!`,
    email: "lubnamohammed2002@gmail.com",
    phone: "+974 31386632",
    avatar: lubnaDisplayPicture,
    socials: {
        github: "https://github.com/LubnaYussuf2",
        linkedin: "https://www.linkedin.com/in/lubna-khamis-274b52243/",
        instagram: null,
        youtube: null,
    },
    resume: "/resume.pdf",
    highlights: [
        { id: 1, label: "About", bg: aboutBg },
        { id: 2, label: "Experience", bg: experienceBg },
        { id: 3, label: "Skills", bg: skillsBg },
    ],
    experience: [
        {
            id: 1,
            role: "Frontend Developer",
            company: "PitchPro",
            duration: "Jul 2025 – Present",
            description: "Built responsive web interfaces and interactive UI components using React and Tailwind CSS. Integrated Firebase for dynamic dashboards and implemented secure authentication flows."
        },
        {
            id: 2,
            role: "Information Systems Intern",
            company: "Ministry of Communications and Information Technology (MCIT)",
            duration: "Feb 2025 – Jun 2025",
            description: "Built dynamic frontend components in Power Pages, automated workflows using Power Automate, and led a 3-member intern team as Project Lead."
        },
        {
            id: 3,
            role: "IT Support Intern",
            company: "Elegancia Healthcare / MMCH",
            duration: "May 2024 – Aug 2024",
            description: "Developed RPA solutions using Power Automate, assisted in deploying an Oracle healthcare system, and provided IT support across multiple departments."
        },
        {
            id: 4,
            role: "Commentary Assistant",
            company: "Host Broadcast Services — FIFA World Cup 2022",
            duration: "Oct 2022 – Dec 2022",
            description: "Assisted the commentary team with technical setup and live broadcast operations across all matches."
        },
    ],
    skills: {
        frameworks: [
            { id: 1, name: "React" },
            { id: 2, name: "React Native" },
            { id: 3, name: "JavaScript" },
            { id: 4, name: "TypeScript" },
            { id: 5, name: "Python" },
            { id: 6, name: "PHP" },
            { id: 7, name: "HTML/CSS" },
            { id: 8, name: "Node.js" },
        ],
        databases: [
            { id: 1, name: "Firebase" },
            { id: 2, name: "MySQL" },
            { id: 3, name: "MongoDB" },
            { id: 4, name: "Oracle SQL" },
        ],
        tools: [
            { id: 1, name: "Figma" },
            { id: 2, name: "GitHub" },
            { id: 3, name: "Postman" },
            { id: 4, name: "Power Platform" },
            { id: 5, name: "Tailwind" },
        ]
    }
}



export default profile