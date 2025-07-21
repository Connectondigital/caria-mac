"use client";
import * as React from "react";

export const ShowcaseCards: React.FC = () => {
    const showcaseImages = [
        "/caria-images/6eabf47e98944f9406400c5b71d6f2a3a366a560.png",
        "/caria-images/1d066bb45f14bdb3a6d992e0ea392862819a8378.png",
        "/caria-images/4a7476d91caf101c5b2dbc2b75842171dfa1ea29.png"
    ];

    return (
        <section className="flex absolute left-0 justify-center items-center w-full h-[518px] top-[2883px] max-md:flex-col max-md:h-auto max-md:top-[3200px] max-sm:top-[3200px]">
            {showcaseImages.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt="Card"
                    className="flex object-cover flex-col justify-end items-start border-r border-solid border-r-neutral-400 h-[518px] w-[480px] max-md:border-b max-md:border-solid max-md:border-b-neutral-400 max-md:border-r-[none] max-md:h-[300px] max-md:w-[90%] max-sm:w-full max-sm:h-[250px]"
                />
            ))}
        </section>
    );
};
