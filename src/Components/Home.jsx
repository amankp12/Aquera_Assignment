import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Hero = () => {
  return (
    <section className="flex flex-col justify-around items-center gap-6 px-8 py-1 lg:flex-row h-screen">
      <div className="flex flex-col justify-center text-center lg:py-12 lg:text-left lg:w-1/2 xl:py-24">
        <p className="mb-4 text-1xl font-bold text-white md:text-3xl cartoonic">
        
          <h1>Star Wars</h1>
        </p>
        <h1 className="mb-4 font-bold text-white md:text-lg xl:text-xl cartoonic">
          Lightsabers, scoundrels, and heroes await. Become part of the Star
          Wars legend.
        </h1>
        <p className="mb-6 leading-relaxed text-white lg:w-4/5 xl:text-lg cartoonic">
          Unleash your inner explorer! Journey across the cosmos and discover
          the wonders of the Star Wars galaxy. From vibrant coral reefs to fiery
          volcanic landscapes, our platform brings you the most exotic and
          diverse planets this side of the Outer Rim.
        </p>

        <div className="flex flex-col gap-2.5 md:flex-row lg:justify-start">
          <Link
            to="/explore"
            className=" inline-block rounded-lg bg-white border-2 border-black px-6 py-3 text-center text-sm font-semibold text-black transition duration-100 md:text-base explore-button hover:text-white"
          >
            <span className="btn-text">Explore Now</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
