"use client";
import * as React from "react";

interface FeatureProps {
    icon: string;
    title: string;
    description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col gap-10 items-center w-[267px] max-sm:w-full">
            <img
                src={icon}
                alt={title}
                className="h-[120px] w-[120px]"
            />
            <div className="flex flex-col gap-4 items-center self-stretch">
                <h3 className="self-stretch text-2xl font-bold text-center text-neutral-200">
                    {title}
                </h3>
                <p className="self-stretch text-sm leading-6 text-center text-zinc-400">
                    {description}
                </p>
            </div>
        </div>
    );
};

export const FeaturesSection: React.FC = () => {
    const features = [
        {
            icon: "/caria-images/4d48925c8adebc3c3201fee635d73c66b8a59006.png",
            title: "Luxury Living",
            description: "Today, the definition of luxury homes goes well beyond simply \"big\" or \"expensive.\" Today's luxury is defined by personal preferences. It represents your lifestyle, your personal taste"
        },
        {
            icon: "/caria-images/01c7a13bbb7dad8b7dce4c55fa1cc5faad3f0faa.png",
            title: "Personalized Service",
            description: "Today, the definition of luxury homes goes well beyond simply \"big\" or \"expensive.\" Today's luxury is defined by personal preferences. It represents your lifestyle, your personal taste"
        },
        {
            icon: "/caria-images/5c30e3ebb7b63ce7a2aa7c11396f33082d75cc20.png",
            title: "Perfect Match",
            description: "Today, the definition of luxury homes goes well beyond simply \"big\" or \"expensive.\" Today's luxury is defined by personal preferences. It represents your lifestyle, your personal taste"
        }
    ];

    return (
        <section className="absolute left-0 w-full h-[409px] top-[1174px] max-sm:top-[1400px]">
            <div className="absolute top-0 left-0 w-full bg-blue-800 h-[409px]" />
            <div className="flex absolute gap-24 justify-center items-center h-[316px] left-[220px] top-[47px] w-[1001px] max-md:flex-col max-md:gap-12 max-md:px-0 max-md:py-12 max-md:h-auto max-md:left-[5%] max-md:w-[90%] max-sm:left-0 max-sm:flex-col max-sm:gap-8 max-sm:px-5 max-sm:py-8 max-sm:w-full">
                {features.map((feature, index) => (
                    <Feature
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </section>
    );
};
