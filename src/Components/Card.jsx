import React from 'react';
import { FaArrowDown, FaDownload, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const Card = ({data}) => {
    const {image, title, downloads, ratingAvg, id } = data
    return (
        <Link to={`/app/${id}`} className='shadow bg-white rounded-md '>
          <img className='p-5  w-full' src={image} alt="" /> 
          <h1 className='px-5 text-xl font-semibold'> {title}</h1> 
          <div className='flex gap-35 md:gap-40 px-5 my-3'>
            <span className='flex gap-1.5 items-center bg-[#F1F5E8] px-2 rounded-md'><FaArrowDown /> {downloads}</span>
            <span className='flex gap-1.5 items-center bg-[#F1F5E8] px-2  rounded-md'><FaStarHalfAlt />{ratingAvg}</span>
          </div>
        </Link>
    );
};

export default Card;