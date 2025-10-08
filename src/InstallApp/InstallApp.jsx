import React, { useEffect, useState } from 'react';
import { FaArrowDown, FaStarHalf } from 'react-icons/fa';

const InstallApp = () => {
    const [install, setInstall] = useState([])
    useEffect(() => {
       const saveList = JSON.parse(localStorage.getItem("install")); 
       if(saveList) setInstall(saveList)
    }, [])
    return (
       <div className='bg-[#F5F5F5]'>
         <div className='container mx-auto py-10 '>
           <div className='text-center'>
            <h1 className='text-3xl font-semibold mb-5'>Your Installed Apps</h1>
            <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
           </div>
           <div>
            <div className='flex justify-between'>
                <h1>{install.length} Apps Found</h1>
                <select name="" id="">
                    <option>Sort by size</option>
                    <option>Low to High</option>
                    <option>High to Low</option>
                </select>
            </div>

           </div>
         
          
        {
            install.map((item) =>(
                 <div className='flex justify-between items-center bg-white my-5 px-5 py-2 shadow'>
                 <div className='flex gap-6 items-center '>
             <img  src={item.image} alt="" />
            <div>
                <h1 className='font-semibold'>{item.title}</h1>
                <div className='flex gap-6 my-2'>
                    <div className='flex items-center gap-1'>
                        <FaArrowDown />
                    <span>{item.downloads}</span>
                </div>
                <div className='flex items-center gap-1'>
                    <FaStarHalf />
                    <span>{item.ratingAvg}</span>
                </div>
                <div>
                    <span>258 MB</span>
                </div>
                </div>
            </div>
           </div>
           <div>
             <button className='bg-[#00D390] p-2 rounded-md text-white'>Uninstall</button>
           </div>
               
           </div>
            ))
        }
           
        </div>
       </div>
    );
};

export default InstallApp;