import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    return (
        <div className='px-24 flex lg:mt-36 justify-between items-center'>
            <div className='w-1/2'>
                <h1 className='font-babes text-9xl text-white '>Cox's bazar</h1>
            </div>
            <div className=''>
                <Banner data={data} />
           </div>
        </div>
    );
};

export default Home;