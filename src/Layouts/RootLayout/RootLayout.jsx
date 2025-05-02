import React from 'react';

const RootLayout = () => {
    return (
        <div className='relative h-screen'>
            {/* Blurred Background Image */}
            <div className='absolute inset-0 bg-[url("https://i.ibb.co/21k561wd/Rectangle-1.png")] bg-cover bg-center filter  z-0'></div>

            {/* Dark Overlay */}
            <div className='absolute inset-0 bg-black/30 z-0'></div>

            {/* Content */}
            <div className='relative z-10 flex h-full'>
                <h1 className='text-4xl text-white font-bold'>This is RootLayout</h1>
            </div>
        </div>

    );
};

export default RootLayout;
