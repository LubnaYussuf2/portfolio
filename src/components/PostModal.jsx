import React, { useEffect, useState } from 'react'
import { X, ExternalLink, ChevronLeft, ChevronRight, CodeXml, FileText } from 'lucide-react'
import { FaFigma, FaGithub } from 'react-icons/fa'
import lubnaDP from '../assets/Lubna.jpeg'

function PostModal({ item, onClose, onPrev, onNext }) {
    const [mediaIndex, setMediaIndex] = useState(0)

    // reset carousel when switching projects
    useEffect(() => {
        setMediaIndex(0)
    }, [item])

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowLeft') onPrev()
            if (e.key === 'ArrowRight') onNext()
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [])

    const media = item.media || []
    const currentMedia = media[mediaIndex]

    return (
        <div
            className='fixed inset-0 bg-black/60 z-50 flex items-center justify-center'
            onClick={onClose}>

            {/* LEFT NAV */}
            <button
                onClick={(e) => { e.stopPropagation(); onPrev() }}
                className='absolute left-40 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition'>
                <ChevronLeft size={32} />
            </button>

            {/* RIGHT NAV */}
            <button
                onClick={(e) => { e.stopPropagation(); onNext() }}
                className='absolute right-40 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition'>
                <ChevronRight size={32} />
            </button>

            {/* MODAL */}
            <div
                className='bg-white w-[900px] max-w-[92vw] h-[600px] rounded-sm overflow-hidden flex flex-col'
                onClick={(e) => e.stopPropagation()}>

                {/* HEADER */}
                <div className='flex items-center gap-3 px-4 py-3 border-b border-gray-200'>
                    <img
                        src={lubnaDP}
                        className='w-9 h-9 rounded-full object-cover flex-shrink-0'
                    />
                    <div className='flex flex-col leading-tight'>
                        <span className='text-md font-semibold text-gray-800'>{item.title}</span>
                        <span className='text-xs text-gray-400'>{item.category}</span>
                        {item.date && (
                            <span className='text-xs text-gray-300'>{item.date}</span>
                        )}
                    </div>
                    <button onClick={onClose} className='ml-auto text-gray-400 hover:text-gray-700'>
                        <X size={18} />
                    </button>
                </div>

                {/* BODY */}
                <div className='flex flex-1 overflow-hidden'>

                    {/* LEFT - CAROUSEL */}
                    <div className='w-[60%] bg-gray-100 flex flex-col relative'>

                        {/* media display */}
                        <div className='flex-1 relative overflow-hidden'>
                            {media.length === 0 && (
                                <div className='w-full h-full flex items-center justify-center'>
                                    <p className='text-gray-400 text-sm'>screenshots coming soon</p>
                                </div>
                            )}

                            {currentMedia?.type === 'image' && (
                                <img
                                    src={currentMedia.src}
                                    alt=""
                                    className='w-full h-full object-cover'
                                />
                            )}

                            {currentMedia?.type === 'video' && (
                                <iframe
                                    src={currentMedia.src}
                                    className='w-full h-full'
                                    allow='autoplay'
                                    title={item.title}
                                />
                            )}

                            {/* left button */}
                            {media.length > 1 && (
                                <button
                                    onClick={() => setMediaIndex((i) => (i - 1 + media.length) % media.length)}
                                    className='absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1 transition'>
                                    <ChevronLeft size={16} />
                                </button>
                            )}

                            {/* right button */}
                            {media.length > 1 && (
                                <button
                                    onClick={() => setMediaIndex((i) => (i + 1) % media.length)}
                                    className='absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1 transition'>
                                    <ChevronRight size={16} />
                                </button>
                            )}

                            {/* dots at bottom */}
                            {media.length > 1 && (
                                <div className='absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5'>
                                    {media.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setMediaIndex(i)}
                                            className={`w-1.5 h-1.5 rounded-full transition ${i === mediaIndex ? 'bg-white' : 'bg-white/40'}`}
                                        />
                                    ))}
                                </div>
                            )}

                        </div>
                    </div>

                    {/* RIGHT - DETAILS */}
                    <div className='w-[40%] p-5 flex flex-col overflow-y-auto'>
                        {/* <h2 className='text-base font-semibold text-gray-800 mb-2'>{item.title}</h2> */}
                        <p className='text-sm text-gray-600 mb-4 leading-relaxed whitespace-pre-line'>{item.description}</p>

                        <h3 className='text-sm font-semibold text-gray-800 mb-2'>Tech/Tools Used</h3>
                        <div className='flex flex-wrap gap-2 mb-5'>
                            {item.tech?.map((t) => (
                                <span key={t} className='text-xs px-2 py-1 rounded-2xl bg-gray-100 text-gray-600'>
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* LINKS */}
                        <h3 className='text-sm font-semibold text-gray-800 mb-2'>Links</h3>
                        <div className='flex gap-2 mt-auto flex-wrap'>
                            {item.github && (
                                <a href={item.github} target='_blank' rel='noreferrer'
                                    className='flex items-center gap-1 text-xs px-3 py-2 rounded-md bg-green-100 text-green-700'>
                                    {/* <CodeXml size={12} /> */}
                                    <FaGithub size={12} />
                                    Github
                                </a>
                            )}
                            {item.demo && (
                                <a href={item.demo} target='_blank' rel='noreferrer'
                                    className='flex items-center gap-1 text-xs px-3 py-2 rounded-md border border-gray-300 text-gray-700'>
                                    <ExternalLink size={12} />
                                    Live
                                </a>
                            )}
                            {item.figma && (
                                <a href={item.figma} target='_blank' rel='noreferrer'
                                    className='flex items-center gap-1 text-xs px-3 py-2 rounded-md bg-purple-100 text-purple-700'>
                                    <FaFigma size={12} />
                                    Figma
                                </a>
                            )}
                            {item.docs && (
                                <a href={item.docs} target='_blank' rel='noreferrer'
                                    className='flex items-center gap-1 text-xs px-3 py-2 rounded-md bg-blue-50 text-blue-700'>
                                    <FileText size={12} />
                                    Documentation
                                </a>
                            )}
                            {!item.github && !item.demo && !item.figma && !item.docs && (
                                <p className='text-xs text-gray-300'>No links available yet</p>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PostModal