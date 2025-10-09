import { useParams } from "react-router";
import useHook from "../Hook/useHook";
import { FaArrowDown, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast, ToastContainer } from "react-toastify";
import LoderSpniner from "../Spniner/LoderSpniner";
import { useState } from "react";

const InstallNowSection = () => {
  const { id } = useParams();
  const [uninstall, setUninstall] = useState(false);
  const { products, loading } = useHook();
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

  if (loading) return <LoderSpniner></LoderSpniner>;
  const handelInstall = () => {
    const existingList = JSON.parse(localStorage.getItem("install"));
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some((p) => p.id === product.id);
      if (isDuplicate) return;
      updatedList = [...existingList, product];
    } else {
      updatedList.push(product);
    }
    toast.success("success");
    localStorage.setItem("install", JSON.stringify(updatedList));
    setUninstall(true);
  };

  return (
    <div className="bg-[#F5F5F5]">
      <div className="md:flex container  mx-auto gap-20 px-5 py-10">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <div className="border-b border-gray-300 py-3">
            <h1 className="md:text-3xl font-semibold mb-2">{title}</h1>
            <span className="text-gray-500 ">
              Developed by:{" "}
              <a className="text-[#9F62F2] " href="">
                {companyName}
              </a>
            </span>
          </div>
          <div className="flex gap-5 md:gap-15">
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
            className={`bg-[#00D390] p-2 mt-2 rounded-md  ${
              uninstall ? "bg-emerald-700 cursor-not-allowed:" : "text-white"
            }`}
            onClick={handelInstall}
          >
            <ToastContainer />
            {uninstall ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      <div className="space-y-3 container mx-auto">
        <h3 className="text-2xl ml-5">Ratings</h3>
        <div className="">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={product?.ratings || []}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#9F62F2" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="container mx-auto">
        <h1 className="font-semibold text-2xl">Description</h1>
        <p className="text-gray-600 my-2 md:py-5">{description}</p>
      </div>
    </div>
  );
};

export default InstallNowSection;
