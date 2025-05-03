import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    return (
        <div className='px-24 lg:mt-36'>

            <div className=''>
                <Banner data={data} />
            </div>
        </div>
    );
};

export default Home;