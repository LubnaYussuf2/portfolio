import React, { useState } from 'react'
import HighlightModal from './HighlightModal'

import { X, FileUser, BrainCog, UserStar, MessageCircleQuestionMark } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

import profile from '../data/profile'
import projects from '../data/projects'
import achievements from '../data/achievements'


function Header() {
    const [pfpOpen, setPfpOpen] = useState(false)
    const [selectedHighlight, setSelectedHighlight] = useState(null)

    const socialIcons = {
        github: <FaGithub className='h-3 w-3' />,
        linkedin: <FaLinkedinIn className='h-3 w-3' />,
    }

    const highlightIcons = {
        About: <MessageCircleQuestionMark className='h-6 w-6 font-bold text-[#6B21A8]' />,
        Experience: <UserStar className='h-6 w-6 font-bold text-[#F3E8FF]' />,
        Skills: <BrainCog className='h-6 w-6 font-bold text-[#164E63]' />,
    }

    const handleShare = async () => {
        if (navigator.share) {
            await navigator.share({
                title: profile.name,
                text: `Check out ${profile.name}'s portfolio!`,
                url: window.location.href,
            })
        } else {
            // fallback — just copy the link
            navigator.clipboard.writeText(window.location.href)
            alert('Link copied to clipboard!')
        }
    }

    return (
        <div className='max-w-2xl mx-auto px-4 pt-10'>

            {/* profile pic, name, contact */}
            <div className='flex flex-row gap-4 items-center'>

                {/* pfp */}
                <div className='p-[3px] rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-400'>
                    <div className='p-[3px] rounded-full bg-white'>
                        <img
                            src={profile.avatar}
                            alt={profile.name}
                            onClick={() => setPfpOpen(true)}
                            className='w-35 h-35 rounded-full object-cover flex-shrink-0 cursor-pointer hover:scale-101 transition-transform duration-200'
                        />
                    </div>
                </div>


                {/* pfp overlay */}
                {pfpOpen && (
                    <div
                        onClick={() => setPfpOpen(false)}
                        className='fixed inset-0 bg-black/60 z-50 flex items-center justify-center'>

                        <button
                            onClick={() => setPfpOpen(false)}
                            className='absolute top-4 right-4 text-white hover:text-gray-300 transition'>
                            <X className='h-6 w-6' />
                        </button>

                        <img
                            src={profile.avatar}
                            alt={profile.name}
                            className='w-150 h-150 rounded-full object-cover shadow-2xl'
                        />
                    </div>
                )}


                {/* details */}
                <div className='flex flex-col gap-1'>
                    <p className='text-2xl font-semibold'>{profile.name}</p>
                    <p className='text-lg font-medium text-gray-600'>{profile.title}</p>
                    {/* <p className='text-sm text-gray-500'>{profile.email} · {profile.phone}</p> */}

                    <div className='flex gap-4 mt-4'>
                        <div className='text-center flex flex-row gap-1'>
                            <p className='text-sm font-semibold'>{projects.length}</p>
                            <p className='text-sm text-gray-600'>projects</p>
                        </div>
                        <div className='text-center flex flex-row gap-1'>
                            <p className='text-sm font-semibold'>{achievements.length}</p>
                            <p className='text-sm text-gray-600'>achievements</p>
                        </div>
                        <div className='text-center flex flex-row gap-1'>
                            <p className='text-sm font-semibold'>2+</p>
                            <p className='text-sm text-gray-600'>years exp</p>
                        </div>
                    </div>
                </div>

            </div>


            {/* bio */}
            <p className='mt-4 text-sm text-gray-700 whitespace-pre-line'>{profile.bio}</p>


            {/* socials */}
            <div className='flex flex-row gap-2 mt-3'>
                {Object.entries(profile.socials)
                    .filter(([platform, url]) => url !== null)
                    .map(([platform, url]) => (
                        <a
                            key={platform}
                            href={url}
                            target='_blank'
                            rel='noreferrer'
                            className='flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-blue-100/50 text-gray-800 hover:bg-blue-100 transition'>
                            {socialIcons[platform]}{platform}
                        </a>
                    ))}
            </div>


            {/* buttons */}
            <div className='flex flex-row gap-3 mt-4'>
                <a
                    href={profile.resume}
                    target='_blank'
                    rel='noreferrer'
                    className='flex-1 rounded-md bg-gray-800 px-6 py-1.5 text-white text-sm font-medium hover:bg-gray-700 transition text-center'>
                    Resume
                </a>
                <button
                    onClick={handleShare}
                    className='flex-1 cursor-pointer rounded-md border border-gray-800 px-6 py-1.5 text-sm font-medium hover:bg-gray-500/50 transition'>
                    Share Profile
                </button>
            </div>


            {/* highlight reel */}
            <div className='flex flex-row gap-4 mt-6'>
                {profile.highlights.map((highlight) => (
                    <div
                        key={highlight.id}
                        onClick={() => setSelectedHighlight(highlight)}
                        className='flex flex-col items-center gap-1'>
                        <div className='w-14 h-14 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-xl relative overflow-hidden ring-2 ring-gray-300 ring-offset-2 cursor-pointer'>
                            <img
                                src={highlight.bg}
                                alt="Bg"
                                className='absolute inset-0 w-full h-full object-cover'
                            />
                            <div className='relative z-10'>
                                {highlightIcons[highlight.label]}
                            </div>
                        </div>
                        <span className='text-xs text-gray-800 font-medium'>{highlight.label}</span>
                    </div>
                ))}
            </div>

            {selectedHighlight && (
                <HighlightModal
                    highlight={selectedHighlight}
                    icon={highlightIcons[selectedHighlight.label]}
                    onClose={() => setSelectedHighlight(null)}
                />
            )}

        </div>
    )
}

export default Header