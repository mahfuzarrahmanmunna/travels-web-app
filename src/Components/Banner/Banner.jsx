import React, { useState } from 'react';
import { Link } from 'react-router';
import App from './Swiper';

export default function Banner({ data }) {
    const [title, setTitle] = useState(data[0]?.title || '');
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handlePrev = () => {
        const newIndex = selectedIndex === 0 ? data.length - 1 : selectedIndex - 1;
        setSelectedIndex(newIndex);
        setTitle(data[newIndex].title);
    };

    const handleNext = () => {
        const newIndex = selectedIndex === data.length - 1 ? 0 : selectedIndex + 1;
        setSelectedIndex(newIndex);
        setTitle(data[newIndex].title);
    };

    return (
        <div className="flex justify-between mx-auto px-4 py-6">
            <div className=' w-1/2 mx-auto'>
                <h1 className='text-white text-9xl font-semibold'>
                    {title}
                </h1>
                <Link to='/booking' class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                    <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Button Text</span>
                </Link>
            </div>
            <div className='w-1/2'>
                <div className="overflow-x-auto overflow-hidden scrollbar-hide">
                    <div className="flex gap-6 w-max">
                        {data.map((item, index) => (
                            <App item={item} key={index} />
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center mt-6 gap-4">
                    <button
                        onClick={handlePrev}
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow hover:bg-gray-100"
                    >
                        ◀
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow hover:bg-gray-100"
                    >
                        ▶
                    </button>
                </div>
            </div>
        </div>
    );
}
