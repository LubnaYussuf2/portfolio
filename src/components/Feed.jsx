import React, { useState } from 'react'
import { Folder, Newspaper, Award } from 'lucide-react'

import projects from '../data/projects'
import achievements from '../data/achievements'
import updates from '../data/updates'
import PostModal from './PostModal'


function Feed() {
    const [feedDisplay, setFeedDisplay] = useState('Projects')
    const [selectedItem, setSelectedItem] = useState(null)
    const [selectedIndex, setSelectedIndex] = useState(null)


    const currentList = feedDisplay === 'Projects' ? projects
        : feedDisplay === 'Achievements' ? achievements
            : updates



    const handleOpen = (item, index) => {
        setSelectedItem(item)
        setSelectedIndex(index)
    }

    const handleClose = () => {
        setSelectedItem(null)
        setSelectedIndex(null)
    }

    const handlePrev = () => {
        const newIndex = (selectedIndex - 1 + currentList.length) % currentList.length
        setSelectedItem(currentList[newIndex])
        setSelectedIndex(newIndex)
    }

    const handleNext = () => {
        const newIndex = (selectedIndex + 1) % currentList.length
        setSelectedItem(currentList[newIndex])
        setSelectedIndex(newIndex)
    }


    return (
        <div className='max-w-2xl mx-auto px-4 my-8'>

            {/* toggle buttons */}
            <div className='flex flex-row gap-10 items-center justify-evenly border-b border-gray-200 mb-6'>
                <button
                    onClick={() => setFeedDisplay('Projects')}
                    className={`flex flex-row gap-2 pb-2
                        ${feedDisplay == 'Projects' ? 'border-b-2 border-gray-800 text-gray-800' : 'text-gray-400'}
                    `}>
                    <Folder className='h-5 w-5' />
                    <p className='text-sm font-medium'>Projects</p>
                </button>

                <button
                    onClick={() => setFeedDisplay('Achievements')}
                    className={`flex flex-row gap-2 pb-2
                        ${feedDisplay == 'Achievements' ? 'border-b-2 border-gray-800 text-gray-800' : 'text-gray-400'}
                    `}>
                    <Award className='h-5 w-5' />
                    <p className='text-sm font-medium'>Achievements</p>
                </button>

                <button
                    onClick={() => setFeedDisplay('Updates')}
                    className={`flex flex-row gap-2 pb-2
                        ${feedDisplay == 'Updates' ? 'border-b-2 border-gray-800 text-gray-800' : 'text-gray-400'}
                    `}>
                    <Newspaper className='h-5 w-5' />
                    <p className='text-sm font-medium'>Updates</p>
                </button>
            </div>


            {/* projects grid */}
            {feedDisplay === 'Projects' && (
                <div className='grid grid-cols-3 gap-1'>
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            onClick={() => handleOpen(project, index)}
                            className={`aspect-square ${project.cover ? '' : project.color} rounded-sm flex flex-col items-center justify-center cursor-pointer hover:opacity-80 transition p-3 overflow-hidden relative`}>

                            {/* cover image if available */}
                            {project.cover && (
                                <img
                                    src={project.cover}
                                    alt={project.title}
                                    className='absolute inset-0 w-full h-full object-cover'
                                />
                            )}

                            {/* fallback text */}
                            {!project.cover && (
                                <p className='text-xs text-gray-600 text-center font-medium'>{project.title}</p>
                            )}

                        </div>
                    ))}
                </div>
            )}


            {/* achievements grid */}
            {feedDisplay === 'Achievements' && (
                <div className='flex flex-col items-center justify-center py-16 gap-2'>
                    <p className='text-2xl'>🏆</p>
                    <p className='text-sm font-medium text-gray-600'>Achievements coming soon!</p>
                    <p className='text-xs text-gray-400'>check back later ✨</p>
                </div>
            )}


            {/* {feedDisplay === 'Achievements' && (
                <div className='grid grid-cols-3 gap-1'>
                    {achievements.map((achievement, index) => (
                        <div
                            key={achievement.id}
                            onClick={() => handleOpen(achievement, index)}
                            className={`aspect-square ${achievement.cover ? '' : achievement.color} rounded-sm flex flex-col items-center justify-center cursor-pointer hover:opacity-80 transition p-3 overflow-hidden relative`}>

                            {achievement.cover && (
                                <img
                                    src={achievement.cover}
                                    alt={achievement.title}
                                    className='absolute inset-0 w-full h-full object-cover'
                                />
                            )}

                            {!achievement.cover && (
                                <p className='text-xs text-gray-600 text-center font-medium'>{achievement.title}</p>
                            )}

                        </div>
                    ))}
                </div>
            )} */}

            {/* updates list */}
            {feedDisplay === 'Updates' && (
                <div className='flex flex-col gap-3'>
                    {updates.slice().reverse().map((update) => (
                        <div
                            key={update.id}
                            className='bg-white rounded-xl border border-gray-100 flex flex-col overflow-hidden'>

                            {/* text content */}
                            <div className='px-5 py-4 flex flex-col gap-2'>
                                <p className='text-sm font-semibold text-gray-800'>{update.heading}</p>
                                {update.content !== "" && (
                                    <p className='text-xs text-gray-500 leading-relaxed whitespace-pre-line'>{update.content}</p>
                                )}
                                <p className='text-xs text-gray-300 mt-1'>{update.date}</p>
                            </div>

                            {/* images */}
                            {update.images && update.images.length > 0 && (
                                <div className={`grid gap-0.5 ${update.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                                    {update.images.map((img, i) => (
                                        <img
                                            key={i}
                                            src={img}
                                            alt=""
                                            className='w-full aspect-video object-cover'
                                        />
                                    ))}
                                </div>
                            )}

                            {/* placeholder if no images */}
                            {update.images && update.images.length === 0 && (
                                <div className='w-full h-2 bg-gray-50' />
                            )}

                        </div>
                    ))}
                </div>
            )}


            {selectedItem && (
                <PostModal
                    item={selectedItem}
                    onClose={handleClose}
                    onPrev={handlePrev}
                    onNext={handleNext}
                />
            )}
        </div>
    )
}

export default Feed