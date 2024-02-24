import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import usePlanetData from "./PlanetData";
import PlanetCard from "./PlanetCard";
import Loading from "./Loading";

const Planets = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const data = usePlanetData(pageNumber);
  const planetData = data?.results;

  const handlePageUp = () => {
    pageNumber < 6 ? setPageNumber(pageNumber + 1) : setPageNumber(1);
  };
  const handlePageDown = () => {
    pageNumber > 1 ? setPageNumber(pageNumber - 1) : setPageNumber(6);
  };

  if (!data) {
    return <Loading />;
  }

  return (
    <>
      <div
        className="mb-10 md:mb-0 flex justify-center items-center pb-5 pt-6 gap-9"
        style={{
          background:
            "radial-gradient(circle, rgb(106 106 161), rgb(197, 197, 246)",
        }}
      >
        <h2 className="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl">
          Welcome to The Tour
        </h2>
      </div>
      <div className="p-8 pt-0 mt-4 grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-5 xl:gap-8 ">
        {planetData.map((curr, index) => (
          <PlanetCard key={index} data={curr} />
        ))}
      </div>
      <div
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)",
        }}
        className="flex justify-center pb-5 pt-6 gap-9 items-center sticky top-16 z-10 text-white"
      >
        <button
          className="bg-white border-2 border-black text-black p-2 rounded-full hover:bg-yellow-300 transition duration-300"
          onClick={handlePageDown}
        >
          <IoIosArrowBack size={25} />
        </button>
        <h1 className="text-3xl text-white font-bold">{pageNumber}</h1>
        <button
          className="bg-white border-2 border-black text-black p-2 rounded-full hover:bg-yellow-300 transition duration-300"
          onClick={handlePageUp}
        >
          <IoIosArrowForward size={25} />
        </button>
      </div>
    </>
  );
};

export default Planets;
