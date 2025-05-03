import React, { useState } from 'react';

export default function Banner({ data }) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handlePrev = () => {
        setSelectedIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setSelectedIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-1/2 max-w-6xl mx-auto px-4 py-6">
            <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-6 w-max">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedIndex(index)}
                            className={`relative rounded-xl overflow-hidden shadow-lg w-60 h-96 cursor-pointer transition-all duration-300 shrink-0 ${selectedIndex === index ? 'border-4 border-yellow-400' : 'border border-transparent'
                                }`}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0  bg-opacity-40 flex items-end justify-center">
                                <h2 className="text-white text-xl font-bold mb-4">{item.title}</h2>
                            </div>
                        </div>
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
    );
}
