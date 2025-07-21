"use client";
import * as React from "react";
import  PriceRangeSlider  from "./PriceRangeSlider";

export const SearchSection: React.FC = () => {
    return (
        <section className="flex absolute flex-col gap-2.5 items-center left-[204px] top-[371px] w-[1032px] max-md:left-[5%] max-md:w-[90%] max-sm:left-[2.5%] max-sm:top-[300px] max-sm:w-[95%]">
            {/* Location buttons */}
            <div className="flex gap-3 items-center max-sm:flex-wrap max-sm:gap-2">
                {["Alanya", "Kyrenia", "Lake Iseo", "Girne", "Yenagra"].map((city) => (
                    <div
                        key={city}
                        className="flex justify-center items-center px-4 py-2.5 border border-blue-800 border-solid backdrop-blur-[5px] bg-gray-200 bg-opacity-50 rounded-[50px]"
                    >
                        <div className="text-sm text-blue-800">{city}</div>
                    </div>
                ))}
            </div>

            {/* Search form */}
            <div className="relative w-full rounded-3xl border border-solid backdrop-blur-[25px] bg-gray-200 bg-opacity-50 border-stone-300 h-[104px] max-sm:p-5 max-sm:h-auto">
                {/* Search button */}
                <button className="flex absolute justify-center items-center px-16 pt-3.5 pb-3.5 bg-blue-800 rounded-xl h-[51px] right-[30px] top-[26px] w-[220px] max-sm:relative max-sm:top-auto max-sm:right-auto max-sm:mt-5 max-sm:w-full">
                    <div className="flex gap-2 justify-center items-center">
                        <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                            <path d="M9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C2.99933 7.684 3.62867 6.14667 4.888 4.888C6.14733 3.62933 7.68467 3 9.5 3C11.3153 3 12.853 3.62933 14.113 4.888C15.373 6.14667 16.002 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.3 18.9C20.4833 19.0833 20.575 19.3167 20.575 19.6C20.575 19.8833 20.4833 20.1167 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5633 11.8133 14.0007 10.7507 14 9.5C13.9993 8.24933 13.562 7.187 12.688 6.313C11.814 5.439 10.7513 5.00133 9.5 5C8.24867 4.99867 7.18633 5.43633 6.313 6.313C5.43967 7.18967 5.002 8.252 5 9.5C4.998 10.748 5.43567 11.8107 6.313 12.688C7.19033 13.5653 8.25267 14.0027 9.5 14Z" />
                        </svg>
                        <span className="text-base text-white">Search</span>
                    </div>
                </button>

                {/* Form inputs */}
                <div className="flex absolute gap-6 items-start left-[30px] top-[17px] max-sm:flex-col max-sm:gap-4 max-sm:w-full max-sm:h-auto w-[684px]">
                    {/* Country */}
                    <div className="flex flex-col gap-1 w-[140px] max-sm:w-full">
                        <label className="text-xs text-white">Country</label>
                        <div className="relative px-3.5 pt-3.5 pb-3 rounded-md bg-zinc-100">
                            <select className="w-full text-sm text-zinc-500 bg-transparent border-none outline-none appearance-none">
                                <option value="turkey">Turkey</option>
                                <option value="cyprus">Cyprus</option>
                                <option value="italy">Italy</option>
                            </select>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-px h-[74px] bg-gray-300 opacity-10" />

                    {/* Property Type */}
                    <div className="flex flex-col gap-1 w-[140px] max-sm:w-full">
                        <label className="text-xs text-white">Property Type</label>
                        <div className="relative px-3.5 pt-3.5 pb-3 rounded-md bg-zinc-100">
                            <select className="w-full text-sm text-zinc-500 bg-transparent border-none outline-none appearance-none">
                                <option value="apartments">Apartments</option>
                                <option value="villas">Villas</option>
                                <option value="houses">Houses</option>
                                <option value="commercial">Commercial</option>
                            </select>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-px h-[74px] bg-gray-300 opacity-10" />

                    {/* Rooms */}
                    <div className="flex flex-col gap-1 w-[140px] max-sm:w-full">
                        <label className="text-xs text-white">Rooms</label>
                        <div className="relative px-3.5 pt-3.5 pb-3 rounded-md bg-zinc-100">
                            <select className="w-full text-sm text-zinc-500 bg-transparent border-none outline-none appearance-none">
                                <option value="studio">Studio</option>
                                <option value="1-bedroom">1 Bedroom</option>
                                <option value="2-bedroom">2 Bedroom</option>
                                <option value="3-bedroom">3 Bedroom</option>
                                <option value="4-bedroom">4+ Bedroom</option>
                            </select>
                        </div>
                    </div>

                    <PriceRangeSlider />
                </div>
            </div>
        </section>
    );
};
