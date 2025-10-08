import React from 'react';
import { FaArrowDown, FaDownload, FaStarHalfAlt } from 'react-icons/fa';

const Card = ({data}) => {
    console.log(data)
    return (
        <div className='shadow bg-white rounded-md '>
          <img className='p-5  w-full' src={data.image} alt="" /> 
          <h1 className='px-5 text-xl font-semibold'> {data.title}</h1> 
          <div className='flex gap-35 md:gap-40 px-5 my-3'>
            <span className='flex gap-1.5 items-center bg-[#F1F5E8] px-2 rounded-md'><FaArrowDown /> {data.downloads}</span>
            <span className='flex gap-1.5 items-center bg-[#F1F5E8] px-2  rounded-md'><FaStarHalfAlt />{data.ratingAvg}</span>
          </div>
        </div>
    );
};

export default Card;