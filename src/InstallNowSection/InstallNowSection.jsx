import React from "react";
import { useParams } from "react-router";
import useHook from "../Hook/useHook";
import { FaArrowDown, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

const InstallNowSection = () => {
  const { id } = useParams();
  const { products, loading, error } = useHook();
  const product = products.find((p) => p.id === Number(id));
  const {
    image,
    title,
    downloads,
    ratingAvg,
    size,
    companyName,
    totalReviews,
    description,
  } = product || {};
  console.log(id);
  console.log(product);
  if (loading) return <p>loddding</p>;
  const handelInstall = () => {
    const existingList = JSON.parse(localStorage.getItem("install"));
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some((p) => p.id === product.id);
      if(isDuplicate) return alert("sorry")
      updatedList = [...existingList, product];
    } else {
      updatedList.push(product);
    }
    localStorage.setItem("install", JSON.stringify(updatedList));
  };
 

  return (
    <div className="bg-[#F5F5F5]">
      <div className="flex container mx-auto gap-20 py-10">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <div className="border-b border-gray-300 py-3">
            <h1 className="text-3xl font-semibold mb-2">{title}</h1>
            <span className="text-gray-500 ">
              Developed by:{" "}
              <a className="text-[#9F62F2] " href="">
                {companyName}
              </a>
            </span>
          </div>
          <div className="flex gap-15">
            <div className="mt-2">
              <FaArrowDown />
              <p className="text-sm text-gray-500 mt-2">Downloads</p>
              <span className="text-2xl font-semibold">{downloads}</span>
            </div>
            <div className="mt-2">
              <FaStarHalfAlt />
              <p className="text-sm text-gray-500 mt-2">Average Ratings</p>
              <span className="text-2xl font-semibold">{ratingAvg}</span>
            </div>
            <div className="mt-2">
              <AiOutlineLike />
              <p className="text-sm text-gray-500 mt-2">Total Reviews</p>
              <span className="text-2xl font-semibold">{totalReviews}</span>
            </div>
          </div>
          <button
            className="bg-[#00D390] p-2 mt-2 rounded-md text-white"
            onClick={handelInstall}
          >
            Install Now ({size} MB)
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallNowSection;
