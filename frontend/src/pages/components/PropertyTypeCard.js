"use client";

import * as React from "react";

export function PropertyTypeCards() {
    const propertyTypes = [
        {
            title: "Life Style",
            description: "Turkey is one of the most beautiful and charming countries in the world. Modernising at a rapid pace, it's now the only secular Muslim country and combines a mix of east and western cultural influences. Many luxury and cheap property in Alanya, Mahmutlar, Kestel",
            backgroundImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/e190de685a48752e438aaeadc5940ff279e275f4?placeholderIfAbsent=true&apiKey=b936db41593d4a54a664e08e84e404b2",
            underlineImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/590c72effaf534d39c3637126013fbf9474d32d1?placeholderIfAbsent=true&apiKey=b936db41593d4a54a664e08e84e404b2"
        },
        {
            title: "Holiday Home",
            description: "Cyprus has remained immune to the fast and ever-changing fashions. Everyone can enjoy the very unique soul of this island; food, culture and atmosphere in local cafes, restaurants and delightful shore. Houses Villas Apartment for sale in Cyprus",
            backgroundImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/e190de685a48752e438aaeadc5940ff279e275f4?placeholderIfAbsent=true&apiKey=b936db41593d4a54a664e08e84e404b2",
            underlineImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/590c72effaf534d39c3637126013fbf9474d32d1?placeholderIfAbsent=true&apiKey=b936db41593d4a54a664e08e84e404b2"
        },
        {
            title: "Investment",
            description: 'Ask an Italian where in the world they would most like to live, and the odds are that they will say "right here". Indeed, most people have raved about Italy, and to be honest the country really does have it all',
            backgroundImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/e190de685a48752e438aaeadc5940ff279e275f4?placeholderIfAbsent=true&apiKey=b936db41593d4a54a664e08e84e404b2",
            underlineImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/590c72effaf534d39c3637126013fbf9474d32d1?placeholderIfAbsent=true&apiKey=b936db41593d4a54a664e08e84e404b2"
        }
    ];

    return (
        <section className="flex flex-wrap justify-center items-center self-stretch mt-24 text-white max-md:mt-10">
            {propertyTypes.map((type, index) => (
                <article key={index} className="flex overflow-hidden relative flex-col self-stretch px-4 py-8 my-auto min-h-[518px] min-w-60 w-[480px] max-md:max-w-full">
                    <img
                        src={type.backgroundImage}
                        alt={type.title}
                        className="object-cover absolute inset-0 size-full"
                    />
                    <header className="relative max-w-full text-4xl font-medium leading-relaxed w-[204px]">
                        <h2>{type.title}</h2>
                        <img
                            src={type.underlineImage}
                            alt="Underline decoration"
                            className="object-contain max-w-full aspect-[41.67] stroke-[4px] stroke-white w-[168px]"
                        />
                    </header>
                    <p className="relative mt-64 text-base leading-7 max-md:mt-10 max-md:max-w-full">
                        {type.description}
                    </p>
                </article>
            ))}
        </section>
    );
}
