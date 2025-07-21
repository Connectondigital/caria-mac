"use client";
import * as React from "react";

interface TeamMemberProps {
    image: string;
    quote1: string;
    quote2: string;
    nameImage: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, quote1, quote2, nameImage }) => {
    return (
        <div className="flex flex-col gap-10 items-center w-[357px] max-sm:gap-5 max-sm:w-full">
            <img
                src={image}
                alt="Team member"
                className="object-cover rounded-full h-[292px] w-[292px] max-sm:h-[200px] max-sm:w-[200px]"
            />
            <div className="flex flex-col gap-9 justify-center items-center self-stretch">
                <div className="flex flex-col gap-8 items-start self-stretch">
                    <p className="text-sm leading-6 text-center text-zinc-800 w-[332px]">
                        {quote1}
                    </p>
                    <p className="text-sm leading-6 text-center text-zinc-800 w-[332px]">
                        {quote2}
                    </p>
                </div>
                <img
                    src={nameImage}
                    alt=""
                    className="w-44 h-[42px]"
                />
            </div>
        </div>
    );
};

export const TeamSection: React.FC = () => {
    const teamMembers = [
        {
            image: "/caria-images/1291105363a47ea9a9489a0442985cbc2958398c.png",
            quote1: "As a part of Caria Estates, I will give all my energy and share my experiences to fulfill your desires.",
            quote2: "My duty is to find the best holiday house according to your needs and requirements, whether you are looking for a holiday house or permanent residence.",
            nameImage: "/caria-images/bbbaedd8065cd489c274b1997fc67a0b1eb9ff63.png"
        },
        {
            image: "/caria-images/f3da6994e8dfec4363419cfe45f6863e3073f632.png",
            quote1: "Since I was 18 years old I have been assisting travelers & home buyers and worked in different departments of customer service related positions.",
            quote2: "With all my enthusiasm, I am ready to assist you during your buying process and delivery of your dream house.",
            nameImage: "/caria-images/f06d13c796e70b52f707db7c1afeee053505441a.png"
        },
        {
            image: "/caria-images/618c5e6022194f6dbc4cf55ee006ab30f9f2f7ed.png",
            quote1: "Proud to be a player of Caria Estates team, I am looking forward to meeting you.",
            quote2: "My personal goal is to achieve 100% customer satisfaction. I'll Find Your Ideal Home.",
            nameImage: "/caria-images/d1583499d2b287733f43420788c34743768fd4f3.png"
        }
    ];

    return (
        <section className="flex absolute gap-16 justify-center items-start left-[123px] top-[2218px] w-[1195px] max-md:flex-col max-md:gap-10 max-md:left-[5%] max-md:top-[2600px] max-md:w-[90%] max-sm:gap-8 max-sm:top-[2500px]">
            {teamMembers.map((member, index) => (
                <TeamMember
                    key={index}
                    image={member.image}
                    quote1={member.quote1}
                    quote2={member.quote2}
                    nameImage={member.nameImage}
                />
            ))}
        </section>
    );
};
