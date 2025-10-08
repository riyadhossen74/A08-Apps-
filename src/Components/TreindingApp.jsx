import React from 'react';
import Card from './Card';
import useHook from '../Hook/useHook';
import Navlink from './Navlink';
import { Link } from 'react-router';

const TreindingApp = () => {
    const {products, loading, error} = useHook()
    const TreindingApp = products.slice(0, 8)

    return (
        <div>
            <div className='text-center my-5'>
                <h1 className='text-3xl font-bold'>Trending Apps</h1>
                <p className='text-gray-600 my-2'>Explore All Trending Apps on the Market developed by us</p>
            </div>
           <div className='grid md:grid-cols-4 container mx-auto md:gap-12 '>
            {
                TreindingApp.map((data) => <Card data={data} key={data.id}></Card>)
            }
           </div>
          <div className='text-center my-10'>
             <button className='p-2 px-3 text-white rounded-md  bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'> <Link to='/app'>Show All</Link> </button>
          </div>
        </div>
    );
};

export default TreindingApp;