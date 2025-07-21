"use client";
import * as React from "react";
import PriceRangeSlider from "./PriceRangeSlider";

export default function SearchForm() {
    return (
        <section className="flex absolute left-2/4 gap-8 items-center px-8 py-0 rounded-3xl border border-solid -translate-x-2/4 backdrop-blur-[25px] bg-gray-200 bg-opacity-50 border-stone-300 h-[104px] top-[98px] w-[1032px] max-md:p-5 max-md:max-w-[800px] max-md:w-[90%] max-sm:top-20 max-sm:flex-col max-sm:gap-4 max-sm:px-4 max-sm:py-5 max-sm:h-auto max-sm:w-[95%]">
            <div className="flex flex-1 gap-2.5 items-center max-md:flex-wrap max-md:gap-4 max-sm:flex-col max-sm:gap-3 max-sm:w-full">
                <div className="flex flex-col gap-1 w-[140px] max-sm:w-full">
                    <label className="px-2.5 py-0 text-xs text-white">
                        Country
                    </label>
                    <div className="flex relative justify-between items-center p-3.5 rounded-md bg-zinc-100">
            <span className="text-sm text-zinc-500">
              Turkey
            </span>
                        <div>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        "<svg id=\"I21:316;4:31\" width=\"17\" height=\"17\" viewBox=\"0 0 17 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"dropdown-icon\"> <path d=\"M12.2471 6.59458C12.1816 6.52892 12.1038 6.47682 12.0181 6.44128C11.9324 6.40573 11.8405 6.38744 11.7477 6.38744C11.655 6.38744 11.5631 6.40573 11.4774 6.44128C11.3917 6.47682 11.3139 6.52892 11.2484 6.59458L8.50004 9.34292L5.7517 6.59458C5.61926 6.46214 5.43963 6.38774 5.25233 6.38774C5.06503 6.38774 4.88539 6.46214 4.75295 6.59458C4.62051 6.72703 4.5461 6.90666 4.5461 7.09396C4.5461 7.28126 4.62051 7.46089 4.75295 7.59333L8.0042 10.8446C8.06973 10.9102 8.14757 10.9623 8.23326 10.9979C8.31895 11.0334 8.41081 11.0517 8.50358 11.0517C8.59635 11.0517 8.6882 11.0334 8.77389 10.9979C8.85958 10.9623 8.93742 10.9102 9.00295 10.8446L12.2542 7.59333C12.5234 7.32417 12.5234 6.87083 12.2471 6.59458Z\" fill=\"black\"></path> </svg>",
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html:
                                "<svg id=\"21:317\" width=\"2\" height=\"74\" viewBox=\"0 0 2 74\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"divider\" style=\"width: 1px; height: 73.5px; stroke: rgba(97, 97, 97, 0.10)\"> <path d=\"M1 0V73.5\" stroke=\"#616161\" stroke-opacity=\"0.1\"></path> </svg>",
                        }}
                    />
                </div>

                <div className="flex flex-col gap-1 w-[140px] max-sm:w-full">
                    <label className="px-2.5 py-0 text-xs text-white">
                        Property Type
                    </label>
                    <div className="flex relative justify-between items-center p-3.5 rounded-md bg-zinc-100">
            <span className="text-sm text-zinc-500">
              Apartments
            </span>
                        <div>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        "<svg id=\"I21:318;4:31\" width=\"17\" height=\"17\" viewBox=\"0 0 17 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"dropdown-icon\"> <path d=\"M12.247 6.59458C12.1815 6.52892 12.1036 6.47682 12.0179 6.44128C11.9322 6.40573 11.8404 6.38744 11.7476 6.38744C11.6549 6.38744 11.563 6.40573 11.4773 6.44128C11.3916 6.47682 11.3138 6.52892 11.2482 6.59458L8.49991 9.34292L5.75158 6.59458C5.61914 6.46214 5.43951 6.38774 5.25221 6.38774C5.0649 6.38774 4.88527 6.46214 4.75283 6.59458C4.62039 6.72703 4.54598 6.90666 4.54598 7.09396C4.54598 7.28126 4.62039 7.46089 4.75283 7.59333L8.00408 10.8446C8.06961 10.9102 8.14745 10.9623 8.23314 10.9979C8.31883 11.0334 8.41069 11.0517 8.50345 11.0517C8.59622 11.0517 8.68808 11.0334 8.77377 10.9979C8.85946 10.9623 8.9373 10.9102 9.00283 10.8446L12.2541 7.59333C12.5232 7.32417 12.5232 6.87083 12.247 6.59458Z\" fill=\"black\"></path> </svg>",
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html:
                                "<svg id=\"21:319\" width=\"2\" height=\"74\" viewBox=\"0 0 2 74\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"divider\" style=\"width: 1px; height: 73.5px; stroke: rgba(97, 97, 97, 0.10)\"> <path d=\"M1 0V73.5\" stroke=\"#616161\" stroke-opacity=\"0.1\"></path> </svg>",
                        }}
                    />
                </div>

                <div className="flex flex-col gap-1 w-[140px] max-sm:w-full">
                    <label className="px-2.5 py-0 text-xs text-white">
                        Rooms
                    </label>
                    <div className="flex relative justify-between items-center p-3.5 rounded-md bg-zinc-100">
            <span className="text-sm text-zinc-500">
              Studio
            </span>
                        <div>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        "<svg id=\"I21:320;4:31\" width=\"17\" height=\"17\" viewBox=\"0 0 17 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"dropdown-icon\"> <path d=\"M12.247 6.59458C12.1815 6.52892 12.1036 6.47682 12.0179 6.44128C11.9322 6.40573 11.8404 6.38744 11.7476 6.38744C11.6549 6.38744 11.563 6.40573 11.4773 6.44128C11.3916 6.47682 11.3138 6.52892 11.2482 6.59458L8.49991 9.34292L5.75158 6.59458C5.61914 6.46214 5.43951 6.38774 5.25221 6.38774C5.0649 6.38774 4.88527 6.46214 4.75283 6.59458C4.62039 6.72703 4.54598 6.90666 4.54598 7.09396C4.54598 7.28126 4.62039 7.46089 4.75283 7.59333L8.00408 10.8446C8.06961 10.9102 8.14745 10.9623 8.23314 10.9979C8.31883 11.0334 8.41069 11.0517 8.50345 11.0517C8.59622 11.0517 8.68808 11.0334 8.77377 10.9979C8.85946 10.9623 8.9373 10.9102 9.00283 10.8446L12.2541 7.59333C12.5232 7.32417 12.5232 6.87083 12.247 6.59458Z\" fill=\"black\"></path> </svg>",
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html:
                                "<svg id=\"21:321\" width=\"2\" height=\"74\" viewBox=\"0 0 2 74\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"divider\" style=\"width: 1px; height: 73.5px; stroke: rgba(97, 97, 97, 0.10)\"> <path d=\"M1 0V73.5\" stroke=\"#616161\" stroke-opacity=\"0.1\"></path> </svg>",
                        }}
                    />
                </div>

                <PriceRangeSlider />
            </div>

            <button className="flex justify-center items-center px-16 py-3.5 bg-blue-800 rounded-xl h-[51px] w-[220px] max-sm:px-5 max-sm:py-3.5 max-sm:w-full">
                <div className="flex gap-2 justify-center items-center">
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html:
                                    "<svg id=\"21:312\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"search-icon\"> <path d=\"M9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C2.99933 7.684 3.62867 6.14667 4.888 4.888C6.14733 3.62933 7.68467 3 9.5 3C11.3153 3 12.853 3.62933 14.113 4.888C15.373 6.14667 16.002 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.3 18.9C20.4833 19.0833 20.575 19.3167 20.575 19.6C20.575 19.8833 20.4833 20.1167 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5633 11.8133 14.0007 10.7507 14 9.5C13.9993 8.24933 13.562 7.187 12.688 6.313C11.814 5.439 10.7513 5.00133 9.5 5C8.24867 4.99867 7.18633 5.43633 6.313 6.313C5.43967 7.18967 5.002 8.252 5 9.5C4.998 10.748 5.43567 11.8107 6.313 12.688C7.19033 13.5653 8.25267 14.0027 9.5 14Z\" fill=\"white\"></path> </svg>",
                            }}
                        />
                    </div>
                    <span className="text-base text-white">
            Search
          </span>
                </div>
            </button>
        </section>
    );
}
