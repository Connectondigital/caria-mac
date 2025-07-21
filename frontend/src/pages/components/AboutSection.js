"use client";
import * as React from "react";

export const AboutSection: React.FC = () => {
    return (
        <section className="flex absolute gap-16 items-start left-[98px] top-[1705px] w-[1244px] max-md:flex-col max-md:gap-10 max-md:left-[5%] max-md:w-[90%] max-sm:gap-8 max-sm:top-[1900px]">
            <div className="flex flex-col gap-16 items-start w-[504px] max-md:w-full max-sm:gap-8">
                <header className="flex flex-col gap-4 items-start w-[434px]">
                    <h2 className="self-stretch text-3xl font-bold text-center text-zinc-900 max-sm:text-2xl">
                        Your Trusted Property Partner
                    </h2>
                    <p className="self-stretch text-xl text-blue-800 max-sm:text-base">
                        Expertise across Turkey, Cyprus, and Italy
                    </p>
                </header>
                <p className="self-stretch text-sm leading-6 text-stone-500">
                    Making a real estate investment is more than just buying a property—it's about building a future, creating memories, and securing financial peace of mind. Whether you're searching for a holiday retreat, a permanent home, or a smart investment opportunity, we understand that this journey is deeply personal and often life-changing. With years of experience across Turkey, Cyprus, and Italy, our team is here to support you with local knowledge, honest advice, and complete transparency. From your first inquiry to the final signature—and beyond—we're by your side, helping you make confident decisions with clarity and care.
                </p>
            </div>
            <img
                src="/caria-images/4f1ba9629b6a684cc25dc069c86ce648fb478a78.png"
                alt="img"
                className="object-cover h-[397px] w-[579px] max-md:w-full max-sm:h-[250px]"
            />
        </section>
    );
};
