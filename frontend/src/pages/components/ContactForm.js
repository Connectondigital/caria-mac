"use client";

import * as React from "react";

export function ContactForm() {
    return (
        <section className="flex relative flex-col items-center px-20 pb-24 mt-72 w-full font-medium max-w-[1244px] min-h-[432px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cadb7e882d6226de07cc3f5ecb782caf2156816e?placeholderIfAbsent=true&apiKey=b936db41593d4a54a664e08e84e404b2"
                alt="Contact background"
                className="object-cover absolute inset-0 size-full"
            />
            <form className="flex overflow-hidden relative z-10 flex-col justify-center px-20 py-6 mt-0 max-w-full rounded-3xl border border-solid bg-gray-200 bg-opacity-50 border-stone-300 w-[607px] max-md:px-5 max-md:mt-0">
                <div className="flex flex-col items-center max-md:max-w-full">
                    <div className="flex flex-col justify-center self-stretch w-full max-md:max-w-full">
                        <div className="flex flex-wrap gap-6 items-start w-full max-md:max-w-full">
                            <div className="flex flex-col grow shrink whitespace-nowrap min-h-[59px] w-[153px]">
                                <label className="gap-2.5 self-start px-2.5 text-xs text-neutral-600">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    defaultValue="Alp"
                                    className="overflow-hidden flex-1 p-3.5 w-full text-sm bg-gray-200 rounded-md text-zinc-500 max-md:pr-5"
                                />
                            </div>
                            <div className="flex flex-col grow shrink whitespace-nowrap min-h-[59px] w-[153px]">
                                <label className="gap-2.5 self-start px-2.5 text-xs text-neutral-600">
                                    Surname
                                </label>
                                <input
                                    type="text"
                                    defaultValue="Karasoy"
                                    className="overflow-hidden flex-1 p-3.5 w-full text-sm bg-gray-200 rounded-md text-zinc-500 max-md:pr-5"
                                />
                            </div>
                            <div className="flex flex-col grow shrink min-h-[59px] w-[153px]">
                                <label className="gap-2.5 self-start px-2.5 text-xs text-neutral-600">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    defaultValue="+90(___)-___-__"
                                    className="overflow-hidden flex-1 p-3.5 w-full text-sm whitespace-nowrap bg-gray-200 rounded-md text-zinc-500 max-md:pr-5"
                                />
                            </div>
                            <div className="flex flex-col grow shrink min-h-[59px] w-[153px]">
                                <label className="gap-2.5 self-start px-2.5 text-xs text-neutral-600">
                                    Mail Address
                                </label>
                                <input
                                    type="email"
                                    defaultValue="caria@mail.com"
                                    className="overflow-hidden flex-1 p-3.5 w-full text-sm whitespace-nowrap bg-gray-200 rounded-md text-zinc-500 max-md:pr-5"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col mt-9 w-full min-h-[180px] max-md:max-w-full">
                            <label className="gap-2.5 self-start px-2.5 text-xs text-neutral-600">
                                Tell us a little bit about what you're looking for
                            </label>
                            <textarea
                                placeholder="I'm looking for....."
                                className="overflow-hidden flex-1 px-3.5 pt-3.5 pb-28 w-full text-sm bg-gray-200 rounded-md text-zinc-500 max-md:pr-5 max-md:pb-28 max-md:max-w-full resize-none"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mt-4 max-w-full w-[270px]">
                        <label className="text-xs text-neutral-600">
                            Please enter the spam control number below in the box
                        </label>
                        <div className="flex gap-2.5 items-end self-center mt-2.5">
                            <div className="flex shrink-0 bg-zinc-300 h-[49px] w-[95px]" />
                            <div className="flex flex-col min-h-[59px] w-[123px]">
                                <label className="gap-2.5 self-start px-2.5 text-xs text-neutral-600">
                                    Verify Code
                                </label>
                                <input
                                    type="text"
                                    defaultValue="214251"
                                    className="overflow-hidden flex-1 p-3.5 w-full text-sm whitespace-nowrap bg-gray-200 rounded-md text-zinc-500 max-md:pr-5"
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="flex overflow-hidden flex-col justify-center items-center px-16 py-3.5 mt-4 max-w-full text-base text-white whitespace-nowrap bg-blue-800 rounded-xl w-[321px] max-md:px-5 hover:bg-blue-700 transition-colors"
                    >
                        <div className="flex gap-2 justify-center items-center">
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b61902605381bdc86afb83ef1f95bb38c4fd4fa?placeholderIfAbsent=true&apiKey=b936db41593d4a54a664e08e84e404b2"
                                alt="Send icon"
                                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                            />
                            <span className="self-stretch my-auto">Send</span>
                        </div>
                    </button>
                </div>
            </form>
        </section>
    );
}
