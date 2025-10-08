import React, { useState } from "react";
import { IconBase } from "react-icons";
import { IoIosSearch } from "react-icons/io";
import useHook from "../Hook/useHook";
import Card from "../Components/Card";

const AllApps = () => {
  const { products, loading, error } = useHook();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchProduct = term? products.filter((product) =>
        product.title.toLocaleLowerCase().includes(term)
      )
    : products;
    console.log(searchProduct)
    
  return (
    <div className="container mx-auto">
      <div className="text-center my-10 ">
        <h1 className="font-bold text-5xl mb-5"> Our All Applications</h1>
        <p className="text-gray-600">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between mx-2">
        <h1>
          (16) <span className="text-sm text-gray-600">Apps Found</span>
        </h1>
        <div>
          <IoIosSearch className="absolute md:top-[246px] ml-2 md:mr-0.5 text-[18px] md:text-[20px]  top-[309px]" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="md:px-7 text-center py-1 shadow"
            type="search"
            placeholder="Search Apps"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-4 container mx-auto md:gap-12 my-10">
        {searchProduct.map((data) => (
          <Card data={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllApps;
