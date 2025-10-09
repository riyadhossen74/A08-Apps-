import React, { useEffect, useState } from "react";
import { FaArrowDown, FaStarHalf } from "react-icons/fa";

const InstallApp = () => {
  const [install, setInstall] = useState([]);
  const [sortInstall, setSortInstall] = useState("none");
  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("install"));
    if (saveList) setInstall(saveList);
  }, []);
  const sortedItem = (() => {
    if (sortInstall === "app-asc") {
      return [...install].sort((a, b) => a.size - b.size);
    } else if (sortInstall === "app-desc") {
      return [...install].sort((a, b) => b.size - a.size);
    } else {
      return install;
    }
  })();

  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem("install"));
    let updatedList = existingList.filter((p) => p.id !== id);
    setInstall((prev) => prev.filter((p) => p.id !== id));
    localStorage.setItem("install", JSON.stringify(updatedList));
  };

  return (
    <div className="bg-[#F5F5F5]">
      <div className="container mx-auto py-10 ">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-5">Your Installed Apps</h1>
          <p className="text-gray-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div>
          <div className="flex justify-between">
            <h1 className="font-semibold">{sortedItem.length} Apps Found</h1>
            <label className="border-1 border-gray-700 ">
              <select
                value={sortInstall}
                onChange={(e) => setSortInstall(e.target.value)}
              >
                <option value="none">Sort by size</option>
                <option value="app-asc">Low to High</option>
                <option value="app-desc">High to Low</option>
              </select>
            </label>
          </div>
        </div>

        {sortedItem.map((item) => (
          <div className="flex justify-between items-center bg-white my-5 px-5 py-2 shadow">
            <div className="flex gap-6 items-center ">
              <img src={item.image} alt="" />
              <div>
                <h1 className="font-semibold">{item.title}</h1>
                <div className="flex gap-6 my-2">
                  <div className="flex items-center gap-1">
                    <FaArrowDown />
                    <span>{item.downloads}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaStarHalf />
                    <span>{item.ratingAvg}</span>
                  </div>
                  <div>
                    <span>{item.size} Mb</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-[#00D390] p-2 rounded-md text-white hover:bg-amber-700"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstallApp;
