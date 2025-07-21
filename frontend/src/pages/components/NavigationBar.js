"use client";
import * as React from "react";

export default function NavigationBar() {
    return (
        <header className="flex relative justify-between items-center px-24 py-0 w-full bg-stone-900 bg-opacity-40 h-[78px] max-md:px-5 max-md:py-0 max-sm:px-4 max-sm:py-0">
            <img
                src="/caria-images/534bca06b43a02a47f251cf175af35d3c747967d.png"
                alt=""
                className="w-44 h-8 max-sm:h-[22px] max-sm:w-[120px]"
            />

            <nav className="flex gap-8 items-center max-md:hidden">
                <a href="#" className="text-base text-center text-gray-200 cursor-pointer">
                    Home Page
                </a>
                <a href="#" className="text-base text-center text-gray-200 cursor-pointer">
                    Properties
                </a>
                <a href="#" className="text-base text-center text-gray-200 cursor-pointer">
                    Why Cyprus
                </a>
                <a href="#" className="text-base text-center text-gray-200 cursor-pointer">
                    How To Buy
                </a>
                <a href="#" className="text-base text-center text-gray-200 cursor-pointer">
                    Services
                </a>
                <a href="#" className="text-base text-center text-gray-200 cursor-pointer">
                    Viewing Trip
                </a>
                <a href="#" className="text-base text-center text-gray-200 cursor-pointer">
                    About Us
                </a>
                <a href="#" className="text-base text-center text-gray-200 cursor-pointer">
                    Contact Us
                </a>
            </nav>

            <div className="flex gap-2.5 items-center">
                <div className="relative w-7 h-[30px]">
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html:
                                    "<svg id=\"I21:212;14:133\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"heart-icon\"> <path d=\"M11.566 21.112C11.6927 21.2018 11.8442 21.25 11.9995 21.25C12.1548 21.25 12.3063 21.2018 12.433 21.112L12 20.5L12.434 21.112L12.442 21.106L12.463 21.091L12.543 21.033C12.6123 20.983 12.7107 20.91 12.838 20.814C14.324 19.6924 15.7267 18.4645 17.035 17.14C18.183 15.972 19.35 14.607 20.234 13.159C21.114 11.719 21.75 10.135 21.75 8.547C21.75 6.662 21.165 5.189 20.13 4.189C19.1 3.195 17.71 2.75 16.25 2.75C14.525 2.75 13.002 3.583 12 4.867C10.998 3.583 9.474 2.75 7.75 2.75C4.67 2.75 2.25 5.389 2.25 8.547C2.25 10.135 2.887 11.718 3.766 13.159C4.65 14.607 5.817 15.972 6.965 17.141C8.35981 18.5521 9.86161 19.8534 11.457 21.033L11.537 21.091L11.558 21.106L11.566 21.112Z\" fill=\"#E9E9E9\"></path> </svg>",
                            }}
                        />
                    </div>
                    <div className="absolute -right-2.5 top-3 h-[18px] w-[18px]">
                        <div>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        "<svg id=\"I21:212;14:135\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"counter-bg\"> <circle cx=\"9\" cy=\"9\" r=\"8.5\" fill=\"#D9D9D9\" fill-opacity=\"0.55\" stroke=\"white\"></circle> </svg>",
                                }}
                            />
                        </div>
                        <div className="absolute h-3 text-xs font-bold text-center text-white left-[3px] top-[3px] w-[11px]">
                            10
                        </div>
                    </div>
                </div>

                <div className="flex gap-2.5 items-center">
                    <div className="relative h-[34px] w-[34px]">
                        <div>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        "<svg id=\"I21:212;1:37\" width=\"34\" height=\"34\" viewBox=\"0 0 34 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"flag-bg\"> <circle cx=\"17\" cy=\"17\" r=\"17\" fill=\"#4C3A2F\"></circle> </svg>",
                                }}
                            />
                        </div>
                        <div>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        "<svg id=\"I21:212;1:38\" width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"flag-icon\"> <g clip-path=\"url(#clip0_29_76)\"> <path d=\"M11 21.5C16.799 21.5 21.5 16.799 21.5 11C21.5 5.20101 16.799 0.5 11 0.5C5.20101 0.5 0.5 5.20101 0.5 11C0.5 16.799 5.20101 21.5 11 21.5Z\" fill=\"#F0F0F0\"></path> <path d=\"M20.8469 14.6522C21.269 13.5147 21.5 12.2844 21.5 11C21.5 9.71564 21.269 8.48533 20.8469 7.34785H1.15309C0.731041 8.48533 0.5 9.71564 0.5 11C0.5 12.2844 0.731041 13.5147 1.15309 14.6522L11 15.5652L20.8469 14.6522Z\" fill=\"#0052B4\"></path> <path d=\"M11 21.5C15.5146 21.5 19.3633 18.6506 20.8469 14.6522H1.15308C2.63665 18.6506 6.48535 21.5 11 21.5Z\" fill=\"#D80027\"></path> </g> <defs> <clipPath id=\"clip0_29_76\"> <rect width=\"21\" height=\"21\" fill=\"white\" transform=\"translate(0.5 0.5)\"></rect> </clipPath> </defs> </svg>",
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html:
                                    "<svg id=\"I21:212;1:39\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"dropdown-arrow\"> <path d=\"M17.29 9.31C17.1975 9.2173 17.0876 9.14375 16.9666 9.09357C16.8456 9.04339 16.7159 9.01756 16.585 9.01756C16.454 9.01756 16.3243 9.04339 16.2034 9.09357C16.0824 9.14375 15.9725 9.2173 15.88 9.31L12 13.19L8.11998 9.31C7.933 9.12302 7.67941 9.01798 7.41498 9.01798C7.15055 9.01798 6.89695 9.12302 6.70998 9.31C6.523 9.49698 6.41796 9.75057 6.41796 10.015C6.41796 10.2794 6.523 10.533 6.70998 10.72L11.3 15.31C11.3925 15.4027 11.5024 15.4763 11.6234 15.5264C11.7443 15.5766 11.874 15.6024 12.005 15.6024C12.1359 15.6024 12.2656 15.5766 12.3866 15.5264C12.5076 15.4763 12.6175 15.4027 12.71 15.31L17.3 10.72C17.68 10.34 17.68 9.7 17.29 9.31Z\" fill=\"#E3E3E3\"></path> </svg>",
                            }}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
