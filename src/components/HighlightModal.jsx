import React, { useEffect } from 'react'
import { X } from 'lucide-react'
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPhp, FaDatabase, FaPython, FaGitAlt, FaFigma } from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiMysql, SiFirebase, SiPostman, SiTailwindcss } from 'react-icons/si'

import profile from '../data/profile'
import powerPlatform from '../assets/powerPlatformIcons.png'



function HighlightModal({ highlight, icon, onClose }) {

    const skillIcons = {
        "React": <FaReact className='h-5 w-5 text-cyan-400' />,
        "React Native": <FaReact className='h-5 w-5 text-cyan-300' />,
        "JavaScript": <FaJs className='h-5 w-5 text-yellow-400' />,
        "TypeScript": <SiTypescript className='h-5 w-5 text-blue-500' />,
        "Python": <FaPython className='h-5 w-5 text-blue-400' />,
        "PHP": <FaPhp className='h-5 w-5 text-indigo-400' />,
        "HTML/CSS": <FaHtml5 className='h-5 w-5 text-orange-500' />,
        "Node.js": <FaNodeJs className='h-5 w-5 text-green-500' />,
        "Firebase": <SiFirebase className='h-5 w-5 text-orange-400' />,
        "MySQL": <SiMysql className='h-5 w-5 text-blue-600' />,
        "MongoDB": <SiMongodb className='h-5 w-5 text-green-500' />,
        "Oracle SQL": <FaDatabase className='h-5 w-5 text-red-400' />,
        "Figma": <FaFigma className='h-5 w-5 text-pink-400' />,
        "GitHub": <FaGitAlt className='h-5 w-5 text-orange-600' />,
        "Postman": <SiPostman className='h-5 w-5 text-orange-500' />,
        "Tailwind": <SiTailwindcss className='h-5 w-5 text-cyan-500' />,
        "Power Platform": <img src={powerPlatform} alt="Power Platform" className=' object-contain' />,
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])


    return (
        // backdrop
        <div
            onClick={onClose}
            className='fixed inset-0 bg-black/60 z-50 flex items-center justify-center'>

            {/* modal */}
            <div
                onClick={(e) => e.stopPropagation()}
                className='bg-[#eeebf5] rounded-2xl w-[400px] max-w-[90vw] h-[600px] max-h-[90vh] flex flex-col overflow-hidden relative'>

                {/* header */}
                <div className='bg-[#eeebf5] flex items-center justify-between px-4 py-3 border-b border-gray-100'>
                    <div className='flex items-center gap-2'>
                        <div className='w-8 h-8 rounded-full flex items-center justify-center relative overflow-hidden'>
                            <img
                                src={highlight.bg}
                                alt=""
                                className='absolute inset-0 w-full h-full object-cover'
                            />
                            <div className='w-5 h-5 relative z-10 flex items-center justify-center'>
                                {icon}
                            </div>
                        </div>
                        <span className='text-sm font-medium'>{highlight.label}</span>
                    </div>

                    <button
                        onClick={onClose}
                        className='text-gray-400 hover:text-gray-700 transition'>
                        <X className='h-5 w-5' />
                    </button>
                </div>

                {/* content */}
                <div className='flex-1 overflow-y-auto p-6'>

                    {/* -----------------ABOUT------------------- */}
                    {highlight.label === 'About' && (
                        <div className='flex flex-col gap-5'>

                            {/* intro */}
                            <div className='flex flex-col gap-3'>
                                <p className='text-sm text-gray-700 leading-relaxed'>
                                    Hi! I'm Lubna, a Doha-based frontend developer and recent grad. I build things for the web and mobile, and occasionally convince myself I'll pick up a new hobby this time.
                                </p>
                                <div className='flex flex-col gap-1.5'>
                                    {[
                                        { icon: '🌐', label: 'Frontend', desc: 'React, Tailwind, TypeScript' },
                                        { icon: '💻', label: 'Web Development', desc: 'HTML, CSS, JavaScript, PHP' },
                                        { icon: '📱', label: 'Mobile', desc: 'React Native' },
                                        { icon: '⚡', label: 'Automation', desc: 'Microsoft Power Platform' },
                                        { icon: '🎨', label: 'Design', desc: 'Figma, UI/UX' },
                                    ].map((item) => (
                                        <div key={item.label} className='flex items-center gap-2'>
                                            <span className='text-sm'>{item.icon}</span>
                                            <span className='text-xs font-medium text-gray-700'>{item.label}</span>
                                            <span className='text-xs text-gray-400'>— {item.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <hr className='border-gray-100' />

                            {/* education */}
                            <div className='flex flex-col gap-1'>
                                <p className='text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2'>Education</p>
                                <div className='flex items-start gap-2'>
                                    <span>🎓</span>
                                    <div>
                                        <p className='text-sm font-medium text-gray-700'>BSc Applied Science in Information Systems</p>
                                        <p className='text-xs italic text-gray-400'>University of Doha for Science and Technology · 2025</p>
                                    </div>
                                </div>
                            </div>

                            <hr className='border-gray-100' />

                            {/* languages */}
                            <div className='flex flex-col gap-2'>
                                <p className='text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2'>Languages</p>
                                <div className='flex flex-col'>
                                    {[
                                        { lang: '✩English', level: 'fluent (clearly)' },
                                        { lang: '✩Swahili', level: 'native' },
                                        { lang: '✩Arabic', level: 'getting there... slowly' },
                                        { lang: '✩Korean', level: 'embarrassingly basic' },
                                    ].map((l) => (
                                        <div key={l.lang} className='flex items-center gap-1 rounded-md px-1 py-0.5'>
                                            {/* <span className='text-sm'>{l.flag}</span> */}
                                            <div>
                                                <span className='text-xs font-medium text-gray-700'>{l.lang} </span>
                                                <span className='text-xs text-gray-400'>— {l.level}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <hr className='border-gray-100' />

                            {/* fun facts */}
                            <div className='flex flex-col gap-2'>
                                <p className='text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2'>Fun Facts</p>
                                {[
                                    "Aspiring skateboarder with 0 skateboarding skills",
                                    "Once watched an entire series in one sitting. No regrets.",
                                    "Currently has 12 unfinished hobby projects",
                                    "Overthinks everything, including this fun fact",
                                    "Procrastination is a skill if you think about it",
                                ].map((fact, index) => (
                                    <div key={index} className='flex gap-2 items-start'>
                                        <span className='text-gray-300 mt-0.5'>✦</span>
                                        <p className='text-sm text-gray-600'>{fact}</p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    )}



                    {/* -----------------EXPERIENCE------------------- */}
                    {highlight.label === 'Experience' && (
                        <div className='flex flex-col gap-4'>
                            {profile.experience.map((exp, index) => (
                                <div key={exp.id} className='flex gap-3'>

                                    {/* timeline */}
                                    <div className='flex flex-col items-center'>
                                        <div className='w-2.5 h-2.5 rounded-full bg-purple-300 mt-1.5 flex-shrink-0' />
                                        {index < profile.experience.length - 1 && (
                                            <div className='w-[1px] bg-gray-200 flex-1 mt-1' />
                                        )}
                                    </div>

                                    {/* card */}
                                    <div className='flex flex-col gap-1 pb-5 flex-1'>
                                        <div className='bg-white rounded-xl px-4 py-3 flex flex-col gap-1 shadow-sm'>
                                            <p className='text-sm font-semibold text-gray-800'>{exp.role}</p>
                                            <p className='text-xs text-gray-400'>{exp.company}</p>
                                            <p className='text-xs text-purple-400 font-medium'>{exp.duration}</p>
                                            <p className='text-xs text-gray-500 leading-relaxed mt-1'>{exp.description}</p>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    )}




                    {/* -----------------SKILLS------------------- */}
                    {highlight.label === 'Skills' && (
                        <div className='flex flex-col gap-5'>

                            {[
                                { label: 'Languages & Frameworks', items: profile.skills.frameworks },
                                { label: 'Databases', items: profile.skills.databases },
                                { label: 'Tools', items: profile.skills.tools },
                            ].map((section, i) => (
                                <div key={i} className='flex flex-col gap-3'>
                                    <p className='text-xs font-semibold text-gray-400 uppercase tracking-wide'>{section.label}</p>
                                    <div className='grid grid-cols-3 gap-2'>
                                        {section.items.map((skill) => (
                                            <div key={skill.id} className='flex flex-col items-center gap-1.5 bg-white rounded-xl py-3 px-2 shadow-sm'>
                                                <div className='text-xl'>{skillIcons[skill.name] || <span className='text-xs text-gray-400 text-center'>{skill.name}</span>}</div>
                                                <span className='text-xs text-gray-600 font-medium text-center'>{skill.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                    {i < 2 && <hr className='border-gray-100 mt-1' />}
                                </div>
                            ))}

                        </div>
                    )}

                </div>

            </div>
        </div>
    )
}

export default HighlightModal