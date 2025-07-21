"use client";
import * as React from "react";
import { Footer } from "./Footer";

export const ContactSection = () => {
    return (
        <section className="relative">
            <div className="flex absolute flex-col gap-4 items-center left-[418px] top-[3583px] w-[605px] max-md:left-[5%] max-md:top-[3800px] max-md:w-[90%] max-sm:top-[4000px]">
                <h2 className="self-stretch text-3xl font-bold text-center text-zinc-900 max-sm:text-2xl">
                    Let Us Guide You Home
                </h2>
                <p className="self-stretch text-base text-center text-neutral-600">
                    Fill out the form and our expert team will reach out to understand your needs and help you take the next step with confidence.
                </p>
            </div>

            <img
                src="/caria-images/afc38785e63537018606598491fe2a633fdfbf38.png"
                alt="Rectangle 17"
                className="object-cover absolute h-[432px] left-[98px] top-[3956px] w-[1244px] max-md:left-[5%] max-md:top-[4000px] max-md:w-[90%] max-sm:h-[300px] max-sm:top-[4200px]"
            />

            <form className="flex absolute justify-center items-center pt-6 pr-20 pb-5 pl-20 rounded-3xl border border-solid backdrop-blur-[25px] bg-gray-200 bg-opacity-50 border-stone-300 left-[418px] top-[3731px] w-[607px] max-md:p-5 max-md:left-[5%] max-md:top-[3950px] max-md:w-[90%] max-sm:p-4 max-sm:top-[4150px]">
                <div className="flex flex-col gap-4 items-center w-[436px]">
                    <div className="flex flex-col gap-9 justify-center items-center self-stretch">
                        <div className="flex flex-wrap gap-6 content-start items-start self-stretch max-sm:flex-col max-sm:gap-4">
                            <div className="flex flex-col gap-1 items-start h-[59px] w-[191px] max-sm:w-full">
                                <div className="flex gap-2.5 justify-center items-center px-2.5 py-0">
                                    <label className="text-xs text-neutral-600">Name</label>
                                </div>
                                <div className="flex items-center self-stretch px-3.5 pt-3.5 pb-3 bg-gray-200 rounded-md flex-[1_0_0]">
                                    <input
                                        type="text"
                                        placeholder="Alp"
                                        className="text-sm text-zinc-500 bg-transparent border-none outline-none w-full"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 items-start h-[59px] w-[191px] max-sm:w-full">
                                <div className="flex gap-2.5 justify-center items-center px-2.5 py-0">
                                    <label className="text-xs text-neutral-600">Surname</label>
                                </div>
                                <div className="flex items-center self-stretch px-3.5 pt-3.5 pb-3 bg-gray-200 rounded-md flex-[1_0_0]">
                                    <input
                                        type="text"
                                        placeholder="Karasoy"
                                        className="text-sm text-zinc-500 bg-transparent border-none outline-none w-full"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 items-start h-[59px] w-[191px] max-sm:w-full">
                                <div className="flex gap-2.5 justify-center items-center px-2.5 py-0">
                                    <label className="text-xs text-neutral-600">Phone Number</label>
                                </div>
                                <div className="flex items-center self-stretch px-3.5 pt-3.5 pb-3 bg-gray-200 rounded-md flex-[1_0_0]">
                                    <input
                                        type="tel"
                                        placeholder="+90(___)-___-__"
                                        className="text-sm text-zinc-500 bg-transparent border-none outline-none w-full"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 items-start h-[59px] w-[191px] max-sm:w-full">
                                <div className="flex gap-2.5 justify-center items-center px-2.5 py-0">
                                    <label className="text-xs text-neutral-600">Mail Adress</label>
                                </div>
                                <div className="flex items-center self-stretch px-3.5 pt-3.5 pb-3 bg-gray-200 rounded-md flex-[1_0_0]">
                                    <input
                                        type="email"
                                        placeholder="caria@mail.com"
                                        className="text-sm text-zinc-500 bg-transparent border-none outline-none w-full"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 items-start self-stretch h-[180px]">
                            <div className="flex gap-2.5 justify-center items-center px-2.5 py-0">
                                <label className="text-xs text-neutral-600">
                                    Tell us a little bit about what you're looking for
                                </label>
                            </div>
                            <div className="flex items-start self-stretch px-3.5 pt-3.5 pb-32 bg-gray-200 rounded-md flex-[1_0_0]">
                <textarea
                    placeholder="I'm looking for....."
                    className="text-sm text-zinc-500 bg-transparent border-none outline-none w-full resize-none"
                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2.5 items-center w-full max-w-xs">
                        <p className="text-xs text-neutral-600 text-center mt-2">
                            Please enter the spam control number below in the box
                        </p>
                        <div className="flex gap-2.5 items-end w-full max-sm:flex-col max-sm:gap-4 justify-center">
                            <div className="bg-zinc-300 h-[59px] w-[123px] rounded-md flex items-center justify-center" />
                            <div className="flex flex-col gap-1 items-start w-[123px] max-sm:w-full">
                                <div className="flex gap-2.5 items-center px-2.5 py-0">
                                    <label className="text-xs text-neutral-600">Verify Code</label>
                                </div>
                                <div className="flex items-center w-full px-3.5 pt-3.5 pb-3 bg-gray-200 rounded-md h-[59px]">
                                    <input
                                        type="text"
                                        placeholder="214251"
                                        className="text-sm text-zinc-500 bg-transparent border-none outline-none w-full h-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="flex justify-center items-center px-0 pt-3.5 pb-3.5 bg-blue-800 rounded-xl w-[321px]"
                    >
                        <div className="flex gap-2 justify-center items-center">
                            <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.54 2.32295C21.556 1.96795 22.532 2.94395 22.177 3.95995L16.252 20.89C15.867 21.988 14.337 22.05 13.865 20.987L11.006 14.555L15.03 10.53C15.1625 10.3878 15.2346 10.1997 15.2312 10.0054C15.2277 9.81113 15.149 9.62574 15.0116 9.48833C14.8742 9.35092 14.6888 9.27221 14.4945 9.26878C14.3002 9.26535 14.1122 9.33747 13.97 9.46995L9.94498 13.494L3.51298 10.635C2.44998 10.162 2.51298 8.63295 3.60998 8.24795L20.54 2.32295Z" fill="white"/>
                            </svg>
                            <span className="text-base text-white">Send</span>
                        </div>
                    </button>
                </div>
            </form>
       
        </section>
    );
};
