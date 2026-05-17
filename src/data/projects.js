import aboutBg from '../assets/1.png'
import experienceBg from '../assets/2.png'
import skillsBg from '../assets/3.png'
import bbCover from "../assets/budgetBuddyCover.png"
import bb2 from "../assets/bb2.png"
import bb3 from "../assets/bb3.png"
import mpCover from "../assets/mindPulseCover.png"
import mp1 from "../assets/mp1.png"
import mp2 from "../assets/mp2.png"
import mp3 from "../assets/mp3.png"
import mp4 from "../assets/mp4.png"
import mp5 from "../assets/mp5.png"
import nmCover from "../assets/nomadManagerCover.png"
import nm1 from "../assets/nm1.png"
import nm2 from "../assets/nm2.png"

const projects = [
  {
    id: 1,
    title: "Nomad Manager",
    category: "Capstone Project - Web Application",
    description: `Because managing customers shouldn't feel like guessing.

      Nomad Manager is an AI-enhanced CRM system built for Qatar's tourism sector — designed to help businesses understand their customers better, not just store their data.

      Built for our capstone project, it combines machine learning and predictive analytics to automate customer profiling, segmentation, and personalised marketing campaigns.

      Features:
      ✦ AI-driven customer segmentation & profiling
      ✦ RFM analysis for targeted marketing
      ✦ Predictive analytics for smarter decisions
      ✦ Web scraped + real datasets for accuracy
      ✦ React frontend, Flask backend, Firebase & MongoDB

      Aligned with Qatar National Vision 2030

      Demo in the last slide — link below for the repo!`,
    tech: ["Python", "Flask", "React", "Firebase", "MongoDB"],
    github: "https://github.com/LubnaYussuf2/capstone",
    media: [
      { type: "image", src: nmCover }, // 2 - thumbnail, shows first
      { type: "image", src: nm1 },  // second
      { type: "image", src: nm2 },
      { type: "video", src: "https://drive.google.com/file/d/1dMGlWk2i-1UojgQQzEj_MSt80Nx_JTGt/preview" },
    ],
    cover: nmCover,
    type: "projects"
  },
  {
    id: 2,
    title: "Mind Pulse",
    category: "UI/UX Design Concept",
    description: `Warning: may cause arguments with friends. And strangers. 

      MindPulse is a mobile quiz app designed for anyone who thinks they know everything — and wants to prove it. Create your own quizzes, challenge friends, or go head to head with complete strangers.

      Features:
      ✦ Create & share quizzes on any topic
      ✦ Public quizzes or private invite-only sessions
      ✦ Real-time & async multiplayer modes
      ✦ Solo play for the lone wolves
      ✦ Clean, intuitive UI designed in Figma

      Note: This was a UI/UX design project — check out the Figma prototype below! 🎨`,
    tech: ["Figma"],
    github: null,
    figma: "https://www.figma.com/proto/e1tNs1DLzYaY4hoc6O09jB/UI%2FUXProject?type=design&node-id=664-3372&t=kB21e87I2CJtjGQs-1&scaling=scale-down&pageid=458%3A1058&starting-point-node-id=664%3A3372&show-proto-sidebar=1&mode=design",
    docs: "https://drive.google.com/file/d/1rTDsEuzc0wVmj1yC9Kj1uyA4CQlSp_MK/view?usp=sharing",
    media: [
      { type: "image", src: mpCover }, // thumbnail, shows first
      { type: "image", src: mp1 },
      { type: "image", src: mp2 },
      { type: "image", src: mp3 },
      { type: "image", src: mp4 },
      { type: "image", src: mp5 },
    ],
    cover: mpCover,
    type: "projects"
  },
  {
    id: 3,
    title: "Budget Buddy",
    category: "Mobile Application",
    description: `Track it before you lack it! 💸

        Budget Buddy is a mobile app that helps you track income, expenses, and budgets in real time — because knowing where your money went is the first step to keeping it.

        Features:
        ✦ Real-time expense & income tracking
        ✦ Customizable budget categories
        ✦ Spending insights with charts & graphs
        ✦ Savings goals & progress tracking
        ✦ Secure login & signup

        Demo is in the last slide and you can find he git repo below — check it out! 👀`,
    tech: ["React Native", "Firebase", "Expo"],
    github: "https://github.com/LubnaYussuf2/BudgetBuddy",
    media: [
      { type: "image", src: bbCover }, // thumbnail, shows first
      { type: "image", src: bb2 },
      { type: "image", src: bb3 },
      { type: "video", src: "https://drive.google.com/file/d/1YiyCklHSJrdqGaTAqSsHkFrnBSh1MSAh/preview" },
    ],
    cover: bbCover,
    type: "projects"
  },
  // {
  //   id: 4,
  //   title: "Orbit",
  //   category: "Hackathon - Winning Team",
  //   description: "AI-powered internal portfolio intelligence platform built for the QSTP hackathon. Helps QSTP proactively track and amplify startup milestones. Delivered a working demo, PRD, and pitch deck in 24 hours.",
  //   tech: [],
  //   github: null,
  //   demo: null,
  //   color: "bg-cyan-100",
  //   type: "projects"
  // },


  // {
  //   id: 1,
  //   title: "Project Name",
  //   category: "Hackathon",
  //   description: "Short description of what it does and what you built it with.",
  //   tech: ["React", "Node.js"],
  //   images: [], // we'll add screenshots later
  //   github: "https://github.com/yourhandle/project",
  //   demo: null, // live link if you have one
  //   type: "projects" 
  // },
  // {
  //   id: 2,
  //   title: "Another Project",
  //   category: "Hackathon",
  //   description: "Short description here.",
  //   tech: ["HTML", "CSS", "JavaScript"],
  //   images: [],
  //   github: null,
  //   demo: null,
  //   type: "projects"
  // },
]

export default projects