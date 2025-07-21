"use client";

import * as React from "react";

export function TeamPromises() {
    const teamMembers = [
        {
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8816fdb415b4cbaeee0686047271750127adbb0f?placeholderIfAbsent=true&apiKey=b936db41593d4a54a664e08e84e404b2",
            signature: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9b8c3aa2790e2e5a193d7d516561a08afb9d5ed?placeholderIfAbsent=true&apiKey=b936db41593d4a54a664e08e84e404b2",
            promises: [
                {
                    text: "As a part of Caria Estates, I will give all my energy and share my experiences to ",
                    highlight: "fulfill your desires."
                },
                {
                    text: "My duty is to find the best holiday house according to your needs and requirements, whether you are looking for a holiday house or permanent residence.",
                    highlight: ""
                }
            ]
        },
        {
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8816fdb415b4cbaeee0686047271750127adbb0f?placeholderIfAbsent=true&apiKey=b936db41593d4a54a664e08e84e404b2",
            signature: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9b8c3aa2790e2e5a193d7d516561a08afb9d5ed?placeholderIfAbsent=true&apiKey=b936db41593d4a54a664e08e84e404b2",
            promises: [
                {
                    text: "Since I was 18 years old I have been assisting travelers & home buyers and worked in different departments of customer service related positions.",
                    highlight: ""
                },
                {
                    text: "With all my enthusiasm, ",
                    highlight: "I am ready to assist you during your buying process and delivery of your dream house."
                }
            ]
        },
        {
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8816fdb415b4cbaeee0686047271750127adbb0f?placeholderIfAbsent=true&apiKey=b936db41593d4a54a664e08e84e404b2",
            signature: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9b8c3aa2790e2e5a193d7d516561a08afb9d5ed?placeholderIfAbsent=true&apiKey=b936db41593d4a54a664e08e84e404b2",
            promises: [
                {
                    text: "Proud to be a player of Caria Estates team, I am looking forward to meeting you.",
                    highlight: ""
                },
                {
                    text: "My personal goal is to ",
                    highlight: "achieve 100% customer satisfaction",
                    additionalText: ". I'll Find Your Ideal Home."
                }
            ]
        }
    ];

    return (
        <section className="flex flex-wrap gap-10 justify-center items-start mt-36 text-sm leading-6 text-center max-md:mt-10 max-md:max-w-full">
            {teamMembers.map((member, index) => (
                <article key={index} className="flex flex-col min-w-60 w-[357px]">
                    <img
                        src={member.image}
                        alt={`Team member ${index + 1}`}
                        className="object-contain self-center max-w-full aspect-square w-[292px]"
                    />
                    <div className="flex flex-col justify-center mt-10 w-full">
                        <div className="flex flex-col items-start w-full">
                            {member.promises.map((promise, promiseIndex) => (
                                <p key={promiseIndex} className={`text-zinc-800 ${promiseIndex > 0 ? 'mt-8' : ''}`}>
                                    {promise.text}
                                    {promise.highlight && (
                                        <span className="font-medium text-blue-800">
                      {promise.highlight}
                    </span>
                                    )}
                                    {promise.additionalText}
                                </p>
                            ))}
                        </div>
                        <img
                            src={member.signature}
                            alt="Signature"
                            className="object-contain self-center mt-9 w-44 max-w-full aspect-[4.18]"
                        />
                    </div>
                </article>
            ))}
        </section>
    );
}
