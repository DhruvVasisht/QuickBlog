import React from "react";
import { assets } from "../assets/assets";
const Header = () => {
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20">
        <div
          className="inline-flex items-center justify-center gap-4 bg-primary/10 border border-primary/40 
            px-6 py-1.5 text-sm mb-4 rounded-full text-primary"
        >
          <p>New AI Feature Integrated</p>
          <img src={assets.star_icon} className="w-2.5" alt="cross" />
        </div>
        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700">
          Your Own <span className="text-primary"> Blogging</span>
          <br /> Platform.
        </h1>
        <p className="text-gray-500 my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs">
          This is your space to think out loud, to share what matters, and to
          write without filters. Whether <br />
          it's one word or a thousand, your story starts right here.
        </p>

        <form
          className="flex items-center justify-between max-w-lg max-sm:scale-75 mx-auto border
             border-gray-300 overflow-hidden bg-white"
        >
          <input
            type="text"
            placeholder="Search for blogs"
            required
            className="w-full pl-4 outline-none"
          />
          <button
            type="submit"
            className="bg-primary text-white px-8 py-2 rounded m-1.5 hover:scale-105 transition-all cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>
      <img
        className="absolute -top-50 -z-10 opacity-50"
        src={assets.gradientBackground}
        alt="header"
      />
    </div>
  );
};

export default Header;
